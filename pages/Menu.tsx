
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Cakes' | 'Cupcakes' | 'Pastries' | 'Donuts' | 'Cookies'>('All');

  const categories = ['All', 'Cakes', 'Cupcakes', 'Pastries', 'Donuts', 'Cookies'];

  const filteredItems = activeTab === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#FFF5F7] py-16 text-center">
        <h1 className="text-5xl font-bold font-serif mb-4">Our Sweet Menu</h1>
        <p className="text-[#8D6E63]">Every bite tells a story. Find yours below.</p>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 bg-white/95 backdrop-blur-sm z-30 shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === cat 
                ? 'bg-[#FF85A1] text-white shadow-lg scale-105' 
                : 'bg-[#FFF9F5] text-[#5D4037] hover:bg-[#FFD1DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row bg-[#FFF9F5] rounded-2xl overflow-hidden hover:shadow-md transition-all group border border-transparent hover:border-pink-100"
            >
              <div className="w-full sm:w-48 h-48 relative overflow-hidden shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 flex flex-col justify-center flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-serif group-hover:text-[#FF85A1] transition-colors">{item.name}</h3>
                  <span className="text-[#FF85A1] font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-[#8D6E63] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-300 bg-pink-50 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <button className="bg-white px-4 py-1.5 rounded-full text-sm font-bold border border-pink-100 text-[#FF85A1] hover:bg-[#FF85A1] hover:text-white transition-all shadow-sm">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="mt-20 p-8 rounded-2xl bg-gray-50 border-2 border-gray-100 text-center max-w-2xl mx-auto">
          <p className="text-gray-500 italic text-sm">
            * All prices are base rates and subject to change based on custom flavors, designs, and seasonal availability. 
            Standard cake orders require 48-hour notice. Tiered wedding cakes require at least 4 weeks advance booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
