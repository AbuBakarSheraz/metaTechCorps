import React from 'react';

export default function P15() {
  return (
      <div className="px-8 md:px-22 py-4 bg-black text-white relative overflow-hidden">
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
      {/* Main Content */}
      <main className="relative z-10    pt-12">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Main Content - Positioned left */}
          <div className=" space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold">
               MTC TRAVELS
              </h2>
              <p className='text-lg' >Business Development</p>
            </div>

            <div className="space-y-6 mt-8">
              <div className="space-y-4 text-gray-300 text-sm lg:text-base leading-relaxed">
                <p>
                 We partnered with MTC Travels to build a strong
digital foundation through a comprehensive
business development and digital strategy. Our
services included a complete digital setup, covering
social media account creation and optimization,
Trustpilot profile setup for client reviews, and a fully
functional, user-friendly website designed to reflect
the brand’s professionalism and services. This allin-one strategy positioned MTC Travels for longterm digital success, improved customer trust, and
enhanced visibility across online platforms.</p>
              </div>
               <div className="flex justify-end">
              <button
               onClick={()=>{window.open('https://mtc-travels.com/')}}
               className="cursor-pointer text-white text-sm hover:text-gray-300 transition-colors duration-300 underline">
                Click Here
              </button>
            </div>
              
              {/* Progress Bar */}
              <div className="w-60 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-8"></div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Bottom decorative elements */}
      {/* <div className="absolute bottom-8 left-8 flex space-x-2 z-10">
        <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="w-2 h-2 bg-red-400 rounded-full opacity-80"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
      </div> */}
      
      {/* Side accent */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
    </div>
  );
}