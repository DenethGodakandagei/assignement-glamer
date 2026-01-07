export interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  supplier: string;
  lastRestocked: string;
  imageUrl?: string;
}

export const products: Product[] = [
  { id: 1, name: "Wireless Mouse", sku: "WM-1001", category: "Electronics", price: 25.99, stock: 50, supplier: "Tech Supplies Inc", lastRestocked: "2026-01-01", imageUrl: "https://via.placeholder.com/100" },
  { id: 2, name: "Mechanical Keyboard", sku: "MK-2002", category: "Electronics", price: 89.99, stock: 30, supplier: "Keyboard Masters", lastRestocked: "2026-01-03", imageUrl: "https://via.placeholder.com/100" },
  { id: 3, name: "USB-C Cable", sku: "UC-3003", category: "Accessories", price: 9.99, stock: 100, supplier: "Cable Co", lastRestocked: "2025-12-28", imageUrl: "https://via.placeholder.com/100" },
  { id: 4, name: "Laptop Stand", sku: "LS-4004", category: "Accessories", price: 29.99, stock: 40, supplier: "Office Essentials", lastRestocked: "2025-12-30", imageUrl: "https://via.placeholder.com/100" },
  { id: 5, name: "Gaming Headset", sku: "GH-5005", category: "Electronics", price: 59.99, stock: 20, supplier: "Sound Gear", lastRestocked: "2026-01-02", imageUrl: "https://via.placeholder.com/100" },
  { id: 6, name: "Webcam HD", sku: "WC-6006", category: "Electronics", price: 45.99, stock: 35, supplier: "Video Tech", lastRestocked: "2025-12-25", imageUrl: "https://via.placeholder.com/100" },
  { id: 7, name: "Portable Charger", sku: "PC-7007", category: "Accessories", price: 19.99, stock: 60, supplier: "PowerUp", lastRestocked: "2025-12-27", imageUrl: "https://via.placeholder.com/100" },
  { id: 8, name: "Bluetooth Speaker", sku: "BS-8008", category: "Electronics", price: 39.99, stock: 25, supplier: "Sound Gear", lastRestocked: "2026-01-01", imageUrl: "https://via.placeholder.com/100" },
  { id: 9, name: "Smartwatch", sku: "SW-9009", category: "Wearables", price: 129.99, stock: 15, supplier: "WearTech", lastRestocked: "2026-01-03", imageUrl: "https://via.placeholder.com/100" },
  { id: 10, name: "Desk Lamp", sku: "DL-1010", category: "Furniture", price: 34.99, stock: 45, supplier: "Home Essentials", lastRestocked: "2025-12-29", imageUrl: "https://via.placeholder.com/100" },
  { id: 11, name: "Office Chair", sku: "OC-1111", category: "Furniture", price: 149.99, stock: 10, supplier: "Chair World", lastRestocked: "2025-12-20", imageUrl: "https://via.placeholder.com/100" },
  { id: 12, name: "Monitor 24 inch", sku: "MN-1212", category: "Electronics", price: 159.99, stock: 18, supplier: "Screen Tech", lastRestocked: "2026-01-05", imageUrl: "https://via.placeholder.com/100" },
  { id: 13, name: "HDMI Cable", sku: "HC-1313", category: "Accessories", price: 12.99, stock: 75, supplier: "Cable Co", lastRestocked: "2025-12-30", imageUrl: "https://via.placeholder.com/100" },
  { id: 14, name: "External Hard Drive", sku: "HD-1414", category: "Electronics", price: 79.99, stock: 22, supplier: "Storage Solutions", lastRestocked: "2026-01-02", imageUrl: "https://via.placeholder.com/100" },
  { id: 15, name: "Graphic Tablet", sku: "GT-1515", category: "Electronics", price: 199.99, stock: 12, supplier: "Design Gear", lastRestocked: "2026-01-04", imageUrl: "https://via.placeholder.com/100" },
  { id: 16, name: "Stylus Pen", sku: "SP-1616", category: "Accessories", price: 29.99, stock: 50, supplier: "Design Gear", lastRestocked: "2025-12-31", imageUrl: "https://via.placeholder.com/100" },
  { id: 17, name: "Printer Ink", sku: "PI-1717", category: "Office Supplies", price: 19.99, stock: 80, supplier: "Print Supplies", lastRestocked: "2025-12-26", imageUrl: "https://via.placeholder.com/100" },
  { id: 18, name: "Notebook A4", sku: "NB-1818", category: "Office Supplies", price: 4.99, stock: 200, supplier: "Paper Co", lastRestocked: "2025-12-28", imageUrl: "https://via.placeholder.com/100" },
  { id: 19, name: "Ballpoint Pen", sku: "BP-1919", category: "Office Supplies", price: 1.99, stock: 300, supplier: "Paper Co", lastRestocked: "2025-12-29", imageUrl: "https://via.placeholder.com/100" },
  { id: 20, name: "Desk Organizer", sku: "DO-2020", category: "Office Supplies", price: 14.99, stock: 45, supplier: "Office Essentials", lastRestocked: "2025-12-27", imageUrl: "https://via.placeholder.com/100" },
  { id: 21, name: "Laptop Backpack", sku: "LB-2121", category: "Accessories", price: 49.99, stock: 25, supplier: "Bag World", lastRestocked: "2025-12-31", imageUrl: "https://via.placeholder.com/100" },
  { id: 22, name: "Wireless Earbuds", sku: "WE-2222", category: "Electronics", price: 59.99, stock: 30, supplier: "Sound Gear", lastRestocked: "2026-01-02", imageUrl: "https://via.placeholder.com/100" },
  { id: 23, name: "Surge Protector", sku: "SP-2323", category: "Electronics", price: 19.99, stock: 40, supplier: "PowerUp", lastRestocked: "2025-12-30", imageUrl: "https://via.placeholder.com/100" },
  { id: 24, name: "Coffee Mug", sku: "CM-2424", category: "Kitchen", price: 7.99, stock: 100, supplier: "Home Essentials", lastRestocked: "2025-12-25", imageUrl: "https://via.placeholder.com/100" },
  { id: 25, name: "Water Bottle", sku: "WB-2525", category: "Accessories", price: 12.99, stock: 75, supplier: "Bag World", lastRestocked: "2025-12-28", imageUrl: "https://via.placeholder.com/100" },
  { id: 26, name: "LED Desk Light", sku: "DL-2626", category: "Furniture", price: 39.99, stock: 35, supplier: "Home Essentials", lastRestocked: "2026-01-03", imageUrl: "https://via.placeholder.com/100" },
  { id: 27, name: "Portable Hard Drive", sku: "PH-2727", category: "Electronics", price: 99.99, stock: 20, supplier: "Storage Solutions", lastRestocked: "2025-12-29", imageUrl: "https://via.placeholder.com/100" },
  { id: 28, name: "Smart Light Bulb", sku: "SL-2828", category: "Electronics", price: 24.99, stock: 60, supplier: "Tech Supplies Inc", lastRestocked: "2026-01-01", imageUrl: "https://via.placeholder.com/100" },
  { id: 29, name: "Desk Calendar", sku: "DC-2929", category: "Office Supplies", price: 9.99, stock: 120, supplier: "Paper Co", lastRestocked: "2025-12-27", imageUrl: "https://via.placeholder.com/100" },
  { id: 30, name: "Sticky Notes", sku: "SN-3030", category: "Office Supplies", price: 3.99, stock: 200, supplier: "Paper Co", lastRestocked: "2025-12-28", imageUrl: "https://via.placeholder.com/100" }
];
