
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-[#FFF9F5]">
      {/* Header */}
      <div className="bg-[#FFF5F7] py-20 text-center px-4 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 text-9xl text-[#FFD1DC] opacity-30">🧁</div>
        <div className="absolute -bottom-10 -right-10 text-9xl text-[#FFD1DC] opacity-30 rotate-12">🥐</div>
        <h1 className="text-5xl font-bold font-serif mb-4 relative z-10">Our Premium Services</h1>
        <p className="text-xl text-[#8D6E63] max-w-2xl mx-auto italic font-light relative z-10">
          "From intimate mornings to grand celebrations, we provide the perfect sweet touch."
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-50">
              <div className="h-64 relative overflow-hidden group">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-4xl mr-3">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-white font-serif">{service.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#8D6E63] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-[#FF85A1] font-bold hover:underline">
                  Inquire Now <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* The Custom Order Journey */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-4">Your Custom Order Journey</h2>
            <p className="text-[#8D6E63] max-w-xl mx-auto">How we turn your sugar-coated dreams into edible reality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-dashed bg-[#FFD1DC] -z-10"></div>
            {[
              { step: "01", title: "Consultation", desc: "Share your theme, guest count, and flavor dreams with our planners.", icon: "💬" },
              { step: "02", title: "Design", desc: "Our artists create a custom sketch and color palette for your approval.", icon: "🎨" },
              { step: "03", title: "Tasting", desc: "Sample our signature pairings to find the perfect match for your palate.", icon: "🍴" },
              { step: "04", title: "Delivery", desc: "White-glove delivery and setup at your venue for a stress-free day.", icon: "✨" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50 text-center relative group hover:bg-[#FFF9F5] transition-colors">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF85A1] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-xl font-bold font-serif mb-2">{item.title}</h4>
                <p className="text-sm text-[#8D6E63]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Section CTA */}
        <div className="mt-32 relative group overflow-hidden rounded-[3rem]">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "linear-gradient(rgba(93, 64, 55, 0.8), rgba(93, 64, 55, 0.9)), url('https://images.unsplash.com/photo-1527733170411-2351feded875?q=80&w=1200&auto=format&fit=crop')" }}
          />
          <div className="relative p-12 lg:p-24 text-center z-10">
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 text-white">Dreaming of Something Unique?</h2>
            <p className="text-xl text-[#FFD1DC] mb-12 max-w-2xl mx-auto leading-relaxed">
              Whether it's a themed birthday extravaganza or a corporate branding event, we specialize in bespoke confections that tell your story. No request is too big or too sweet for our team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/contact" 
                className="bg-[#FF85A1] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#FF85A1] transition-all shadow-xl hover:-translate-y-1"
              >
                Discuss Your Custom Project
              </Link>
              <Link 
                to="/menu" 
                className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#5D4037] transition-all"
              >
                View Inspiration Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
