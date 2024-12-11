import { NavLink } from "react-router-dom";
import home from "../assets/home.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-8">
      <NavLink to={"/"}>
        <div className="flexCenter items-center gap-x-1">
          <img src={home} alt="" height={18} width={18} /> Home
        </div>
      </NavLink>
      <NavLink to={"/mens"}>
        <div className="flexCenter items-center gap-x-1">Mens</div>
      </NavLink>
      <NavLink to={"/womens"}>
        <div className="flexCenter items-center gap-x-1">Womens</div>
      </NavLink>
      <NavLink to={"/kids"}>
        <div className="flexCenter items-center gap-x-1">Kids</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
