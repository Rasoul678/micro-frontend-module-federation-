import { render } from "solid-js/web";
import AddToCart from "./AddToCart";

const placeAddToCart = (el: HTMLElement, id: string) => {
  render(() => <AddToCart id={id} />, el);
};

export default placeAddToCart;
