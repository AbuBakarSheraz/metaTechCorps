// import { Lin } from 'lucide-react';
import React from 'react';
import Link from 'next/link';


export default function Lwt() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-20">
         <div className="absolute top-20 left-20 w-72 h-72 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div> 
        <div className="absolute top-30 right-20 w-32 h-96 bg-mtc-red rounded-full mix-blend-multiply filter blur-xl "></div>
        <div className="absolute bottom-20 left-40 w-20 h-96 rounded-full bg-mtc-red mix-blend-multiply filter blur-xl "></div>
      </div>
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      {/* Geometric Pattern Background */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Header Text */}
        <div className="mb-8">
          <h1 className="text-white text-sm font-medium tracking-[0.2em] uppercase mb-6">
            LET'S COLLABORATE
          </h1>
        </div>
        
        {/* Main Typography */}
        <div className="relative">
          <div className="text-white font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.8] tracking-wide">
            <div className="mb-6 md:mb-14">LET'S WORK</div>
            <div className="relative md:mt-6">
              TOGETHER
              {/* Green Circle Button */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:-top-12 lg:-top-24">
                <Link 
                href='/contact-us'
                className="bg-mtc-red hover:bg-red-800 transition-colors duration-300 rounded-full w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center group">
                  <div className="text-center">
                    <div className="text-black font-bold text-xs md:text-sm lg:text-base mb-1">
                      Get In Touch
                    </div>
                    <div className="text-black transform group-hover:translate-x-1 transition-transform duration-300">
                      <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}