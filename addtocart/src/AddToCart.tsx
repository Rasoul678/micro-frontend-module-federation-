import { createEffect, createSignal, Show } from "solid-js";

import cartProvider from "cart/cart";

interface IProps {
  id: string;
}

const AddToCart = ({ id }: IProps) => {
  const { addToCart, jwt } = cartProvider;
  const [loggedIn, setLoggedIn] = createSignal(true);

  createEffect(() => {
    jwt.subscribe((token) => setLoggedIn(!!token));

    return () => {
      jwt.unsubscribe();
    };
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        class="bg-red-900 text-white py-2 px-5 rounded-md text-sm"
      >
        Add to Cart
      </button>
    </Show>
  );
};

export default AddToCart;
