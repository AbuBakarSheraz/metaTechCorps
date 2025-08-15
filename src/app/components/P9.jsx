import React from 'react';
import Image from 'next/image';
import img9 from '../assets/images/img9.png';

const P9 = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Red light effects */}
      {/* <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-red-600/40 via-red-500/20 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-red-600/40 via-red-500/20 to-transparent z-10"></div> */}
      
      <Image
        src={img9}
        alt="Beauty Transformations Gallery"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default P9;