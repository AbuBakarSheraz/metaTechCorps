"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Herosection from "./sections/Herosection";
import Slider from "./components/Slider";
import Aboutagency from "./components/Aboutagency";
import Services from "./components/Services";
import DigitalSuccessComponent from "./components/DigitalSuccess";
import ChooseUs from "./components/ChooseUs";
import Benefits from "./components/Benefits";
import JoinUs from "./components/JoinUs";
import Lwt from "./components/Lwt";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-blend-darken flex items-center justify-center z-50">
      <div className="relative">
        {/* Rotating circular loader */}
        <div className="absolute inset-0 w-32 h-32 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
        
        {/* Logo in the center */}
        <div className="w-32 h-32 flex items-center justify-center">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Method 1: Simple timer (2-3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Alternative useEffect for more realistic loading
  // useEffect(() => {
  //   // Method 2: Wait for page load + window load events
  //   const handleLoad = () => {
  //     // Add a small delay to ensure smooth transition
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 500);
  //   };

  //   if (document.readyState === 'complete') {
  //     handleLoad();
  //   } else {
  //     window.addEventListener('load', handleLoad);
  //     return () => window.removeEventListener('load', handleLoad);
  //   }
  // }, []);

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  // Show main content after loading
  return (
    <>
      <Herosection />
      <Slider/>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Aboutagency />
        <Services />
        <DigitalSuccessComponent />
        <ChooseUs />
        <Benefits />
        <JoinUs />
        <Lwt />
        <ContactUs />
        <Footer />
      </div>  
    </>
  );
}