import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Meta Tech Corps"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Meta Tech Corps</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-mtc-red flex items-center justify-center">
                  <svg className="w-4 h-4 text-mtc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300">+1 (945) 206-0214</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-mtc-red flex items-center justify-center">
                  <svg className="w-4 h-4 text-mtc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=sales.digimarkxperts@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-lg hover:text-mtc-red transition-colors duration-300 hover:underline"
                >                 
                   sales.digimarkxperts@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-mtc-red transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-mtc-red transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-mtc-red transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-mtc-red transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact-s" className="text-gray-300 hover:text-mtc-red transition-colors">Contact us</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-mtc-red transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-mtc-red transition-colors">Career</Link></li>
              <li><Link href="/help" className="text-gray-300 hover:text-mtc-red transition-colors">Help</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe Our Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-mtc-red"
              />
              <button className="bg-mtc-red text-black px-6 py-3 rounded-r-md font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-6">
                 <Link href="https://web.facebook.com/metatechcorpsss/?ref=pl_edit_xav_ig_profile_page_web#" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                 </Link>
                 
                 <Link href="https://www.instagram.com/metatechcorps/" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </Link>
                  <Link href="https://www.linkedin.com/company/metatechcorps/" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">Copyright © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;