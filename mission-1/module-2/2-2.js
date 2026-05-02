// map, slice, sort, filter

// input
const rawApiData = [
  {
    id: 1,
    "product-name": "UltraView Monitor",
    category: "Electronics",
    price: 299.99,
    rating: 4.8,
    stock: 45,
  },
  {
    id: 2,
    "product-name": "ErgoSoft Office Chair",
    category: "Furniture",
    price: 189.5,
    rating: 4.5,
    stock: 12,
  },
  {
    id: 3,
    "product-name": "SwiftType Mechanical Keyboard",
    category: "Electronics",
    price: 89.0,
    rating: 4.7,
    stock: 110,
  },
  {
    id: 4,
    "product-name": "EcoBrew Coffee Maker",
    category: "Appliances",
    price: 45.99,
    rating: 4.2,
    stock: 67,
  },
  {
    id: 5,
    "product-name": "SonicPulse Headphones",
    category: "Electronics",
    price: 129.99,
    rating: 4.9,
    stock: 25,
  },
  {
    id: 6,
    "product-name": "LumbarSupport Pillow",
    category: "Furniture",
    price: 25.0,
    rating: 4.3,
    stock: 200,
  },
  {
    id: 7,
    "product-name": "AeroFry Air Fryer",
    category: "Appliances",
    price: 115.0,
    rating: 4.6,
    stock: 38,
  },
  {
    id: 8,
    "product-name": "Titanium Water Bottle",
    category: "Fitness",
    price: 34.5,
    rating: 4.8,
    stock: 150,
  },
  {
    id: 9,
    "product-name": "GripMaster Yoga Mat",
    category: "Fitness",
    price: 40.0,
    rating: 4.4,
    stock: 88,
  },
  {
    id: 10,
    "product-name": "ClearStream Webcam",
    category: "Electronics",
    price: 65.0,
    rating: 4.1,
    stock: 54,
  },
  {
    id: 11,
    "product-name": "Nordic Wool Rug",
    category: "Home Decor",
    price: 210.0,
    rating: 4.7,
    stock: 9,
  },
  {
    id: 12,
    "product-name": "TurboDry Hair Dryer",
    category: "Beauty",
    price: 55.0,
    rating: 4.5,
    stock: 72,
  },
  {
    id: 13,
    "product-name": "GlowStep Smart Lamp",
    category: "Home Decor",
    price: 49.99,
    rating: 4.2,
    stock: 103,
  },
  {
    id: 14,
    "product-name": "PeakPerformance Protein Shaker",
    category: "Fitness",
    price: 15.99,
    rating: 4.0,
    stock: 310,
  },
  {
    id: 15,
    "product-name": "SavorChef Knife Set",
    category: "Kitchen",
    price: 140.0,
    rating: 4.9,
    stock: 22,
  },
  {
    id: 16,
    "product-name": "PureAir Purifier",
    category: "Appliances",
    price: 199.0,
    rating: 4.6,
    stock: 15,
  },
  {
    id: 17,
    "product-name": "FlexiDesk Standing Desk",
    category: "Furniture",
    price: 350.0,
    rating: 4.8,
    stock: 7,
  },
  {
    id: 18,
    "product-name": "BoltCharge Power Bank",
    category: "Electronics",
    price: 39.99,
    rating: 4.3,
    stock: 180,
  },
  {
    id: 19,
    "product-name": "ZestGrind Spice Mill",
    category: "Kitchen",
    price: 22.5,
    rating: 4.4,
    stock: 95,
  },
  {
    id: 20,
    "product-name": "CloudSleep Duvet",
    category: "Home Decor",
    price: 120.0,
    rating: 4.7,
    stock: 41,
  },
];

// output => name of top3 electronics => [{name: "Phone"}, {name: "Smart Watch"}]

//todo filter => Electronics
//todo sort => ratings
//todo slice => first 3 (top 3)
//todo map => {name: product-name}

const topElectronicProducts = rawApiData
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => ({ name: item["product-name"] }));

console.log(topElectronicProducts);
