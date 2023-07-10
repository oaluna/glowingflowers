import React from "react";
import { Parallax } from "react-scroll-parallax";
import styled, { keyframes } from "styled-components";
import LogoAlt from "../../assets/logo-alt.png";

const Hero = ({ history }) => {
  return (
    <div className="-mt-28 ml-0 mb-5 h-[100vh] w-screen overflow-hidden font-display font-normal text-5xl leading-none relative z-0 bg-gradient-to-b from-[#bbdbbe] to-[#deebdd]/0 pt-40">

   
			<div className="flex flex-row items-center w-screen">
		<button className="bg-rose-400 text-white shadow-sm rounded-none flex-row items-center justify-end mx-auto px-5 py-2 font-sans text-md" onClick={() => history.push('/shop/')}>Shop Now</button>
		<img src={LogoAlt} alt="glowing-flowers" className="w-1/4 py-8 h-auto z-10 bg-gray-50 flex flex-col items-center mx-auto justify-center my-auto relative" />
		<button className="bg-rose-400 text-white shadow-sm rounded-none flex-row items-center justify-end mx-auto px-5 py-2 font-sans text-md" onClick={() => history.push('/shop')}>Shop Now</button></div>
      {/* <HeroText>Quality floral arrangements in San Francisco.</HeroText> */}

      {/* <Parallax translateY={[-15, 15]}>
        <img
          className="opacity-100 z-0 w-full"
          src="https://images.pexels.com/photos/1067561/pexels-photo-1067561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="flower arrangements"
        />
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

const HeroText = styled.h1`
  z-index: 10;
  font-size: 60px;
  font-weight: 400;

  line-height: 150px;
  position: absolute;
  top: 35%;
  left: 40%;
  width: 60%;
  animation: ${FadeInAnimation} 1.2s ease-in;
  color: #99552b;
  text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.6);
`;

export default Hero;
