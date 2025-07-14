"use client"
import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuInstagram } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { TbGridDots } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pages', href: '#pages' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const socialLinks = [
    { Icon: FiLinkedin, href: 'https://www.linkedin.com/company/metatechcorps/', label: 'Twitter' },
    { Icon: LuInstagram, href: 'https://www.instagram.com/metatechcorps/', label: 'Instagram' },
    { Icon: FaFacebookF, href: 'https://web.facebook.com/metatechcorpsss/?ref=pl_edit_xav_ig_profile_page_web#', label: 'Facebook' }
  ];

  return (
    <>
      <header className="w-full relative z-40">
        <div className="">
          {/* Desktop Header */}
          <div className="flex items-center justify-around py-6 md:py-8">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Meta Tech Corps Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
              />
              <div className="ml-3 sm:ml-6 flex items-center">
                <h1 className="font-bold text-lg sm:text-xl lg:text-2xl text-white">
                  Meta Tech Corps
                </h1>
                <GoDotFill className="text-[#ff204d] ml-1 text-sm" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8 font-bold text-lg xl:text-xl">
                {navigationItems.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className={`transition-colors duration-200 hover:text-[#ff204d] ${
                        index === 0 ? 'text-[#ff204d]' : 'text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-6 text-[#ff204d]">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-xl lg:text-2xl hover:text-[#e01e3d] transition-colors duration-200"
                >
                  <Icon />
                </a>
              ))}
              <button
                aria-label="Menu"
                className="text-white text-xl lg:text-2xl hover:text-gray-300 transition-colors duration-200"
              >
                <TbGridDots />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 bg-[#c71539] rounded-md text-white hover:bg-red-600 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel */}
        <div className={`absolute top-0 left-0 h-full w-full  bg-[#c71539] transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-red-400">
            {/* <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Meta Tech Corps Logo" 
                className="h-10 w-10 object-contain"
              />*/}
              <div className="ml-3 flex items-center">
                <h2 className="font-bold text-lg text-white">
                  Meta Tech Corps
                </h2>
                <GoDotFill className="text-white ml-1 text-sm" />
              </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md text-white hover:bg-red-600 transition-colors duration-200"
              aria-label="Close menu"
            >
              <HiX className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="py-6 flex-1">
            <ul className="space-y-2">
              {navigationItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block px-6 py-4 text-lg font-semibold transition-colors duration-200 hover:bg-red-600 ${
                      index === 0 ? 'text-white ' : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Social Links */}
          <div className="p-6 border-t border-red-400">
            <div className="flex items-center justify-center space-x-8">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white text-2xl hover:text-red-200 transition-colors duration-200 p-2"
                >
                  <Icon />
                </a>
              ))}
              <button
                aria-label="Menu"
                className="text-white text-2xl hover:text-red-200 transition-colors duration-200 p-2"
              >
                <TbGridDots />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;