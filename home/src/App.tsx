import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";

import "./index.scss";
import 'remixicon/fonts/remixicon.css'

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "home" }} />
    <ProductList />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
