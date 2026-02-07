
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-[#FFF5F7] py-20 text-center mb-20 px-4">
        <h1 className="text-5xl font-bold font-serif mb-4">Our Sweet Journey</h1>
        <p className="text-xl text-[#8D6E63] max-w-2xl mx-auto italic font-light">"The story of passion, flour, and a lot of sugar."</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold font-serif mb-8 text-[#FF85A1]">The Beginning</h2>
            <p className="text-[#5D4037] leading-relaxed mb-6 text-lg">
              Sweet Cravings was born in 2010 when our head baker, Clara Sterling, decided to turn her childhood love for baking into a professional pursuit. What started in a tiny apartment in New York with a single oven has blossomed into the award-winning bakery we are today.
            </p>
            <p className="text-[#5D4037] leading-relaxed text-lg">
              Our philosophy has remained unchanged for over a decade: treat every customer like family and every cake like a masterpiece. We've stayed true to our roots by continuing to hand-knead our doughs and whisk our frostings manually to ensure that "homemade" soul in every bite.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=400&auto=format&fit=crop" alt="Bakery interior" className="rounded-2xl shadow-lg w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=400&auto=format&fit=crop" alt="Baking process" className="rounded-2xl shadow-lg w-full h-full object-cover translate-y-8" />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-[#5D4037] text-white rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-12 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 text-[15rem] leading-none transform translate-x-20 -translate-y-20">🍰</div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold font-serif mb-6 text-[#FFD1DC]">Our Mission</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              To spread joy and create lasting memories through premium artisanal baked goods, using sustainable practices and the finest local ingredients. We strive to be the sweet highlight of every celebration.
            </p>
          </div>
          <div className="w-px bg-white/20 hidden lg:block"></div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold font-serif mb-6 text-[#FFD1DC]">Our Vision</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              To redefine the modern bakery experience by blending traditional techniques with contemporary designs, becoming the gold standard for quality and creativity in the confectionery world.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-32">
          <h2 className="text-4xl font-bold font-serif mb-16">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Quality First", desc: "No artificial flavors, just pure extracts and fresh fruits.", icon: "✨" },
              { title: "Artisan Soul", desc: "Hand-crafted designs that reflect our artistic passion.", icon: "🎨" },
              { title: "Sustainability", desc: "Compostable packaging and minimal food waste.", icon: "🌿" },
              { title: "Community", desc: "Supporting local events and sourcing from nearby farms.", icon: "🤝" }
            ].map((value, i) => (
              <div key={i} className="group">
                <div className="text-4xl mb-4 bg-[#FFF5F7] w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#FF85A1] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 font-serif">{value.title}</h4>
                <p className="text-[#8D6E63]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
