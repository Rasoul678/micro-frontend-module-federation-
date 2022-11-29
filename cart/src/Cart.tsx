import React, { Fragment, useEffect, useState } from "react";
import cartProvider from "cart/cart";
import products from "home/products";

interface IProps {}

const Cart: React.FC<IProps> = (props) => {
  const { currency } = products;
  const { cart, clearCart } = cartProvider;
  const [items, setItems] = useState([]);

  useEffect(() => {
    cart.subscribe((value) => setItems(value?.cartItems ?? []));

    return () => {
      cart.unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-4 gap-5 text-sm">
        {items.map((item) => {
          return (
            <Fragment key={item.id}>
              <div>{item.quantity}</div>
              <img src={item.image} alt={item.name} width="50px" className="" />
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
        <div id="grand_total">
          {currency.format(
            items.reduce((acc, item) => {
              return acc + item.price * item.price;
            }, 0)
          )}
        </div>
      </div>
      <div className="flex text-sm my-5">
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
    </>
  );
};

export default Cart;
