import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Buyer from "./components/Buyer.jsx";
import Seller from "./components/Seller.jsx";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import Kids from "./components/Kids.jsx";
import { Navbar } from "./components/Navbar.jsx";

const App = () => {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/*protected routes */}
          <Route path="buyer" element={<Buyer />} />
          <Route path="seller" element={<Seller />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
