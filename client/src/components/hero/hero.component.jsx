import React from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/logo.png";
import FlowerGraphic from "../../assets/flower-graphic.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="-mt-28 ml-0 mb-5 h-[100vh] w-screen overflow-hidden font-display font-normal text-5xl leading-none relative z-[-1] bg-gradient-to-b from-[#bbdbbe] to-[#deebdd]/0 pt-40">
		   <img
          src={FlowerGraphic}
          alt="flower-graphic"
          className="absolute left-0 top-0 max-w-1/2 h-auto" 
        />
      <div className="flex flex-row items-start justify-end w-screen h-screen relative pr-32 mt-24">
			<div className="flex flex-col items-end w-[60vw] max-h-[50vh] space-y-8">
        <img
          src={Logo}
          alt="glowing-flowers"
          className="w-3/5 p-0 h-auto bg-transparent z-10"
        />
        <h1 className="z-10 text-slate-500 text-5xl font-medium font-sans leading-normal w-full text-right h-auto shadow-sm">Quality floral arrangements in San Francisco.</h1>
				<div className="flex flex-row items-center justify-evenly">
        <button
          className="bg-rose-400 text-white shadow-sm rounded-none mx-1 px-5 py-2 relative font-sans text-md w-[200px] h-auto z-10"
          onClick={() => navigate("/shop/")}
        >
          Shop Now
        </button>

        <button
          className="bg-rose-400 text-white shadow-sm rounded-none px-5 py-2 mx-1 relative font-sans text-md w-[200px] h-auto z-10"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
		</div>
				</div>
      </div>
     
     
 
      <Parallax translateY={[-25, 25]}>
        <img
          className="opacity-100 w-screen h-screen absolute top-0"
          src="https://images.pexels.com/photos/1067561/pexels-photo-1067561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="flower arrangements"
        />
      </Parallax>

      {/* 
       
      </Parallax> */}
    </div>
  );
};

const FadeInAnimation = keyframes`
0% {
  opacity: 0;
  margin-top: 40vw;
  animation-delay: 0.3s;
 }
 50% {
  opacity: 0;
  margin-top: 20vw;
 }
100% {
  opacity: 1;
  float: none;
  transition: 1.3s ease-in;
	
 }
`;



export default Hero;
