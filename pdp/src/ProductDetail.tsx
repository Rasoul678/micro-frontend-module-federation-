import React, { useEffect, useState } from "react";
import products from "home/products";
import { useParams } from "react-router-dom";

interface IProps {}

const ProductDetail: React.FC<IProps> = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>(null);
  const { getProductById, currency } = products;

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) return null;

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{product.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>
        <div className="mt-10"> {product.description}</div>
        <div className="mt-10"> {product.longDescription}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
