import React, { useState } from 'react';
import Landing from './pages/Landing';
import Products from './pages/Products';
import Navbar from './components/Navbar';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Navbar onNavigate={setPage} />
      {page === 'home' && <Landing />}
      {page === 'products' && <Products />}
    </>
  );
}

export default App;
