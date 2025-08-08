import React from 'react';
import Image from 'next/image';
import tl from '../assets/images/tl.png'

export default function P3() {
  return (
    <div className="min-h-screen bg-black pb-8 text-white relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
      </div>

      {/* Abstract red flowing elements - right side */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
          <div className="absolute top-8 left-8 w-80 h-48 bg-gradient-to-br from-red-500/40 via-red-600/25 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
        </div>
        
        <div className="absolute top-1/2 right-1/6 w-72 h-56">
          <div className="absolute inset-0 bg-gradient-to-bl from-red-600/25 via-red-500/15 to-transparent rounded-full transform rotate-12 blur-md"></div>
          <div className="absolute -top-4 -left-4 w-64 h-40 bg-gradient-to-br from-red-500/35 via-red-600/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
        </div>
        
        {/* Abstract linear elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-32 bg-gradient-to-b from-red-500/50 to-red-600/30 transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-24 bg-gradient-to-b from-red-400/60 to-transparent transform -rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/2 w-3 h-20 bg-gradient-to-b from-red-500/40 to-transparent transform rotate-30"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 md:px-32 mx-auto">
        
        {/* Top Section - WHO ARE WE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - WHO ARE WE Title */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500" 
                      style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
                  WHO
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500"
                      style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
                  ARE
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500"
                      style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}>
                  WE?
                </span>
              </h1>
            </div>

      
          </div>
          
          {/* Right Column - Four Points with Glassy Background */}
          <div className="space-y-6">
            {/* Point 1 */}
            <div className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                1.
              </div>
              <div className="text-gray-300 text-sm">
                A leading business processing<br />
                agency in the US.
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                2.
              </div>
              <div className="text-gray-300 text-sm">
                Team of <span className="text-red-400">strategic creators</span><br />
                and <span className="text-red-400">digital innovators</span>.
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                3.
              </div>
              <div className="text-gray-300 text-sm">
                We believe in building <span className="text-red-400">deep</span><br />
                <span className="text-red-400">human connections</span>.
              </div>
            </div>

            {/* Point 4 */}
            <div className="flex items-center space-x-4 bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-600/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                4.
              </div>
              <div className="text-gray-300 text-sm">
                We value mastery not to<br />
                achieve it, but <span className="text-red-400">to pursue it</span>.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Top Left - Building Digital Success (Red Background) */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
              Building<br />
              Digital<br />
              Success<br />
              Since 2021.
            </h2>
          </div>
          
          {/* Top Right - City Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image src={tl} alt='Image'/> 
         
          </div>
          
          {/* Bottom Left - Description Text */}
          <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                Since 2022, we've been dedicated to helping businesses thrive in the digital space. What started as a small vision has grown into a full-scale agency trusted by clients across industries.
              </p>
              
              <p>
                From strategy to execution, we've been delivering smart, creative, and effective solutions that drive measurable business results.
              </p>
            </div>
          </div>
          
          {/* Bottom Right - Stats (Split into 2 parts) */}
          <div className="grid grid-cols-1 gap-4">
            
            {/* Experience Stats */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-red-400 mb-2">4+</div>
              <div className="text-sm text-gray-300 mb-2">Years of Experience</div>
              <div className="text-xs text-gray-400 leading-tight">
                With over 4 years of hands-on experience in digital marketing and business development, we've built expertise across multiple industries.
              </div>
            </div>
            
            {/* Clients Stats */}
            <div className="bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">180+</div>
              <div className="text-sm text-gray-300 mb-2">Satisfied Clients</div>
              <div className="text-xs text-gray-400 leading-tight">
                We're proud to have worked with businesses of all sizes, from startups to established enterprises, delivering consistent results.
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Ambient lighting effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-red-600/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-red-500/8 to-transparent blur-3xl"></div>
    </div>
  );
}