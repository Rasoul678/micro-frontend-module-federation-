import React from "react";

interface IProps {}

const Footer: React.FC<IProps> = (props) => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Only The Best Spinners
    </div>
  );
};

export default Footer;
