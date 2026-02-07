
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="bg-[#FFF5F7] py-20 text-center mb-16 px-4">
        <h1 className="text-5xl font-bold font-serif mb-4">Say Hello!</h1>
        <p className="text-xl text-[#8D6E63]">We'd love to hear about your next celebration.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-pink-50 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4 text-[#FF85A1]">📞</div>
            <h3 className="text-xl font-bold font-serif mb-2">Call Us</h3>
            <p className="text-gray-600">(555) 123-4567</p>
            <p className="text-gray-600">(555) 987-6543</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-pink-50 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4 text-[#FF85A1]">✉️</div>
            <h3 className="text-xl font-bold font-serif mb-2">Email Us</h3>
            <p className="text-gray-600">hello@sweetcravings.com</p>
            <p className="text-gray-600">orders@sweetcravings.com</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-pink-50 hover:shadow-xl transition-all">
            <div className="text-4xl mb-4 text-[#FF85A1]">🕒</div>
            <h3 className="text-xl font-bold font-serif mb-2">Open Hours</h3>
            <p className="text-gray-600">Mon-Fri: 7:00 AM - 7:00 PM</p>
            <p className="text-gray-600">Sat-Sun: 8:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-pink-50">
            <h2 className="text-3xl font-bold font-serif mb-8 text-[#FF85A1]">Send us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl animate-bounce text-center">
                <p className="font-bold text-lg mb-2">Message Sent Successfully! ✨</p>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#5D4037] mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FF85A1] transition-all outline-none"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#5D4037] mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FF85A1] transition-all outline-none"
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#5D4037] mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FF85A1] transition-all outline-none"
                    placeholder="(555) 000-0000"
                    value={formState.phone}
                    onChange={(e) => setFormState({...formState, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#5D4037] mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-[#FF85A1] transition-all outline-none resize-none"
                    placeholder="Tell us about your order or question..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#FF85A1] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#FF6B8E] transition-all shadow-lg hover:shadow-[#FF85A1]/30">
                  Submit Request
                </button>
              </form>
            )}
          </div>

          {/* Map and Address */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold font-serif mb-4 text-[#5D4037]">Visit Our Boutique</h2>
              <p className="text-lg text-gray-600 mb-2">123 Baker Street, Suite 456</p>
              <p className="text-lg text-gray-600 mb-6">Confectionary Heights, NY 10001</p>
            </div>
            <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                title="Bakery Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133593306!2d-73.98773128459418!3d40.75807967932689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1653561330000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
