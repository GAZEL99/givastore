// products-data.js - Data produk untuk halaman utama
window.productData = {
  // Data untuk kategori tabs - TAMBAHKAN KATEGORI AI
  categories: [
    { id: 0, name: "Semua Produk" },
    { id: 1, name: "Streaming" },
    { id: 2, name: "Musik" },
    { id: 3, name: "Editing" },
    { id: 4, name: "AI" }
  ],
  
  // Data produk
  products: [
    // 🔥 STREAMING
    {
      id: 1,
      name: "Netflix",
      category: "Streaming",
      price: 20000, // HARGA TERMURAH DARI produk.js
      originalPrice: 49000,
      image: "../image/netflix.png",
      discount: 59, // DISKON DIHITUNG ULANG
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Netflix",
      description: "Layanan streaming film dan series terpopuler",
      features: ["Aktif Instan", "Garansi 30 Hari", "Support 24/7"],
      stock: 100,
      sold: 2500
    },
    {
      id: 2,
      name: "Vidio",
      category: "Streaming",
      price: 20000, // HARGA TERMURAH DARI produk.js (Shared Mobile)
      originalPrice: 35000,
      image: "../image/vidio.png",
      discount: 43, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Vidio",
      description: "Streaming film dan series lokal terbaik",
      features: ["Aktif Instan", "Garansi 30 Hari", "Content Lokal"],
      stock: 80,
      sold: 1800
    },
    {
      id: 3,
      name: "Disney+",
      category: "Streaming",
      price: 23000, // HARGA TERMURAH DARI produk.js
      originalPrice: 55000,
      image: "../image/disneyplus.png",
      discount: 58,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Disney",
      description: "Disney, Marvel, Star Wars dalam satu platform",
      features: ["Aktif Instan", "Garansi 30 Hari", "All Content"],
      stock: 60,
      sold: 1200
    },
    {
      id: 4,
      name: "Youtube",
      category: "Streaming",
      price: 3500, // HARGA TERMURAH DARI produk.js (Famplan)
      originalPrice: 65000,
      image: "../image/youtube.png",
      discount: 95,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Youtube",
      description: "YouTube Premium tanpa iklan",
      features: ["No Ads", "Background Play", "Download Video"],
      stock: 200,
      sold: 3500
    },
    {
      id: 5,
      name: "Amazon Prime",
      category: "Streaming",
      price: 6500, // HARGA TERMURAH DARI produk.js (Shared)
      originalPrice: 12000,
      image: "../image/prime-video.png",
      discount: 46, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Amazon Prime",
      description: "Amazon Prime Video dengan konten eksklusif",
      features: ["Aktif Instan", "Garansi 30 Hari", "Original Content"],
      stock: 50,
      sold: 800
    },
    {
      id: 6,
      name: "Iqiyi",
      category: "Streaming",
      price: 14000, // HARGA TERMURAH DARI produk.js (Premium Shared)
      originalPrice: 25000,
      image: "../image/iqiyi.png",
      discount: 44, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Iqiyi",
      description: "Streaming drama dan film Asia",
      features: ["Aktif Instan", "Garansi 30 Hari", "Asian Content"],
      stock: 40,
      sold: 600
    },
    {
      id: 7,
      name: "Dramabox",
      category: "Streaming",
      price: 18000, // HARGA DARI produk.js
      originalPrice: 30000,
      image: "../image/dramabox.png",
      discount: 40,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Dramabox",
      description: "Platform streaming khusus drama",
      features: ["Aktif Instan", "Garansi 30 Hari", "Drama Collection"],
      stock: 30,
      sold: 450
    },
    {
      id: 8,
      name: "Loklok",
      category: "Streaming",
      price: 21000, // HARGA TERMURAH DARI produk.js (Sharing)
      originalPrice: 45000,
      image: "../image/loklok.png",
      discount: 53,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Loklok",
      description: "Streaming film pendek dan konten viral",
      features: ["Aktif Instan", "Garansi 30 Hari", "Short Videos"],
      stock: 35,
      sold: 500
    },
    {
      id: 9,
      name: "Viu",
      category: "Streaming",
      price: 5250, // HARGA TERMURAH DARI produk.js (Private 1 Bulan)
      originalPrice: 10000,
      image: "../image/viu.png",
      discount: 48, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Viu",
      description: "Streaming drama Korea dan Asia",
      features: ["Aktif Instan", "No Ads", "Download Feature"],
      stock: 70,
      sold: 1500
    },
    {
      id: 10,
      name: "Hbo Go",
      category: "Streaming",
      price: 15500, // HARGA TERMURAH DARI produk.js (Sharing)
      originalPrice: 50000,
      image: "../image/hbo-go.png",
      discount: 69,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Hbo Go",
      description: "HBO dengan series premium",
      features: ["Aktif Instan", "Garansi 30 Hari", "Premium Series"],
      stock: 25,
      sold: 400
    },
    {
      id: 11,
      name: "Wetv",
      category: "Streaming",
      price: 11500, // HARGA TERMURAH DARI produk.js (Premium Shared)
      originalPrice: 30000,
      image: "../image/wetv.png",
      discount: 62, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Wetv",
      description: "Tencent Video international",
      features: ["Aktif Instan", "Garansi 30 Hari", "Chinese Content"],
      stock: 45,
      sold: 700
    },
    {
      id: 12,
      name: "Hbo Go Max",
      category: "Streaming",
      price: 14500, // HARGA TERMURAH DARI produk.js (Sharing)
      originalPrice: 25000,
      image: "../image/hbo-go-max-com.png",
      discount: 42, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Hbo Go Max",
      description: "HBO Max dengan konten lengkap",
      features: ["Aktif Instan", "Garansi 30 Hari", "Max Content"],
      stock: 20,
      sold: 300
    },
    {
      id: 13,
      name: "Bstation",
      category: "Streaming",
      price: 6000, // HARGA TERMURAH DARI produk.js (Shared 1 Bulan)
      originalPrice: 35000,
      image: "../image/bstation.png",
      discount: 83,
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Bstation",
      description: "Platform streaming anime dan manga",
      features: ["Aktif Instan", "Garansi 30 Hari", "Anime Content"],
      stock: 55,
      sold: 900
    },
    {
      id: 14,
      name: "Youkou",
      category: "Streaming",
      price: 10000, // HARGA TERMURAH DARI produk.js (Sharing 1 Bulan)
      originalPrice: 30000,
      image: "../image/youkou.png",
      discount: 67,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Youkou",
      description: "Youku dengan konten China terbaru",
      features: ["Aktif Instan", "Garansi 30 Hari", "Chinese Drama"],
      stock: 40,
      sold: 650
    },

    // 🔥 MUSIK
    {
      id: 15,
      name: "Spotify",
      category: "Musik",
      price: 21000, // HARGA TERBARU DARI produk.js (Indplan)
      originalPrice: 75000,
      image: "../image/spotify.png",
      discount: 72, // DISKON DIHITUNG ULANG
      isPopular: true,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Spotify",
      description: "Spotify Premium dengan fitur lengkap",
      features: ["No Ads", "Download Music", "High Quality"],
      stock: 150,
      sold: 2800
    },

    // 🔥 EDITING
    {
      id: 16,
      name: "Canva",
      category: "Editing",
      price: 3500, // HARGA TERMURAH DARI produk.js (1 Bulan)
      originalPrice: 20000,
      image: "../image/canva.png",
      discount: 83, // DISKON DIHITUNG ULANG
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Canva",
      description: "Canva Pro untuk desain grafis",
      features: ["All Elements", "Premium Templates", "No Watermark"],
      stock: 200,
      sold: 4200
    },
    {
      id: 17,
      name: "Capcut",
      category: "Editing",
      price: 11000, // HARGA TERMURAH DARI produk.js (Sharing 1 Bulan)
      originalPrice: 25000,
      image: "../image/capcut.png",
      discount: 56, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Capcut",
      description: "Capcut Pro untuk editing video",
      features: ["No Watermark", "All Effects", "Premium Features"],
      stock: 120,
      sold: 1900
    },
    {
      id: 18,
      name: "Remini",
      category: "Editing",
      price: 8000, // HARGA TERMURAH DARI produk.js (Sharing web)
      originalPrice: 20000,
      image: "../image/remini.png",
      discount: 60, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Remini",
      description: "Remini untuk enhacement foto",
      features: ["AI Enhancement", "HD Quality", "All Features"],
      stock: 80,
      sold: 1400
    },
    {
      id: 19,
      name: "Meitu",
      category: "Editing",
      price: 28000, // HARGA DARI produk.js (1 Bulan)
      originalPrice: 55000,
      image: "../image/meitu.png",
      discount: 49,
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Meitu",
      description: "Meitu untuk editing foto profesional",
      features: ["All Filters", "Premium Tools", "No Watermark"],
      stock: 60,
      sold: 1100
    },
    {
      id: 20,
      name: "Picsart",
      category: "Editing",
      price: 4500, // HARGA TERBARU DARI produk.js (Sharing 1 Bulan)
      originalPrice: 15000,
      image: "../image/picsart.png",
      discount: 70, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Picsart",
      description: "Picsart Gold untuk editing lengkap",
      features: ["All Stickers", "Premium Filters", "No Ads"],
      stock: 100,
      sold: 1800
    },
    {
      id: 21,
      name: "Ibis Paint X",
      category: "Editing",
      price: 18000, // HARGA DARI produk.js (Sharing 1 Tahun)
      originalPrice: 50000,
      image: "../image/ibispaint.png",
      discount: 64, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Ibis Paint X",
      description: "Ibis Paint X untuk digital art",
      features: ["All Brushes", "Premium Tools", "No Ads"],
      stock: 50,
      sold: 900
    },
    {
      id: 22,
      name: "Alight Motion",
      category: "Editing",
      price: 3500, // HARGA DIUBAH MENJADI 5.000
      originalPrice: 15000,
      image: "../image/alight-motion.png",
      discount: 67, // DISKON DIHITUNG ULANG
      isPopular: true,
      isFlashSale: true,
      pageUrl: "pages/product.html?product=Alight Motion",
      description: "Alight Motion Pro untuk motion graphics",
      features: [], // DIKOSONGKAN
      stock: 180,
      sold: 3500
    },
    {
      id: 23,
      name: "Oldroll",
      category: "Editing",
      price: 13000, // HARGA DARI produk.js (Lifetime)
      originalPrice: 30000,
      image: "../image/oldroll.png",
      discount: 57, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Oldroll",
      description: "Oldroll untuk efek vintage foto",
      features: ["Vintage Effects", "All Filters", "Lifetime Access"],
      stock: 45,
      sold: 750
    },
    {
      id: 24,
      name: "Dazzcam",
      category: "Editing",
      price: 13000, // HARGA DARI produk.js (Lifetime)
      originalPrice: 30000,
      image: "../image/dazzcam.png",
      discount: 57, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Dazzcam",
      description: "Dazzcam untuk efek kamera profesional",
      features: ["Professional Effects", "All Tools", "Lifetime Access"],
      stock: 40,
      sold: 680
    },
    {
      id: 25,
      name: "Apple Music",
      category: "Musik",
      price: 5000, // HARGA DARI produk.js (Famplan)
      originalPrice: 20000,
      image: "../image/applemusic.png",
      discount: 75, // DISKON DIHITUNG ULANG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=Apple Music",
      description: "Apple Music dengan jutaan lagu",
      features: ["No Ads", "Download Songs", "High Quality Audio"],
      stock: 90,
      sold: 1600
    },
    
    // 🔥 AI (PRODUK BARU)
    {
      id: 26,
      name: "ChatGPT",
      category: "AI",
      price: 53000, // HARGA DARI produk.js (Private 1 Tahun)
      originalPrice: 120000,
      image: "../image/chatgpt.png",
      discount: 56, // DISKON DIHITUNG
      isPopular: false,
      isFlashSale: false,
      pageUrl: "pages/product.html?product=ChatGPT",
      description: "ChatGPT Plus dengan akses penuh",
      features: ["GPT-4 Access", "No Limits", "Priority Support"],
      stock: 35,
      sold: 420
    }
  ]
};

console.log("✅ products-data.js berhasil dimuat!");
console.log("Total produk:", window.productData.products.length);
console.log("✅ Semua harga telah disinkronkan dengan produk.js");
console.log("✅ Kategori AI ditambahkan");
console.log("✅ Flash sale dan produk populer telah diperbarui:");
console.log("   - Flash Sale: Netflix, Vidio, Youtube, Amazon Prime, Bstation, Canva, Alight Motion");
console.log("   - Produk Populer: Netflix, Youtube, Bstation, Spotify, Canva, Alight Motion");
console.log("Produk tersedia:", window.productData.products.map(p => p.name).join(", "));