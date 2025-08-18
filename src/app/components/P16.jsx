import React from 'react';
import Image from 'next/image';
import sc1 from '../assets/images/sc1.jpg'
import sc2 from '../assets/images/sc2.jpg'
import sc3 from '../assets/images/sc3.jpg'
import sc4 from '../assets/images/sc4.jpg'
import tp1 from '../assets/images/tp1.jpg'
import tp2 from '../assets/images/tp2.jpg'




export default function P16() {
  return (
      <div className="px-8 md:px-22 py-4 bg-black text-white relative overflow-hidden">
        {/* Static Ribbon Shapes - Background */}
        <div className="absolute inset-0 z-0">
          {/* Main flowing ribbon shapes in MTC red */}
          <div className="absolute top-1/4 right-1/4 w-96 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
            <div className="absolute top-8 left-8 w-80 h-48 bg-gradient-to-br from-red-500/40 via-red-600/25 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
          </div>
          
          {/* Secondary ribbon curves */}
          <div className="absolute top-1/2 right-1/6 w-72 h-56">
            <div className="absolute inset-0 bg-gradient-to-bl from-red-600/25 via-red-500/15 to-transparent rounded-full transform rotate-12 blur-md"></div>
            <div className="absolute -top-4 -left-4 w-64 h-40 bg-gradient-to-br from-red-500/35 via-red-600/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
          </div>
          
          {/* Additional flowing elements */}
          <div className="absolute bottom-1/3 right-1/3 w-80 h-48">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-red-500/15 to-transparent rounded-full transform -rotate-30 blur-lg"></div>
          </div>
          
          {/* Accent ribbon pieces */}
          <div className="absolute top-1/3 right-1/2 w-48 h-32">
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
        <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold">
               SOCIALS & TRUST PILOTS 
              </h2>
            </div>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex gap-4'>
            <div className='my-4'>
              <Image
              alt='Socialmedia 1' 
              src={sc1}  
              height={350} 
              width={200}  
              className='p-2'            
              />
              <Image
              alt='Socialmedia 1' 
              src={sc2}
              height={350} 
              width={200}  
              className='p-2'              
              />
            </div>
            <div className='flex gap-4'>
              <div className='my-4'>
              <Image
              alt='Socialmedia 1' 
              src={sc3}   
              height={350} 
              width={200}  
              className='p-2'         
              />
              <Image
              alt='Socialmedia 1' 
              src={sc4}   
              height={350} 
              width={200}  
              className='p-2'           
              />
            </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='my-4'>
               <Image
              alt='Socialmedia 1' 
              src={tp1} 
              height={350} 
              width={200}  
              className='p-2'             
              />

            </div>
            <div className='my-4'>
               <Image
              alt='Socialmedia 1' 
              src={tp2}
              height={350} 
              width={200}  
              className='p-2'               
              />
          </div>
          </div>
           
        </div>
         <div className='float-right'>
              <p className='text-6xl md:text-9xl font-bold '>THANK YOU</p>
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