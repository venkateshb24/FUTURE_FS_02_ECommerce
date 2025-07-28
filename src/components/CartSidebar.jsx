import React from 'react';

const CartSidebar = ({ open, onClose, cart, onUpdateQty, onRemove }) => {
  // Calculate subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl border-l border-zinc-200 flex flex-col transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
          <h2 className="text-2xl font-bold text-zinc-900">Your Cart</h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-900 p-2 rounded-full transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center text-zinc-500 text-lg py-20">Your cart is empty.</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-zinc-100 pb-4 last:border-b-0">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded-lg bg-zinc-100 border border-zinc-200" />
                <div className="flex-1">
                  <div className="font-semibold text-zinc-900 truncate" title={item.name}>{item.name}</div>
                  <div className="text-zinc-500 text-sm">₹{item.price.toLocaleString()}</div>
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold"
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-2 text-zinc-900 font-medium">{item.quantity}</span>
                    <button
                      className="w-7 h-7 flex items-center justify-center rounded bg-zinc-200 hover:bg-zinc-300 text-zinc-700 font-bold"
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="ml-2 text-zinc-400 hover:text-red-500 transition-colors"
                  onClick={() => onRemove(item.id)}
                  aria-label="Remove item"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
        {/* Footer */}
        <div className="px-6 py-5 border-t border-zinc-100 bg-zinc-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-zinc-800">Subtotal</span>
            <span className="text-xl font-bold text-zinc-900">₹{subtotal.toLocaleString()}</span>
          </div>
          <button
            className="w-full bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-900 hover:to-zinc-800 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </div>
  );
};

export default CartSidebar; 