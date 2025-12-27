import React, { useState, useEffect } from 'react';
import { ShoppingBag, Instagram, Mail, Menu, X, Heart, Star, Send, ArrowRight, CheckCircle } from 'lucide-react';

// Local bag images
import bag1 from '../image_bags/3rnb.jpeg';
import bag2 from '../image_bags/red-b1.jpeg';
import bag3 from '../image_bags/rnb-1.jpeg';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "The Blossom Tote",
      price: "₹1,299",
      category: "bags",
      image: bag1,
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Pastel Granny Square",
      price: "₹1,499",
      category: "bags",
      image: bag2,
      tag: "New Arrival"
    },
    {
      id: 3,
      name: "Crochet Tulip Bouquet",
      price: "₹599",
      category: "flowers",
      image: "https://images.unsplash.com/photo-1618331395998-f5e933d7eb45?auto=format&fit=crop&q=80&w=800",
      tag: "Gift Special"
    },
    {
      id: 4,
      name: "Boho Beach Net",
      price: "₹999",
      category: "bags",
      image: bag3,
      tag: "Summer Edit"
    },
    {
      id: 5,
      name: "Amigurumi Bear Charm",
      price: "₹199",
      category: "keychains",
      image: "https://images.unsplash.com/photo-1597148564858-a92c36cb12b6?auto=format&fit=crop&q=80&w=800",
      tag: null
    },
    {
      id: 6,
      name: "Sunflower Bag Charm",
      price: "₹249",
      category: "keychains",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1dad1fb56?auto=format&fit=crop&q=80&w=800",
      tag: "Limited"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-rose-200">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center text-white">
              <span className="font-serif text-xl italic font-bold">R</span>
            </div>
            <span className="text-xl md:text-2xl font-serif font-medium tracking-wide">Rukaiya Crochet Bags<span className="text-rose-400">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-stone-500">
            <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
            <a href="#collection" className="hover:text-rose-400 transition-colors">Collection</a>
            <a href="#about" className="hover:text-rose-400 transition-colors">About</a>
            <a href="#reseller" className="hover:text-rose-400 transition-colors">Wholesale</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-rose-50 rounded-full transition-colors text-stone-600">
              <Instagram size={20} />
            </button>
            <a href="#reseller" className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-rose-200">
              Reseller Inquiry
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-4 md:hidden border-t border-stone-100 animate-fade-in-down">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">Home</a>
            <a href="#collection" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">Collection</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-stone-600">About</a>
            <a href="#reseller" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-rose-500">Become a Reseller</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold tracking-widest uppercase">
                <Star size={12} fill="currentColor" /> Handcrafted with Love
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-stone-900">
                Slow Fashion <br />
                <span className="italic text-rose-400">Woven</span> by Hand
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Discover our collection of handmade crochet bags. Each stitch tells a story of patience, art, and timeless style.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="#collection" className="px-8 py-4 bg-rose-400 text-white rounded-full font-medium hover:bg-rose-500 transition-colors shadow-lg shadow-rose-200 flex items-center gap-2">
                  Shop Collection <ShoppingBag size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-full font-medium hover:bg-stone-50 transition-colors flex items-center gap-2">
                  View on Instagram <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800" 
                  alt="Crochet Bag" 
                  className="w-full h-full object-cover"
                />
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                      <Heart size={20} fill="currentColor" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800">100% Handmade</p>
                      <p className="text-xs text-stone-500">Premium cotton yarn</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pattern bg behind image */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-stone-200 rounded-[3rem]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="bg-rose-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Customizable Colors", desc: "Pick your palette for any design", icon: "🎨" },
              { title: "Eco-Friendly Yarn", desc: "Sustainable & durable materials", icon: "🌿" },
              { title: "Pan-India Shipping", desc: "Delivered safely to your doorstep", icon: "🚚" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors cursor-default">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="font-bold text-stone-800">{feature.title}</h3>
                  <p className="text-sm text-stone-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <section id="collection" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-2 block">Our Gallery</span>
            <h2 className="text-4xl font-serif text-stone-900 mb-6">Curated with Passion</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {['all', 'bags', 'flowers', 'keychains'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-stone-900 text-white shadow-lg' 
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-square bg-stone-100 rounded-3xl overflow-hidden mb-4 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.tag}
                    </div>
                  )}
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 hover:text-rose-500 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <Instagram size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 hover:text-rose-500 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-stone-800">{product.name}</h3>
                    <span className="text-rose-500 font-bold">{product.price}</span>
                  </div>
                  <p className="text-sm text-stone-500 mt-1 capitalize">{product.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="https://instagram.com" className="inline-flex items-center gap-2 text-stone-500 hover:text-rose-500 font-medium transition-colors border-b border-transparent hover:border-rose-500 pb-1">
              View More on Instagram <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* About / Reseller Split Section */}
      <section id="reseller" className="py-24 bg-rose-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <span className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-2">Business Opportunities</span>
                <h2 className="text-4xl font-serif text-stone-900 mb-6">Partner with Rukaiya</h2>
                <p className="text-stone-600 leading-relaxed mb-8">
                  We love collaborating with boutiques and resellers. Our handcrafted crochet bags make the perfect addition to curated collections. We offer competitive pricing for bulk orders with customization options available.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Wholesale pricing for bulk orders",
                    "Custom color palettes for your brand",
                    "Priority manufacturing & shipping",
                    "Low Minimum Order Quantity (MOQ)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-700">
                      <CheckCircle size={20} className="text-teal-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-12 lg:p-20 border-l border-stone-100">
                <h3 className="text-xl font-bold text-stone-800 mb-6">Bulk Order Inquiry</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-500 uppercase">First Name</label>
                      <input type="text" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 transition-colors" placeholder="Jane" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-stone-500 uppercase">Last Name</label>
                      <input type="text" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-500 uppercase">Email Address</label>
                    <input type="email" className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-rose-400 transition-colors" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-stone-500 uppercase">Message / Quantity Estimate</label>
                    <textarea className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-rose-400 transition-colors resize-none" placeholder="I'm interested in ordering 20 totes..."></textarea>
                  </div>

                  <button className="w-full bg-stone-900 text-white font-medium py-4 rounded-lg hover:bg-stone-800 transition-colors flex justify-center items-center gap-2 shadow-lg">
                    Send Inquiry <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div>
              <span className="text-3xl font-serif text-white block mb-2">Rukaiya Crochet Bags<span className="text-rose-400">.</span></span>
              <p className="max-w-xs">Weaving dreams into reality, one stitch at a time. Handcrafted in India.</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <p>&copy; 2024 Rukaiya Crochet Bags. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Shipping</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;