import React, { useState } from 'react';

const Navbar = ({ onNavigate, search, onSearch, cart, user, onLoginClick, onLogout }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleInputChange = (e) => {
    onSearch && onSearch(e.target.value, false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch && onSearch(e.target.value, true);
    }
  };

  // Calculate total cart quantity
  const cartCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <nav className="bg-white shadow-lg border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
              TechStore
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate && onNavigate('home')} className="text-zinc-800 hover:text-zinc-600 px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none focus:outline-none">Home</button>
            <button onClick={() => onNavigate && onNavigate('about')} className="text-zinc-600 hover:text-zinc-800 px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none focus:outline-none">About</button>
            <button onClick={() => onNavigate && onNavigate('products')} className="text-zinc-600 hover:text-zinc-800 px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none focus:outline-none">Products</button>
            <button onClick={() => onNavigate && onNavigate('contact')} className="text-zinc-600 hover:text-zinc-800 px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none focus:outline-none">Contact</button>
          </div>

          {/* Search, Cart, and User */}
          <div className="flex items-center space-x-6">
            {/* Navbar Search Bar (controlled by App.js) */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="w-80 pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent focus:bg-white transition-all duration-300 text-zinc-700 placeholder-zinc-500"
              />
            </div>

            {/* Cart Icon with Badge */}
            <button
              className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-colors duration-200"
              onClick={() => onNavigate && onNavigate('cart')}
              aria-label="View cart"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile Icon with Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center justify-center w-10 h-10 text-zinc-600 hover:text-zinc-800 transition-colors duration-200 p-2 rounded-full hover:bg-zinc-100"
              >
                {user ? (
                  <div className="w-8 h-8 bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                ) : (
                  <svg className="h-6 w-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-zinc-200 py-2 z-50">
                  {user ? (
                    <>
                      <div className="px-4 py-2 border-b border-zinc-100">
                        <p className="text-sm font-medium text-zinc-900">{user.name}</p>
                        <p className="text-xs text-zinc-500">{user.email}</p>
                      </div>
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors duration-200">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Profile
                        </div>
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors duration-200">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          Orders
                        </div>
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors duration-200">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Settings
                        </div>
                      </a>
                      <div className="border-t border-zinc-100 mt-2 pt-2">
                        <button 
                          onClick={() => {
                            onLogout();
                            setShowUserMenu(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-zinc-50 transition-colors duration-200"
                        >
                          <div className="flex items-center">
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Logout
                          </div>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => {
                          onLoginClick();
                          setShowUserMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                          </svg>
                          Login
                        </div>
                      </button>
                      <button 
                        onClick={() => {
                          onLoginClick();
                          setShowUserMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-zinc-700 hover:bg-zinc-50 transition-colors duration-200"
                      >
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                          Sign Up
                        </div>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 