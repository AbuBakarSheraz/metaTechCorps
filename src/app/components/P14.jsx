import React from 'react';
import Image from 'next/image';
import img from '../assets/images/metaads.jpg'


export default function P14() {
  return (
      <div className="px-8 md:px-22 py-4 bg-black text-white relative overflow-hidden">
        {/* Static Ribbon Shapes - Background */}
        <div className="absolute inset-0 z-0">
          {/* Main flowing ribbon shapes in MTC red */}
          <div className="absolute top-1/4 left-1/4 w-96 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
            <div className="absolute top-8 left-8 w-80 h-48 bg-gradient-to-br from-red-500/40 via-red-600/25 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
          </div>
          
          {/* Secondary ribbon curves */}
          <div className="absolute top-1/2 left-1/6 w-72 h-56">
            <div className="absolute inset-0 bg-gradient-to-bl from-red-600/25 via-red-500/15 to-transparent rounded-full transform rotate-12 blur-md"></div>
            <div className="absolute -top-4 -left-4 w-64 h-40 bg-gradient-to-br from-red-500/35 via-red-600/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
          </div>
          
          {/* Additional flowing elements */}
          <div className="absolute bottom-1/3 left-1/3 w-80 h-48">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-red-500/15 to-transparent rounded-full transform -rotate-30 blur-lg"></div>
          </div>
          
          {/* Accent ribbon pieces */}
          <div className="absolute top-1/3 left-1/2 w-48 h-32">
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
      
      {/* Main Content */}
      <main className="relative z-10  pt-12">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Main Content - Positioned left */}
          <div className=" space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold">
               
               Room Mantra
              </h2>
              <p className='text-lg' >Meta AD Campaign</p>

            </div>
            <div>
              <Image
              alt='meta ads image'
              src={img}
              className='mx-auto w-full'
              />
            </div>

            <div className="space-y-6 mt-8">
              <div className="space-y-4 text-gray-300 text-sm lg:text-base leading-relaxed">
                <p>
                 We successfully executed a performance-driven Meta ad campaign for Room Mantra, a real estate
brand, focusing on lead generation. The campaign consisted of 12 ad sets, each with 3 custom
creatives, and a budget of $50 per ad set. Over the course of the campaign, we strategically optimized
the ads, spending a total of $37,994, and generated 2,111 qualified leads at an efficient Cost Per Result
(CPR) of $18. The campaign also achieved a strong scroll stop rate of 20.73% and a hold rate of 5.62%,
indicating high engagement and relevance of the creatives. This campaign not only drove solid leads
but also boosted brand visibility across the real estate audience segment.
</p>
              </div>
               {/* <div className="flex justify-end">
              <button
               onClick={()=>{window.open('https://www.google.com/maps/place/Shimaa+Beauty+Center+Arlington/@32.744603,-97.1309321,17z/data=!3m1!4b1!4m6!3m5!1s0x864e8694aaa579ed:0x2c6db48555ee0573!8m2!3d32.744603!4d-97.1309321!16s%2Fg%2F11hctkv0ld?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D')}}
               className="cursor-pointer text-white text-sm hover:text-gray-300 transition-colors duration-300 underline">
                Click Here
              </button>
            </div> */}
              
              {/* Progress Bar */}
              <div className="w-60 h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-8"></div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Bottom decorative elements */}
      {/* <div className="absolute bottom-8 left-8 flex space-x-2 z-10">
        <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="w-2 h-2 bg-red-400 rounded-full opacity-80"></div>
        <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
      </div> */}
      
      {/* Side accent */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent"></div>
    </div>
  );
}