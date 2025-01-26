import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CartPage from "./CartPage";
import AdminPage from "./AdminPage";
import ProductListingPage from "./ProductListingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/productlisting" element={<ProductListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;