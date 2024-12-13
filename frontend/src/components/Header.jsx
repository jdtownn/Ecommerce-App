import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
// import logout from "../assets/logout.svg";
import user from "../assets/user.svg";

import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <header className="fixed top-0 max_padd_container mx-auto w-full bg-white z-10 ">
      <div className=" py-4 flex justify-between items-center">
        {/*logo*/}
        <div>
          <Link>
            <img
              className="object-contain"
              src={logo}
              alt="logo"
              height={66}
              width={80}
            />
          </Link>
        </div>
        <Navbar
          containerStyle={`hidden gap-x-5 md:flex xl:gap-x-10 medium-5`}
        />
        <Navbar
          containerStyle={`${
            menuOpen
              ? "flex item-start flex-col gap-y-12 fixed top-28 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-28 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%] "
          } md:hidden`}
        />
        <div className="flexBetween sm:gap-x-6 bold">
          {!menuOpen ? (
            <MdMenu
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-md"
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-md"
              onClick={toggleMenu}
            />
          )}
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className="flex">
              <PiShoppingCartSimpleBold className="h-8 w-8 p-1 ring-1 ring-slate-900/30 rounded-md" />
              <span className="relative flexCenter h-5 w-5 rounded-full bg-secondary text-white medium-14 -top-2">
                {getTotalCartItems()}
              </span>
            </NavLink>
            {/* <NavLink
              to={"logout"}
              className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
              <img src={logout} alt="logoutIcon" height={19} width={19} />
              Logout
            </NavLink> */}
            <NavLink
              to={"login"}
              className={"btn_secondary_rounded flexCenter gap-x-2 "}>
              <img src={user} alt="userIcon" height={16} width={16} />
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
