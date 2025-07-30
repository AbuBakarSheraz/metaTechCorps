import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
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

export default LoadingScreen;