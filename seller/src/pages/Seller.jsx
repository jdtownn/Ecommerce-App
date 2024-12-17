import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import { useEffect, useState } from "react";

const Seller = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products/getproduct");
      const data = await res.json();

      // Ensure that data is an array before setting state
      if (Array.isArray(data)) {
        setAllProducts(data);
      } else {
        console.error("Expected an array but received:", data);
        setAllProducts([]); // Set to empty array if not an array
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setAllProducts([]); // Set to empty array if fetch fails
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="lg:flex">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route
          path="/listproduct"
          element={<ListProduct allProducts={allProducts} />}
        />
      </Routes>
    </div>
  );
};

export default Seller;
