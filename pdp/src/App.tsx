import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Footer from "home/Footer";
import Header from "home/Header";

import ProductDetail from "./ProductDetail";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
