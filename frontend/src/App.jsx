import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Cart from "./pages/Cart.jsx";
import Product from "./pages/Product.jsx";
import Login from "./pages/Login.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <main className="bg-primary text-tertiary max-container ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<Category />} />
          <Route path="/womens" element={<Category />} />
          <Route path="/kids" element={<Category />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
