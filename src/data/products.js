import appleAirPodsPro from '../assets/products/Apple-AirPods-Pro.webp';
import appleWatchSeries9 from '../assets/products/Apple-Watch-Series-9.webp';
import asusZenBook14 from '../assets/products/Asus-ZenBook-14.webp';
import dellXps15 from '../assets/products/Dell-XPS-15.webp';
import fitbitVersa4 from '../assets/products/Fitbit-Versa-4.webp';
import googlePixel8Pro from '../assets/products/Google-Pixel-8-Pro.webp';
import hpSpectreX360 from '../assets/products/HP-Spectre-x360.webp';
import iphone15Pro from '../assets/products/iPhone-15-Pro.webp';
import jblFlip6Speaker from '../assets/products/JBL-Flip-6-Speaker.webp';
import lenovoThinkPadX1 from '../assets/products/Lenovo-ThinkPad-X1.webp';
import logitechMxMaster3s from '../assets/products/Logitech-MX-Master-3S.webp';
import macbookPro16 from '../assets/products/MacBook-Pro-16.webp';
import noiseColorFitPro4 from '../assets/products/Noise-ColorFit-Pro-4.webp';
import onePlus12 from '../assets/products/OnePlus-12.webp';
import samsungGalaxyS24Ultra from '../assets/products/Samsung-Galaxy-S24-Ultra.webp';
import samsungGalaxyWatch6 from '../assets/products/Samsung-Galaxy-Watch-6.webp';
import sandisk1tbSsd from '../assets/products/SanDisk-1TB-SSD.webp';
import sonyWh1000xm5 from '../assets/products/Sony-WH-1000XM5.webp';
import xiaomi13Pro from '../assets/products/Xiaomi-13-Pro.webp';

const products = [
  // Phones
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 129999,
    image: iphone15Pro,
    category: "Phone",
    rating: 4.9,
    description: "Experience the future with iPhone 15 Pro. Features the powerful A17 Pro chip, stunning 6.1-inch Super Retina XDR display, and an advanced camera system with 48MP main camera. Built with aerospace-grade titanium and includes USB-C connectivity."
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 119999,
    image: samsungGalaxyS24Ultra,
    category: "Phone",
    rating: 4.8,
    description: "The ultimate Android experience with Galaxy S24 Ultra. Features a massive 6.8-inch Dynamic AMOLED display, S Pen integration, and a versatile camera system with 200MP main sensor. Powered by Snapdragon 8 Gen 3 for exceptional performance."
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 99999,
    image: googlePixel8Pro,
    category: "Phone",
    rating: 4.7,
    description: "Pure Android experience with Pixel 8 Pro. Features Google's advanced AI capabilities, exceptional camera performance with Magic Eraser, and a smooth 6.7-inch OLED display. Built with Google Tensor G3 chip for seamless AI integration."
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 74999,
    image: onePlus12,
    category: "Phone",
    rating: 4.6,
    description: "Speed meets elegance with OnePlus 12. Features a stunning 6.82-inch LTPO AMOLED display, Hasselblad camera system, and blazing-fast 100W charging. Powered by Snapdragon 8 Gen 3 for flagship performance at a competitive price."
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 69999,
    image: xiaomi13Pro,
    category: "Phone",
    rating: 4.5,
    description: "Innovation meets affordability with Xiaomi 13 Pro. Features a 6.73-inch AMOLED display, Leica camera system with 50MP main sensor, and 120W fast charging. Powered by Snapdragon 8 Gen 2 for excellent performance and value."
  },
  // Laptops
  {
    id: 6,
    name: "MacBook Pro 16",
    price: 249999,
    image: macbookPro16,
    category: "Laptop",
    rating: 4.9,
    description: "The ultimate MacBook Pro for professionals. Features the powerful M3 Pro chip, stunning 16-inch Liquid Retina XDR display, and up to 22 hours of battery life. Perfect for video editing, 3D rendering, and intensive development work."
  },
  {
    id: 7,
    name: "Dell XPS 15",
    price: 179999,
    image: dellXps15,
    category: "Laptop",
    rating: 4.8,
    description: "Premium Windows laptop with exceptional build quality. Features Intel Core i9 processor, 15.6-inch 4K OLED display, and NVIDIA RTX graphics. Perfect for creative professionals and power users who demand the best performance."
  },
  {
    id: 8,
    name: "HP Spectre x360",
    price: 159999,
    image: hpSpectreX360,
    category: "Laptop",
    rating: 4.7,
    description: "Versatile 2-in-1 laptop that adapts to your needs. Features 360-degree hinge, 13.5-inch 3K2K OLED display, and Intel Core i7 processor. Convert between laptop, tablet, and tent modes for ultimate flexibility."
  },
  {
    id: 9,
    name: "Lenovo ThinkPad X1",
    price: 139999,
    image: lenovoThinkPadX1,
    category: "Laptop",
    rating: 4.6,
    description: "Business-class laptop with legendary ThinkPad reliability. Features Intel Core i7 processor, 14-inch 4K display, and military-grade durability. Includes ThinkPad's iconic TrackPoint and spill-resistant keyboard for professional use."
  },
  {
    id: 10,
    name: "Asus ZenBook 14",
    price: 119999,
    image: asusZenBook14,
    category: "Laptop",
    rating: 4.5,
    description: "Ultra-portable laptop with innovative design. Features AMD Ryzen processor, 14-inch 2.8K OLED display, and unique NumberPad 2.0. The compact design includes a 360-degree ErgoLift hinge for comfortable typing angles."
  },
  // Smartwatches
  {
    id: 11,
    name: "Apple Watch Series 9",
    price: 49999,
    image: appleWatchSeries9,
    category: "Smartwatch",
    rating: 4.9,
    description: "The most advanced Apple Watch ever. Features the powerful S9 chip, always-on Retina display, and advanced health monitoring including ECG and blood oxygen. Includes new Double Tap gesture and enhanced fitness tracking capabilities."
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6",
    price: 39999,
    image: samsungGalaxyWatch6,
    category: "Smartwatch",
    rating: 4.8,
    description: "Premium Android smartwatch with advanced health features. Features rotating bezel, AMOLED display, and comprehensive health monitoring including body composition analysis. Includes sleep tracking and stress management tools."
  },
  {
    id: 13,
    name: "Fitbit Versa 4",
    price: 29999,
    image: fitbitVersa4,
    category: "Smartwatch",
    rating: 4.7,
    description: "Fitness-focused smartwatch with advanced health tracking. Features 6-day battery life, built-in GPS, and comprehensive fitness metrics. Includes stress management, sleep tracking, and personalized insights for better health outcomes."
  },
  {
    id: 14,
    name: "Noise ColorFit Pro 4",
    price: 9999,
    image: noiseColorFitPro4,
    category: "Smartwatch",
    rating: 4.5,
    description: "Affordable fitness smartwatch with essential features. Features 1.78-inch AMOLED display, 100+ sports modes, and 7-day battery life. Includes heart rate monitoring, sleep tracking, and smartphone notifications for active lifestyle."
  },
  // Accessories
  {
    id: 15,
    name: "Apple AirPods Pro",
    price: 24999,
    image: appleAirPodsPro,
    category: "Accessories",
    rating: 4.9,
    description: "Premium wireless earbuds with active noise cancellation. Features spatial audio, adaptive transparency, and MagSafe charging case. Includes personalized spatial audio and seamless integration with Apple ecosystem devices."
  },
  {
    id: 16,
    name: "Sony WH-1000XM5",
    price: 34999,
    image: sonyWh1000xm5,
    category: "Accessories",
    rating: 4.8,
    description: "Industry-leading noise-canceling headphones with exceptional sound quality. Features 30-hour battery life, quick charge, and advanced noise cancellation technology. Includes touch controls and seamless device switching for premium audio experience."
  },
  {
    id: 17,
    name: "JBL Flip 6 Speaker",
    price: 11999,
    image: jblFlip6Speaker,
    category: "Accessories",
    rating: 4.7,
    description: "Portable Bluetooth speaker with powerful sound. Features 12-hour battery life, IPX7 waterproof rating, and JBL Pro Sound technology. Includes PartyBoost for connecting multiple speakers and rugged design for outdoor adventures."
  },
  {
    id: 18,
    name: "Logitech MX Master 3S",
    price: 9999,
    image: logitechMxMaster3s,
    category: "Accessories",
    rating: 4.6,
    description: "Premium wireless mouse designed for productivity. Features 8000 DPI sensor, silent clicks, and ergonomic design. Includes MagSpeed scroll wheel, customizable buttons, and multi-device connectivity for seamless workflow."
  },
  {
    id: 19,
    name: "SanDisk 1TB SSD",
    price: 10999,
    image: sandisk1tbSsd,
    category: "Accessories",
    rating: 4.5,
    description: "High-performance solid-state drive for lightning-fast storage. Features read speeds up to 1050MB/s, write speeds up to 1000MB/s, and 1TB capacity. Includes 5-year warranty and shock-resistant design for reliable data storage."
  }
];

export default products; 