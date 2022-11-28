import React, { useEffect, useState } from "react";
import { getProducts, currency, Product } from "./products";
import cartService from "cart/cart";

interface IProps {}

const ProductList: React.FC<IProps> = (props) => {
  const { addToCart, useLoggedIn } = cartService;
  const [products, setProducts] = useState<Product[]>([]);

  const loggedIn = useLoggedIn();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="flex">
              <div className="flex-grow font-bold">
                <a>{product.name}</a>
              </div>
              <div className="flex-end">{currency.format(product.price)}</div>
            </div>
            <div className="text-sm mt-4">{product.description}</div>
            {loggedIn && (
              <div className="text-right">
                <button
                  className="bg-blue-500 text-sm border rounded-lg hover:bg-blue-700 text-white py-2 px-5 "
                  id={`addtocart_${product.id}`}
                  onClick={() => addToCart(String(product.id))}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
