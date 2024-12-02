import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Buyer from "./components/Buyer.jsx";
import Seller from "./components/Seller.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/*protected routes */}
      <Route path="buyer" element={<Buyer />} />
      <Route path="seller" element={<Seller />} />
    </Routes>
  );
};

export default App;
