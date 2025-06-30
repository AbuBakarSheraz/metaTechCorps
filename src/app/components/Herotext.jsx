"use client"
import React, { useState, useEffect } from 'react';
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

function Herotext() {
  const [currentService, setCurrentService] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const services = [
    "Digital Marketing",
    "SEO",
    "Google My Buisness", 
    "Web Development",
    "Graphics Design"
  ];

  useEffect(() => {
    const currentServiceText = services[currentService];
    let timeoutId;

    if (isTyping) {
      // Typing effect
      if (displayText.length < currentServiceText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentServiceText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next service and start typing
        setCurrentService((prev) => (prev + 1) % services.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentService, services]);

  return (
    <div className="flex-1 flex items-center justify-center px-6 py-8">
      {/* Main Content */}
      <div className="w-full mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl xl:text-8xl font-light text-white leading-tight mb-4">
            Innovative Artificial Intelligence solutions for
          </h1>
          <div className="relative flex items-center justify-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#c71539] to-[#ff4d6d] bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        {/* Description and Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 px-12 mt-12">
          {/* Play Button with Rotating Text */}
          <div className="relative flex-shrink-0">
            <div className="relative w-32 h-32">
              {/* Rotating Text Circle */}
              <div className="absolute inset-0 animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 128 128">
                  <defs>
                    <path
                      id="circle"
                      d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                    />
                  </defs>
                  <text className="text-xs fill-gray-400 font-medium">
                    <textPath href="#circle" startOffset="0%">
                      LEARN MORE • TELL YOUR STORY • LEARN MORE • 
                    </textPath>
                  </text>
                </svg>
              </div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#c71539] rounded-full flex items-center justify-center hover:bg-[#a01230] transition-colors cursor-pointer group">
                  <MdOutlinePlayCircleFilled className="text-white text-2xl group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="flex-1 max-w-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-16">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
            Get In Touch
          </button>
          {/* <button className="bg-[#c71539] hover:bg-[#a01230] text-white px-6 py-4 rounded-full transition-all duration-300 flex items-center justify-center group">
            <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
          </button> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Herotext;