import React from 'react'
import Image from 'next/image';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'
import img6 from '../assets/images/img6.png'
import img7 from '../assets/images/img7.png'

function OptionsBeautyShowcase() {
  return (
    <div className="min-h-screen px-8 md:px-22 bg-black text-white relative overflow-hidden">
      {/* Static Ribbon Shapes - Background */}
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

      {/* Main Content Container */}
      <div className="relative z-10">
        
        {/* Mobile-First Layout */}
        <div className="flex flex-col xl:flex-row min-h-screen">
          
          {/* Left Content Section */}
          <div className="flex-1 relative order-2 xl:order-1">
            {/* Background Image with better mobile handling */}
            <div className="absolute inset-0">
              <Image 
                src={img1} 
                alt="Options Beauty Background" 
                className=" h-full object-cover object-center"
                priority
              />
              {/* Dynamic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
            </div>
            
            {/* Content overlay with improved spacing */}
            <div className="relative z-10 flex flex-col justify-center min-h-[50vh] xl:min-h-screen px-4 sm:px-8 lg:px-16 py-8 xl:py-0">
              {/* Main Heading - Responsive Typography */}
              <div className="mb-6 p-4 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] mb-2 sm:mb-4">
                  <span className="block text-white drop-shadow-2xl">Options</span>
                  <span className="block text-white drop-shadow-2xl">Beauty</span>
                </h1>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light">
                  <p className="mb-1">Website</p>
                  <p>Development</p>
                </div>
              </div>

              {/* Description Text - Better readability on mobile */}
              <div className="mb-6 sm:mb-8 text-gray-200 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl">
                <p className="mb-3 sm:mb-4">
                  We had the pleasure of developing a modern, responsive website for Options Beauty that reflects the elegance and professionalism of their brand. The website was designed with a user-friendly layout, mobile optimization, and seamless navigation to enhance the customer experience.
                </p>
                <p className="mb-3 sm:mb-4">
                  We integrated essential features like service booking, gallery, and client reviews, along with on-page SEO to boost visibility. The result was a clean, visually appealing platform that not only represents the salon's identity but also supports its business growth online.
                </p>
              </div>

              {/* Enhanced CTA Button */}
              <div className="mb-6 sm:mb-8">
                <button
                onClick={() => {window.open('https://options-beauty.co.uk/')}}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-500 font-medium text-sm sm:text-base rounded-md overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                  <span className="relative z-10">Visit Website</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Website Mockups Grid */}
          <div className="flex-1 relative p-4 sm:p-6 lg:p-8 xl:p-8 order-1 xl:order-2">
            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 2x3 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 h-full">
              
              {/* Each mockup with enhanced hover effects */}
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img2} 
                  alt="Website Home Page" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img3} 
                  alt="Services Page" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img4} 
                  alt="Gallery Page" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img5} 
                  alt="About Page" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img6} 
                  alt="Contact Page" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="group relative bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-red-500/20 h-40 sm:h-48 lg:h-56">
                <Image 
                  src={img7} 
                  alt="Mobile View" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar with better mobile visibility */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20">
        <div className="flex items-center space-x-3 sm:space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-4 py-3">
          <div className="flex-1 h-1 bg-gray-700/50 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-to-r from-red-500 to-red-400 rounded-full shadow-lg shadow-red-500/30 animate-pulse"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full shadow-lg shadow-red-400/50 animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-400 transition-colors cursor-pointer"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-400 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div> */}

      {/* Floating Elements for Extra Visual Appeal */}
      {/* <div className="absolute top-20 left-4 w-4 h-4 bg-red-400/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-red-300/40 rounded-full animate-pulse"></div> */}
    </div>
  )
}

export default OptionsBeautyShowcase