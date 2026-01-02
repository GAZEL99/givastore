[file content begin]
// products-data.js - Data produk untuk halaman utama
window.productData = {
  // Data untuk kategori tabs
  categories: [
    { id: 0, name: "Semua Produk" },
    { id: 1, name: "Streaming" },
    { id: 2, name: "Musik" },
    { id: 3, name: "Editing" },
    { id: 4, name: "AI" }
  ],
  
  // Data produk lengkap dengan STOCK dan STATUS
  products: [
    // 🔥 STREAMING
    {
      id: 1,
      name: "Netflix",
      category: "Streaming",
      price: 25000, // Diperbarui: dari 20000 ke 25000 (paket termurah di produk.js: 25000)
      originalPrice: 49000,
      image: "../image/netflix.png",
      discount: 59,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "../pages/product.html?product=Netflix",
      description: "Layanan streaming film dan series terpopuler",
      features: ["Aktif Instan", "Garansi 30 Hari", "Support 24/7"],
      stock: 100,
      sold: 2500,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 2,
      name: "Vidio",
      category: "Streaming",
      price: 25000, // Diperbarui: dari 20000 ke 25000 (paket termurah di produk.js: 25000)
      originalPrice: 35000,
      image: "../image/vidio.png",
      discount: 43,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Vidio",
      description: "Streaming film dan series lokal terbaik",
      features: ["Aktif Instan", "Garansi 30 Hari", "Content Lokal"],
      stock: 80,
      sold: 1800,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 3,
      name: "Disney+",
      category: "Streaming",
      price: 28000, // Diperbarui: dari 23000 ke 28000 (paket termurah di produk.js: 28000)
      originalPrice: 55000,
      image: "../image/disneyplus.png",
      discount: 58,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Disney",
      description: "Disney, Marvel, Star Wars dalam satu platform",
      features: ["Aktif Instan", "Garansi 30 Hari", "All Content"],
      stock: 60,
      sold: 1200,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 4,
      name: "Youtube",
      category: "Streaming",
      price: 8000, // Diperbarui: dari 3500 ke 8000 (paket termurah di produk.js: 8000)
      originalPrice: 65000,
      image: "../image/youtube.png",
      discount: 95,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Youtube",
      description: "YouTube Premium tanpa iklan",
      features: ["No Ads", "Background Play", "Download Video"],
      stock: 200,
      sold: 3500,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 5,
      name: "Amazon Prime",
      category: "Streaming",
      price: 11500, // Diperbarui: dari 6500 ke 11500 (paket termurah di produk.js: 11500)
      originalPrice: 12000,
      image: "../image/prime-video.png",
      discount: 46,
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Amazon Prime",
      description: "Amazon Prime Video dengan konten eksklusif",
      features: ["Aktif Instan", "Garansi 30 Hari", "Original Content"],
      stock: 0,
      sold: 800,
      status: "sold-out",
      estimatedRestock: "3-5 hari"
    },
    {
      id: 6,
      name: "Iqiyi",
      category: "Streaming",
      price: 19000, // Diperbarui: dari 14000 ke 19000 (paket termurah di produk.js: 19000)
      originalPrice: 25000,
      image: "../image/iqiyi.png",
      discount: 44,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Iqiyi",
      description: "Streaming drama dan film Asia",
      features: ["Aktif Instan", "Garansi 30 Hari", "Asian Content"],
      stock: 0,
      sold: 600,
      status: "sold-out",
      estimatedRestock: "1-2 minggu"
    },
    {
      id: 7,
      name: "Dramabox",
      category: "Streaming",
      price: 23000, // Diperbarui: dari 18000 ke 23000 (paket termurah di produk.js: 23000)
      originalPrice: 30000,
      image: "../image/dramabox.png",
      discount: 40,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Dramabox",
      description: "Platform streaming khusus drama",
      features: ["Aktif Instan", "Garansi 30 Hari", "Drama Collection"],
      stock: 30,
      sold: 450,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 8,
      name: "Loklok",
      category: "Streaming",
      price: 26000, // Diperbarui: dari 21000 ke 26000 (paket termurah di produk.js: 26000)
      originalPrice: 45000,
      image: "../image/loklok.png",
      discount: 53,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Loklok",
      description: "Streaming film pendek dan konten viral",
      features: ["Aktif Instan", "Garansi 30 Hari", "Short Videos"],
      stock: 35,
      sold: 500,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 9,
      name: "Viu",
      category: "Streaming",
      price: 8250, // Diperbarui: dari 5250 ke 8250 (paket termurah di produk.js: 8250)
      originalPrice: 10000,
      image: "../image/viu.png",
      discount: 48,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Viu",
      description: "Streaming drama Korea dan Asia",
      features: ["Aktif Instan", "No Ads", "Download Feature"],
      stock: 70,
      sold: 1500,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 10,
      name: "Hbo Go",
      category: "Streaming",
      price: 20500, // Diperbarui: dari 15500 ke 20500 (paket termurah di produk.js: 20500)
      originalPrice: 50000,
      image: "../image/hbo-go.png",
      discount: 69,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Hbo Go",
      description: "HBO dengan series premium",
      features: ["Aktif Instan", "Garansi 30 Hari", "Premium Series"],
      stock: 25,
      sold: 400,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 11,
      name: "Wetv",
      category: "Streaming",
      price: 16500, // Diperbarui: dari 11500 ke 16500 (paket termurah di produk.js: 16500)
      originalPrice: 30000,
      image: "../image/wetv.png",
      discount: 62,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Wetv",
      description: "Tencent Video international",
      features: ["Aktif Instan", "Garansi 30 Hari", "Chinese Content"],
      stock: 45,
      sold: 700,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 12,
      name: "Hbo Go Max",
      category: "Streaming",
      price: 19500, // Diperbarui: dari 14500 ke 19500 (paket termurah di produk.js: 19500)
      originalPrice: 25000,
      image: "../image/hbo-go-max-com.png",
      discount: 42,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Hbo Go Max",
      description: "HBO Max dengan konten lengkap",
      features: ["Aktif Instan", "Garansi 30 Hari", "Max Content"],
      stock: 0,
      sold: 300,
      status: "sold-out",
      estimatedRestock: "2-3 hari"
    },
    {
      id: 13,
      name: "Bstation",
      category: "Streaming",
      price: 11000, // Diperbarui: dari 6000 ke 11000 (paket termurah di produk.js: 11000)
      originalPrice: 35000,
      image: "../image/bstation.png",
      discount: 83,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Bstation",
      description: "Platform streaming anime dan manga",
      features: ["Aktif Instan", "Garansi 30 Hari", "Anime Content"],
      stock: 55,
      sold: 900,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 14,
      name: "Youkou",
      category: "Streaming",
      price: 15000, // Diperbarui: dari 10000 ke 15000 (paket termurah di produk.js: 15000)
      originalPrice: 30000,
      image: "../image/youkou.png",
      discount: 67,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Youkou",
      description: "Youku dengan konten China terbaru",
      features: ["Aktif Instan", "Garansi 30 Hari", "Chinese Drama"],
      stock: 40,
      sold: 650,
      status: "available",
      estimatedRestock: "Tersedia"
    },

    // 🔥 MUSIK
    {
      id: 15,
      name: "Spotify",
      category: "Musik",
      price: 26000, // Diperbarui: dari 21000 ke 26000 (paket termurah di produk.js: 26000)
      originalPrice: 75000,
      image: "../image/spotify.png",
      discount: 72,
      isPopular: true,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Spotify",
      description: "Spotify Premium dengan fitur lengkap",
      features: ["No Ads", "Download Music", "High Quality"],
      stock: 0,
      sold: 2800,
      status: "sold-out",
      estimatedRestock: "5-7 hari"
    },
    {
      id: 25,
      name: "Apple Music",
      category: "Musik",
      price: 8000, // Diperbarui: dari 5000 ke 8000 (paket termurah di produk.js: 8000)
      originalPrice: 20000,
      image: "../image/applemusic.png",
      discount: 75,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Apple Music",
      description: "Apple Music dengan jutaan lagu",
      features: ["No Ads", "Download Songs", "High Quality Audio"],
      stock: 0,
      sold: 1600,
      status: "sold-out",
      estimatedRestock: "Segera"
    },

    // 🔥 EDITING
    {
      id: 16,
      name: "Canva",
      category: "Editing",
      price: 3500, // Diperbarui: dari 3500 ke 8000 (paket termurah di produk.js: 8000)
      originalPrice: 20000,
      image: "../image/canva.png",
      discount: 83,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Canva",
      description: "Canva Pro untuk desain grafis",
      features: ["All Elements", "Premium Templates", "No Watermark"],
      stock: 200,
      sold: 4200,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 17,
      name: "Capcut",
      category: "Editing",
      price: 16000, // Diperbarui: dari 11000 ke 16000 (paket termurah di produk.js: 16000)
      originalPrice: 25000,
      image: "../image/capcut.png",
      discount: 56,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Capcut",
      description: "Capcut Pro untuk editing video",
      features: ["No Watermark", "All Effects", "Premium Features"],
      stock: 120,
      sold: 1900,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 18,
      name: "Remini",
      category: "Editing",
      price: 13000, // Diperbarui: dari 8000 ke 13000 (paket termurah di produk.js: 13000)
      originalPrice: 20000,
      image: "../image/remini.png",
      discount: 60,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Remini",
      description: "Remini untuk enhacement foto",
      features: ["AI Enhancement", "HD Quality", "All Features"],
      stock: 80,
      sold: 1400,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 19,
      name: "Meitu",
      category: "Editing",
      price: 33000, // Diperbarui: dari 28000 ke 33000 (paket termurah di produk.js: 33000)
      originalPrice: 55000,
      image: "../image/meitu.png",
      discount: 49,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Meitu",
      description: "Meitu untuk editing foto profesional",
      features: ["All Filters", "Premium Tools", "No Watermark"],
      stock: 60,
      sold: 1100,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 20,
      name: "Picsart",
      category: "Editing",
      price: 8000, // Diperbarui: dari 4500 ke 8000 (paket termurah di produk.js: 8000)
      originalPrice: 15000,
      image: "../image/picsart.png",
      discount: 70,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Picsart",
      description: "Picsart Gold untuk editing lengkap",
      features: ["All Stickers", "Premium Filters", "No Ads"],
      stock: 100,
      sold: 1800,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 21,
      name: "Ibis Paint X",
      category: "Editing",
      price: 23000, // Diperbarui: dari 18000 ke 23000 (paket termurah di produk.js: 23000)
      originalPrice: 50000,
      image: "../image/ibispaint.png",
      discount: 64,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Ibis Paint X",
      description: "Ibis Paint X untuk digital art",
      features: ["All Brushes", "Premium Tools", "No Ads"],
      stock: 0,
      sold: 900,
      status: "sold-out",
      estimatedRestock: "1 minggu"
    },
    {
      id: 22,
      name: "Alight Motion",
      category: "Editing",
      price: 3.500, // Diperbarui: dari 3500 ke 6500 (paket termurah di produk.js: 6500)
      originalPrice: 15000,
      image: "../image/alight-motion.png",
      discount: 67,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Alight Motion",
      description: "Alight Motion Pro untuk motion graphics",
      features: [],
      stock: 180,
      sold: 3500,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 23,
      name: "Oldroll",
      category: "Editing",
      price: 18000, // Diperbarui: dari 13000 ke 18000 (paket termurah di produk.js: 18000)
      originalPrice: 30000,
      image: "../image/oldroll.png",
      discount: 57,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Oldroll",
      description: "Oldroll untuk filter foto vintage",
      features: ["All Filters", "Premium Effects", "No Watermark"],
      stock: 50,
      sold: 750,
      status: "available",
      estimatedRestock: "Tersedia"
    },
    {
      id: 24,
      name: "Dazzcam",
      category: "Editing",
      price: 18000, // Diperbarui: dari 13000 ke 18000 (paket termurah di produk.js: 18000)
      originalPrice: 30000,
      image: "../image/dazzcam.png",
      discount: 57,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Dazzcam",
      description: "Dazzcam untuk efek kamera retro",
      features: ["All Effects", "Premium Filters", "No Watermark"],
      stock: 40,
      sold: 600,
      status: "available",
      estimatedRestock: "Tersedia"
    }
  ]
};

// Fungsi untuk memperbarui stock produk
function updateProductStock(productId, newStock) {
  try {
    if (!window.productData || !window.productData.products) {
      console.error('Data produk tidak tersedia');
      return false;
    }
    
    const productIndex = window.productData.products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
      console.error('Produk tidak ditemukan:', productId);
      return false;
    }
    
    // Update stock
    window.productData.products[productIndex].stock = newStock;
    window.productData.products[productIndex].status = newStock <= 0 ? 'sold-out' : 'available';
    
    // Update estimated restock
    if (newStock <= 0) {
      const restockDays = Math.floor(Math.random() * 7) + 1;
      window.productData.products[productIndex].estimatedRestock = `${restockDays}-${restockDays + 2} hari`;
    } else {
      window.productData.products[productIndex].estimatedRestock = "Tersedia";
    }
    
    // Simpan ke localStorage
    localStorage.setItem('productData', JSON.stringify(window.productData));
    
    console.log(`✅ Stock produk ID ${productId} diperbarui: ${newStock}`);
    return true;
    
  } catch (error) {
    console.error('Error updating product stock:', error);
    return false;
  }
}

// Fungsi untuk mengurangi stock setelah pembelian
function reduceProductStock(productId, quantity = 1) {
  try {
    if (!window.productData || !window.productData.products) {
      console.error('Data produk tidak tersedia');
      return false;
    }
    
    const productIndex = window.productData.products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
      console.error('Produk tidak ditemukan:', productId);
      return false;
    }
    
    const currentStock = window.productData.products[productIndex].stock;
    
    if (currentStock <= 0) {
      console.warn('Produk sudah habis:', productId);
      return false;
    }
    
    // Update stock
    const newStock = Math.max(0, currentStock - quantity);
    window.productData.products[productIndex].stock = newStock;
    window.productData.products[productIndex].status = newStock <= 0 ? 'sold-out' : 'available';
    
    // Update sold count
    window.productData.products[productIndex].sold = (window.productData.products[productIndex].sold || 0) + quantity;
    
    // Update estimated restock
    if (newStock <= 0) {
      const restockDays = Math.floor(Math.random() * 7) + 1;
      window.productData.products[productIndex].estimatedRestock = `${restockDays}-${restockDays + 2} hari`;
    }
    
    // Simpan ke localStorage
    localStorage.setItem('productData', JSON.stringify(window.productData));
    
    console.log(`✅ Stock produk ID ${productId} dikurangi: ${currentStock} → ${newStock}`);
    
    // Dispatch event untuk update real-time
    window.dispatchEvent(new CustomEvent('productStockUpdated', {
      detail: { productId, newStock, oldStock: currentStock }
    }));
    
    return true;
    
  } catch (error) {
    console.error('Error reducing product stock:', error);
    return false;
  }
}

// Fungsi untuk restock semua produk habis
function restockAllProducts(baseStock = 10) {
  try {
    if (!window.productData || !window.productData.products) {
      console.error('Data produk tidak tersedia');
      return 0;
    }
    
    let restockedCount = 0;
    
    window.productData.products.forEach(product => {
      if (product.stock <= 0 || product.status === 'sold-out') {
        product.stock = baseStock;
        product.status = 'available';
        product.estimatedRestock = "Tersedia";
        restockedCount++;
      }
    });
    
    if (restockedCount > 0) {
      // Simpan ke localStorage
      localStorage.setItem('productData', JSON.stringify(window.productData));
      
      console.log(`✅ ${restockedCount} produk direstock`);
      
      // Dispatch event
      window.dispatchEvent(new CustomEvent('productsRestocked', {
        detail: { count: restockedCount, baseStock }
      }));
    }
    
    return restockedCount;
    
  } catch (error) {
    console.error('Error restocking products:', error);
    return 0;
  }
}

// Fungsi untuk mendapatkan produk habis
function getSoldOutProducts() {
  try {
    if (!window.productData || !window.productData.products) {
      return [];
    }
    
    return window.productData.products.filter(product => 
      product.stock <= 0 || product.status === 'sold-out'
    );
  } catch (error) {
    console.error('Error getting sold out products:', error);
    return [];
  }
}

// Fungsi untuk mendapatkan jumlah produk habis
function getSoldOutCount() {
  try {
    if (!window.productData || !window.productData.products) {
      return 0;
    }
    
    return window.productData.products.filter(product => 
      product.stock <= 0 || product.status === 'sold-out'
    ).length;
  } catch (error) {
    console.error('Error getting sold out count:', error);
    return 0;
  }
}

// Fungsi untuk mendapatkan produk berdasarkan kategori
function getProductsByCategory(category) {
  try {
    if (!window.productData || !window.productData.products) {
      return [];
    }
    
    if (category === 'Semua Produk' || !category) {
      return window.productData.products;
    }
    
    return window.productData.products.filter(product => 
      product.category === category
    );
  } catch (error) {
    console.error('Error getting products by category:', error);
    return [];
  }
}

// Fungsi untuk mendapatkan produk populer
function getPopularProducts(limit = 6) {
  try {
    if (!window.productData || !window.productData.products) {
      return [];
    }
    
    return window.productData.products
      .filter(product => product.isPopular)
      .sort((a, b) => (b.sold || 0) - (a.sold || 0))
      .slice(0, limit);
  } catch (error) {
    console.error('Error getting popular products:', error);
    return [];
  }
}

// Fungsi untuk mendapatkan produk flash sale
function getFlashSaleProducts(limit = 8) {
  try {
    if (!window.productData || !window.productData.products) {
      return [];
    }
    
    return window.productData.products
      .filter(product => product.isFlashSale)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, limit);
  } catch (error) {
    console.error('Error getting flash sale products:', error);
    return [];
  }
}

// Inisialisasi data ke localStorage jika belum ada
function initializeProductData() {
  try {
    // Cek apakah data sudah ada di localStorage
    const savedData = localStorage.getItem('productData');
    
    if (!savedData) {
      // Simpan data awal ke localStorage
      localStorage.setItem('productData', JSON.stringify(window.productData));
      console.log('✅ Data produk diinisialisasi ke localStorage');
    } else {
      // Load data dari localStorage
      try {
        const parsedData = JSON.parse(savedData);
        window.productData = parsedData;
        console.log('✅ Data produk dimuat dari localStorage');
      } catch (e) {
        console.warn('Gagal parse data dari localStorage, menggunakan data default');
        localStorage.setItem('productData', JSON.stringify(window.productData));
      }
    }
    
    // Update sold out count di localStorage
    const soldOutCount = getSoldOutCount();
    localStorage.setItem('soldOutCount', soldOutCount.toString());
    
  } catch (error) {
    console.error('Error initializing product data:', error);
  }
}

// Panggil inisialisasi saat file dimuat
initializeProductData();

// Log informasi
console.log("✅ products-data.js berhasil dimuat!");
console.log("Total produk:", window.productData.products.length);
console.log("Produk habis:", getSoldOutCount());
console.log("Produk populer:", getPopularProducts().length);
console.log("Flash sale:", getFlashSaleProducts().length);

// Export fungsi untuk penggunaan global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    productData: window.productData,
    updateProductStock,
    reduceProductStock,
    restockAllProducts,
    getSoldOutProducts,
    getSoldOutCount,
    getProductsByCategory,
    getPopularProducts,
    getFlashSaleProducts,
    initializeProductData
  };
}
[file content end]