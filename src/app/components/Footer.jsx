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
                <span className="text-gray-300">(309) 8855-314</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full border border-mtc-red flex items-center justify-center">
                  <svg className="w-4 h-4 text-mtc-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300">info@domainname.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-mtc-red transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-mtc-red transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-mtc-red transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-mtc-red transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-gray-300 hover:text-mtc-red transition-colors">Contact us</Link></li>
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
              <Link href="#" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-mtc-red flex items-center justify-center hover:bg-mtc-red hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.969.099.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
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