import React from 'react';

export default function P4() {
  return (
    <div className="bg-black text-white relative overflow-hidden py-12">
      
      {/* Top Section - Our Values */}
      <div className="relative z-10 px-8 ">
        {/* Red line at top */}
        
        <div className="px-8 md:px-32 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left - OUR VALUES Title */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-white">OUR</span>
                <span className="block text-white">VALUES</span>
              </h1>
              
              <div className="text-gray-300 text-base leading-relaxed">
                <p>
                  At MTC, our values guide every step we take. We believe in staying honest, thinking creatively, and putting our clients first. These principles help us build trust, deliver results, and grow together.
                </p>
              </div>
            </div>
            
            {/* Right - Three Value Cards */}
            <div className="space-y-6">
              
              {/* Integrity Card - Red */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 relative overflow-hidden">
                {/* Red diagonal accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-red-400/30 transform rotate-45 translate-x-12 translate-y-12"></div>
                <div className="absolute bottom-4 right-4 w-16 h-1 bg-red-300/50 transform rotate-45"></div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-red-100 text-sm leading-relaxed">
                  We stay true to our word, deliver what we promise, and always put honesty at the heart of our work.
                </p>
              </div>
              
              {/* Innovation Card - Light Gray */}
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl p-6 text-black">
                <h3 className="text-2xl font-bold text-black mb-3">Innovation</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We constantly explore new ideas and creative strategies to keep our clients ahead in the digital world.
                </p>
              </div>
              
              {/* Client Centric Approach Card - Dark with Glass Effect */}
              <div className="bg-gray-800/50 backdrop-blur-md border border-gray-600/30 rounded-2xl p-6 relative overflow-hidden">
                {/* Abstract glass-like elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Client Centric Approach</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We treat our clients' goals as our own, building lasting relationships through collaboration and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract curved elements in background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 z-0">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-gray-600/30 rounded-full"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-gradient-to-br from-gray-700/20 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Bottom Section - Projects We Are Proud Of */}
      <div className="relative z-10 px-8">
        {/* Red accent line */}
        <div className="px-8 md:px-32 mx-auto ">
        </div>
        
        <div className="px-8 md:px-32 mx-auto pt-12">
          <div className="grid grid-cols-1">
            
            {/* Left - Projects Text Content */}
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">PROJECTS, WE ARE</span>
                <span className="block text-white">PROUD OF</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 text-sm lg:text-base leading-relaxed">
                <p>
                  We take pride in delivering impactful projects that drive real results. From designing and developing high-performance websites to managing complete social media profiles with engaging visuals and content, our work speaks for itself.
                </p>
                
                <p>
                  We've helped clients grow through strategic SEO, optimized Google My Business profiles, and high converting Meta ad campaigns. Our customer support services ensure 24/7 responsiveness, while our business development strategies have guided brands toward sustainable digital growth.
                </p>
                
                <p>
                  Every project reflects our commitment to quality, creativity, and measurable success.
                </p>
              </div>
            </div>
            
            {/* Right - Abstract 3D Curved Elements */}
            <div className="relative h-10 flex items-center justify-center">
              {/* Abstract curved shapes */}
              <div className="absolute inset-0">
                {/* Main curved element */}
                <div className="absolute bottom-1/4 right-1/4 w-64 h-48 bg-gradient-to-br from-red-500/40 via-red-400/30 to-transparent rounded-full transform rotate-45 blur-sm"></div>
                <div className="absolute bottom-1/3 right-1/3 w-48 h-36 bg-gradient-to-bl from-red-600/50 via-red-500/35 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
                
                {/* Secondary curved elements */}
                <div className="absolute bottom-1/4 right-1/2 w-56 h-40 bg-gradient-to-tr from-purple-500/30 via-red-400/25 to-transparent rounded-full transform rotate-30 blur-md"></div>
                <div className="absolute top-1/2 right-1/6 w-40 h-32 bg-gradient-to-br from-red-400/40 to-transparent rounded-full transform -rotate-45 blur-sm"></div>
                
                {/* Glass-like overlay elements */}
                <div className="absolute top-1/3 right-1/4 w-32 h-24 bg-white/10 backdrop-blur-sm rounded-full transform rotate-12"></div>
                <div className="absolute bottom-1/3 right-1/3 w-24 h-20 bg-white/8 backdrop-blur-sm rounded-full transform -rotate-30"></div>
                
                {/* Linear accent elements */}
                <div className="absolute top-1/2 right-1/3 w-1 h-16 bg-gradient-to-b from-red-400/60 to-transparent transform rotate-45"></div>
                <div className="absolute bottom-1/2 right-1/4 w-2 h-12 bg-gradient-to-b from-red-500/50 to-transparent transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background ambient effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-red-600/10 to-transparent blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-red-500/8 to-transparent blur-3xl"></div>
    </div>
  );
}