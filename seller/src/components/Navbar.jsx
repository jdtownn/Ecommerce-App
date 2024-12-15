import logo from "../assets/logo.svg";
import profileImg from "../assets/profile.png";
const Navbar = () => {
  return (
    <nav className="max_padd_container flexBetween py-2 ring-1 ring-slate-900/5 relative">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:px-1">
        Seller&apos;s Page
      </div>
      <div>
        <img className="w-12 h-12 rounded-full" src={profileImg} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
