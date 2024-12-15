import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";

const Seller = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Seller;