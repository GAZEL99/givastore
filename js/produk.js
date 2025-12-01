// produk.js - Data semua produk untuk halaman product.html
const semuaProduk = {
  // 🔥 STREAMING
  "Netflix": {
    name: "NETFLIX",
    description: "Streaming services",
    bannerImage: "../image/netflix.png",
    logo: "../image/netflix.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Vidio": {
    name: "Vidio",
    description: "Streaming services", 
    bannerImage: "../image/vidio.png",
    logo: "../image/vidio.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Disney+": {
    name: "DISNEY+",
    description: "Streaming services",
    bannerImage: "../image/disneyplus.png",
    logo: "../image/disneyplus.png", 
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Youtube": {
    name: "YOUTUBE",
    description: "Streaming services",
    bannerImage: "../image/youtube.png",
    logo: "../image/youtube.png",
    category: "Streaming",
    inputFields: [
      {
        type: "email",
        name: "email",
        label: "Email YouTube",
        placeholder: "Masukkan email YouTube Anda",
        required: true,
        hint: "Email yang terdaftar di YouTube"
      }
    ],
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

  "Amazon Prime": {
    name: "AMAZON PRIME",
    description: "Streaming services",
    bannerImage: "../image/prime-video.png",
    logo: "../image/prime-video.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Iqiyi": {
    name: "IQIYI",
    description: "Streaming services",
    bannerImage: "../image/iqiyi.png",
    logo: "../image/iqiyi.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Dramabox": {
    name: "DRAMABOX",
    description: "Streaming services",
    bannerImage: "../image/dramabox.png",
    logo: "../image/dramabox.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Loklok": {
    name: "LOKLOK",
    description: "Streaming services",
    bannerImage: "../image/loklok.png",
    logo: "../image/loklok.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Viu": {
    name: "VIU",
    description: "Streaming services",
    bannerImage: "../image/viu.png",
    logo: "../image/viu.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Hbo Go": {
    name: "HBO GO",
    description: "Streaming services",
    bannerImage: "../image/hbo-go.png",
    logo: "../image/hbo-go.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Wetv": {
    name: "WETV",
    description: "Streaming services",
    bannerImage: "../image/wetv.png",
    logo: "../image/wetv.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Hbo Go Max": {
    name: "HBO GO MAX",
    description: "Streaming services",
    bannerImage: "../image/hbo-go-max-com.png",
    logo: "../image/hbo-go-max-com.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Bstation": {
    name: "BSTATION",
    description: "Streaming services",
    bannerImage: "../image/bstation.png",
    logo: "../image/bstation.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Youkou": {
    name: "YOUKOU",
    description: "Streaming services",
    bannerImage: "../image/youkou.png",
    logo: "../image/youkou.png",
    category: "Streaming",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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
  "Spotify": {
    name: "SPOTIFY",
    description: "Music services",
    bannerImage: "../image/spotify.png",
    logo: "../image/spotify.png",
    category: "Musik",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Apple Music": {
    name: "APPLE MUSIC",
    description: "Music services",
    bannerImage: "../image/applemusic.png",
    logo: "../image/applemusic.png",
    category: "Musik",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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
  "Canva": {
    name: "CANVA",
    description: "Editing services",
    bannerImage: "../image/canva.png",
    logo: "../image/canva.png",
    category: "Editing",
    inputFields: [
      {
        type: "email",
        name: "email",
        label: "Email Canva",
        placeholder: "Masukkan email Canva Anda",
        required: true,
        hint: "Email yang terdaftar di Canva"
      }
    ],
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

  "Capcut": {
    name: "CAPCUT",
    description: "Editing services",
    bannerImage: "../image/capcut.png",
    logo: "../image/capcut.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Remini": {
    name: "REMINI",
    description: "Editing services",
    bannerImage: "../image/remini.png",
    logo: "../image/remini.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Meitu": {
    name: "MEITU",
    description: "Editing services",
    bannerImage: "../image/meitu.png",
    logo: "../image/meitu.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Picsart": {
    name: "PICSART",
    description: "Editing services",
    bannerImage: "../image/picsart.png",
    logo: "../image/picsart.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
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

  "Oldroll": {
    name: "OLDROLL",
    description: "Editing services",
    bannerImage: "../image/oldroll.png",
    logo: "../image/oldroll.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "OLDROLL Sharing",
        price: 10000,
        duration: "LIFETIME"
      }
    ]
  },

  "Ibis Paint X": {
    name: "IBIS PAINT X",
    description: "Editing services",
    bannerImage: "../image/ibispaint.png",
    logo: "../image/ibispaint.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "IBIS PAINT X Sharing",
        price: 18000,
        duration: "1 TAHUN"
      }
    ]
  },

  "Alight Motion": {
    name: "Alight Motion",
    description: "Editing services",
    bannerImage: "../image/alight-motion.png",
    logo: "../image/alight-motion.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "Alight Motion Premium",
        price: 3000,
        duration: "Akun dari kami"
      }
    ]
  },

  "Dazzcam": {
    name: "DAZZCAM",
    description: "Editing services",
    bannerImage: "../image/dazzcam.png",
    logo: "../image/dazzcam.png",
    category: "Editing",
    inputFields: [
      {
        type: "text",
        name: "whatsapp",
        label: "Nomor WhatsApp",
        placeholder: "Masukkan nomor WhatsApp Anda",
        required: true,
        hint: "Nomor WhatsApp untuk pengiriman akun"
      }
    ],
    packages: [
      {
        name: "DAZZCAM Sharing",
        price: 13000,
        duration: "LIFETIME"
      }
    ]
  }
};

// Fungsi untuk mendapatkan data produk berdasarkan nama
function getProductData(productName) {
  // Cek apakah produk ada langsung
  if (semuaProduk[productName]) {
    return semuaProduk[productName];
  }
  
  // Jika tidak ditemukan langsung, cari dengan matching partial
  const availableProducts = Object.keys(semuaProduk);
  for (const key of availableProducts) {
    if (key.toLowerCase().includes(productName.toLowerCase()) || 
        semuaProduk[key].name.toLowerCase().includes(productName.toLowerCase())) {
      return semuaProduk[key];
    }
  }
  
  // Default fallback
  console.warn('Produk tidak ditemukan:', productName, ', menggunakan Alight Motion sebagai default');
  return semuaProduk["Alight Motion"];
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
    semuaProduk["Netflix"],
    semuaProduk["Spotify"], 
    semuaProduk["Canva"],
    semuaProduk["Alight Motion"],
    semuaProduk["Vidio"],
    semuaProduk["Youtube"]
  ];
  return popularProducts.filter(Boolean); // Filter null/undefined
}

// Debug function
function debugProducts() {
  console.log("=== DEBUG PRODUK.JS ===");
  console.log("Total produk:", Object.keys(semuaProduk).length);
  console.log("Daftar produk:", Object.keys(semuaProduk));
  console.log("Kategori tersedia:", [...new Set(Object.values(semuaProduk).map(p => p.category))]);
  console.log("========================");
}

// Panggil debug saat file dimuat
debugProducts();

// Export untuk penggunaan di modul (jika menggunakan ES6 modules)
// export { semuaProduk, getProductData, getProductsByCategory, getPopularProducts };