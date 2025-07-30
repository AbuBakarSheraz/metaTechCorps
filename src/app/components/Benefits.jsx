'use client'
import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { FaStarOfLife, FaRegCircleDot } from "react-icons/fa6";
import { SlDiamond } from "react-icons/sl";
import test from '../assets/icons/test.svg';
import settings from '../assets/icons/settings.svg';
import headphone from '../assets/icons/headphone.svg';
import Image from 'next/image';

function Benefits() {
  const [buttonHovered, setButtonHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleClick = () => {
    alert("Contact Us Clicked!");
  };

  const services = [
    {
      id: 1,
      title: 'Personalized Approach',
      description: "We customize strategies to fit your brand's specific needs, ensuring alignment.",
      icon: test
    },
    {
      id: 2,
      title: 'Experienced Team',
      description: 'Combines industry knowledge and creativity to exceptional results for your brand.',
      icon: settings
    },
    {
      id: 3,
      title: 'Data-Driven Decisions',
      description: 'We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.',
      icon: test
    },
        {
      id: 4,
      title: 'Ongoing Support',
      description: 'We provide continuous support and maintenance to keep your digital assets at their best.',
      icon: headphone
    }
  ];

  return (
    <div className="relative mt-16">
      {/* Overlay */}
<div className="absolute inset-0 opacity-20">
         <div className="absolute top-20 left-20 w-72 h-72 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div> 
        <div className="absolute top-30 right-20 w-32 h-96 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute bottom-20 left-40 w-20 h-96 rounded-full bg-mtc-red mix-blend-multiply filter blur-xl "></div>
      </div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-20 px-3 ">
        <div className='px-8 lg:px-16 lg:py-0 '>
            <div className='flex gap-3 font-semibold text-white  '>
              <FaStarOfLife className='text-mtc-red mt-13' />
              <p className='tracking-wide mt-12'>KEY BENEFITS</p>
            </div>
            <div className='flex flex-col  md:flex-row md:gap-20 mt-6'>

            <div>
            <h1 className='text-4xl md:text-4xl lg:text-5xl lg:w-[700px] xl:text-5xl text-white leading-tight'>
              Discover the <strong className='font-bold text-mtc-red'>Benefits</strong> of choosing us today
            </h1>
            </div>

           <div className=''>
            <p className='my-4 lg:w-[70%] '>
                Experience unparalleled creativity, data-driven strategies, and dedicated support that drive real results for your brand.
            </p>

           
           </div> 
           </div>
        </div>

        <div className="flex flex-1 p-8 flex-col md:flex-row gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              // onClick={handleClick}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)} 
              className="border border-gray-500 bg-black rounded-4xl p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-xl"></div>
              <div className='flex flex-col gap-5'>      
                <div className='flex justify-between '>
                  <Image src={service.icon} alt='Icon' /> 
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

export default Benefits;