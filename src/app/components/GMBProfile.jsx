import React from 'react';
import Image from 'next/image';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';
import img15 from '../assets/images/img15.jpg';

const GMBProfile = () => {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* Enhanced background with smoother gradients */}
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
      </div>
      
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
        <div className="absolute top-10 right-1/3 w-20 h-20 border border-gray-600 rounded-full"></div>
      </div>
      {/* Improved main heading with better positioning */}
      <div className="absolute top-6 md:top-10 left-1/4 md:left-[400px] -translate-x-1/2 z-10 px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-none select-none">
          <div
            className="text-transparent tracking-wider drop-shadow-2xl"
            style={{
              WebkitTextStroke: '2px #ef4444',
              textShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            GMB PROFILE
          </div>
          <div
            className="text-transparent tracking-wider -mt-1 sm:-mt-2 md:-mt-3 drop-shadow-2xl"
            style={{
              WebkitTextStroke: '2px #ef4444',
              textShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            REPORTING
          </div>
        </div>
        
        {/* Added subtitle for better hierarchy */}
        {/* <div className="mt-4 md:mt-6">
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional Google My Business management and optimization
          </p>
        </div> */}
      </div>

      {/* Enhanced phone mockups with better spacing and positioning */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex items-end justify-center w-full px-2 sm:px-4 md:px-6 max-w-7xl">
        
        {/* Far left phone - improved positioning */}
        <div className="opacity-40 transform scale-75 hover:scale-80 hover:opacity-60 transition-all duration-500 z-10 -mr-8 md:-mr-12">
          <Image 
            src={img14} 
            alt="Phone 1" 
            width={180} 
            height={300} 
            className="drop-shadow-2xl rounded-2xl" 
          />
        </div>

        {/* Left phone - better spacing */}
        <div className="opacity-70 transform scale-90 hover:scale-95 hover:opacity-90 transition-all duration-500 z-20 -mr-6 md:-mr-10">
          <Image 
            src={img12} 
            alt="Phone 2" 
            width={210} 
            height={350} 
            className="drop-shadow-2xl rounded-2xl" 
          />
        </div>

        {/* Center phone - enhanced as main focus */}
        <div className="z-30 transform scale-105 hover:scale-110 transition-all duration-500 mx-2 md:mx-4">
          <Image 
            src={img11} 
            alt="Main phone" 
            width={240} 
            height={410} 
            priority 
            className="drop-shadow-2xl rounded-2xl ring-2 ring-red-500/30" 
          />
        </div>

        {/* Right phone - better spacing */}
        <div className="opacity-70 transform scale-90 hover:scale-95 hover:opacity-90 transition-all duration-500 z-20 -ml-6 md:-ml-10">
          <Image 
            src={img13} 
            alt="Phone 4" 
            width={210} 
            height={350} 
            className="drop-shadow-2xl rounded-2xl" 
          />
        </div>

        {/* Far right phone - improved positioning */}
        <div className="opacity-40 transform scale-75 hover:scale-80 hover:opacity-60 transition-all duration-500 z-10 -ml-8 md:-ml-12">
          <Image 
            src={img15} 
            alt="Phone 5" 
            width={180} 
            height={300} 
            className="drop-shadow-2xl rounded-2xl" 
          />
        </div>
      </div>

      {/* Enhanced side labels with better positioning and styling */}
      <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 md:top-1/2 transform -translate-y-1/2 text-white z-40">
        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-6 border border-red-500/20">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide">
            Profile<br />
            <span className="text-red-400">Creation</span>
          </h3>
          <p className="text-gray-300 text-xs md:text-sm mt-2 leading-relaxed max-w-xs hidden sm:block">
            Professional setup and optimization
          </p>
        </div>
      </div>

      <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 md:top-1/2 transform -translate-y-1/2 text-white text-right z-40">
        <div className="backdrop-blur-sm bg-black/20 rounded-xl p-4 md:p-6 border border-red-500/20">
          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-3 ml-auto">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide">
            Ranking &<br />
            <span className="text-red-400">Optimization</span>
          </h3>
          <p className="text-gray-300 text-xs md:text-sm mt-2 leading-relaxed max-w-xs hidden sm:block">
            Advanced analytics and performance
          </p>
        </div>
      </div>

      {/* Enhanced bottom glow with multiple layers */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 sm:w-80 md:w-96 h-16 bg-red-500/40 rounded-full blur-2xl"></div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-8 bg-red-400/60 rounded-full blur-xl"></div>
      
      {/* Additional floating elements for depth */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-red-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-red-500 rounded-full opacity-50 animate-pulse delay-2000"></div>
    </div>
  );
};

export default GMBProfile;