import React from 'react';

export default function DigitalSuccessComponent() {
  return (
    <div className="min-h-screen p-8 md:px-18 flex items-center justify-center bg-black">
      {/* Outer container with glowing red border */}
      <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-red-500 via-red-500 to-red-700 shadow-[0_0_40px_rgba(239,68,68,0.3)]">
        {/* Inner content area */}
        <div className="bg-black rounded-3xl p-8 md:p-16 relative overflow-hidden">
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 border border-gray-700 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 border border-gray-700 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-gray-700 rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left section */}
            <div className="space-y-12">
              <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                Expertise that drives digital <span className="text-red-500">success</span>
              </h1>

              <div className="space-y-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-red-500">+60%</div>
                  <p className="text-gray-300 text-lg">
                    By optimizing your website for<br />
                    search engines.
                  </p>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-bold text-red-500">+30%</div>
                  <p className="text-gray-300 text-lg">
                    Rise in revenue as more visitors<br />
                    convert into paying customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="space-y-12">
              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl mt-1">✱</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Social Media Management:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We build and enhance your brand's online presence with engaging content,
                    active management, and detailed analytics to grow your audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-red-500 text-2xl mt-1">✱</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">E-commerce Solutions:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Create seamless online shopping experiences with user-friendly design, 
                    secure checkout, and smart inventory management to boost sales.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
