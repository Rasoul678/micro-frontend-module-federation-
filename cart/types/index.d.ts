declare module "home/Footer";
declare module "home/Header";

declare module "home/products" {
  export default {
    getProducts: () => Promise<Product[]>(),
    getProductById: (id: string) => Promise<Product>(),
    currency: Intl.NumberFormat(),
  };
}

declare module "cart/cart" {
  import { BehaviorSubject } from "rxjs";

  export default {
    jwt: new BehaviorSubject<string>(),
    cart: new BehaviorSubject<CartItems>(),
    login: (username: string, password: string) => Promise<string>(),
    getCart: () => Promise<CartItems>(),
    addToCart: (id: string) => Promise<void>(),
    clearCart: () => Promise<void>(),
    useLoggedIn: () => boolean,
  };
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

interface Cart extends Product {
  quantity: number;
}

interface CartItems {
  cartItems: Cart[];
}
