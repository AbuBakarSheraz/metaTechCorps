import React from 'react';
import Image from 'next/image';
import img from '../assets/images/image2.jpg';

export default function WhyChooseSection() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-gray-700 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-gray-700 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 border border-gray-700 rounded-full"></div>
      </div>

      <div className="relative z-10  mx-auto px-8 md:px-18 py-16">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="text-mtc-red text-2xl">✱</div>
              <span className="text-mtc-red font-semibold text-lg tracking-wider uppercase">
                WHY CHOOSE
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl leading-tight">
              Expertise for <span className="text-mtc-red font-bold">your digital </span>
              growth journey
            </h1>
          </div>
          
          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Service Cards */}
          <div className="space-y-8">
            {/* Data-Driven Approach */}
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Pricing</h3>
              <p className="text-gray-300 leading-relaxed">
                We offer our top-quality services at competitive prices, providing you with great value for your investment.
              </p>
            </div>

            {/* Ethical Business Practices */}
            <div className="bg-gray-900 bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Ethical Business Practices</h3>
              <p className="text-gray-300 leading-relaxed">
                We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.
              </p>
            </div>
          </div>

          {/* Right Side - Business Meeting Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={img} 
                alt="Business professionals in meeting discussing digital strategies"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-mtc-red rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}