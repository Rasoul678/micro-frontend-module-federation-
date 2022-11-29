import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

interface IProps {}

const Header: React.FC<IProps> = () => {
  return (
    <div className="p-5 bg-blue-600 text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow text-white flex">
          <Link to="/">Fidget Spinner World</Link>
          <div className="mx-2">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
