import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ containerStyle }) => {
  return (
    <nav className={`${containerStyle}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter text-xl items-center gap-x-1">Home</div>
      </NavLink>
      <NavLink
        to={"/mens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter text-xl items-center gap-x-1">Mens</div>
      </NavLink>
      <NavLink
        to={"/womens"}
        className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter text-xl items-center gap-x-1">Womens</div>
      </NavLink>
      <NavLink
        to={"/kids"}
        className={({ isActive }) => (isActive ? "active_link" : "")}>
        <div className="flexCenter text-xl items-center gap-x-1">Kids</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
