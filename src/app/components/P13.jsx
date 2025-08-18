import React from 'react'
import Image from 'next/image'
import img from '../assets/images/rmbefore.jpg';
import img1 from '../assets/images/rmafter.jpg';
import img2 from '../assets/images/3d.png';


function P13() {
  return (
    <>
      <div className="p-8 md:px-22  bg-black text-white relative overflow-hidden">
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
       
        {/* Header Section */}
        <div className="relative z-10">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
            Growth Map
          </h1>
          <div className="border-b-4 border-white w-80 mb-2"></div>
          <p className="text-2xl md:text-3xl text-white font-light">
            Performance Increase
          </p>
        </div>

        {/* Main Content Layout */}
        <div className='flex flex-col md:flex-row justify-between items-center mt-12 gap-20 md:gap-4 w-full relative z-10'>
          {/* Left 3D Element Placeholder */}
          <div className='flex-shrink-0'>
            <div className="border border-gray-700/30 flex items-center justify-center">
              {/* You can replace this with your 3D element or image */}
              <div className="text-gray-400 text-center">
                <Image
                src={img2}
                width={500}
                height={500}
                className="drop-shadow-2xl rounded-2xl object-cover" 
                />
                </div>
            </div>
          </div>
          
          {/* Right Performance Metrics */}
<div className=''>
            <div className="flex  gap-4">
              {/* Average Position - Shortest */}
              <div className="bg-gradient-to-br from-red-900 to-red-700 p-6 rounded-2xl shadow-2xl h-64 w-32 flex flex-col justify-end">
                <p className="text-white text-3xl font-bold mb-4">~15.2%</p>
                <p className="text-white text-sm font-medium mb-1">Average</p>
                <p className="text-white text-sm font-medium mb-1">Position</p>
                <p className="text-white text-sm font-medium">improved</p>
              </div>
              
              {/* Clicks Increased - Medium */}
              <div className="bg-gradient-to-br from-red-800 to-red-600 p-6 rounded-2xl shadow-2xl h-80 w-32 flex flex-col justify-end">
                <p className="text-white text-3xl font-bold mb-4">+315%</p>
                <p className="text-white text-sm font-medium mb-1">Clicks</p>
                <p className="text-white text-sm font-medium">increased</p>
              </div>
              
              {/* Impressions Increased - Tallest */}
              <div className="bg-gradient-to-br from-red-700 to-red-500 p-6 rounded-2xl shadow-2xl h-96 w-32 flex flex-col justify-end">
                <p className="text-white text-3xl font-bold mb-4">+339%</p>
                <p className="text-white text-sm font-medium mb-1">Impressions</p>
                <p className="text-white text-sm font-medium">increased</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default P13