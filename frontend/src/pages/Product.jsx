import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopContext } from "../Context/ShopContext";
import ProductHead from "../components/ProductHead";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHead product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
