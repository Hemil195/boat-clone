export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  colors: string[];
  image: string;
  badge?: string;
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
}

export const products: Product[] = [
  {
  "id": 1,
  "name": "boAt Airdopes 131 - Wireless Earbuds",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "boAt Airdopes 131 - Wireless Earbuds with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
  "stock": 100
},
  {
  "id": 2,
  "name": "boAt Rockerz 330",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1495.0,
  "originalPrice": 2990,
  "discount": 50,
  "rating": 4.8,
  "reviews": 258,
  "description": "boAt Rockerz 330 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Raging Red",
    "Blazing Yellow",
    "Navy Blue",
    "Teal Green"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_600x.png?v=1641801688",
  "stock": 100
},
  {
  "id": 3,
  "name": "boAt Rockerz 333",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1197.0,
  "originalPrice": 3990,
  "discount": 70,
  "rating": 4.0,
  "reviews": 90,
  "description": "boAt Rockerz 333 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Teal Green",
    "Cherry Black"
  ],
  "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRft2Xr-s72MxKSnUZE1bpvqZtb7RF1lMnHBdv3VXKwwQ6TYIa7oDKYgpvwxYkAqMxjjnl7A9SrqeyU8fBcaq4G30-6WGJvJfxvvOD1VDSuTdHKv7ZWfltZdg",
  "stock": 100
},
  {
  "id": 4,
  "name": "\u200cboAt Watch Xtend\u200c",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3196.0,
  "originalPrice": 7990,
  "discount": 60,
  "rating": 4.8,
  "reviews": 108,
  "description": "\u200cboAt Watch Xtend\u200c with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Charcoal Black",
    "Pitch Black",
    "Olive Green",
    "Sandy Cream",
    "Deep Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_600x.png?v=1650387008",
  "stock": 100
},
  {
  "id": 5,
  "name": "boAt Watch Wave Pro",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3285.3,
  "originalPrice": 6990,
  "discount": 53,
  "rating": 5.0,
  "reviews": 10,
  "description": "boAt Watch Wave Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Blue",
    "Black",
    "Maroon"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
  "stock": 100
},
  {
  "id": 6,
  "name": "boAt Watch Flash",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2516.4,
  "originalPrice": 6990,
  "discount": 64,
  "rating": 4.8,
  "reviews": 43,
  "description": "boAt Watch Flash with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9e5b8bf2-29bf-4e1c-b24f-f8f4196ac14b_600x.png?v=1625157764",
  "stock": 100
},
  {
  "id": 7,
  "name": "boAt Storm",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2515.8,
  "originalPrice": 5990,
  "discount": 58,
  "rating": 4.8,
  "reviews": 912,
  "description": "boAt Storm with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Green",
    "CoolGrey",
    "MidnightBlue",
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216",
  "stock": 100
},
  {
  "id": 8,
  "name": "\u200cboAt Watch Xtend\u200c",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3196.0,
  "originalPrice": 7990,
  "discount": 60,
  "rating": 4.8,
  "reviews": 108,
  "description": "\u200cboAt Watch Xtend\u200c with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Sporty Blue",
    "Red",
    "Active Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
  "stock": 100
},
  {
  "id": 9,
  "name": "boAt Rockerz 235 V2",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 1007,
  "description": "boAt Rockerz 235 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "IndianRed",
    "Royalblue",
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
  "stock": 100
},
  {
  "id": 10,
  "name": "boAt Rockerz 245 V2",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 169,
  "description": "boAt Rockerz 245 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Ocean Blue",
    "Black",
    "Navy Blue",
    "Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_2_600x.png?v=1627276367",
  "stock": 100
},
  {
  "id": 11,
  "name": "boAt Rockerz 450",
  "category": "BLUETOOTH HEADPHONES",
  "subcategory": "",
  "price": 1516.2,
  "originalPrice": 3990,
  "discount": 62,
  "rating": 4.8,
  "reviews": 253,
  "description": "boAt Rockerz 450 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Beige",
    "LightBlue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
  "stock": 100
},
  {
  "id": 12,
  "name": "\u200cboAt Rockerz 550\u200c",
  "category": "BLUETOOTH HEADPHONES",
  "subcategory": "",
  "price": 1997.6,
  "originalPrice": 4994,
  "discount": 60,
  "rating": 4.8,
  "reviews": 308,
  "description": "\u200cboAt Rockerz 550\u200c with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Marron",
    "Orangered"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/64576906-013d-4af9-828a-fc3c69482a8a_600x.png?v=1625046144",
  "stock": 100
},
  {
  "id": 13,
  "name": "boAt BassHeads 100",
  "category": "WIRED EARPHONES",
  "subcategory": "",
  "price": 399.6,
  "originalPrice": 999,
  "discount": 60,
  "rating": 4.8,
  "reviews": 386,
  "description": "boAt BassHeads 100 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "White",
    "Pink",
    "Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c3d0fbbd-9479-4351-bf04-91136da2ae91_600x.png?v=1625046259",
  "stock": 100
},
  {
  "id": 14,
  "name": "boAt BassHeads 103",
  "category": "WIRED EARPHONES",
  "subcategory": "",
  "price": 374.1,
  "originalPrice": 1290,
  "discount": 71,
  "rating": 4.8,
  "reviews": 470,
  "description": "boAt BassHeads 103 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Blue",
    "Orange",
    "Green"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103blk_600x.png?v=1574927262",
  "stock": 100
},
  {
  "id": 15,
  "name": "boAt BassHeads 102",
  "category": "WIRED EARPHONES",
  "subcategory": "",
  "price": 451.5,
  "originalPrice": 1290,
  "discount": 65,
  "rating": 4.8,
  "reviews": 150,
  "description": "boAt BassHeads 102 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Cornflowerblue",
    "Indianred",
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f87f98c3-9b52-4f7f-9ebe-dd10ee9517d9_600x.png?v=1633152280",
  "stock": 100
},
  {
  "id": 17,
  "name": "boAt Rockerz 333 Pro",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1704.3,
  "originalPrice": 2990,
  "discount": 43,
  "rating": 4.9,
  "reviews": 78,
  "description": "boAt Rockerz 333 Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black",
    "TealGreen",
    "Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/m2_852f9f1f-5498-4e5a-b6a2-0645a7abbc41_600x.png?v=1639153081",
  "stock": 100
},
  {
  "id": 18,
  "name": "boAt Rockerz 255 Pro",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1399.6,
  "originalPrice": 3499,
  "discount": 60,
  "rating": 4.8,
  "reviews": 368,
  "description": "boAt Rockerz 255 Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Teal",
    "Red",
    "MidnightBlue",
    "Goldenred",
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1be19528-6d06-4cab-8815-02618b93d3c9_600x.png?v=1625045854",
  "stock": 100
},
  {
  "id": 22,
  "name": "boAt Immortal 1000D",
  "category": "HEADPHONES",
  "subcategory": "",
  "price": 2276.2,
  "originalPrice": 5990,
  "discount": 62,
  "rating": 4.9,
  "reviews": 12,
  "description": "boAt Immortal 1000D with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "White Sabre",
    "Black Sabre",
    "Green"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
  "stock": 100
},
  {
  "id": 23,
  "name": "boAt Immortal 1300",
  "category": "HEADPHONES",
  "subcategory": "",
  "price": 2897.1,
  "originalPrice": 9990,
  "discount": 71,
  "rating": 4.8,
  "reviews": 8,
  "description": "boAt Immortal 1300 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black",
    "Blue",
    "White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
  "stock": 100
},
  {
  "id": 24,
  "name": "boAt Immortal 400",
  "category": "HEADPHONES",
  "subcategory": "",
  "price": 2027.1,
  "originalPrice": 6990,
  "discount": 71,
  "rating": 4.5,
  "reviews": 2,
  "description": "boAt Immortal 400 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black Sabre"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
  "stock": 100
},
  {
  "id": 25,
  "name": "boAt Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "boAt Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
  "stock": 100
},
  {
  "id": 26,
  "name": "\u200cboAt Watch Xtend\u200c",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3196.0,
  "originalPrice": 7990,
  "discount": 60,
  "rating": 4.8,
  "reviews": 108,
  "description": "\u200cboAt Watch Xtend\u200c with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Charcoal Black",
    "Pitch Black",
    "Olive Green",
    "Sandy Cream",
    "Deep Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/xtend_black_600x.png?v=1650387008",
  "stock": 100
},
  {
  "id": 27,
  "name": "boAt Rockerz 330",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1495.0,
  "originalPrice": 2990,
  "discount": 50,
  "rating": 4.8,
  "reviews": 258,
  "description": "boAt Rockerz 330 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Raging Red",
    "Blazing Yellow",
    "Navy Blue",
    "Teal Green"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_a08fff6a-7c3d-4663-9499-3421df127e94_600x.png?v=1641801688",
  "stock": 100
},
  {
  "id": 28,
  "name": "boAt Watch Wave Pro",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3285.3,
  "originalPrice": 6990,
  "discount": 53,
  "rating": 5.0,
  "reviews": 10,
  "description": "boAt Watch Wave Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Blue",
    "Black",
    "Maroon"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_4d128bbd-a1e7-4045-a5c5-25c744f3133f_600x.png?v=1647765303",
  "stock": 100
},
  {
  "id": 30,
  "name": "Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 31,
  "name": "TRebel Airdopes 131",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1285.7,
  "originalPrice": 2990,
  "discount": 57,
  "rating": 4.7,
  "reviews": 53,
  "description": "TRebel Airdopes 131 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/pink_93d7a9ed-186f-4081-a184-bad918274e7b_600x.png?v=1658994528",
  "stock": 100
},
  {
  "id": 33,
  "name": "TRebel Airdopes 141",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1481.7,
  "originalPrice": 4490,
  "discount": 67,
  "rating": 5.0,
  "reviews": 58,
  "description": "TRebel Airdopes 141 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_600x.png?v=1648723865",
  "stock": 100
},
  {
  "id": 34,
  "name": "Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 35,
  "name": "boAt Airdopes 411 ANC",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 2495.0,
  "originalPrice": 4990,
  "discount": 50,
  "rating": 4.8,
  "reviews": 64,
  "description": "boAt Airdopes 411 ANC with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Grey",
    "Blue",
    "Mint Bubblegum",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_600x.png?v=1647426798",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 36,
  "name": "boAt Airdopes 121 PRO",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1345.5,
  "originalPrice": 2990,
  "discount": 55,
  "rating": 4.9,
  "reviews": 31,
  "description": "boAt Airdopes 121 PRO with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Blue",
    "Black",
    "Green",
    "Pink",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_700x.png?v=1658150489",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 37,
  "name": "boAt Airdopes 121 v2 ",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 989.67,
  "originalPrice": 2999,
  "discount": 67,
  "rating": 4.8,
  "reviews": 507,
  "description": "boAt Airdopes 121 v2  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Lightsteelblue",
    "pink",
    "Mint Bubblegum"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_600x.png?v=1612765376",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 38,
  "name": "Rockerz 235 V2",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 807.3,
  "originalPrice": 2990,
  "discount": 73,
  "rating": 4.8,
  "reviews": 799,
  "description": "Rockerz 235 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 39,
  "name": "Rockerz 255 Pro+",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 1197.0,
  "originalPrice": 3990,
  "discount": 70,
  "rating": 4.8,
  "reviews": 378,
  "description": "Rockerz 255 Pro+ with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_800x.png?v=1625552657",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 40,
  "name": "Rockerz 245 V2",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 201,
  "description": "Rockerz 245 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_4_600x.png?v=1655719698",
  "stock": 100
},
  {
  "id": 41,
  "name": "Rockerz 330",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 1255.8,
  "originalPrice": 2990,
  "discount": 58,
  "rating": 4.8,
  "reviews": 260,
  "description": "Rockerz 330 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 42,
  "name": "boAt Rockerz 333",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1596.0,
  "originalPrice": 3990,
  "discount": 60,
  "rating": 4.9,
  "reviews": 169,
  "description": "boAt Rockerz 333 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Cherry Black",
    "Navy Blue",
    "Cherry Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 43,
  "name": "boAt Rockerz 255",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 277,
  "description": "boAt Rockerz 255 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Deepskyblue",
    "Orange",
    "Black",
    "Red",
    "Lime"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/6b237ddc-f894-4dfd-a474-2435f93e6611_600x.png?v=1662531863",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 44,
  "name": "boAt Rockerz 550",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1499.7,
  "originalPrice": 4999,
  "discount": 70,
  "rating": 4.8,
  "reviews": 322,
  "description": "boAt Rockerz 550 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black",
    "Darkgreen",
    "Navy Blue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0cfa4417-0213-4b49-b78e-0ae68aeb7057_600x.png?v=1625046144",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 45,
  "name": "boAt Rockerz 255 Pro",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1014.71,
  "originalPrice": 3499,
  "discount": 71,
  "rating": 4.8,
  "reviews": 380,
  "description": "boAt Rockerz 255 Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black",
    "Midnightblue",
    "Goldenrod",
    "Teal"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/756866f0-25e4-4b5d-8b7c-546c2111da69_600x.png?v=1625045615",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 46,
  "name": "Wave Connect Bluetooth",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2726.1,
  "originalPrice": 6990,
  "discount": 61,
  "rating": 4.8,
  "reviews": 75,
  "description": "Wave Connect Bluetooth with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_600x.png?v=1654312291",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 47,
  "name": "Storm Smart Watches ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2515.8,
  "originalPrice": 5990,
  "discount": 58,
  "rating": 4.8,
  "reviews": 1010,
  "description": "Storm Smart Watches  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_600x.png?v=1625045106",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 48,
  "name": "Watch Flash - Smart Watch ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2516.4,
  "originalPrice": 6990,
  "discount": 64,
  "rating": 4.8,
  "reviews": 47,
  "description": "Watch Flash - Smart Watch  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 49,
  "name": "Wave Select Smartwatch",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2516.4,
  "originalPrice": 6990,
  "discount": 64,
  "rating": 5.0,
  "reviews": 4,
  "description": "Wave Select Smartwatch with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_600x.png?v=1658294451",
  "stock": 100
},
  {
  "id": 50,
  "name": "boAt Wave Pro Smartwatch ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2027.1,
  "originalPrice": 6990,
  "discount": 71,
  "rating": 5.0,
  "reviews": 12,
  "description": "boAt Wave Pro Smartwatch  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Blue",
    "Maroon",
    "Cherry Blossom"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 51,
  "name": "boAt Xtend Sport ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2376.6,
  "originalPrice": 6990,
  "discount": 66,
  "rating": 4.8,
  "reviews": 6,
  "description": "boAt Xtend Sport  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Classic Black",
    "Cool Blue",
    "Cool Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-images_600x.png?v=1655198531",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 52,
  "name": "boAt Watch Blaze ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3495.0,
  "originalPrice": 6990,
  "discount": 50,
  "rating": 5.0,
  "reviews": 20,
  "description": "boAt Watch Blaze  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Blue",
    "Pink"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_d2f6ad16-c97c-4600-88c1-b835fd58c647_600x.png?v=1646394582",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 53,
  "name": "boAt Wave Lite Smartwatch",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 1328.1,
  "originalPrice": 6990,
  "discount": 81,
  "rating": 4.9,
  "reviews": 44,
  "description": "boAt Wave Lite Smartwatch with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Scarlet Red",
    "Deep Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_72207866-b34c-4b47-885d-998168d62245_600x.png?v=1648108781",
  "stock": 100
},
  {
  "id": 54,
  "name": "boAt Immortal 700",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 2484.0,
  "originalPrice": 6900,
  "discount": 64,
  "rating": 4.2,
  "reviews": 5,
  "description": "boAt Immortal 700 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black Sabre"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_65ff249b-c4f8-4dad-ae88-2aae76723ce2_600x.png?v=1643477993",
  "stock": 100
},
  {
  "id": 55,
  "name": "Immortal 200",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 1568.0,
  "originalPrice": 4900,
  "discount": 68,
  "rating": 4.7,
  "reviews": 11,
  "description": "Immortal 200 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Raging Red",
    "Furious Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
  "stock": 100
},
  {
  "id": 56,
  "name": "boAt Immortal 1000D",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 2096.5,
  "originalPrice": 5990,
  "discount": 65,
  "rating": 4.8,
  "reviews": 10,
  "description": "boAt Immortal 1000D with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black",
    "CrimsonCream"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_600x.png?v=1625748155",
  "stock": 100
},
  {
  "id": 57,
  "name": "boAt Immortal 1300",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 899.7,
  "originalPrice": 2999,
  "discount": 70,
  "rating": 4.8,
  "reviews": 10,
  "description": "boAt Immortal 1300 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_600x.png?v=1632715015",
  "stock": 100
},
  {
  "id": 58,
  "name": "boAt Immortal 400",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 599.7,
  "originalPrice": 1999,
  "discount": 70,
  "rating": 4.7,
  "reviews": 3,
  "description": "boAt Immortal 400 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-700_600x.png?v=1643632678",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 59,
  "name": "Misfit T50 Trimmer",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 999.6,
  "originalPrice": 2499,
  "discount": 60,
  "rating": 4.9,
  "reviews": 17,
  "description": "Misfit T50 Trimmer with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black Chrome",
    "Silver Chrome",
    "Blue Chrome"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/907e7c9d-4373-4809-a3e8-efe5bb1e7c7f_600x.png?v=1625045409",
  "stock": 100
},
  {
  "id": 60,
  "name": "Misfit T50 Lite",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 879.56,
  "originalPrice": 1999,
  "discount": 56,
  "rating": 4.5,
  "reviews": 4,
  "description": "Misfit T50 Lite with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_efb2d946-02c5-412b-bb86-ce83807d2318_600x.png?v=1630646783",
  "stock": 100
},
  {
  "id": 61,
  "name": "Misfit T30 Trimmer",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 764.49,
  "originalPrice": 1499,
  "discount": 49,
  "rating": 4.8,
  "reviews": 5,
  "description": "Misfit T30 Trimmer with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_black_600x.png?v=1630646486",
  "stock": 100
},
  {
  "id": 62,
  "name": "Misfit T200 3-in-1 ",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 1199.7,
  "originalPrice": 3999,
  "discount": 70,
  "rating": 4.6,
  "reviews": 10,
  "description": "Misfit T200 3-in-1  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-3_700x.png?v=1661405585",
  "stock": 100
},
  {
  "id": 63,
  "name": "Misfit T200",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 1679.58,
  "originalPrice": 3999,
  "discount": 58,
  "rating": 4.0,
  "reviews": 4,
  "description": "Misfit T200 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 64,
  "name": "Misfit T150 Trimmer",
  "category": "MISFIT TRIMMERS",
  "subcategory": "",
  "price": 1434.59,
  "originalPrice": 3499,
  "discount": 59,
  "rating": 4.0,
  "reviews": 1,
  "description": "Misfit T150 Trimmer with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_f61e2190-be0f-4ff7-9c85-d43ab93f1ef2_600x.png?v=1630143376",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 65,
  "name": "Stone 190 DC Edition",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 989.67,
  "originalPrice": 2999,
  "discount": 67,
  "rating": 5.0,
  "reviews": 3,
  "description": "Stone 190 DC Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Knight Black",
    "Krypton Blue",
    "Amazonian Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_600x.png?v=1655534170",
  "stock": 100
},
  {
  "id": 66,
  "name": "Stone 190 Wonder Woman DC Edition",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1289.57,
  "originalPrice": 2999,
  "discount": 57,
  "rating": 4.5,
  "reviews": 4,
  "description": "Stone 190 Wonder Woman DC Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Amazonian Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_55f3214a-ec1f-4764-9efe-1369c6668755_600x.png?v=1655542199",
  "stock": 100
},
  {
  "id": 67,
  "name": "boAt Stone 1000v2",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 3009.57,
  "originalPrice": 6999,
  "discount": 57,
  "rating": 5.0,
  "reviews": 2,
  "description": "boAt Stone 1000v2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Ballistic Black",
    "Goblin Green",
    "Blizzard Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-1_e66c4515-7594-4726-89d6-e2b311a39c94_600x.png?v=1658436784",
  "stock": 100
},
  {
  "id": 68,
  "name": "boAt Stone Grenade",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1316.7,
  "originalPrice": 3990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 89,
  "description": "boAt Stone Grenade with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Grey",
    "Green",
    "Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main_reed_600x.png?v=1635842501",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 69,
  "name": "boAt Stone 190",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 989.67,
  "originalPrice": 2999,
  "discount": 67,
  "rating": 4.8,
  "reviews": 105,
  "description": "boAt Stone 190 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Darkslateblue",
    "Rowdy Red",
    "Bossy Black",
    "Majestic Purple"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/448e5d44-7829-4597-9238-aebe7554b9a4_600x.png?v=1625045368",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 70,
  "name": "boAt Stone 352",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1186.6,
  "originalPrice": 3490,
  "discount": 66,
  "rating": 4.8,
  "reviews": 22,
  "description": "boAt Stone 352 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Grey",
    "Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_c1144ee5-d03e-483a-8e5f-7552b138a4b1_600x.png?v=1649857754",
  "stock": 100
},
  {
  "id": 71,
  "name": "boAt Stone 650",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1497.0,
  "originalPrice": 4990,
  "discount": 70,
  "rating": 4.9,
  "reviews": 107,
  "description": "boAt Stone 650 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Mediumblue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/91efc297-d380-4ccf-a70e-b9ab9ab1ad5b_600x.png?v=1625045298",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 72,
  "name": "boAt Stone 1200F",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1434.59,
  "originalPrice": 3499,
  "discount": 59,
  "rating": 4.9,
  "reviews": 35,
  "description": "boAt Stone 1200F with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Olive",
    "Yellow"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1200f_main3_600x.png?v=1632893559",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 73,
  "name": "boAt Rockerz 558",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1999.6,
  "originalPrice": 4999,
  "discount": 60,
  "rating": 4.5,
  "reviews": 13,
  "description": "boAt Rockerz 558 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black Chrome",
    "Silver Chrome",
    "Blue Chrome"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_ac87c6d9-2293-468e-bdf0-175798458b87_600x.png?v=1662547691",
  "stock": 100
},
  {
  "id": 74,
  "name": "boAt Airdopes 383",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1499.7,
  "originalPrice": 4999,
  "discount": 70,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 383 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "cosmic Black",
    "Jazzy  Blue",
    "Techno Purple"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_965b2bd3-896a-44f1-81a7-e8b09b9897da_600x.png?v=1661854765",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 75,
  "name": "boAt Airdopes 131",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 131 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Captains Blue "
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
  "stock": 100
},
  {
  "id": 76,
  "name": "boAt Airdopes Iron man ",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 4.8,
  "reviews": 68,
  "description": "boAt Airdopes Iron man  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Iron Blood "
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_600x.png?v=1639988622",
  "stock": 100
},
  {
  "id": 77,
  "name": "boAt Bassheads 172 Sunburn Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 350.73,
  "originalPrice": 1299,
  "discount": 73,
  "rating": 4.9,
  "reviews": 9,
  "description": "boAt Bassheads 172 Sunburn Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Techno Purple",
    "Jazzy Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_600x.png?v=1645083010",
  "stock": 100
},
  {
  "id": 78,
  "name": "boAt BassHeads 152 Sunburn Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 402.69,
  "originalPrice": 1299,
  "discount": 69,
  "rating": 4.9,
  "reviews": 14,
  "description": "boAt BassHeads 152 Sunburn Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Techno Purple",
    "Jazzy Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_f295a600-2857-4ff8-940c-3873fc2f1367_600x.png?v=1645015211",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 79,
  "name": "boAt Stone 1208 Sunburn Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 4013.3,
  "originalPrice": 5990,
  "discount": 33,
  "rating": 1.8,
  "reviews": 5,
  "description": "boAt Stone 1208 Sunburn Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Techno Purple",
    "Jazzy Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_5f41606a-604c-4433-b1a0-404b31892ab8_600x.png?v=1662546797",
  "stock": 100
},
  {
  "id": 80,
  "name": "boAt Stone 170 LFW Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 996.0,
  "originalPrice": 2490,
  "discount": 60,
  "rating": 4.8,
  "reviews": 27,
  "description": "boAt Stone 170 LFW Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Firebrick",
    "Darkblue",
    "Olivedrab"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/64a076e9-ef0c-443d-b86e-16715212dd92_600x.png?v=1631788202",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 81,
  "name": "TRebel Watch Blaze ",
  "category": "TREBEL",
  "subcategory": "",
  "price": 1999.6,
  "originalPrice": 4999,
  "discount": 60,
  "rating": 4.5,
  "reviews": 13,
  "description": "TRebel Watch Blaze  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Blue",
    "pink",
    "red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_e305aecd-69d4-4d6d-a6ec-b3133676fc57_600x.png?v=1646394745",
  "stock": 100
},
  {
  "id": 82,
  "name": "TRebel Rockerz 333",
  "category": "TREBEL",
  "subcategory": "",
  "price": 1516.2,
  "originalPrice": 3990,
  "discount": 62,
  "rating": 5.0,
  "reviews": 3,
  "description": "TRebel Rockerz 333 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Navy Blues"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-3_585b7d34-c9b3-4fc4-912d-92ebbb04a410_600x.png?v=1646391063",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 83,
  "name": "boAt TRebel Airdopes 381",
  "category": "TREBEL",
  "subcategory": "",
  "price": 1497.0,
  "originalPrice": 4990,
  "discount": 70,
  "rating": 4.8,
  "reviews": 11,
  "description": "boAt TRebel Airdopes 381 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Mediumspringgreen"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-381-mediumspinggreen_43d63b08-d281-4c88-aa0c-ab9fab9add89_600x.png?v=1622527413",
  "stock": 100
},
  {
  "id": 84,
  "name": "TRebel Nirvanaa 751 ANC",
  "category": "TREBEL",
  "subcategory": "",
  "price": 3995.0,
  "originalPrice": 7990,
  "discount": 50,
  "rating": 4.8,
  "reviews": 68,
  "description": "TRebel Nirvanaa 751 ANC with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Sterling Silver"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_35ad08a3-ed67-4b87-b7a6-e4d8ae22847d_600x.png?v=1646391225",
  "stock": 100
},
  {
  "id": 85,
  "name": "boAt TRebel Airdopes 402",
  "category": "AUDIOWEAR FOR WOMEN",
  "subcategory": "",
  "price": 2995.0,
  "originalPrice": 5990,
  "discount": 50,
  "rating": 4.8,
  "reviews": 9,
  "description": "boAt TRebel Airdopes 402 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_e2e6523c-c448-40bd-be18-117f2fc151cc_600x.png?v=1630569010",
  "stock": 100
},
  {
  "id": 86,
  "name": "TRebel BassHeads 100",
  "category": "AUDIOWEAR FOR WOMEN",
  "subcategory": "",
  "price": 499.5,
  "originalPrice": 999,
  "discount": 50,
  "rating": 5.0,
  "reviews": 15,
  "description": "TRebel BassHeads 100 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Mint Orange",
    "Mint Green",
    "Mint Purple"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/mint-green_600x.png?v=1634371631",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 87,
  "name": "TRebel Watch Xtend\u200c Smart Watch with Alexa",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 3515.6,
  "originalPrice": 7990,
  "discount": 56,
  "rating": 5.0,
  "reviews": 2,
  "description": "TRebel Watch Xtend\u200c Smart Watch with Alexa with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Deep Blue",
    "Mint Green",
    "Sandy Cream"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_86ea6392-558a-4943-ab86-f9f12fe8f4d9_600x.png?v=1646393709",
  "stock": 100
},
  {
  "id": 88,
  "name": "TRebel Rockerz 450",
  "category": "AUDIOWEAR FOR WOMEN",
  "subcategory": "",
  "price": 1519.62,
  "originalPrice": 3999,
  "discount": 62,
  "rating": 5.0,
  "reviews": 1,
  "description": "TRebel Rockerz 450 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Blanchedalmond",
    "Lightblue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/013a08f8-85c4-49cf-914a-aa6586249b09_600x.png?v=1624882639",
  "stock": 100
},
  {
  "id": 89,
  "name": "boAt Aavante Bar 1150",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 4495.5,
  "originalPrice": 9990,
  "discount": 55,
  "rating": 2.5,
  "reviews": 13,
  "description": "boAt Aavante Bar 1150 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-1_1cd9e34a-6cb5-475e-abd8-3af626084116_600x.png?v=1629091898",
  "stock": 100
},
  {
  "id": 90,
  "name": "boAt Aavante Bar 553",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 2279.43,
  "originalPrice": 3999,
  "discount": 43,
  "rating": 5.0,
  "reviews": 3,
  "description": "boAt Aavante Bar 553 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/AB550PPCMFTweak.112_700x.png?v=1664352293",
  "stock": 100
},
  {
  "id": 91,
  "name": "Aavante Bar 503",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 2003.3,
  "originalPrice": 2990,
  "discount": 33,
  "rating": 5.0,
  "reviews": 2,
  "description": "Aavante Bar 503 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/111_600x.png?v=1659966176",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 92,
  "name": "boAt Aavante Bar 500",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 1495.0,
  "originalPrice": 2990,
  "discount": 50,
  "rating": 5.0,
  "reviews": 2,
  "description": "boAt Aavante Bar 500 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-3_bd675e53-f993-4006-98c6-44c8217d42ca_600x.png?v=1639130347",
  "stock": 100
},
  {
  "id": 93,
  "name": "boAt Aavante Bar 1190",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 5546.3,
  "originalPrice": 14990,
  "discount": 63,
  "rating": 5.0,
  "reviews": 11,
  "description": "boAt Aavante Bar 1190 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/23a5344a-2fe1-4fab-8cd1-7fd42597b9cf_600x.png?v=1623813138",
  "stock": 100
},
  {
  "id": 94,
  "name": "boAt Aavante Bar 1180",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 4479.44,
  "originalPrice": 7999,
  "discount": 44,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Aavante Bar 1180 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_2_1_600x.png?v=1656914178",
  "stock": 100
},
  {
  "id": 95,
  "name": "boAt Aavante Bar 1300",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 5034.4,
  "originalPrice": 8990,
  "discount": 44,
  "rating": 4.8,
  "reviews": 6,
  "description": "boAt Aavante Bar 1300 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/73630972-9d9d-416b-aeeb-861374dfc7a7_600x.png?v=1623813139",
  "stock": 100
},
  {
  "id": 96,
  "name": "boAt Aavante Bar 1160",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 4495.5,
  "originalPrice": 9990,
  "discount": 55,
  "rating": 4.7,
  "reviews": 19,
  "description": "boAt Aavante Bar 1160 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/aavante-bar-1160-1_600x.png?v=1613736230",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 97,
  "name": "boAt Mask",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 269.55,
  "originalPrice": 599,
  "discount": 55,
  "rating": 4.9,
  "reviews": 146,
  "description": "boAt Mask with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/77081a14-84ab-4a56-9977-9c902c341e5a_700x.png?v=1625045422",
  "stock": 100
},
  {
  "id": 98,
  "name": "boAt Deuce 330",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 300.57,
  "originalPrice": 699,
  "discount": 57,
  "rating": 5.0,
  "reviews": 3,
  "description": "boAt Deuce 330 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Red",
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_3fb9236b-811d-49ae-ba4e-b681e6954451_600x.png?v=1622705591",
  "stock": 100
},
  {
  "id": 99,
  "name": "boAt LTG 500 Indestructible Apple",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 891.99,
  "originalPrice": 1749,
  "discount": 49,
  "rating": 4.8,
  "reviews": 25,
  "description": "boAt LTG 500 Indestructible Apple with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Silver",
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-ltg-500_600x.png?v=1613736579",
  "stock": 100
},
  {
  "id": 100,
  "name": "boAt Micro USB 150 1.5 Meter",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 1495.0,
  "originalPrice": 2990,
  "discount": 50,
  "rating": 5.0,
  "reviews": 2,
  "description": "boAt Micro USB 150 1.5 Meter with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Jet Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Banner1-Product_3c1785ae-85f8-4e5c-9d13-93e92aad5821_600x.png?v=1622705204",
  "stock": 100
},
  {
  "id": 101,
  "name": "boAt A400 USB Type C Data Cable",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 349.65,
  "originalPrice": 999,
  "discount": 65,
  "rating": 4.9,
  "reviews": 14,
  "description": "boAt A400 USB Type C Data Cable with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/f9c2c916-c439-4635-bf3f-caf1ec82b2a6_600x.png?v=1625045418",
  "stock": 100
},
  {
  "id": 102,
  "name": "boAt Type C C400",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 559.44,
  "originalPrice": 999,
  "discount": 44,
  "rating": 4.8,
  "reviews": 6,
  "description": "boAt Type C C400 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/type-c-c400_600x.png?v=1613736869",
  "stock": 100
},
  {
  "id": 103,
  "name": "boAt Rugged V3 Micro USB 1.5 Meter",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 447.44,
  "originalPrice": 799,
  "discount": 44,
  "rating": 4.9,
  "reviews": 64,
  "description": "boAt Rugged V3 Micro USB 1.5 Meter with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Blue",
    "Green",
    "Orange",
    "Purple",
    "White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/rgged-v3_600x.png?v=1613736788",
  "stock": 100
},
  {
  "id": 104,
  "name": "boAt Deuce USB 300",
  "category": "MOBILE ACCESSORIES",
  "subcategory": "",
  "price": 300.57,
  "originalPrice": 699,
  "discount": 57,
  "rating": 4.8,
  "reviews": 75,
  "description": "boAt Deuce USB 300 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/0ed71809-c9ce-47ee-b334-41ee33b11f03_600x.png?v=1625046268",
  "stock": 100
},
  {
  "id": 105,
  "name": "Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 106,
  "name": "Rockerz 235 V2",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 807.3,
  "originalPrice": 2990,
  "discount": 73,
  "rating": 4.8,
  "reviews": 799,
  "description": "Rockerz 235 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 107,
  "name": "Wave Connect Bluetooth",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2726.1,
  "originalPrice": 6990,
  "discount": 61,
  "rating": 4.8,
  "reviews": 75,
  "description": "Wave Connect Bluetooth with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_600x.png?v=1654312291",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 108,
  "name": "Immortal 200",
  "category": "IMMORTAL GAMING",
  "subcategory": "",
  "price": 1568.0,
  "originalPrice": 4900,
  "discount": 68,
  "rating": 4.7,
  "reviews": 11,
  "description": "Immortal 200 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Raging Red",
    "Furious Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-b_600x.png?v=1625748090",
  "stock": 100
},
  {
  "id": 109,
  "name": "boAt Airdopes 131",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 131 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Captains Blue "
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
  "stock": 100
},
  {
  "id": 110,
  "name": "Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 111,
  "name": "TRebel Airdopes 131",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1285.7,
  "originalPrice": 2990,
  "discount": 57,
  "rating": 4.7,
  "reviews": 53,
  "description": "TRebel Airdopes 131 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/pink_93d7a9ed-186f-4081-a184-bad918274e7b_600x.png?v=1658994528",
  "stock": 100
},
  {
  "id": 112,
  "name": "Airdopes 141",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1077.6,
  "originalPrice": 4490,
  "discount": 76,
  "rating": 4.8,
  "reviews": 461,
  "description": "Airdopes 141 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1657869596",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 113,
  "name": "TRebel Airdopes 141",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1481.7,
  "originalPrice": 4490,
  "discount": 67,
  "rating": 5.0,
  "reviews": 58,
  "description": "TRebel Airdopes 141 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_600x.png?v=1648723865",
  "stock": 100
},
  {
  "id": 114,
  "name": "Airdopes 131 - Wireless",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 915,
  "description": "Airdopes 131 - Wireless with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_600x.png?v=1642405569",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 115,
  "name": "Wave Connect Bluetooth",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2726.1,
  "originalPrice": 6990,
  "discount": 61,
  "rating": 4.8,
  "reviews": 75,
  "description": "Wave Connect Bluetooth with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/black2_600x.png?v=1654312291",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 116,
  "name": "Storm Smart Watches ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2515.8,
  "originalPrice": 5990,
  "discount": 58,
  "rating": 4.8,
  "reviews": 1010,
  "description": "Storm Smart Watches  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e7910a39-186a-41f6-ac57-fc3e84108104_600x.png?v=1625045106",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 117,
  "name": "Watch Flash - Smart Watch ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2516.4,
  "originalPrice": 6990,
  "discount": 64,
  "rating": 4.8,
  "reviews": 47,
  "description": "Watch Flash - Smart Watch  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_600x.png?v=1625045743",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 118,
  "name": "Wave Select Smartwatch",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2516.4,
  "originalPrice": 6990,
  "discount": 64,
  "rating": 5.0,
  "reviews": 4,
  "description": "Wave Select Smartwatch with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Untitled-5_600x.png?v=1658294451",
  "stock": 100
},
  {
  "id": 119,
  "name": "boAt Wave Pro Smartwatch ",
  "category": "SMART WATCHES",
  "subcategory": "",
  "price": 2027.1,
  "originalPrice": 6990,
  "discount": 71,
  "rating": 5.0,
  "reviews": 12,
  "description": "boAt Wave Pro Smartwatch  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Blue",
    "Maroon",
    "Cherry Blossom"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_0ae2597d-dee4-42fd-9a18-eb4ae0b3bc43_600x.png?v=1647765304",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 120,
  "name": "Rockerz 235 V2",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 807.3,
  "originalPrice": 2990,
  "discount": 73,
  "rating": 4.8,
  "reviews": 799,
  "description": "Rockerz 235 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ed46e58c-9643-43e0-b350-9539d293aa51_600x.png?v=1625045114",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 121,
  "name": "Rockerz 255 Pro+",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 1197.0,
  "originalPrice": 3990,
  "discount": 70,
  "rating": 4.8,
  "reviews": 378,
  "description": "Rockerz 255 Pro+ with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/35ca6350-d6f3-4bc2-a742-01b2c88d80c4_800x.png?v=1625552657",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 122,
  "name": "Rockerz 245 V2",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 4.8,
  "reviews": 201,
  "description": "Rockerz 245 V2 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245v2_main_4_600x.png?v=1655719698",
  "stock": 100
},
  {
  "id": 123,
  "name": "Rockerz 330",
  "category": "WIRELESS HEADPHONES",
  "subcategory": "",
  "price": 1255.8,
  "originalPrice": 2990,
  "discount": 58,
  "rating": 4.8,
  "reviews": 260,
  "description": "Rockerz 330 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Lightpink",
    "Black",
    "CrimsonCream",
    "Steelblue",
    "Ivory White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_15634ca0-9f81-4d11-b891-9a1496f709b1_600x.png?v=1641801688",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 124,
  "name": "boAt Rockerz 333",
  "category": "BLUETOOTH EARPHONES",
  "subcategory": "",
  "price": 1596.0,
  "originalPrice": 3990,
  "discount": 60,
  "rating": 4.9,
  "reviews": 169,
  "description": "boAt Rockerz 333 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Active Black",
    "Cherry Black",
    "Navy Blue",
    "Cherry Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-img-R333-1_600x.png?v=1641801662",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 125,
  "name": "boAt Rockerz 558",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1999.6,
  "originalPrice": 4999,
  "discount": 60,
  "rating": 4.5,
  "reviews": 13,
  "description": "boAt Rockerz 558 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black Chrome",
    "Silver Chrome",
    "Blue Chrome"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_ac87c6d9-2293-468e-bdf0-175798458b87_600x.png?v=1662547691",
  "stock": 100
},
  {
  "id": 126,
  "name": "boAt Airdopes 383",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1499.7,
  "originalPrice": 4999,
  "discount": 70,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 383 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "cosmic Black",
    "Jazzy  Blue",
    "Techno Purple"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_965b2bd3-896a-44f1-81a7-e8b09b9897da_600x.png?v=1661854765",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 127,
  "name": "boAt Airdopes 131",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 131 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Captains Blue "
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
  "stock": 100
},
  {
  "id": 128,
  "name": "boAt Airdopes Iron man ",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 4.8,
  "reviews": 68,
  "description": "boAt Airdopes Iron man  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Iron Blood "
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_600x.png?v=1639988622",
  "stock": 100
},
  {
  "id": 129,
  "name": "boAt Bassheads 172 Sunburn Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 350.73,
  "originalPrice": 1299,
  "discount": 73,
  "rating": 4.9,
  "reviews": 9,
  "description": "boAt Bassheads 172 Sunburn Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Techno Purple",
    "Jazzy Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_d46d18bd-17a2-417a-af86-9f851bdf7068_600x.png?v=1645083010",
  "stock": 100
},
  {
  "id": 130,
  "name": "boAt Aavante Orion ",
  "category": "HOME THEATRE & SOUND BARS",
  "subcategory": "",
  "price": 6996.5,
  "originalPrice": 19990,
  "discount": 65,
  "rating": 4.8,
  "reviews": 91,
  "description": "boAt Aavante Orion  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/orion_600x.png?v=1664177169",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 131,
  "name": "boAt Airdopes 190",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1294.63,
  "originalPrice": 3499,
  "discount": 63,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 190 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "White"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_85232e56-016f-4201-8612-d70525d301b5_600x.png?v=1663821109",
  "stock": 100,
  "isTrending": true
},
  {
  "id": 132,
  "name": "boAt Airdopes 393 ANC ",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 2334.8,
  "originalPrice": 4490,
  "discount": 48,
  "rating": 4.8,
  "reviews": 1,
  "description": "boAt Airdopes 393 ANC  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "White",
    "Black",
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/B_61732ba6-8448-4c40-858d-557839daff97_600x.png?v=1663758990",
  "stock": 100
},
  {
  "id": 133,
  "name": "boAt Rockerz 245 Pro",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 999.6,
  "originalPrice": 2499,
  "discount": 60,
  "rating": 5.0,
  "reviews": 2,
  "description": "boAt Rockerz 245 Pro with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Cool Blue",
    "Fusion Black",
    "Red",
    "Grey"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/245pro3_700x.png?v=1663584969",
  "stock": 100
},
  {
  "id": 134,
  "name": "boAt Airdopes 172",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1396.0,
  "originalPrice": 3490,
  "discount": 60,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Airdopes 172 with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Black",
    "Red",
    "Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4_1b77b5af-6e22-4756-9506-1261a11d04bf_600x.png?v=1663248565",
  "stock": 100
},
  {
  "id": 135,
  "name": "boAt Airdopes 131 Captain America Marvel",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 4.9,
  "reviews": 40,
  "description": "boAt Airdopes 131 Captain America Marvel with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Captains Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/CA131-main_600x.png?v=1639987804",
  "stock": 100
},
  {
  "id": 136,
  "name": "boAt Airdopes 131 Iron Man Marvel Edition ",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1584.7,
  "originalPrice": 2990,
  "discount": 47,
  "rating": 4.8,
  "reviews": 68,
  "description": "boAt Airdopes 131 Iron Man Marvel Edition  with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Iron Blood"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM131-main_600x.png?v=1639988622",
  "stock": 100
},
  {
  "id": 137,
  "name": "boAt Watch Storm - Captain America Marvel Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 3474.2,
  "originalPrice": 5990,
  "discount": 42,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Watch Storm - Captain America Marvel Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Captain's Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/DisneyStormPackaging3.1591_600x.png?v=1640110480",
  "stock": 100
},
  {
  "id": 138,
  "name": "boAt Stone 190 - Stark Fusion Marvel Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 989.67,
  "originalPrice": 2999,
  "discount": 67,
  "rating": 4.8,
  "reviews": 260,
  "description": "boAt Stone 190 - Stark Fusion Marvel Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Stark Fusion"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/190a_600x.png?v=1640070142",
  "stock": 100
},
  {
  "id": 139,
  "name": "boAt Rockerz 450 - Captain America Marvel Edition",
  "category": "LIMITED EDITION",
  "subcategory": "",
  "price": 1795.5,
  "originalPrice": 3990,
  "discount": 55,
  "rating": 5.0,
  "reviews": 1,
  "description": "boAt Rockerz 450 - Captain America Marvel Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Soldier's Blue"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/450ca_600x.png?v=1639990534",
  "stock": 100
},
  {
  "id": 140,
  "name": "Stone 190 DC Edition",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 986.7,
  "originalPrice": 2990,
  "discount": 67,
  "rating": 5.0,
  "reviews": 3,
  "description": "Stone 190 DC Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Knight Black",
    "Krypton Blue",
    "Amazonian Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image_600x.png?v=1655534170",
  "stock": 100
},
  {
  "id": 141,
  "name": "Rockerz 450 - Batman DC Edition",
  "category": "BLUETOOTH HEADPHONES",
  "subcategory": "",
  "price": 2276.2,
  "originalPrice": 5990,
  "discount": 62,
  "rating": 5.0,
  "reviews": 4,
  "description": "Rockerz 450 - Batman DC Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Knight Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/2_3_f3ee5c27-4f14-4159-9fb2-dc60e7d6ec66_600x.png?v=1655536230",
  "stock": 100
},
  {
  "id": 142,
  "name": "Rockerz 450 DC edition",
  "category": "BLUETOOTH HEADPHONES",
  "subcategory": "",
  "price": 1356.6,
  "originalPrice": 3990,
  "discount": 66,
  "rating": 5.0,
  "reviews": 3,
  "description": "Rockerz 450 DC edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Amazonian Red",
    "Knight Black",
    "Knight Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1_5_600x.png?v=1655534211",
  "stock": 100
},
  {
  "id": 143,
  "name": "Airdopes 131 DC Edition with 13 mm Drivers,",
  "category": "WIRELESS EARBUDS",
  "subcategory": "",
  "price": 1076.4,
  "originalPrice": 2990,
  "discount": 64,
  "rating": 5.0,
  "reviews": 7,
  "description": "Airdopes 131 DC Edition with 13 mm Drivers, with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Krypton Blue",
    "Amazonian Red",
    "CrimsonCream",
    "Knight Black"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_e05a4bee-499f-42da-8db5-e3921a185f5c_600x.png?v=1655526604",
  "stock": 100
},
  {
  "id": 144,
  "name": "Stone 190 Wonder Woman DC Edition",
  "category": "BLUETOOTH SPEAKERS",
  "subcategory": "",
  "price": 1285.7,
  "originalPrice": 2990,
  "discount": 57,
  "rating": 5.0,
  "reviews": 12,
  "description": "Stone 190 Wonder Woman DC Edition with amazing features and performance.",
  "features": [
    "Immersive Sound",
    "Long-lasting Battery",
    "Comfortable Fit"
  ],
  "specifications": {},
  "colors": [
    "Amazonian Red"
  ],
  "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-3_55f3214a-ec1f-4764-9efe-1369c6668755_600x.png?v=1655542199",
  "stock": 100,
  "isTrending": true
},
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};
export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.isNew).slice(0, 5);
};
export const getBestSellers = (): Product[] => {
  return products.filter(product => product.isBestSeller);
};
export const getTrendingProducts = (): Product[] => {
  return products.filter(product => product.isTrending);
};
export const getDiscountedProducts = (minDiscount: number = 40): Product[] => {
  return products.filter(product => product.discount >= minDiscount);
};