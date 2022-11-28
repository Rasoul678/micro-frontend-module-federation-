import React, { Fragment, useEffect, useState } from "react";

import products from "home/products";
import { cart, clearCart } from "./cart";

interface IProps {}

const MiniCart: React.FC<IProps> = (props) => {
  const { currency } = products;
  const [items, setItems] = useState<Cart[] | undefined>(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    cart.subscribe((c) => {
      setItems(c?.cartItems);
    });

    return () => {
      cart.subscribe();
    };
  }, []);

  if (!items) return null;

  return (
    <>
      <span
        className="text-white"
        onClick={() => setShowCart(!showCart)}
        id="showcart-span"
      >
        <i className="ri-shopping-cart-2-fill text-2xl" id="showcart"></i>
        {items?.length}
      </span>
      {showCart && (
        <>
          <div
            className="absolute p-5 border-4 border-blue-800 bg-white rounded-lg"
            style={{ width: "300px", top: "2rem", left: "-250px" }}
          >
            <div
              className="grid gap-3 text-sm"
              style={{ gridTemplateColumns: "1fr 3fr 10fr 2fr" }}
            >
              {items.map((item) => {
                return (
                  <Fragment key={item.id}>
                    <div>{item.quantity}</div>
                    <img src={item.image} alt={item.name} className="" />
                    <div>{item.name}</div>
                    <div className="text-right">
                      {currency.format(item.quantity * item.price)}
                    </div>
                  </Fragment>
                );
              })}
              <div></div>
              <div></div>
              <div></div>
              <div>
                {currency.format(
                  items.reduce((acc, item) => {
                    return acc + item.price * item.price;
                  }, 0)
                )}
              </div>
            </div>
            <div className="flex text-sm mt-2">
              <div className="flex-grow">
                <button
                  id="clearcart"
                  className="bg-white border rounded-md border-green-800 text-green-800 py-2 px-5 "
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </div>
              <div className="flex-end">
                <button
                  className="bg-green-900 text-white py-2 px-5 rounded-md"
                  onClick={clearCart}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MiniCart;
