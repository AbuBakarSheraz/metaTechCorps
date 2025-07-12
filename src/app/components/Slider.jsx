"use client";
import React from 'react';

function Slider() {
  const services = [
    "Digital Marketing",
    "SEO", 
    "Graphics Design",
    "Web Development",
    "Google My Business Management"
  ];

  return (
    <div className="relative overflow-hidden  bg-[#c71539] py-10  ">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .scroll-animation {
          animation: scroll 4s linear infinite;
        }
      `}</style>
      
      <div className="flex whitespace-nowrap scroll-animation">
        <div className="flex items-center    px-8 font-bold text-3xl">
          {services.map((service, index) => (
            <React.Fragment key={`set1-${index}`}>
              <span className="mx-8">{service}</span>
              {index < services.length - 1 && <span className="mx-8 ">*</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center    px-8 font-bold text-3xl">
          {services.map((service, index) => (
            <React.Fragment key={`set2-${index}`}>
              <span className="mx-8">{service}</span>
              {index < services.length - 1 && <span className="mx-8 ">*</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center   px-8 font-bold text-3xl">
          {services.map((service, index) => (
            <React.Fragment key={`set3-${index}`}>
              <span className="mx-8">{service}</span>
              {index < services.length - 1 && <span className="mx-8 ">*</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;