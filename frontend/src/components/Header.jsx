import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="fixed top-0 max_padd_container mx-auto w-full bg-white py-10 z-10 ">
      <div className=" py-4 flex justify-between items-center">
        {/*logo*/}
        <div>
          <Link>
            <img src={logo} alt="logo" height={66} width={66} />
          </Link>
        </div>
        <Navbar />
        <div>Buttons</div>
      </div>
    </header>
  );
};

export default Header;
