import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Header from "home/Header";
import Footer from "home/Footer";

import Cart from "./Cart";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Router>
      <Header />
      <Cart />
      <Footer />
      <Routes></Routes>
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
