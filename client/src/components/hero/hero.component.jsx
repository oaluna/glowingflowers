import React from "react";
import { useNavigate } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import styled, { keyframes } from "styled-components";
import Logo from "../../assets/logo-alt.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
		<section className="bg-slate-900 text-white p-0 m-0">
		<div
			className="mx-auto w-screen lg:flex lg:h-screen lg:items-center mix-blend-difference"
		>
			<div className="mx-auto w-screen text-center bg-transparent bg-clip-text text-white z-10 ">
				<h1
					className="text-[96px] font-thin font-[Urbanist] uppercase text-white"
				>
					Glowing Flowers
	
				</h1>
					<p className="font-[Urbanist] text-4xl font-light tracking-widest sm:block"> Plants, Gifts & Balloons </p>
	
				<p className="mix-blend-hard-light text-white mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-normal tracking-wider font-[Urbanist]">
					Simple and beautiful floral arrangements, located in the heart of San Francisco.
				</p>
	
			</div>
		</div>
		<img src="https://images.pexels.com/photos/613001/pexels-photo-613001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flowers" className="absolute w-1/2 h-full overflow-hidden top-20 left-0 bg-clip-text mix-blend-difference"/>
		<img src="https://images.pexels.com/photos/613001/pexels-photo-613001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="flowers" className="absolute w-1/2 mix-blend-overlay overflow-hidden h-full top-20 right-0"/>
				<div className="flex flex-row flex-wrap justify-center items-start h-auto w-screen absolute gap-5 z-10 top-3/4">
					<a
						className="block w-full rounded border border-slate-50 bg-transparent px-12 py-3 text-2xl font-medium text-slate-50 mix-blend-difference hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto font-[Urbanist]"
						href="/shop"
					>
						Shop Now
					</a>
	
					<a
						className="block w-full rounded border border-slate-50 bg-transparent px-12 py-3 text-2xl font-medium text-slate-50 f mix-blend-difference focus:outline-none focus:ring active:bg-blue-500 sm:w-auto font-[Urbanist]"
						href="/login"
					>
						Sign In
					</a>
				</div>
	</section>
  );
};

export default Hero;
