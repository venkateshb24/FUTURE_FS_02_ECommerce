import React, { useRef, useState } from 'react';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import { UserProvider, useUser } from './context/UserContext';

function AppContent() {
  const productsRef = useRef(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]); // Shopping cart state
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const { user, login, signup, logout } = useUser();

  const handleNavigate = (section) => {
    if (section === 'products' && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'cart') {
      setCartSidebarOpen(true);
    }
  };

  const handleSearch = (value, submit = false) => {
    setSearch(value);
    if (submit && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add to cart handler
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity handler
  const handleUpdateQty = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  // Remove item handler
  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Authentication handlers
  const handleLogin = (userData) => {
    const result = login(userData);
    if (result.success) {
      setLoginModalOpen(false);
    }
  };

  const handleSignup = (userData) => {
    const result = signup(userData);
    if (result.success) {
      setLoginModalOpen(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Navbar 
        onNavigate={handleNavigate} 
        search={search} 
        onSearch={handleSearch} 
        cart={cart}
        user={user}
        onLoginClick={() => setLoginModalOpen(true)}
        onLogout={handleLogout}
      />
      <Landing />
      <div ref={productsRef} className="scroll-mt-16">
        <Products search={search} setSearch={setSearch} onAddToCart={handleAddToCart} />
      </div>
      <CartSidebar
        open={cartSidebarOpen}
        onClose={() => setCartSidebarOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </>
  );
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
