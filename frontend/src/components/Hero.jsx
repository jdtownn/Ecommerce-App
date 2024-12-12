import { NavLink } from "react-router-dom";

import { MdStar, MdOutlineLocalOffer } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-no-repeat w-full h-screen">
      <div className="relative max_padd_container top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[38rem]">
          Digital Shopping Hub Junction
        </h1>
        <p className="text-gray-50 regular-16 max-w-[33rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          dolorum officiis nesciunt nam quidem, corporis quae quos cumque
          incidunt voluptates reprehenderit natus, excepturi accusamus ducimus
          quis expedita, dignissimos quas eum itaque vel optio.
        </p>
        <div className="flex flex-start items-center gap-x-4 my-10">
          <div className="!regular-24 flexCenter gap-x-1">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
          <div className="bold-16 sm:bold-20">
            176k
            <span className="regular-16 sm: regular-20">
              {" "}
              Excellent Reviews
            </span>
          </div>
        </div>
        <div className="max-xs:flex-col flex gap-x-2">
          <NavLink to={""} className="btn_dark_rounded flexCenter">
            Shop Now
          </NavLink>
          <NavLink to={""} className="btn_dark_rounded flexCenter px-8">
            <MdOutlineLocalOffer className="text-2xl mr-1" />
            Offers
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
