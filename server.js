const express = require('express');
const axios = require('axios');
const QRCode = require('qrcode');
const crypto = require('crypto');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files dari berbagai folder
app.use(express.static(path.join(__dirname))); // Serve root folder
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));

// Konfigurasi Pakasir
const PAKASIR = {
    project: process.env.PAKASIR_PROJECT || 'givastore',
    api_key: process.env.PAKASIR_API_KEY || 'YOUR_API_KEY',
    baseUrl: 'https://app.pakasir.com/api'
};

// Database sementara
const transactions = new Map();

// Helper: Generate Order ID
const generateOrderId = () => {
    const timestamp = Date.now().toString().substring(5);
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `GIVA-${timestamp}-${randomNum}`;
};

// ==================== API ENDPOINTS ====================

// Buat transaksi QRIS
app.post('/api/create-qris', async (req, res) => {
    try {
        const { amount, order_id, product_name, customer_whatsapp } = req.body;
        
        console.log('Membuat transaksi QRIS:', { amount, order_id, product_name });

        const response = await axios.post(
            `${PAKASIR.baseUrl}/transactioncreate/qris`,
            {
                project: PAKASIR.project,
                order_id: order_id,
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
            
            transactions.set(order_id, {
                ...response.data.payment,
                product_name,
                customer_whatsapp,
                status: 'pending',
                qrCode: qrBase64,
                created_at: new Date().toISOString()
            });

            res.json({
                success: true,
                data: {
                    order_id,
                    payment: response.data.payment,
                    qrCode: qrBase64,
                    expired_at: response.data.payment.expired_at
                }
            });
        } else {
            throw new Error('Gagal membuat transaksi');
        }

    } catch (error) {
        console.error('Error creating QRIS:', error.response?.data || error.message);
        res.status(500).json({ 
            success: false, 
            error: error.response?.data?.message || 'Gagal membuat QRIS' 
        });
    }
});

// Cek status transaksi
app.get('/api/check-status/:order_id', async (req, res) => {
    try {
        const { order_id } = req.params;
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

    } catch (error) {
        console.error('Error checking status:', error.response?.data || error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Gagal cek status transaksi' 
        });
    }
});

// Batalkan transaksi
app.post('/api/cancel-transaction', async (req, res) => {
    try {
        const { order_id } = req.body;
        const transaction = transactions.get(order_id);

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
                order_id: order_id,
                amount: transaction.amount,
                api_key: PAKASIR.api_key
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        transactions.set(order_id, {
            ...transaction,
            status: 'cancelled'
        });

        res.json({ 
            success: true, 
            message: 'Transaksi dibatalkan' 
        });

    } catch (error) {
        console.error('Error cancelling transaction:', error.response?.data || error.message);
        res.status(500).json({ 
            success: false, 
            error: 'Gagal membatalkan transaksi' 
        });
    }
});

// Webhook
app.post('/webhook/pakasir', (req, res) => {
    try {
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

        res.status(200).json({ received: true });

    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ==================== ROUTES UNTUK HTML ====================

// Halaman Utama - cek beberapa kemungkinan lokasi file
app.get('/', (req, res) => {
    // Coba cari index.html di berbagai lokasi
    const possiblePaths = [
        path.join(__dirname, 'index.html'),
        path.join(__dirname, 'views', 'index.html'),
        path.join(__dirname, 'pages', 'index.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    
    // Jika tidak ditemukan, buat halaman sederhana
    res.send(`
        <html>
            <head><title>GIVASTORE</title></head>
            <body style="font-family: Arial; text-align: center; padding: 50px;">
                <h1>🚀 GIVASTORE PAYMENT</h1>
                <p>Server berjalan dengan baik!</p>
                <p><a href="/product">➡️ Ke Halaman Produk</a></p>
                <p><a href="/bayar">➡️ Ke Halaman Bayar</a></p>
            </body>
        </html>
    `);
});

// Halaman Product
app.get('/product', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'product.html'),
        path.join(__dirname, 'views', 'product.html'),
        path.join(__dirname, 'pages', 'product.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    
    res.status(404).send('File product.html tidak ditemukan');
});

// Halaman Bayar
app.get('/bayar', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'bayar.html'),
        path.join(__dirname, 'views', 'bayar.html'),
        path.join(__dirname, 'pages', 'bayar.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    
    res.status(404).send('File bayar.html tidak ditemukan');
});

// Halaman Pay (QRIS)
app.get('/pay', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'pay.html'),
        path.join(__dirname, 'views', 'pay.html'),
        path.join(__dirname, 'pages', 'pay.html'),
        path.join(__dirname, 'bayar_qris.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    
    res.status(404).send('File pay.html tidak ditemukan');
});

// Halaman Success
app.get('/success', (req, res) => {
    const possiblePaths = [
        path.join(__dirname, 'success.html'),
        path.join(__dirname, 'views', 'success.html'),
        path.join(__dirname, 'pages', 'success.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    
    res.status(404).send('File success.html tidak ditemukan');
});

// Fallback untuk file lain
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const possiblePaths = [
        path.join(__dirname, page),
        path.join(__dirname, page + '.html'),
        path.join(__dirname, 'pages', page),
        path.join(__dirname, 'pages', page + '.html'),
        path.join(__dirname, 'views', page),
        path.join(__dirname, 'views', page + '.html')
    ];
    
    for (const filePath of possiblePaths) {
        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            return res.sendFile(filePath);
        }
    }
    
    res.status(404).send('Halaman tidak ditemukan');
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║    🚀 GIVASTORE PAYMENT GATEWAY           ║
╠════════════════════════════════════════════╣
║  📌 Server: http://localhost:${PORT}              ║
║  📁 Working Directory: ${__dirname}  ║
╠════════════════════════════════════════════╣
║  📍 Available Routes:                      ║
║  ➜ /          - Halaman Utama              ║
║  ➜ /product   - Pilih Produk               ║
║  ➜ /bayar     - Konfirmasi                 ║
║  ➜ /pay       - Halaman QRIS               ║
║  ➜ /success   - Halaman Sukses             ║
║  ➜ /[file]    - File langsung              ║
╠════════════════════════════════════════════╣
║  📡 API Endpoints:                          ║
║  ➜ POST /api/create-qris                   ║
║  ➜ GET /api/check-status/:order_id         ║
║  ➜ POST /api/cancel-transaction            ║
║  ➜ POST /webhook/pakasir                   ║
╚════════════════════════════════════════════╝
    `);
    
    // List file yang ditemukan
    console.log('\n📁 File yang terdeteksi:');
    const files = fs.readdirSync(__dirname);
    files.forEach(file => {
        if (file.endsWith('.html')) {
            console.log(`   ✅ ${file} -> http://localhost:${PORT}/${file}`);
        }
    });
    console.log('');
});
