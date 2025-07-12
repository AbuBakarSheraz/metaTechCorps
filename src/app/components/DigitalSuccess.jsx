import React from 'react';

export default function DigitalSuccessComponent() {
  return (
    <div className="min-h-screen bg-black p-8 md:p-18 flex items-center justify-center">
      <div className="bg-black rounded-3xl p-4 relative overflow-hidden">
        {/* Custom gradient borders with inner radius */}
        <div className="absolute inset-0">
          {/* Border container with outer radius */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-500 to-transparent rounded-3xl">
            {/* Inner content area with inner radius - creates the border effect */}
            <div className="absolute inset-2 md:inset-5 bg-black rounded-2xl md:rounded-3xl"></div>
          </div>
          
          {/* Remove bottom border by overlaying black rectangle */}
          <div className="absolute bottom-0 left-0 right-0 h-2 md:h-5 bg-black"></div>
        </div>
        
        {/* Content container with padding to account for borders */}
        <div className="relative z-10 p-8 md:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-12">
              <div>
                <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                  Expertise that drives digital <span className="text-red-500">success</span>
                </h1>
              </div>
              
              {/* Statistics */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-4xl lg:text-5xl font-bold text-red-500">+60%</div>
                  <p className="text-gray-300 text-lg">
                    By optimizing your website for<br />
                    search engines.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="text-4xl lg:text-5xl font-bold text-red-500">+30%</div>
                  <p className="text-gray-300 text-lg">
                    Rise in revenue as more visitors<br />
                    convert into paying customers.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-12">
              {/* Social Media Management */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-mtc-red text-2xl mt-1">✱</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Social Media Management:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our social media management services focus on building and enhancing your 
                      brand's online presence. We create engaging content, manage your social media 
                      accounts, and analyze performance.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* E-commerce Solutions */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-mtc-red text-2xl mt-1">✱</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">E-commerce Solutions:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our e-commerce solutions are designed to create seamless online shopping experiences. 
                      From user-friendly website design to secure payment processing and inventory management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}