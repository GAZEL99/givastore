// produk.js - Data semua produk dari products-data.js
const semuaProduk = {
  // 🔥 STREAMING
  produkNetflix: {
    name: "NETFLIX",
    description: "Streaming services",
    bannerImage: "../image/netflix.png",
    logo: "../image/netflix.png",
    category: "Streaming",
    packages: [
      {
        name: "NETFLIX Sharing 1 profil 1 user",
        price: 25000,
        duration: "1 BULAN"
      },
      {
        name: "NETFLIX Sharing 1 profil 2 user",
        price: 18000,
        duration: "1 BULAN"
      },
      {
        name: "NETFLIX Semi private login 2 device",
        price: 27000,
        duration: "1 BULAN"
      }
    ]
  },

  produkVidio: {
    name: "Vidio",
    description: "Streaming services",
    bannerImage: "../image/vidio.png",
    logo: "../image/vidio.png",
    category: "Streaming",
    packages: [
      {
        name: "Vidio Platinum sharing 2 user",
        price: 18000,
        duration: "1 BULAN"
      },
      {
        name: "Vidio Platinum private",
        price: 38000,
        duration: "1 BULAN"
      }
    ]
  },

  produkDisneyPlus: {
    name: "DISNEY+",
    description: "Streaming services",
    bannerImage: "../image/disneyplus.png",
    logo: "../image/disneyplus.png",
    category: "Streaming",
    packages: [
      {
        name: "DISNEY+ Sharing 3 user",
        price: 28000,
        duration: "1 BULAN"
      },
      {
        name: "DISNEY+ Sharing 6 user",
        price: 23000,
        duration: "1 BULAN"
      },
      {
        name: "DISNEY+ Private plan premium",
        price: 138000,
        duration: "1 BULAN"
      }
    ]
  },

  produkYouTube: {
    name: "YOUTUBE",
    description: "Streaming services",
    bannerImage: "../image/youtube.png",
    logo: "../image/youtube.png",
    category: "Streaming",
    packages: [
      {
        name: "YOUTUBE Famplan",
        price: 3500,
        duration: "1 BULAN"
      },
      {
        name: "YOUTUBE Indplan",
        price: 8000,
        duration: "1 BULAN"
      },
      {
        name: "YOUTUBE Mix (famplan & indplan)",
        price: 12000,
        duration: "2 BULAN"
      }
    ]
  },

  produkAmazonPrime: {
    name: "AMAZON PRIME",
    description: "Streaming services",
    bannerImage: "../image/prime-video.png",
    logo: "../image/prime-video.png",
    category: "Streaming",
    packages: [
      {
        name: "AMAZON PRIME Sharing 5 user",
        price: 6000,
        duration: "1 BULAN"
      },
      {
        name: "AMAZON PRIME Sharing 3 user",
        price: 7500,
        duration: "1 BULAN"
      },
      {
        name: "AMAZON PRIME Private",
        price: 16000,
        duration: "1 BULAN"
      }
    ]
  },

  produkIQIYI: {
    name: "IQIYI",
    description: "Streaming services",
    bannerImage: "../image/iqiyi.png",
    logo: "../image/iqiyi.png",
    category: "Streaming",
    packages: [
      {
        name: "IQIYI Premium",
        price: 8000,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Premium",
        price: 20000,
        duration: "1 TAHUN"
      },
      {
        name: "IQIYI Standar",
        price: 6000,
        duration: "1 BULAN"
      },
      {
        name: "IQIYI Standar",
        price: 15000,
        duration: "1 TAHUN"
      }
    ]
  },

  produkDramabox: {
    name: "DRAMABOX",
    description: "Streaming services",
    bannerImage: "../image/dramabox.png",
    logo: "../image/dramabox.png",
    category: "Streaming",
    packages: [
      {
        name: "DRAMABOX",
        price: 18000,
        duration: "1 BULAN"
      },
      {
        name: "DRAMABOX",
        price: 83000,
        duration: "1 TAHUN"
      }
    ]
  },

  produkLoklok: {
    name: "LOKLOK",
    description: "Streaming services",
    bannerImage: "../image/loklok.png",
    logo: "../image/loklok.png",
    category: "Streaming",
    packages: [
      {
        name: "LOKLOK Sharing 2 user",
        price: 21000,
        duration: "1 BULAN"
      },
      {
        name: "LOKLOK Private",
        price: 48000,
        duration: "1 BULAN"
      }
    ]
  },

  produkVIU: {
    name: "VIU",
    description: "Streaming services",
    bannerImage: "../image/viu.png",
    logo: "../image/viu.png",
    category: "Streaming",
    packages: [
      {
        name: "VIU Anti limit",
        price: 2000,
        duration: "1 BULAN"
      },
      {
        name: "VIU Anti limit",
        price: 8000,
        duration: "1 TAHUN"
      },
      {
        name: "VIU Anti limit edu",
        price: 10000,
        duration: "LIFETIME"
      }
    ]
  },

  produkHBOGO: {
    name: "HBO GO",
    description: "Streaming services",
    bannerImage: "../image/hbo-go.png",
    logo: "../image/hbo-go.png",
    category: "Streaming",
    packages: [
      {
        name: "HBO GO Sharing",
        price: 15500,
        duration: "1 BULAN"
      },
      {
        name: "HBO GO Private",
        price: 53000,
        duration: "1 BULAN"
      }
    ]
  },

  produkWeTV: {
    name: "WETV",
    description: "Streaming services",
    bannerImage: "../image/wetv.png",
    logo: "../image/wetv.png",
    category: "Streaming",
    packages: [
      {
        name: "WETV Private",
        price: 34000,
        duration: "1 BULAN"
      },
      {
        name: "WETV Sharing 3 user",
        price: 17000,
        duration: "1 BULAN"
      },
      {
        name: "WETV Sharing 6 user",
        price: 13000,
        duration: "1 BULAN"
      }
    ]
  },

  produkHBOGOMax: {
    name: "HBO GO MAX",
    description: "Streaming services",
    bannerImage: "../image/hbo-go-max-com.png",
    logo: "../image/hbo-go-max-com.png",
    category: "Streaming",
    packages: [
      {
        name: "HBO GO MAX Sharing",
        price: 14500,
        duration: "1 BULAN"
      },
      {
        name: "HBO GO MAX Account crack sharing",
        price: 18000,
        duration: "LIFETIME"
      }
    ]
  },

  produkBstation: {
    name: "BSTATION",
    description: "Streaming services",
    bannerImage: "../image/bstation.png",
    logo: "../image/bstation.png",
    category: "Streaming",
    packages: [
      {
        name: "BSTATION Sharing",
        price: 6000,
        duration: "1 BULAN"
      },
      {
        name: "BSTATION Sharing",
        price: 10000,
        duration: "3 BULAN"
      },
      {
        name: "BSTATION Sharing",
        price: 18000,
        duration: "1 TAHUN"
      },
      {
        name: "BSTATION Private",
        price: 23000,
        duration: "1 BULAN"
      }
    ]
  },

  produkYoukou: {
    name: "YOUKOU",
    description: "Streaming services",
    bannerImage: "../image/youkou.png",
    logo: "../image/youkou.png",
    category: "Streaming",
    packages: [
      {
        name: "YOUKOU Sharing",
        price: 10000,
        duration: "1 BULAN"
      },
      {
        name: "YOUKOU Sharing",
        price: 16000,
        duration: "3 BULAN"
      },
      {
        name: "YOUKOU Private",
        price: 34000,
        duration: "1 BULAN"
      }
    ]
  },

  // 🔥 MUSIK
  produkSpotify: {
    name: "SPOTIFY",
    description: "Music services",
    bannerImage: "../image/spotify.png",
    logo: "../image/spotify.png",
    category: "Musik",
    packages: [
      {
        name: "SPOTIFY Famplan",
        price: 18000,
        duration: "1 BULAN"
      },
      {
        name: "SPOTIFY Indplan",
        price: 24000,
        duration: "1 BULAN"
      }
    ]
  },

  produkAppleMusic: {
    name: "APPLE MUSIC",
    description: "Music services",
    bannerImage: "../image/applemusic.png",
    logo: "../image/applemusic.png",
    category: "Musik",
    packages: [
      {
        name: "APPLE MUSIC Famplan",
        price: 8000,
        duration: "1 BULAN"
      },
      {
        name: "APPLE MUSIC Famphead",
        price: 19000,
        duration: "1 BULAN"
      }
    ]
  },

  // 🔥 EDITING
  produkCanva: {
    name: "CANVA",
    description: "Editing services",
    bannerImage: "../image/canva.png",
    logo: "../image/canva.png",
    category: "Editing",
    packages: [
      {
        name: "CANVA Member + design",
        price: 2000,
        duration: "1 BULAN"
      },
      {
        name: "CANVA Member + design",
        price: 8000,
        duration: "1 TAHUN"
      },
      {
        name: "CANVA Edu",
        price: 15000,
        duration: "LIFETIME"
      }
    ]
  },

  produkCapcut: {
    name: "CAPCUT",
    description: "Editing services",
    bannerImage: "../image/capcut.png",
    logo: "../image/capcut.png",
    category: "Editing",
    packages: [
      {
        name: "CAPCUT Sharing",
        price: 10000,
        duration: "1 BULAN"
      },
      {
        name: "CAPCUT Sharing",
        price: 40000,
        duration: "1 TAHUN"
      },
      {
        name: "CAPCUT Private",
        price: 15000,
        duration: "1 BULAN"
      },
      {
        name: "CAPCUT Private",
        price: 70000,
        duration: "1 TAHUN"
      }
    ]
  },

  produkRemini: {
    name: "REMINI",
    description: "Editing services",
    bannerImage: "../image/remini.png",
    logo: "../image/remini.png",
    category: "Editing",
    packages: [
      {
        name: "REMINI Sharing web",
        price: 8000,
        duration: "1 BULAN"
      },
      {
        name: "REMINI Sharing aplikasi",
        price: 18000,
        duration: "1 BULAN"
      },
      {
        name: "REMINI Private web",
        price: 15000,
        duration: "1 BULAN"
      }
    ]
  },

  produkMeitu: {
    name: "MEITU",
    description: "Editing services",
    bannerImage: "../image/meitu.png",
    logo: "../image/meitu.png",
    category: "Editing",
    packages: [
      {
        name: "MEITU",
        price: 28000,
        duration: "1 BULAN"
      },
      {
        name: "MEITU",
        price: 58000,
        duration: "1 TAHUN"
      }
    ]
  },

  produkPicsart: {
    name: "PICSART",
    description: "Editing services",
    bannerImage: "../image/picsart.png",
    logo: "../image/picsart.png",
    category: "Editing",
    packages: [
      {
        name: "PICSART Sharing",
        price: 8000,
        duration: "1 BULAN"
      },
      {
        name: "PICSART Private",
        price: 11000,
        duration: "1 BULAN"
      }
    ]
  },

  produkOldroll: {
    name: "OLDROLL",
    description: "Editing services",
    bannerImage: "../image/oldroll.png",
    logo: "../image/oldroll.png",
    category: "Editing",
    packages: [
      {
        name: "OLDROLL Sharing",
        price: 10000,
        duration: "LIFETIME"
      }
    ]
  },

  produkIbisPaint: {
    name: "IBIS PAINT X",
    description: "Editing services",
    bannerImage: "../image/ibispaint.png",
    logo: "../image/ibispaint.png",
    category: "Editing",
    packages: [
      {
        name: "IBIS PAINT X Sharing",
        price: 18000,
        duration: "1 TAHUN"
      }
    ]
  },

  produkAlightMotion: {
    name: "Alight Motion",
    description: "Editing services",
    bannerImage: "../image/alight-motion.png",
    logo: "../image/alight-motion.png",
    category: "Editing",
    packages: [
      {
        name: "Alight Motion Premium", // Mengganti "Alight motion 1 Tahun" karena durasi ada di bawah
        price: 3000,
        duration: "Akun dari kami"
      }
    ]
  },

  produkDazzcam: {
    name: "DAZZCAM",
    description: "Editing services",
    bannerImage: "../image/dazzcam.png",
    logo: "../image/dazzcam.png",
    category: "Editing",
    packages: [
      {
        name: "DAZZCAM Sharing",
        price: 13000,
        duration: "LIFETIME"
      }
    ]
  }
};

// Fungsi untuk mendapatkan data produk berdasarkan nama produk
function getProductData(productName) {
  const productMap = {
    'NETFLIX': semuaProduk.produkNetflix,
    'Vidio': semuaProduk.produkVidio,
    'DISNEY+': semuaProduk.produkDisneyPlus,
    'YOUTUBE': semuaProduk.produkYouTube,
    'AMAZON PRIME': semuaProduk.produkAmazonPrime,
    'IQIYI': semuaProduk.produkIQIYI,
    'DRAMABOX': semuaProduk.produkDramabox,
    'LOKLOK': semuaProduk.produkLoklok,
    'VIU': semuaProduk.produkVIU,
    'HBO GO': semuaProduk.produkHBOGO,
    'WETV': semuaProduk.produkWeTV,
    'HBO GO MAX': semuaProduk.produkHBOGOMax,
    'BSTATION': semuaProduk.produkBstation,
    'YOUKOU': semuaProduk.produkYoukou,
    'SPOTIFY': semuaProduk.produkSpotify,
    'APPLE MUSIC': semuaProduk.produkAppleMusic,
    'CANVA': semuaProduk.produkCanva,
    'CAPCUT': semuaProduk.produkCapcut,
    'REMINI': semuaProduk.produkRemini,
    'MEITU': semuaProduk.produkMeitu,
    'PICSART': semuaProduk.produkPicsart,
    'OLDROLL': semuaProduk.produkOldroll,
    'IBIS PAINT X': semuaProduk.produkIbisPaint,
    'Alight Motion': semuaProduk.produkAlightMotion,
    'DAZZCAM': semuaProduk.produkDazzcam
  };
  
  return productMap[productName] || semuaProduk.produkAlightMotion; // Default ke Alight Motion jika tidak ditemukan
}

// Fungsi untuk mendapatkan semua produk berdasarkan kategori
function getProductsByCategory(category) {
  const products = [];
  for (const key in semuaProduk) {
    if (semuaProduk[key].category === category) {
      products.push(semuaProduk[key]);
    }
  }
  return products;
}

// Fungsi untuk mendapatkan produk populer
function getPopularProducts() {
  const popularProducts = [
    semuaProduk.produkNetflix,
    semuaProduk.produkSpotify,
    semuaProduk.produkCanva,
    semuaProduk.produkAlightMotion,
    semuaProduk.produkVidio,
    semuaProduk.produkYouTube
  ];
  return popularProducts;
}

// Export untuk penggunaan di modul (jika menggunakan ES6 modules)
// export { semuaProduk, getProductData, getProductsByCategory, getPopularProducts };
