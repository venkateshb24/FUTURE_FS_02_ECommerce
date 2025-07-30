import React from 'react';

const ProductPage = ({ product, onAddToCart }) => {
  if (!product) return (
    <div className="flex items-center justify-center min-h-[60vh] text-zinc-500 text-xl">Product not found.</div>
  );

  // Build a brief specs sentence
  const { specs = {} } = product;
  const specsParts = [];
  if (specs.storage) specsParts.push(specs.storage + ' storage');
  if (specs.ram) specsParts.push(specs.ram + ' RAM');
  if (specs.color) specsParts.push('Color: ' + specs.color);
  if (specs.feature) specsParts.push(specs.feature);
  const specsSentence = specsParts.length > 0 ? `This product features ${specsParts.join(', ')}.` : '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Product Image */}
        <div className="flex-shrink-0 w-80 h-80 bg-zinc-100 rounded-3xl flex items-center justify-center border border-zinc-200 shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-72 w-auto object-contain object-center"
          />
        </div>
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-900 mb-1">{product.name}</h1>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-zinc-900 font-bold text-2xl">₹{product.price.toLocaleString()}</span>
            <span className="flex items-center text-yellow-500 font-semibold text-base bg-yellow-50 px-2 py-0.5 rounded-full shadow">
              ★ {product.rating}
            </span>
          </div>
          {/* Specs as paragraph */}
          {specsSentence && (
            <p className="text-zinc-600 text-base mb-2 max-w-xl">{specsSentence}</p>
          )}
          {/* Description */}
          {product.description && (
            <p className="text-zinc-700 text-base mb-2 max-w-xl">{product.description}</p>
          )}
          <button
            className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-lg font-semibold shadow transition-all duration-200 text-lg tracking-wide"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-12 bg-white rounded-2xl shadow border border-zinc-100 p-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Reviews</h2>
        <div className="text-zinc-500 text-base">0 reviews yet. Be the first to review this product!</div>
      </div>
    </div>
  );
};

export default ProductPage; 