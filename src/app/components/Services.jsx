'use client'
import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { FaStarOfLife, FaRegCircleDot } from "react-icons/fa6";
import { SlDiamond } from "react-icons/sl";
import diamond from '../assets/icons/diamond.svg';
import circles from '../assets/icons/circles.svg';
import graph from '../assets/icons/graph.svg';
import Image from 'next/image';

function Services() {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleClick = () => {
    alert("Contact Us Clicked!");
  };

  const services = [
    {
      id: 'branding',
      title: 'Branding and identity',
      description: 'Develope a compelling brand identity through stretegy, visuals, and to build strong customer connections.',
      icon: diamond
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.',
      icon: graph
    },
    {
      id: 'content',
      title: 'Creative Content Production',
      description: 'Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.',
      icon: circles
    }
  ];

  return (
    <div className="bg-gray-900 relative mt-16">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="relative z-20 px-3 ">
        <div className='px-8 lg:px-16 lg:py-0 '>
            <div className='flex gap-3 font-semibold text-white  '>
              <FaStarOfLife className='text-mtc-red mt-13' />
              <p className='tracking-wide mt-12'>OUR SERVICES</p>
            </div>
            <div className='flex flex-col  md:flex-row md:gap-20 mt-6'>

            <div>
            <h1 className='text-4xl md:text-4xl lg:text-5xl lg:w-[700px] xl:text-5xl text-white leading-tight'>
              Our <strong className='font-bold text-mtc-red'>digital Service</strong> to grow your brand
            </h1>
            </div>

           <div className=''>
            <p className='my-4 lg:w-[70%] '>
                Join our creative community to collaborate, innovate, and thrive together We welcome passionate individuals eager to make.
            </p>

            <div className="flex items-center mt-6 space-x-[-12px]">
              <button
                onClick={handleClick}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-4 rounded-3xl font-semibold text-sm z-10 transition-all duration-300"
              >
                All Services
              </button>

              <button
                onClick={handleClick}
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                className="bg-mtc-red hover:bg-[#a01230] w-12 h-12 ml-3 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <FiArrowUpRight
                  className={`text-white text-xl transform transition-transform duration-500 ${buttonHovered ? "rotate-45 scale-110" : "rotate-0"}`}
                />
              </button>
            </div>
           </div> 
           </div>
        </div>

        <div className="flex flex-1 p-8 flex-col md:flex-row gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={handleClick}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)} 
              className="border border-gray-500 bg-black rounded-4xl p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-xl"></div>
              <div className='flex flex-col gap-5'>      
                <div className='flex justify-between '>
                  <Image src={service.icon} /> 
                  <FiArrowUpRight
                    className={`text-mtc-red cursor-pointer text-4xl transform transition-transform duration-500 ${
                      hoveredCard === service.id ? "rotate-45 scale-110 text-white" : "rotate-0"
                    }`}
                  />
                </div>
                <div className='flex flex-col mt-14'>
                  <h2 className='font-bold text-xl cursor-pointer'>{service.title}</h2>
                  <p className="relative z-10 text-white text-[17px] cursor-pointer mt-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;