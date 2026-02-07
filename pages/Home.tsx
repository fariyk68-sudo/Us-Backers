
import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <ImageSlider />
      
      {/* Welcome Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
        <span className="text-[#FF85A1] font-bold tracking-widest uppercase text-sm block mb-4 animate-bounce">Baked with Love</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">Welcome to Sweet Cravings</h2>
        <p className="text-lg text-[#8D6E63] max-w-3xl mx-auto leading-relaxed mb-12">
          From the aroma of fresh dough in the morning to the delicate icing on our signature wedding cakes, every piece from Sweet Cravings is a labor of love. We believe that life is better when it's sweet, and we're here to make sure your cravings are always satisfied.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Fresh Ingredients", 
              desc: "We source our flour, butter, and fruits from local farmers every single day.",
              icon: "🌾"
            },
            { 
              title: "Handmade Sweets", 
              desc: "No mass production. Everything is crafted by hand in our small boutique kitchen.",
              icon: "👨‍🍳"
            },
            { 
              title: "Custom Creations", 
              desc: "Your imagination is the limit. We create unique cakes for every unique story.",
              icon: "✨"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-[#FF85A1] group">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-serif">{item.title}</h3>
              <p className="text-[#8D6E63]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Mini Gallery */}
      <section className="bg-[#FFF5F7] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-2">Weekly Specialties</h2>
              <p className="text-[#8D6E63]">Our bakers' favorite picks for this week</p>
            </div>
            <Link to="/menu" className="mt-4 md:mt-0 text-[#FF85A1] font-bold flex items-center hover:underline">
              Browse Entire Menu <span className="ml-2">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Velvet Cloud Cake", price: "$32", img: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?q=80&w=400&auto=format&fit=crop" },
              { name: "Raspberry Macarons", price: "$18/doz", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop" },
              { name: "Almond Croissants", price: "$5", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop" },
              { name: "Gourmet Donuts", price: "$4", img: "https://images.unsplash.com/photo-1533910534207-90f31029a78e?q=80&w=400&auto=format&fit=crop" },
            ].map((prod, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-[#FF85A1] font-bold text-sm shadow-sm">
                    {prod.price}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-bold text-lg mb-1">{prod.name}</h4>
                  <button className="text-[#FF85A1] text-sm font-semibold hover:text-[#FF6B8E]">Quick Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-[#FFD1DC] rounded-3xl rotate-3 absolute inset-0 -z-10 translate-x-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1590133323030-949dd193a874?q=80&w=800&auto=format&fit=crop" 
              alt="Artisan mixing batter from scratch" 
              className="rounded-3xl shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-serif mb-6 leading-tight">Everything is Crafted From Scratch in our Kitchen.</h2>
            <p className="text-lg text-[#8D6E63] mb-8 leading-relaxed">
              We started in a small home kitchen with a big dream: to bring back the authentic taste of real baking. No preservatives, no shortcuts. Just pure, simple, high-quality ingredients transformed into art.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF85A1]/20 flex items-center justify-center mr-4 text-[#FF85A1]">✓</div>
                <p className="font-medium">100% Organic Flours and Local Dairy</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF85A1]/20 flex items-center justify-center mr-4 text-[#FF85A1]">✓</div>
                <p className="font-medium">Baked Fresh Every Morning at 4:00 AM</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF85A1]/20 flex items-center justify-center mr-4 text-[#FF85A1]">✓</div>
                <p className="font-medium">Award-winning Custom Wedding Cake Designs</p>
              </div>
            </div>
            <Link to="/about" className="inline-block bg-[#5D4037] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FF85A1] transition-colors">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF85A1] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif mb-6">Need a Special Cake for Your Event?</h2>
          <p className="text-xl mb-10 opacity-90 italic">"We don't just bake cakes, we create memories."</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-[#FF85A1] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">
              Book a Consultation
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#FF85A1] transition-all">
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
