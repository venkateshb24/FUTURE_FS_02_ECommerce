import React from 'react';

const ProductDetailsModal = ({ open, onClose, product, onAddToCart }) => {
  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className={`relative bg-white rounded-3xl shadow-2xl border border-zinc-200 max-w-2xl w-full mx-4 p-8 z-10 transition-transform duration-500 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900 p-2 rounded-full transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Product Image */}
          <div className="flex-shrink-0 w-64 h-64 bg-zinc-100 rounded-2xl flex items-center justify-center border border-zinc-200 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-60 w-auto object-contain object-center"
            />
          </div>
          {/* Product Info */}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-bold text-zinc-900 mb-1">{product.name}</h2>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-zinc-900 font-bold text-2xl">₹{product.price.toLocaleString()}</span>
              <span className="flex items-center text-yellow-500 font-semibold text-base bg-yellow-50 px-2 py-0.5 rounded-full shadow">
                ★ {product.rating}
              </span>
            </div>
            {/* Specs */}
            {product.specs && (
              <div className="flex flex-wrap gap-2 text-zinc-500 text-sm font-medium mb-2">
                {product.specs.storage && <span className="bg-zinc-100 px-2 py-0.5 rounded">{product.specs.storage}</span>}
                {product.specs.ram && <span className="bg-zinc-100 px-2 py-0.5 rounded">{product.specs.ram}</span>}
                {product.specs.color && <span className="bg-zinc-100 px-2 py-0.5 rounded">{product.specs.color}</span>}
                {product.specs.feature && <span className="bg-zinc-100 px-2 py-0.5 rounded">{product.specs.feature}</span>}
              </div>
            )}
            {/* Description */}
            {product.description && (
              <p className="text-zinc-700 text-base mb-2 max-w-md">{product.description}</p>
            )}
            <button
              className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-lg font-semibold shadow transition-all duration-200 text-lg tracking-wide"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal; 