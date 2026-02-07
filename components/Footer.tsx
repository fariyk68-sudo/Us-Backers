
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5D4037] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-6 flex items-center">
              <span className="mr-2">🍰</span> Sweet Cravings
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Baking happiness since 2010. We use only the finest organic ingredients to create memories that last a lifetime.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF85A1] flex items-center justify-center hover:bg-white hover:text-[#FF85A1] transition-colors">
                <i className="fab fa-facebook-f"></i> f
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF85A1] flex items-center justify-center hover:bg-white hover:text-[#FF85A1] transition-colors">
                <i className="fab fa-instagram"></i> i
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#FF85A1] flex items-center justify-center hover:bg-white hover:text-[#FF85A1] transition-colors">
                <i className="fab fa-pinterest"></i> p
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-[#FFD1DC] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#FFD1DC] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#FFD1DC] transition-colors">Our Services</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-[#FFD1DC] transition-colors">Menu & Prices</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FFD1DC] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>123 Baker Street, Suite 456<br />Confectionary Heights, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>hello@sweetcravings.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">Get sweet updates and special discounts!</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border-none text-white focus:ring-2 focus:ring-[#FF85A1]"
              />
              <button className="w-full bg-[#FF85A1] text-white py-2 rounded-lg font-bold hover:bg-[#FF6B8E] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sweet Cravings Bakery. Designed with love and sugar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
