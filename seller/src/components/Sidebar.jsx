import { Link } from "react-router-dom";
import addProduct from "../assets/addproduct.png";
import listProduct from "../assets/productlist.png";

const Sidebar = () => {
  return (
    <div className="py-7 flex justify-center gap-x-1 gap-y-5 bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:p-6">
      <Link to={"/addproduct"}>
        <button className="flexCenter gap-2 bg-primary h-14 w-44 medium-16 rounded-md">
          <img src={addProduct} alt="" height={55} width={55} />
          <span>Add Product</span>
        </button>
      </Link>
      <Link to={"/listproduct"}>
        <button className="flexCenter gap-2 bg-primary h-14 w-44 medium-16 rounded-md">
          <img src={listProduct} alt="" height={55} width={55} />
          <span>Product List</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
