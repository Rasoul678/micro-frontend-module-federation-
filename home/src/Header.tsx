import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

interface IProps {
  app: {
    name: string;
  };
}

const Header: React.FC<IProps> = ({ app }) => {
  return (
    <div className="p-5 bg-blue-600 text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow text-white">
          Fidget Spinner World | {app.name}
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
