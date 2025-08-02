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
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If page already loaded (in case useEffect runs after window.onload)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Herosection />
      <Slider />
      <div className="bg-black">
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
