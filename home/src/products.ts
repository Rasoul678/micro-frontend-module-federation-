const BASE_URL = "http://localhost:8080";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  return await res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default {
  getProducts,
  getProductById,
  currency,
};
