import React from "react";
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="p-0 m-0 text-white bg-slate-900">
      <div className="w-screen mx-auto lg:flex lg:h-screen lg:items-center">
        <div className="z-10 w-screen mx-auto text-center text-white bg-transparent bg-clip-text mix-blend-exclusion">
          <h1 className="text-[96px] font-thin font-[Urbanist] uppercase text-white z-0">
            Glowing Flowers
          </h1>

          <p className="font-[Urbanist] text-4xl font-light tracking-widest sm:block z-0">
            {" "}
            Plants, Gifts & Balloons{" "}
          </p>
          <p className="text-white mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-normal tracking-wider font-[Urbanist] z-0">
            Simple and beautiful floral arrangements, located in the heart of
            San Francisco.
          </p>
        </div>
      </div>
      <img
        src="https://images.pexels.com/photos/613001/pexels-photo-613001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flowers"
        className="absolute left-0 w-1/2 h-full overflow-hidden top-20 bg-clip-text mix-blend-difference"
      />
      <img
        src="https://images.pexels.com/photos/613001/pexels-photo-613001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="flowers"
        className="absolute right-0 w-1/2 h-full overflow-hidden mix-blend-overlay top-20"
      />
      <div className="absolute z-10 flex flex-row flex-wrap items-start justify-center w-screen h-auto gap-8 py-8 top-3/4">
        <a
          className="block min-w-[220px] rounded border border-slate-50 bg-transparent px-12 py-3 text-2xl font-medium text-slate-50 mix-blend-difference hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 text-center font-[Urbanist]"
          href="/shop"
        >
          Shop Now
        </a>

        <a
          className="block min-w-[220px] rounded border border-slate-50 bg-slate-50 px-12 py-3 text-2xl font-medium text-slate-500 f mix-blend-difference focus:outline-none focus:ring active:bg-blue-500 text-center font-[Urbanist]"
          href="/login"
        >
          Sign In
        </a>
      </div>
    </section>
  );
};

export default Hero;
