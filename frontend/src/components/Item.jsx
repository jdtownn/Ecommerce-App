/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div className="relative flexCenter group overflow-hidden transition-all duration-100">
        <Link to={`/product/${id}`} className="">
          <img
            src={image}
            alt="productImage"
            className="object-cover w-full block group-hover:scale-125 transition-all duration-1000"
          />
        </Link>
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-[6px] medium-10 line-clamp-2 text-gray-30">{name}</h4>
        <div className="flex gap-5">
          <div className="bold-16">${new_price}</div>
          <div className="text-secondary bold-16  line-through">
            ${old_price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
