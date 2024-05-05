import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'home/Header';
import Footer from 'home/Footer';
import HomeContent from 'home/HomeContent';
import CartContent from 'cart/CartContent';
import PDPContent from 'pdp/PDPContent';

export default function MainLayout() {
  return (
    <BrowserRouter basename="/">
      <div className="mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />} />
            <Route path="/" element={<HomeContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
