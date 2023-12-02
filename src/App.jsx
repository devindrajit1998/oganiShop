import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/Product/ProductDetails'
import CartPage from './cart/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/CartPage" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
