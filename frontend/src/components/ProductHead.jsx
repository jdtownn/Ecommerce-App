/* eslint-disable react/prop-types */
import { TbArrowRight } from "react-icons/tb";

const ProductHead = (props) => {
  const { product } = props;
  return (
    <div>
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>
  );
};

export default ProductHead;
