import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import Logo from "../../assets/logo.png";
import FlowerGraphic from "../../assets/flower-graphic.png";

const Hero = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div className="relative -mt-32 mb-6 z-0 overflow-hidden bg-cover bg-no-repeat h-screen w-screen z-10">
      <Parallax translateY={[-25, 25]}>
        <img
          className="opacity-100 w-screen h-screen absolute top-0"
          src="https://images.pexels.com/photos/1067561/pexels-photo-1067561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="flower arrangements"
        />
      </Parallax>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[rgba(255,255,255,0.45)]">
        <div className="z-10 flex flex-col h-full items-center justify-center">
          <div className="flex flex-row items-center max-w-[80vw] justify-center space-x-8 h-1/2 px-6 text-center text-slate-700 md:px-12">
            <img
              src={Logo}
              alt="glowing-flowers"
              className="my-0 mx-auto h-auto z-10"
            />
            <h1 className="z-10 mt-12 mb-12 text-5xl text-left font-medium tracking-none transform -skew-x-12 md:text-5xl xl:text-6xl">
              Artisanal flower arrangements made at the <br />
              <span className="text-rose-500">heart</span> of San Francisco
            </h1>
          </div>
          <div className="flex flex-row items-center justify-evenly">
            <Link
              className="mb-2 inline-block rounded-full border-2 border-rose-800 px-[46px] pt-[14px] pb-[12px] text-3xl font-medium uppercase leading-normal text-rose-800 transition duration-150 ease-in-out hover:border-rose-100 hover:bg-rose-500 hover:bg-opacity-10 hover:text-rose-50 focus:border-rose-100 focus:text-rose-100 focus:outline-none focus:ring-0 active:border-rose-200 active:text-rose-200 md:mr-2 md:mb-0 z-10"
              data-te-ripple-init
              data-te-ripple-color="light"
              to="/shop/all-occasions"
              role="button"
            >
              Shop Now
            </Link>
            <Link
              className="inline-block rounded-full px-12 pt-4 pb-3.5 text-3xl font-medium uppercase leading-normal text-rose-800 transition duration-150 ease-in-out hover:bg-rose-800 hover:bg-opacity-20 hover:text-rose-200 focus:text-rose-200 focus:outline-none focus:ring-0 active:text-rose-300 z-10"
              data-te-ripple-init
              data-te-ripple-color="light"
              to="/signin"
              role="button"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-2.5 text-white dark:text-rose-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
