import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Check, ArrowRight, User, Mail, Calendar, Clock, 
  MessageSquare, ArrowLeft, ShieldCheck, Sparkles, Trophy, 
  Camera, Briefcase, Heart 
} from 'lucide-react';

const BookingPage = () => {
  const [activeCategory, setActiveCategory] = useState('Regular');
  const [selectedPlan, setSelectedPlan] = useState('Half Day');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingData = {
    Regular: [
      { title: "Hourly", price: "1,999", details: "1 Pro Reel + Raw Access. Best for quick updates." },
      { title: "Half Day", price: "4,999", details: "4 Hours, 5 Reels + Trending Audio. Our most popular." },
      { title: "Full Day", price: "8,999", details: "8 Hours, 10+ Reels + Multi-location coverage." }
    ],
    Wedding: [
      { title: "Teaser", price: "12,000", details: "Cinematic Highlight Reel + Drone. 24hr Fast Delivery." },
      { title: "Traditional", price: "25,000", details: "Full Event Coverage + Social Media Optimized edits." },
      { title: "Premium", price: "45,000", details: "Multi-Camera + Long-form Doc + Luxury Photo Album." }
    ],
    Corporate: [
      { title: "Startup", price: "15,000", details: "Founder Story + HQ Audio + 2 Revision Rounds." },
      { title: "Professional", price: "35,000", details: "Office B-Roll + Testimonials + LinkedIn Optimized." },
      { title: "Enterprise", price: "75,000", details: "Brand Story + Multi-interviews + Full Ads Media Kit." }
    ]
  };

  const benefits = [
    { icon: <ShieldCheck size={18} />, text: "iPhone 16 Pro Quality" },
    { icon: <Trophy size={18} />, text: "Cinema Stabilization" },
    { icon: <Sparkles size={18} />, text: "Trending Hooks" }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-yellow-400">
      {/* Navbar */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-yellow-500 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </a>
          <div className="h-4 w-[1px] bg-gray-200 hidden md:block" />
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.location.href='/'}>
            <div className="bg-yellow-400 p-1 rounded-lg"><Zap size={20} fill="black" /></div>
            CVGPOST
          </div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 hidden sm:block">Production Booking • 2026</div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Secure Your <span className="text-yellow-500">Slot</span>
              </h1>
              
              {/* Category Toggles */}
              <div className="flex gap-2 p-1 bg-gray-100 rounded-2xl w-fit mb-8">
                {Object.keys(pricingData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedPlan(pricingData[cat][0].title);
                    }}
                    className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeCategory === cat ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Select {activeCategory} Plan</h3>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  {pricingData[activeCategory].map((plan) => (
                    <motion.div
                      key={plan.title}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => setSelectedPlan(plan.title)}
                      className={`p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all relative overflow-hidden ${
                        selectedPlan === plan.title ? 'border-yellow-400 bg-yellow-50 shadow-xl shadow-yellow-100/50' : 'border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <div>
                          <h4 className="font-black uppercase text-xl">{plan.title}</h4>
                          <p className="text-yellow-600 font-black tracking-tight text-lg">₹{plan.price}</p>
                        </div>
                        {selectedPlan === plan.title && (
                          <div className="bg-yellow-400 p-2 rounded-full"><Check size={18} strokeWidth={3} /></div>
                        )}
                      </div>
                      <p className={`mt-3 text-xs font-medium transition-colors ${selectedPlan === plan.title ? 'text-gray-700' : 'text-gray-400'}`}>
                        {plan.details}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-700">
                    <span className="text-yellow-500">{b.icon}</span> {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 md:p-12 rounded-[3.5rem] border-2 border-gray-100 shadow-2xl shadow-gray-100/50 relative overflow-hidden">
              {!submitted ? (
                <form onSubmit={async (e) => { 
    e.preventDefault(); 
    setIsSending(true); 
    
    const formData = new FormData(e.target);
    formData.append("Service Category", activeCategory);
    formData.append("Selected Plan", selectedPlan);

    try {
      const response = await fetch("https://formspree.io/f/xykprooo", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Network error.");
    } finally {
      setIsSending(false);
    }
  }} 
  className="space-y-6 relative z-10" // ISKO MAT HATANA (Keep this!)
>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input name ="Full Name" required placeholder="Enter Full Name" className="w-full bg-gray-50 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 focus:bg-white transition-all font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Email Contact</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input name ="Email Address" required type="email" placeholder="email@company.com" className="w-full bg-gray-50 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 focus:bg-white transition-all font-bold" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input name ="Booking date" required type="date" className="w-full bg-gray-50 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 focus:bg-white transition-all font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <select name ="Time Slot" className="w-full bg-gray-50 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 focus:bg-white transition-all font-bold appearance-none">
                          <option>Morning (10AM - 2PM)</option>
                          <option>Evening (3PM - 7PM)</option>
                          <option>Full Day Session</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-gray-400">Vision for this {activeCategory} Shoot</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-5 top-6 text-gray-400" size={18} />
                      <textarea name="Vision/Notes" placeholder={`What are we filming for your ${selectedPlan} session?`} className="w-full bg-gray-50 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 focus:bg-white transition-all font-bold h-32 resize-none"></textarea>
                    </div>
                  </div>

                  <button 
                    disabled={isSending} 
                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-xl flex items-center justify-center gap-3 group ${
                      isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-yellow-400 hover:text-black hover:scale-[1.02]'
                    }`}
                  >
                    {isSending ? "Sending Request..." : `Confirm ${selectedPlan} Booking`}
                    {!isSending && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              ) : (
                <div className="text-center py-20 relative z-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-200">
                    <Check size={48} strokeWidth={3} />
                  </motion.div>
                  <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Request Sent!</h2>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">We'll be in touch within 2 hours.</p>
                </div>
              )}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('booking-root')).render(<BookingPage />);