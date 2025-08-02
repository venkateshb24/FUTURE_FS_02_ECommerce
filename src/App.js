import React, { useRef, useState } from 'react';
import Landing from './pages/Landing';
import Products from './pages/Products';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  const productsRef = useRef(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]); // Shopping cart state

  const handleNavigate = (section) => {
    if (section === 'products' && productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'cart') {
      // Cart functionality will be added back later
    } else if (section === 'about') {
      // For now, we'll just scroll to top since About is a separate page
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <>
      <Navbar 
        onNavigate={handleNavigate} 
        search={search} 
        onSearch={handleSearch} 
        cart={cart}
        user={null}
        onLoginClick={() => {}}
        onLogout={() => {}}
      />
      <Landing />
      <div ref={productsRef} className="scroll-mt-16">
        <Products search={search} setSearch={setSearch} onAddToCart={handleAddToCart} />
      </div>
      <About />
    </>
  );
}

export default App;
