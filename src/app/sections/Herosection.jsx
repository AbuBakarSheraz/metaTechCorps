import React from 'react';
import Header from '../components/Header';
import Herotext from '../components/Herotext';

function Herosection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40 -z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col text-white">
        <Header />
        <Herotext />
      </div>
    </div>
  );
}

export default Herosection;