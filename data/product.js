/**
 * ENAFU STORE
 * Central Product Catalog
 *
 * Stage 01 — Foundation
 *
 * IMPORTANT:
 * This file is the single source of truth for products.
 * Do not create separate product arrays inside HTML pages.
 *
 * Product specifications should only be changed when verified
 * against the actual product/supplier information.
 */

const PRODUCTS = [
  {
    id: "enf-smart-wifi-plug",
    slug: "smart-wifi-plug",
    name: "Smart Wi-Fi Plug",
    shortName: "Smart Wi-Fi Plug",
    category: "Smart Electrical",
    categorySlug: "smart-electrical",

    price: 2499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-SWP-001",

    badge: "Smart Pick",
    featured: true,
    winter: false,

    stock: 20,
    stockStatus: "in-stock",

    thumbnail: "assets/images/products/smart-wifi-plug.jpg",

    images: [
      "assets/images/products/smart-wifi-plug.jpg"
    ],

    shortDescription:
      "Turn ordinary appliances into smart devices with convenient Wi-Fi control.",

    description:
      "A compact smart plug designed to bring convenient remote control and scheduling to everyday electrical appliances. Ideal for lamps, fans, chargers and other compatible household devices.",

    features: [
      "Remote ON/OFF control",
      "Wi-Fi connectivity",
      "Smart scheduling",
      "Compact plug-in design",
      "Designed for everyday household use"
    ],

    specifications: {
      Connectivity: "Wi-Fi",
      Control: "Smartphone app",
      Installation: "Plug & play",
      "Use Case": "Home and office appliances"
    },

    whatsInTheBox: [
      "1 × Smart Wi-Fi Plug",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-router-mini-ups",
    slug: "wifi-router-mini-ups",
    name: "Wi-Fi Router Mini UPS",
    shortName: "Router Mini UPS",
    category: "Power Solutions",
    categorySlug: "power-solutions",

    price: 2999,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-MUPS-001",

    badge: "Load-Shedding Essential",
    featured: true,
    winter: false,

    stock: 15,
    stockStatus: "in-stock",

    thumbnail: "assets/images/products/router-mini-ups.jpg",

    images: [
      "assets/images/products/router-mini-ups.jpg"
    ],

    shortDescription:
      "Keep compatible Wi-Fi networking equipment powered during short power interruptions.",

    description:
      "A compact backup power solution for compatible Wi-Fi routers and networking devices. Designed for convenient installation and continuity during power interruptions.",

    features: [
      "Compact design",
      "Backup power for compatible routers",
      "Useful during load shedding",
      "Easy installation",
      "Designed for networking equipment"
    ],

    specifications: {
      Type: "Mini UPS",
      Output: "Verify according to selected model",
      Compatibility: "Compatible router/network devices",
      Installation: "Plug & play"
    },

    whatsInTheBox: [
      "1 × Mini UPS",
      "Connection accessories",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-solar-motion-security-light",
    slug: "solar-motion-sensor-security-light",
    name: "Solar Motion Sensor Security Light",
    shortName: "Solar Security Light",
    category: "Outdoor Lighting",
    categorySlug: "outdoor-lighting",

    price: 2499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-SMSL-001",

    badge: "Outdoor",
    featured: true,
    winter: false,

    stock: 20,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/solar-motion-security-light.jpg",

    images: [
      "assets/images/products/solar-motion-security-light.jpg"
    ],

    shortDescription:
      "Solar-powered outdoor lighting with motion-sensing functionality.",

    description:
      "A practical outdoor security lighting solution designed for areas such as entrances, walls, pathways and outdoor spaces where automatic illumination is useful.",

    features: [
      "Solar-powered operation",
      "Motion sensing",
      "Automatic illumination",
      "Outdoor-focused design",
      "Suitable for entrances and pathways"
    ],

    specifications: {
      Power: "Solar",
      Sensor: "Motion sensor",
      Installation: "Wall mounting",
      "Recommended Use": "Outdoor areas"
    },

    whatsInTheBox: [
      "1 × Solar motion security light",
      "Mounting accessories",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-auto-voltage-protector",
    slug: "automatic-voltage-protector",
    name: "Automatic Voltage Protector",
    shortName: "Auto Voltage Protector",
    category: "Electrical Protection",
    categorySlug: "electrical-protection",

    price: 3499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-AVP-001",

    badge: "Protection",
    featured: true,
    winter: false,

    stock: 15,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/auto-voltage-protector.jpg",

    images: [
      "assets/images/products/auto-voltage-protector.jpg"
    ],

    shortDescription:
      "Automatic voltage protection for compatible household electrical equipment.",

    description:
      "Designed to help protect compatible appliances against unsuitable voltage conditions. A useful electrical protection solution for homes and offices.",

    features: [
      "Automatic voltage monitoring",
      "Protection-focused design",
      "Digital display on selected models",
      "Suitable for household applications",
      "Easy-to-read operating information"
    ],

    specifications: {
      Type: "Automatic voltage protector",
      Application: "Household electrical equipment",
      Installation: "According to product model",
      Protection: "Over/under-voltage protection"
    },

    whatsInTheBox: [
      "1 × Automatic voltage protector",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-wifi-rgb-smart-bulb",
    slug: "wifi-rgb-smart-bulb",
    name: "Wi-Fi RGB Smart Bulb",
    shortName: "RGB Smart Bulb",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",

    price: 1899,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-RGB-001",

    badge: "Smart Lighting",
    featured: true,
    winter: false,

    stock: 25,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/wifi-rgb-smart-bulb.jpg",

    images: [
      "assets/images/products/wifi-rgb-smart-bulb.jpg"
    ],

    shortDescription:
      "Smart Wi-Fi lighting with customizable RGB colors for modern spaces.",

    description:
      "Add customizable smart lighting to bedrooms, living rooms, workspaces and entertainment areas with app-based control and RGB lighting effects.",

    features: [
      "RGB color lighting",
      "Wi-Fi control",
      "Remote operation",
      "Adjustable lighting scenes",
      "Suitable for bedrooms and living spaces"
    ],

    specifications: {
      Connectivity: "Wi-Fi",
      Lighting: "RGB",
      Control: "Compatible smart-lighting app",
      Installation: "Standard bulb socket"
    },

    whatsInTheBox: [
      "1 × Wi-Fi RGB Smart Bulb",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-digital-energy-meter",
    slug: "digital-electric-consumption-meter",
    name: "Digital Electric Consumption Meter",
    shortName: "Digital Energy Meter",
    category: "Energy Management",
    categorySlug: "energy-management",

    price: 4999,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-DEM-001",

    badge: "Energy Monitor",
    featured: true,
    winter: false,

    stock: 12,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/digital-energy-meter.jpg",

    images: [
      "assets/images/products/digital-energy-meter.jpg"
    ],

    shortDescription:
      "Monitor electrical consumption and operating values with a digital energy meter.",

    description:
      "A digital monitoring solution for users who want clearer visibility into electrical consumption and operating measurements.",

    features: [
      "Digital energy monitoring",
      "Consumption visibility",
      "Easy-to-read display",
      "Electrical monitoring solution",
      "Useful for home and small-business applications"
    ],

    specifications: {
      Type: "Digital energy meter",
      Display: "Digital",
      Measurement: "Electrical consumption",
      Installation: "According to product model"
    },

    whatsInTheBox: [
      "1 × Digital electric consumption meter",
      "Installation accessories",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-power-extension-4s-2u-1c",
    slug: "4-socket-extension-board-usb-usbc",
    name: "Multi Power Extension Board — 4 Sockets + 2 USB + 1 Type-C",
    shortName: "4-Socket Smart Extension Board",
    category: "Power Solutions",
    categorySlug: "power-solutions",

    price: 2499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-EXT-001",

    badge: "Everyday Essential",
    featured: true,
    winter: false,

    stock: 20,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/power-extension-4s-2u-1c.jpg",

    images: [
      "assets/images/products/power-extension-4s-2u-1c.jpg"
    ],

    shortDescription:
      "Four power sockets plus two USB ports and one Type-C port in one convenient extension board.",

    description:
      "A practical multi-device power solution designed for desks, bedrooms, workspaces and entertainment areas where several devices need convenient access to power and charging ports.",

    features: [
      "4 power sockets",
      "2 USB charging ports",
      "1 Type-C charging port",
      "Multi-device convenience",
      "Suitable for home and workspace use"
    ],

    specifications: {
      Sockets: "4",
      USB: "2 × USB",
      "Type-C": "1 × Type-C",
      Type: "Multi power extension board"
    },

    whatsInTheBox: [
      "1 × Multi power extension board"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-auto-water-heating-rod",
    slug: "auto-on-off-water-heating-rod",
    name: "Auto On/Off Water Heating Rod",
    shortName: "Automatic Water Heating Rod",
    category: "Winter Essentials",
    categorySlug: "winter-essentials",

    price: 1999,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-WHR-001",

    badge: "Winter Essential",
    featured: true,
    winter: true,

    stock: 15,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/auto-water-heating-rod.jpg",

    images: [
      "assets/images/products/auto-water-heating-rod.jpg"
    ],

    shortDescription:
      "Convenient electric water heating solution with automatic operation on compatible models.",

    description:
      "A compact electric water heating solution designed for convenient seasonal use. Product specifications and safety requirements should always be verified against the exact model supplied.",

    features: [
      "Electric water heating",
      "Compact design",
      "Automatic operation on compatible models",
      "Winter-focused product",
      "Easy storage"
    ],

    specifications: {
      Type: "Electric water heating rod",
      Operation: "Automatic on/off on compatible model",
      Application: "Water heating",
      "Use Environment": "As specified by manufacturer"
    },

    whatsInTheBox: [
      "1 × Water heating rod",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-electric-blanket-warmer",
    slug: "electric-blanket-warmer",
    name: "Electric Blanket Warmer",
    shortName: "Electric Blanket",
    category: "Winter Essentials",
    categorySlug: "winter-essentials",

    price: 4999,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-EBW-001",

    badge: "Winter Essential",
    featured: true,
    winter: true,

    stock: 10,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/electric-blanket-warmer.jpg",

    images: [
      "assets/images/products/electric-blanket-warmer.jpg"
    ],

    shortDescription:
      "Electric warming solution designed for comfortable use during colder weather.",

    description:
      "A winter comfort product designed to provide controlled warmth during colder conditions. Always follow the manufacturer's operating and safety instructions.",

    features: [
      "Winter warming solution",
      "Electric operation",
      "Designed for cold-weather comfort",
      "Easy-to-use control",
      "Suitable for seasonal use"
    ],

    specifications: {
      Type: "Electric warming blanket",
      Control: "According to product model",
      Power: "Verify exact model specification",
      Application: "Indoor winter use"
    },

    whatsInTheBox: [
      "1 × Electric blanket",
      "Controller",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-ptc-mini-heater",
    slug: "mini-ptc-ceramic-heater",
    name: "Mini PTC Ceramic Heater",
    shortName: "Mini PTC Heater",
    category: "Winter Essentials",
    categorySlug: "winter-essentials",

    price: 2999,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-PH-001",

    badge: "Winter Essential",
    featured: true,
    winter: true,

    stock: 15,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/ptc-mini-heater.jpg",

    images: [
      "assets/images/products/ptc-mini-heater.jpg"
    ],

    shortDescription:
      "Compact PTC ceramic heating solution for personal indoor spaces.",

    description:
      "A compact ceramic heating product designed for personal indoor spaces during colder weather. Exact power and safety specifications should be verified against the selected model.",

    features: [
      "PTC ceramic heating",
      "Compact design",
      "Fast personal heating",
      "Portable form factor",
      "Winter-focused product"
    ],

    specifications: {
      Heating: "PTC ceramic",
      Type: "Mini electric heater",
      Application: "Indoor personal heating",
      Power: "Verify exact model specification"
    },

    whatsInTheBox: [
      "1 × Mini PTC ceramic heater",
      "User instructions"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-rgb-corner-lamp",
    slug: "rgb-corner-lamp",
    name: "RGB Corner Lamp",
    shortName: "RGB Corner Lamp",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",

    price: 4499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-RCL-001",

    badge: "Room Upgrade",
    featured: true,
    winter: false,

    stock: 10,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/rgb-corner-lamp.jpg",

    images: [
      "assets/images/products/rgb-corner-lamp.jpg"
    ],

    shortDescription:
      "Modern RGB ambient lighting designed to transform corners and living spaces.",

    description:
      "A contemporary ambient lighting solution for bedrooms, gaming setups, lounges and entertainment spaces. Designed to add customizable RGB atmosphere to modern interiors.",

    features: [
      "RGB ambient lighting",
      "Modern corner design",
      "Multiple lighting effects",
      "Suitable for gaming setups",
      "Suitable for bedrooms and lounges"
    ],

    specifications: {
      Type: "RGB ambient lamp",
      Lighting: "RGB",
      Installation: "Floor/corner placement",
      Application: "Indoor ambient lighting"
    },

    whatsInTheBox: [
      "1 × RGB corner lamp",
      "Power adapter",
      "Controller/accessories according to model"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  },

  {
    id: "enf-motion-sensor-light-strip",
    slug: "motion-sensor-light-strip",
    name: "Motion Sensor LED Light Strip",
    shortName: "Motion Sensor Light Strip",
    category: "Smart Lighting",
    categorySlug: "smart-lighting",

    price: 2499,
    compareAtPrice: null,
    currency: "PKR",

    sku: "ENF-MSL-001",

    badge: "Smart Lighting",
    featured: true,
    winter: false,

    stock: 20,
    stockStatus: "in-stock",

    thumbnail:
      "assets/images/products/motion-sensor-light-strip.jpg",

    images: [
      "assets/images/products/motion-sensor-light-strip.jpg"
    ],

    shortDescription:
      "Automatic LED strip lighting activated by motion for convenient everyday illumination.",

    description:
      "A motion-activated LED lighting solution for areas such as wardrobes, cabinets, corridors, stairs, bedsides and other spaces where automatic illumination is useful.",

    features: [
      "Motion sensor activation",
      "Automatic illumination",
      "LED strip lighting",
      "Suitable for cabinets and corridors",
      "Convenient hands-free operation"
    ],

    specifications: {
      Type: "Motion sensor LED strip",
      Sensor: "Motion detection",
      Lighting: "LED",
      Application: "Indoor accent and utility lighting"
    },

    whatsInTheBox: [
      "1 × Motion sensor LED light strip",
      "Mounting accessories",
      "Power accessories according to model"
    ],

    warranty: "As specified by Enafu Store",
    delivery: "Nationwide delivery available",

    rating: 0,
    reviewCount: 0
  }
];


/* =========================================================
   PRODUCT HELPERS
   ========================================================= */

/**
 * Find a product using its unique ID.
 */
function getProductById(id) {
  if (!id) return null;

  return (
    PRODUCTS.find(product => product.id === String(id)) || null
  );
}


/**
 * Find a product using its SEO-friendly slug.
 */
function getProductBySlug(slug) {
  if (!slug) return null;

  return (
    PRODUCTS.find(
      product => product.slug === String(slug).toLowerCase()
    ) || null
  );
}


/**
 * Return all products.
 */
function getAllProducts() {
  return [...PRODUCTS];
}


/**
 * Return only featured products.
 */
function getFeaturedProducts() {
  return PRODUCTS.filter(product => product.featured);
}


/**
 * Return only winter products.
 */
function getWinterProducts() {
  return PRODUCTS.filter(product => product.winter);
}


/**
 * Return products by category slug.
 */
function getProductsByCategory(categorySlug) {
  if (!categorySlug) return [];

  return PRODUCTS.filter(
    product =>
      product.categorySlug.toLowerCase() ===
      String(categorySlug).toLowerCase()
  );
}


/**
 * Return all unique categories.
 */
function getProductCategories() {
  return [
    ...new Map(
      PRODUCTS.map(product => [
        product.categorySlug,
        {
          name: product.category,
          slug: product.categorySlug
        }
      ])
    ).values()
  ];
}


/**
 * Calculate discount percentage.
 */
function getDiscountPercentage(product) {
  if (
    !product ||
    !product.compareAtPrice ||
    product.compareAtPrice <= product.price
  ) {
    return 0;
  }

  return Math.round(
    ((product.compareAtPrice - product.price) /
      product.compareAtPrice) *
      100
  );
}


/**
 * Format Pakistani Rupee price.
 */
function formatPrice(price) {
  return `Rs. ${Number(price || 0).toLocaleString("en-PK")}`;
}


/**
 * Check whether a product is available.
 */
function isProductAvailable(product) {
  if (!product) return false;

  return (
    product.stockStatus === "in-stock" &&
    Number(product.stock) > 0
  );
}


/**
 * Get product URL.
 *
 * We are using one premium dynamic product page for now.
 * Later this can become a clean route such as:
 *
 * /product/smart-wifi-plug
 */
function getProductUrl(product) {
  if (!product) return "#";

  return `product.html?slug=${encodeURIComponent(product.slug)}`;
}


/**
 * Search products by name, category, SKU or description.
 */
function searchProducts(query) {
  if (!query) return [];

  const searchTerm = String(query)
    .trim()
    .toLowerCase();

  if (!searchTerm) return [];

  return PRODUCTS.filter(product => {
    const searchableText = [
      product.name,
      product.shortName,
      product.category,
      product.sku,
      product.shortDescription,
      product.description,
      ...(product.features || [])
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });
}
