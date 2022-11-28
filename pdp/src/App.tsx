import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import "remixicon/fonts/remixicon.css";

import Footer from "home/Footer";
import Header from "home/Header";

import ErrorBoundary from "./ErrorBoundary";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <ErrorBoundary>
      <Header app={{ name: "pdp" }} />
    </ErrorBoundary>
    <RouterProvider router={router} />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
