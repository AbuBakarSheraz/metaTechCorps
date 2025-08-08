import React, { useEffect, useRef } from 'react';

function P1() {
  // Remove animated canvas - using static ribbon shapes instead

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
      <main className="relative z-10 px-8 md:px-32 mx-auto pt-20">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Main Content - Positioned left */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block">Let's Grow Your</span>
                <span className="block bg-gradient-to-r from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Business Together.
                </span>
              </h1>
            </div>

            <div className="space-y-6 mt-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                ABOUT<br />
                <span className="text-gray-400">US</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 text-sm lg:text-base leading-relaxed">
                <p>
                  We launched <span className="text-white font-semibold">Meta Tech Corps MTC</span> on 
                  <span className="text-white font-semibold"> September 15, 2022</span>, with one goal to help 
                  brands grow and stay ahead through smart, modern marketing while 
                  staying passionate about digital strategy has grown into a full-service 
                  agency offering <span className="text-red-400">AI driven</span>
                </p>
                
                <p>
                  <span className="text-white font-semibold">web development</span>, 
                  <span className="text-white font-semibold"> SEO </span> & much more.
                </p>
                
                <p>
                  We focus on real results <span className="text-white font-semibold">building</span> brand 
                  presence, driving traffic, and helping businesses thrive in the digital space. 
                  This is what we live and breathe for. <span className="text-red-400">Let's build</span>
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-60 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-8"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Ambient Light Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-red-600/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-red-500/8 to-transparent blur-3xl"></div>
    </div>
  );
}

export default P1;