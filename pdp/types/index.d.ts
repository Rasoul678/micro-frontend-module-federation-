declare module "home/Footer";
declare module "home/Header";
declare module "addtocart/placeAddToCart";

declare module "home/products" {
  export default {
    getProducts: () => Promise<Product[]>(),
    getProductById: (id: string) => Promise<Product>(),
    currency: Intl.NumberFormat(),
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
