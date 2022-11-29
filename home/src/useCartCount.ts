import cart from "cart/cart";
import { useEffect, useState } from "react";

const useCartCount = () => {
  const [count, setCount] = useState(cart.cart.value.cartItems.length);

  useEffect(() => {
    cart.cart.subscribe(({ cartItems }) => {
      setCount(cartItems.length);
    });

    return () => {
      cart.cart.unsubscribe();
    };
  }, []);

  return count;
};

export default useCartCount;
