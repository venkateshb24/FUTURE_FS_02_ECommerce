import React, { useRef, useState } from 'react';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';

function App() {
  const productsRef = useRef(null);
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]); // Shopping cart state
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false);

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

  return (
    <>
      <Navbar onNavigate={handleNavigate} search={search} onSearch={handleSearch} cart={cart} />
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
    </>
  );
}
export default App;
