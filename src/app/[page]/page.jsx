'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import bgimg from './page-header-bg.jpg'; // make sure the path is correct
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Aboutagency from '../components/Aboutagency';
import Slider from '../components/Slider';
import Lwt from '../components/Lwt';
import Services from "../components/Services";
import DigitalSuccessComponent from "../components/DigitalSuccess";
import ChooseUs from "../components/ChooseUs";
import Benefits from "../components/Benefits";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
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

export default function DynamicPage() {
  const params = useParams();
  const slug = params.page;
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
    <div
      className=""
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      <Header />
      <hr className="h-[0.5px] bg-black border-0" />
      <div className='h-[45vh] w-full flex flex-col items-center justify-center'>
      <h1 className="text-white text-3xl font-bold capitalize">
        {slug?.replace('-', ' ')}
      </h1>
      <h2>Home * <span className='text-mtc-red'>{slug?.replace('-', ' ')}</span></h2>
      </div>
    </div>
    <Slider/>
    <ContactUs />
    <Aboutagency />
    <Services />
    <DigitalSuccessComponent />
    <ChooseUs />
    <Benefits />
    <JoinUs />
    <Lwt />
    <Footer />

    </>
  );
}
