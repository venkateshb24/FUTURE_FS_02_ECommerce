import React, { useState } from 'react';
import productsData from '../data/products';
import ProductDetailsModal from '../components/ProductDetailsModal';
import ProductPage from './ProductPage';

const categories = [
  'All',
  ...Array.from(new Set(productsData.map((p) => p.category)))
];

// Example storage mapping for demo purposes
const storageMap = {
  'iPhone 15 Pro': '256GB',
  'Samsung Galaxy S24 Ultra': '512GB',
  'Google Pixel 8 Pro': '256GB',
  'OnePlus 12': '256GB',
  'Xiaomi 13 Pro': '512GB',
  'MacBook Pro 16': '1TB SSD',
  'Dell XPS 15': '1TB SSD',
  'HP Spectre x360': '512GB SSD',
  'Lenovo ThinkPad X1': '1TB SSD',
  'Asus ZenBook 14': '512GB SSD',
  'Apple Watch Series 9': '64GB',
  'Samsung Galaxy Watch 6': '32GB',
  'Fitbit Versa 4': '16GB',
  'Noise ColorFit Pro 4': '8GB',
  'Apple AirPods Pro': 'MagSafe',
  'Sony WH-1000XM5': 'Hi-Res Audio',
  'JBL Flip 6 Speaker': 'Bluetooth 5.1',
  'Logitech MX Master 3S': 'Wireless',
  'SanDisk 1TB SSD': '1TB',
};

// Example specs mapping for demo purposes
const specsMap = {
  'iPhone 15 Pro': { storage: '256GB', ram: '8GB', color: 'Black' },
  'Samsung Galaxy S24 Ultra': { storage: '512GB', ram: '12GB', color: 'Titanium' },
  'Google Pixel 8 Pro': { storage: '256GB', ram: '12GB', color: 'Obsidian' },
  'OnePlus 12': { storage: '256GB', ram: '16GB', color: 'Green' },
  'Xiaomi 13 Pro': { storage: '512GB', ram: '12GB', color: 'White' },
  'MacBook Pro 16': { storage: '1TB SSD', ram: '32GB', color: 'Space Gray' },
  'Dell XPS 15': { storage: '1TB SSD', ram: '32GB', color: 'Silver' },
  'HP Spectre x360': { storage: '512GB SSD', ram: '16GB', color: 'Blue' },
  'Lenovo ThinkPad X1': { storage: '1TB SSD', ram: '16GB', color: 'Black' },
  'Asus ZenBook 14': { storage: '512GB SSD', ram: '16GB', color: 'Blue' },
  'Apple Watch Series 9': { storage: '64GB', color: 'Red' },
  'Samsung Galaxy Watch 6': { storage: '32GB', color: 'Black' },
  'Fitbit Versa 4': { storage: '16GB', color: 'Pink' },
  'Noise ColorFit Pro 4': { storage: '8GB', color: 'Black' },
  'Apple AirPods Pro': { feature: 'MagSafe', color: 'White' },
  'Sony WH-1000XM5': { feature: 'Hi-Res Audio', color: 'Black' },
  'JBL Flip 6 Speaker': { feature: 'Bluetooth 5.1', color: 'Blue' },
  'Logitech MX Master 3S': { feature: 'Wireless', color: 'Gray' },
  'SanDisk 1TB SSD': { storage: '1TB', color: 'Gray' },
};

const Products = ({ search, setSearch, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [view, setView] = useState('grid'); // 'grid' or 'details'
  const [pageProduct, setPageProduct] = useState(null);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Helper to get full specs for modal/page
  const getProductWithSpecs = (product) => ({
    ...product,
    specs: specsMap[product.name],
    description: product.description,
  });

  if (view === 'details' && pageProduct) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-zinc-100 py-10">
        <button
          className="ml-4 mb-6 px-4 py-2 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded-full font-medium shadow"
          onClick={() => setView('grid')}
        >
          ← Back to Products
        </button>
        <ProductPage product={pageProduct} onAddToCart={onAddToCart} />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-zinc-100 py-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-zinc-900 mb-8 text-center">Shop Products</h1>
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="flex-1 flex items-center bg-white rounded-full shadow px-4 py-2 border border-zinc-200">
            <svg className="h-5 w-5 text-zinc-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-zinc-700 placeholder-zinc-400"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border transition-all duration-200 font-medium text-sm shadow-sm
                  ${activeCategory === cat
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-zinc-500 text-lg py-20">No products found.</div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/80 backdrop-blur-md border border-zinc-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-7 hover:-translate-y-2 hover:border-zinc-300"
                onClick={e => {
                  if (e.target.closest('button')) return;
                  setPageProduct(getProductWithSpecs(product));
                  setView('details');
                }}
                style={{ cursor: 'pointer' }}
              >
                {/* Larger Centered Image */}
                <div className="w-full flex justify-center mb-6">
                  <div className="w-full h-64 bg-zinc-200 rounded-xl flex items-center justify-center overflow-hidden border border-zinc-100 shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-60 w-auto object-contain object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                {/* Card Content */}
                <div className="flex flex-col flex-1 w-full">
                  <h2 className="text-lg font-bold text-zinc-900 mb-1 truncate text-center" title={product.name}>{product.name}</h2>
                  {/* Specs Row */}
                  <div className="flex flex-wrap items-center justify-center gap-2 text-zinc-500 text-xs font-medium mb-2">
                    {specsMap[product.name]?.storage && <span className="bg-zinc-100 px-2 py-0.5 rounded">{specsMap[product.name].storage}</span>}
                    {specsMap[product.name]?.ram && <span className="bg-zinc-100 px-2 py-0.5 rounded">{specsMap[product.name].ram}</span>}
                    {specsMap[product.name]?.color && <span className="bg-zinc-100 px-2 py-0.5 rounded">{specsMap[product.name].color}</span>}
                    {specsMap[product.name]?.feature && <span className="bg-zinc-100 px-2 py-0.5 rounded">{specsMap[product.name].feature}</span>}
                  </div>
                  {/* Storage/Specs */}
                  <div className="text-zinc-500 text-sm text-center mb-2 font-medium">
                    {storageMap[product.name] || '—'}
                  </div>
                  <div className="flex items-center justify-center mb-2 gap-2">
                    <span className="text-zinc-900 font-bold text-xl">₹{product.price.toLocaleString()}</span>
                    <span className="flex items-center text-yellow-500 font-semibold text-sm bg-yellow-50 px-2 py-0.5 rounded-full shadow">
                      ★ {product.rating}
                    </span>
                  </div>
                  <button
                    className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 text-white py-2.5 rounded-lg font-semibold shadow transition-all duration-200 text-base tracking-wide"
                    onClick={e => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ProductDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={modalProduct}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};

export default Products; 