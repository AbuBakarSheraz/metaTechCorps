import React from 'react'
import Image from 'next/image'
import img from '../assets/images/rmbefore.jpg';
import img1 from '../assets/images/rmafter.jpg';

function P12() {
  return (
    <>
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

        {/* Main Content Layout */}
        <div className='flex flex-col md:flex-row justify-center items-center w-full relative z-10'>
          {/* Left Gray Div with "Before" text */}
          <div className='bg-gray-600 backdrop-blur-sm flex items-center justify-center h-15 md:h-30 w-[45%] shadow-2xl'>
            <h2 className='text-4xl md:text-8xl font-bold text-white tracking-wider'>
              Before
            </h2>
          </div>
          
          {/* Center Image */}
          <div className=''>
            <Image 
               src={img} 
               alt="Analytics Dashboard Before" 
               width={800}
               height={700}
               className="drop-shadow-2xl rounded-2xl object-cover" 
            />
          </div>
          
          {/* Right Gray Div */}
          <div className='bg-gray-600 backdrop-blur-sm h-15 md:h-30 w-[15%]  shadow-2xl'>
            {/* You can add content here if needed */}
          </div>
        </div>
        <div>
            <p className=' px-8 py-8 md:px-24 text-2xl'>
                Before implementing our SEO strategy, RM Physio had limited visibility in search results.
The average position stood at 32.2, placing them on the third or fourth page of search
results, which greatly affected traffic. Their Click-Through Rate (CTR) was just 0.9%, with
only 78 total clicks from 8.79K impressions. These numbers reflected a need for
improved keyword targeting, on-page optimization, and local SEO enhancements.
            </p>
        </div>
         <div className='flex flex-col md:flex-row justify-center items-center w-full relative z-10'>
          {/* Left Gray Div with "Before" text */}
          <div className='bg-gray-600 backdrop-blur-sm flex items-center justify-center h-15 md:h-30 w-[45%] shadow-2xl'>
            <h2 className='text-4xl md:text-8xl font-bold text-white tracking-wider'>
              AFTER
            </h2>
          </div>
          
          {/* Center Image */}
          <div className=''>
            <Image 
               src={img1} 
               alt="Analytics Dashboard Before" 
               width={800}
               height={700}
               className="drop-shadow-2xl rounded-2xl object-cover" 
            />
          </div>
          
          {/* Right Gray Div */}
          <div className='bg-gray-600 backdrop-blur-sm h-15 md:h-30 w-[15%]  shadow-2xl'>
            {/* You can add content here if needed */}
          </div>
        </div>
        <div>
            <p className=' px-8 py-8 md:px-24 text-2xl'>
                Following our SEO work, RM Physio experienced a noticeable improvement. The average
position improved to 27.3, moving them closer to the first page of search results.
Impressions saw a dramatic rise to 38.6K, and total clicks increased to 324, despite a
slight dip in CTR to 0.8% due to higher reach. This growth indicates stronger keyword
relevance and improved content visibility across a broader audience.

            </p>
        </div>
      </div>
    </>
  )
}

export default P12