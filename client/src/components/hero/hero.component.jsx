import React from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/logo.png";

const Hero = () => {
	const navigate = useNavigate()
	return (
    <div className="-mt-28 ml-0 mb-5 h-[100vh] w-screen overflow-hidden font-display font-normal text-5xl leading-none relative z-[-1] bg-gradient-to-b from-[#bbdbbe] to-[#deebdd]/0 pt-40">

   
<div className="flex flex-row items-center w-screen h-full relative">
<img src={Logo} alt="glowing-flowers" className="w-2/5 py-8 h-auto bg-transparent flex flex-col items-center mx-auto justify-center my-auto z-10" />
<HeroText>Quality floral arrangements in San Francisco.</HeroText>
		<button className="bg-rose-400 text-white shadow-sm rounded-none flex-row justify-end mx-auto px-5 py-2 relative font-sans text-md w-[200px] h-auto z-10 mt-56" onClick={() => navigate('/shop/')}>Shop Now</button>
		
		<button className="bg-rose-400 text-white shadow-sm rounded-none flex-row justify-end mt-56 mx-auto px-5 py-2  relative font-sans text-md w-[200px] h-auto z-10" onClick={() => navigate('/signin')}>Sign In</button></div>
     
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
  )};


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
  font-size: 32px;
  font-weight: 100;
font-family: 'Roboto', sans-serif;
  line-height: auto;
  position: absolute;
  top: 50%;
  right: 5%;
  width: 40%;
  animation: ${FadeInAnimation} 1.2s ease-in;
  color: navy;
  text-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.6);
`;

export default Hero;
