// api/index.js - Single API handler untuk semua endpoints
const axios = require('axios');
const QRCode = require('qrcode');

// Konfigurasi Pakasir
const PAKASIR = {
    project: process.env.PAKASIR_PROJECT || 'givastore',
    api_key: process.env.PAKASIR_API_KEY || 'YOUR_API_KEY',
    baseUrl: 'https://app.pakasir.com/api'
};

// Database sementara (gunakan Vercel KV untuk production)
const transactions = new Map();

// Helper: Generate Order ID
const generateOrderId = () => {
    const timestamp = Date.now().toString().substring(5);
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `GIVA-${timestamp}-${randomNum}`;
};

// Helper: Parse URL path
const getEndpoint = (url) => {
    const path = url.split('?')[0]; // Remove query params
    const parts = path.split('/').filter(p => p);
    
    // Format: /api/create-qris, /api/check-status/ORDER_ID, etc
    if (parts.length >= 2 && parts[0] === 'api') {
        if (parts[1] === 'check-status' && parts[2]) {
            return { endpoint: 'check-status', order_id: parts[2] };
        }
        return { endpoint: parts[1] };
    }
    return { endpoint: 'unknown' };
};

module.exports = async (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { endpoint, order_id } = getEndpoint(req.url);
    console.log(`📡 API Request: ${req.method} ${endpoint}`, { order_id });

    try {
        // ==================== CREATE QRIS ====================
        if (endpoint === 'create-qris' && req.method === 'POST') {
            const { amount, order_id: customOrderId, product_name, customer_whatsapp } = req.body;
            
            if (!amount) {
                return res.status(400).json({
                    success: false,
                    error: 'Amount is required'
                });
            }

            const newOrderId = customOrderId || generateOrderId();
            
            console.log('Membuat transaksi QRIS:', { 
                amount: parseInt(amount), 
                order_id: newOrderId, 
                product_name 
            });

            const response = await axios.post(
                `${PAKASIR.baseUrl}/transactioncreate/qris`,
                {
                    project: PAKASIR.project,
                    order_id: newOrderId,
                    amount: parseInt(amount),
                    api_key: PAKASIR.api_key
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data?.payment) {
                // Generate QR Code
                const qrBuffer = await QRCode.toBuffer(response.data.payment.payment_number);
                const qrBase64 = `data:image/png;base64,${qrBuffer.toString('base64')}`;
                
                // Simpan transaksi
                transactions.set(newOrderId, {
                    ...response.data.payment,
                    product_name,
                    customer_whatsapp,
                    status: 'pending',
                    qrCode: qrBase64,
                    created_at: new Date().toISOString()
                });

                return res.json({
                    success: true,
                    data: {
                        order_id: newOrderId,
                        payment: response.data.payment,
                        qrCode: qrBase64,
                        expired_at: response.data.payment.expired_at
                    }
                });
            } else {
                throw new Error('Gagal membuat transaksi');
            }
        }

        // ==================== CHECK STATUS ====================
        else if (endpoint === 'check-status' && order_id && req.method === 'GET') {
            const transaction = transactions.get(order_id);

            if (!transaction) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Transaksi tidak ditemukan' 
                });
            }

            const response = await axios.get(
                `${PAKASIR.baseUrl}/transactiondetail`,
                {
                    params: {
                        project: PAKASIR.project,
                        amount: transaction.amount,
                        order_id: order_id,
                        api_key: PAKASIR.api_key
                    }
                }
            );

            if (response.data?.transaction) {
                transactions.set(order_id, {
                    ...transaction,
                    ...response.data.transaction
                });

                if (response.data.transaction.status === 'completed') {
                    console.log(`✅ Transaksi ${order_id} BERHASIL!`);
                }

                return res.json({
                    success: true,
                    data: response.data.transaction
                });
            }
        }

        // ==================== CANCEL TRANSACTION ====================
        else if (endpoint === 'cancel-transaction' && req.method === 'POST') {
            const { order_id: cancelOrderId } = req.body;
            const transaction = transactions.get(cancelOrderId);

            if (!transaction) {
                return res.status(404).json({ 
                    success: false, 
                    error: 'Transaksi tidak ditemukan' 
                });
            }

            await axios.post(
                `${PAKASIR.baseUrl}/transactioncancel`,
                {
                    project: PAKASIR.project,
                    order_id: cancelOrderId,
                    amount: transaction.amount,
                    api_key: PAKASIR.api_key
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            transactions.set(cancelOrderId, {
                ...transaction,
                status: 'cancelled'
            });

            return res.json({ 
                success: true, 
                message: 'Transaksi dibatalkan' 
            });
        }

        // ==================== WEBHOOK ====================
        else if (endpoint === 'webhook' && req.method === 'POST') {
            const webhookData = req.body;
            console.log('📡 Webhook received:', webhookData);

            const { order_id, status } = webhookData;

            if (transactions.has(order_id)) {
                const transaction = transactions.get(order_id);
                transactions.set(order_id, {
                    ...transaction,
                    status: status,
                    completed_at: webhookData.completed_at
                });
                console.log(`✅ Transaction ${order_id} updated to ${status}`);
            }

            return res.status(200).json({ received: true });
        }

        // ==================== ENDPOINT TIDAK DIKENAL ====================
        else {
            return res.status(404).json({
                success: false,
                error: 'Endpoint tidak ditemukan',
                available: ['create-qris', 'check-status/[order_id]', 'cancel-transaction', 'webhook']
            });
        }

    } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        
        // Handle specific error types
        const statusCode = error.response?.status || 500;
        const errorMessage = error.response?.data?.message || error.message || 'Internal server error';
        
        return res.status(statusCode).json({ 
            success: false, 
            error: errorMessage
        });
    }
};
