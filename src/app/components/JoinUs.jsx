import React from 'react';
import { ArrowUpRight, Facebook, Linkedin, Instagram } from 'lucide-react';

const JoinUs = () => {
  return (
    <div className="min-h-screen  text-white relative overflow-hidden">
      {/* Animated background elements */}
       <div className="absolute inset-0 opacity-20">
         <div className="absolute top-20 left-20 w-72 h-72 border-8 border-mtc-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div> 
        <div className="absolute top-30 right-20 w-32 h-96 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute bottom-20 left-40 w-20 h-96 rounded-full bg-mtc-red mix-blend-multiply filter blur-xl "></div>
      </div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Header and Main Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-mtc-red rounded-full flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500">
                <span className="text-black font-bold text-sm">✱</span>
              </div>
              <span className="text-lg font-semibold tracking-wide">JOIN AGENCY</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Join our{' '}
                <span className="text-mtc-red relative">
                  agency
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-mtc-red transform origin-left scale-x-0 animate-pulse"></div>
                </span>
                {' '}of creative innovators
              </h1>
              
              {/* Decorative dot */}
              <div className="w-3 h-3 bg-mtc-red rounded-full ml-4 animate-bounce"></div>
            </div>
          </div>
          
          {/* Right side - Description and Social Links */}
          <div className="space-y-12">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make their mark in the creative industry.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="space-y-8">
              {/* Twitter */}
              <div className="group">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-mtc-red transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-mtc-red rounded-full flex items-center justify-center group-hover:bg-mtc-red transition-colors duration-300">
                    <Facebook className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Follow Us On Facebook</h3>
                    <p className="text-gray-400">@MTC</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-mtc-red transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* LinkedIn */}
              <div className="group">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-mtc-red rounded-full flex items-center justify-center group-hover:bg-mtc-red transition-colors duration-300">
                    <Linkedin className="w-7 h-7 text-black bg-mtc-red" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Join Us On LinkedIn</h3>
                    <p className="text-gray-400">user.artistic_official</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-red-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Instagram */}
              <div className="group">
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-14 h-14 bg-mtc-red rounded-full flex items-center justify-center group-hover:bg-mtc-red transition-colors duration-300">
                    <Instagram className="w-7 h-7 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Follow On Instagram</h3>
                    <p className="text-gray-400">@artistic_insta_official</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-red-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mtc-red rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-mtc-red rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-mtc-red rounded-full animate-bounce"></div>
    </div>
  );
};

export default JoinUs;