import React, { Suspense } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage/Homepage';

// product app'in expose edilen App isimli componenti cektik

const ProductApp = React.lazy(() => import('product/App'));
const CartApp = React.lazy(() => import('cart/App'));

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductApp />} />
        <Route path="/cart" element={<CartApp />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
export default App;
