import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";
import ProductHead from "../components/ProductHead";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <section>
      <div>
        <ProductHead product={product} />
      </div>
    </section>
  );
};

export default Product;
