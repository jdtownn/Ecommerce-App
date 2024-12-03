import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return isActive ? "font-bold" : "font-normal";
  };
  return (
    <nav>
      <div className="flex justify-between items-center mx-20 py-10">
        <div className="">
          <NavLink className={navLinkStyle} to="/">
            Logo
          </NavLink>
        </div>
        <div className="flex flex-1 justify-center items-center px-6 gap-6">
          <NavLink className={navLinkStyle} to="/men">
            Men
          </NavLink>
          <NavLink className={navLinkStyle} to="/women">
            Women
          </NavLink>
          <NavLink className={navLinkStyle} to="/kids">
            Kids
          </NavLink>
        </div>
        <div>
          <NavLink className={navLinkStyle} to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
