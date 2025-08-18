import React from 'react';
import Image from 'next/image';
import imgmobile from '../assets/images/imgmobile.png'

const P8 = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden min-h-screen">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Main flowing ribbon shapes in MTC red */}
        <div className="absolute top-1/4 right-1/4 w-96 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
          <div className="absolute top-8 left-8 w-80 h-48 bg-gradient-to-br from-red-500/40 via-red-600/25 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
        </div>
        
        {/* Secondary ribbon curves */}
        <div className="absolute top-1/2 right-1/6 w-72 h-56">
          <div className="absolute inset-0 bg-gradient-to-bl from-red-600/25 via-red-500/15 to-transparent rounded-full transform rotate-12 blur-md"></div>
          <div className="absolute -top-4 -left-4 w-64 h-40 bg-gradient-to-br from-red-500/35 via-red-600/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
        </div>
        
        {/* Additional flowing elements */}
        <div className="absolute bottom-1/3 right-1/3 w-80 h-48">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-red-500/15 to-transparent rounded-full transform -rotate-30 blur-lg"></div>
        </div>
        
        {/* Accent ribbon pieces */}
        <div className="absolute top-1/3 right-1/2 w-48 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent rounded-full transform rotate-60 blur-sm"></div>
        </div>
        
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
          <div className="absolute top-10 right-1/3 w-20 h-20 border border-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-around lg:flex-row min-h-screen">
        {/* Left Side - Mobile Image */}
        <div className="flex items-center justify-center p-8">
          <div className="relative">
            <Image
              src={imgmobile}
              alt="Mobile App Interface"
              width={450}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 p-8  flex flex-col justify-center">
          <div className="">
            {/* Main Heading */}
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2">
              MT Skin
            </h1>
            <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Clinic
            </h1>

            {/* Subheading */}
            <h2 className="text-white text-xl lg:text-2xl font-light mb-8">
              Social Media<br />
              Management
            </h2>

            {/* Description */}
            <p className="text-white text-base lg:text-lg leading-relaxed mb-12">
       We partnered with MT Skin Clinic to manage
and enhance their social media presence with
a premium, results-driven approach. Our work
included creating aesthetic designs, writing
informative and professional captions, and
executing strategic content plans tailored to
skincare services. By aligning visuals with the
clinic’s high-end brand image, we helped MT
Skin Clinic connect with their audience, promote
treatments effectively, and increase
appointment bookings through social media.
            </p>

            {/* CTA Link */}
            <div className="flex justify-end">
              <button 
              onClick={() => {window.open('https://www.instagram.com/mtskinclinic/')}}
              className="font-bold cursor-pointer text-white text-sm hover:text-gray-300 transition-colors duration-300 underline">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P8;