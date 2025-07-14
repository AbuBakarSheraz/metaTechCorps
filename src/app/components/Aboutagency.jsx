'use client'
import React, { useState } from 'react';
import { FaStarOfLife, FaRegCircleDot } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Image from 'next/image';
import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';


function Aboutagency() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    alert("Contact Us Clicked!");
  };

  // Using placeholder icons for demo
  // const iconPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 24 24' fill='none' stroke='%23c71539' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 14s1.5 2 4 2 4-2 4-2'/%3E%3Cline x1='9' y1='9' x2='9.01' y2='9'/%3E%3Cline x1='15' y1='9' x2='15.01' y2='9'/%3E%3C/svg%3E";

  const features = [
    { icon: icon1, title: 'Your Success, Our Mission', desc: 'We measure our success by the success of our clients. With a focus on results and a dedication to quality, our mission is to deliver digital solutions that make a real impact.' },
    { icon: icon2, title: 'Creators Of Digital Excellence', desc: 'At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also elevate your brand.' },
    { icon: icon3, title: 'Innovating the Digital Landscape', desc: 'We listen, we adapt, and we create solutions tailored to your needs, ensuring satisfaction and long-term success.' },
    { icon: icon4, title: 'Helping Brands Thrive Online', desc: 'Our team consists of industry experts who combine creativity, technical expertise, and strategic thinking to deliver excellence.' },
  ];

  return (
    <div className="relative">
      {/* Overlay */}
       <div className="absolute inset-0 opacity-20">
         <div className="absolute top-20 left-20 w-72 h-72 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div> 
        <div className="absolute top-30 right-20 w-32 h-96 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute bottom-20 left-40 w-20 h-96 rounded-full bg-mtc-red mix-blend-multiply filter blur-xl "></div>
      </div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-20 flex flex-col lg:flex-row pt-24">
        {/* Left Section - Sticky */}
        <div className='lg:sticky lg:top-16 self-start px-8 lg:px-16'>

          <div className='max-w-2xl'>
            <div className='flex gap-3 font-semibold text-white mb-6'>
              <FaStarOfLife className='text-mtc-red mt-1' />
              <p className='tracking-wide'>ABOUT AGENCY</p>
            </div>

            <h1 className='text-3xl md:text-2xl lg:text-4xl xl:text-5xl text-white leading-tight mb-8 font-mono'>
              Crafting <strong className='font-bold text-mtc-red'>unique digital</strong> experiences that elevate your brand
            </h1>

            <div className="flex items-center space-x-[-12px]">
              <button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gray-600 hover:bg-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-sm z-10 transition-all duration-300"
              >
                Contact Us
              </button>

              <button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-mtc-red hover:bg-[#a01230] w-12 h-12 z-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              >
                <FiArrowUpRight
                  className={`text-white text-xl z-20 transform transition-transform duration-500 ${isHovered ? "rotate-45 scale-110" : "rotate-0"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Scrollable */}
        <div className="flex-1 pt-16 px-8 lg:px-16 md:py-1">

          <div className="relative max-w-3xl">
            {/* Connected vertical line */}
            <div className="absolute left-2 lg:left-[-50px] top-0 h-full w-px bg-mtc-red"></div>

            <div className="flex flex-col gap-20">
              {features.map((feature, idx) => (
                <div key={idx} className="relative flex gap-8 items-start group">
                  {/* Dot with pulse animation */}
                  <div className="relative top-[68px] md:top-18 ml-[-2px] lg:ml-[-60px] z-10">
                    <FaRegCircleDot className="text-mtc-red text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-[#ff1744]" />
                    <div className="absolute inset-0 rounded-full bg-mtc-red opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 transform transition-all duration-500 group-hover:translate-x-2">
                    {/* <div className="bg-[#c71539] p-1 rounded-lg w-fit transition-all duration-300  group-hover:shadow-lg"> */}
                     <Image src={feature.icon} alt="icon" width={48} height={48} className="h-12 w-12" />
                    {/* </div> */}
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl text-white transition-colors duration-300 group-hover:text-mtc-red">
                      {feature.title}
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutagency;