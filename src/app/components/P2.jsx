import React from 'react';

export default function P2() {
  return (
    <div className="pb-14 bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
        {/* Main flowing ribbon shapes in MTC red */}
        <div className="absolute top-1/4 left-1/6 w-96 h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-500/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
          <div className="absolute top-8 left-8 w-80 h-48 bg-gradient-to-br from-red-500/40 via-red-600/25 to-transparent rounded-full transform -rotate-12 blur-sm"></div>
        </div>
        
        {/* Secondary ribbon curves */}
        <div className="absolute top-1/2 left-1/5 w-72 h-56">
          <div className="absolute inset-0 bg-gradient-to-bl from-red-600/25 via-red-500/15 to-transparent rounded-full transform rotate-12 blur-md"></div>
          <div className="absolute -top-4 -left-4 w-64 h-40 bg-gradient-to-br from-red-500/35 via-red-600/20 to-transparent rounded-full transform rotate-45 blur-sm"></div>
        </div>
        
        {/* Additional flowing elements */}
        <div className="absolute bottom-1/3left-1/4 w-80 h-48">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-red-500/15 to-transparent rounded-full transform -rotate-30 blur-lg"></div>
        </div>
        
        {/* Accent ribbon pieces */}
        <div className="absolute top-1/3 left-1/7 w-48 h-32">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent rounded-full transform rotate-60 blur-sm"></div>
        </div>
      </div>
      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div> */}
      
      {/* Subtle animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Top right AI indicator */}
      
      
      {/* Main Content */}
      <main className="relative z-10 px-8 md:px-32 mx-auto pt-12">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Main Content - Positioned left */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold">
                Our<br />
                <span className="text-gray-400">Goal</span>
              </h2>
            </div>

            <div className="space-y-6 mt-8">
              <div className="space-y-4 text-gray-300 text-sm lg:text-base leading-relaxed">
                <p>
                  At MTC, our goal is to <span className="text-red-400 font-semibold">bridge global excellence with local insight</span> as a leading business processing agency operating in the US. We are a dynamic team of strategic creators and digital innovators, committed to delivering results that go beyond expectations.
                </p>
                
                <p>
                  What drives us is the pursuit of mastery not as a destination, but as a <span className="text-white font-semibold">continuous journey</span> of growth, refinement, and impact.
                </p>
                
                <p>
                  Above all, we believe that the strongest results come from <span className="text-red-400">genuine human connection</span>, deep, meaningful partnerships that transform businesses and the people behind them.
                </p>
              </div>
              
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