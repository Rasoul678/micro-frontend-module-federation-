import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Footer from "home/Footer";
import Header from "home/Header";

import ProductDetail from "pdp/PDPContent";
import ProductsList from "home/HomeContent";
import Cart from "cart/CartContent";

const MainLayout = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default MainLayout;
