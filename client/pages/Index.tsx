import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Star, Clock, Utensils, Shield, Award, ChefHat, Instagram, MessageCircle } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Plain Dosa", category: "main" },
    { name: "Karam Dosa", category: "main" },
    { name: "Masala Dosa", category: "main" },
    { name: "Karam Masala Dosa", category: "main" },
    { name: "Ghee Karam Dosa", category: "main" },
    { name: "Ghee Masala Dosa", category: "main" },
    { name: "Idly", category: "main" },
    { name: "Vada", category: "main" },
    { name: "Poori", category: "main" },
    { name: "Bonda", category: "main" },
    { name: "Pongal", category: "main" },
  ];

  const sideDishes = [
    { name: "Coconut Chutney" },
    { name: "Red Chilli Onion Chutney" },
    { name: "Masala for Poori" },
    { name: "Sambar" },
  ];

  const signatureDishes = [
    {
      name: "Masala Dosa",
      image: "https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg",
      description: "Golden crispy dosa filled with spiced potato masala, served with coconut chutney and sambar. Our most popular dish!"
    },
    {
      name: "Karam Dosa",
      image: "https://images.pexels.com/photos/20422133/pexels-photo-20422133.jpeg",
      description: "Spicy dosa with special karam powder that adds a fiery kick to every bite. Perfect for spice lovers!"
    },
    {
      name: "Plain Dosa",
      image: "https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg",
      description: "Classic thin and crispy dosa, light and delicious. The perfect canvas for our homemade chutneys."
    }
  ];

  const services = [
    {
      icon: Utensils,
      title: "Authentic South Indian Cuisine",
      description: "Traditional recipes passed down through generations, prepared with the finest ingredients."
    },
    {
      icon: Clock,
      title: "Fresh Daily Preparation",
      description: "All our items are prepared fresh daily using traditional cooking methods."
    },
    {
      icon: Shield,
      title: "Hygienic Kitchen",
      description: "Maintaining the highest standards of cleanliness and food safety."
    },
    {
      icon: Award,
      title: "Award Winning Taste",
      description: "Recognized for our authentic flavors and exceptional dining experience."
    },
    {
      icon: ChefHat,
      title: "Catering Services",
      description: "We provide professional catering services for events, parties, and special occasions with authentic South Indian cuisine."
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    const whatsappMessage = `Hello Mydukur Hotel!

Greetings! My name is ${formData.name}.

${formData.message}

Please contact me at ${formData.mobile}${formData.email ? ` or email ${formData.email}` : ''}.

Thank you for your time and I look forward to hearing from you soon!`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-amber-600">Mydukur Hotel</h1>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-600 transition-colors">Menu</a>
              <a href="#services" className="text-gray-700 hover:text-amber-600 transition-colors">Services</a>
              <a href="#quality" className="text-gray-700 hover:text-amber-600 transition-colors">Quality</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Home</a>
              <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Menu</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Services</a>
              <a href="#quality" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Quality</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-amber-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
        style={{ marginTop: '64px' }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.pexels.com/photos/20422128/pexels-photo-20422128.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to <span className="text-amber-400">Mydukur Hotel</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the authentic taste of South Indian cuisine with our traditional recipes
              and warm hospitality that has been serving families for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#signature-dishes" className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
                View Our Signature Dishes
              </a>
              <a href="#contact" className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="signature-dishes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Signature Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved creations that have made Mydukur Hotel a culinary destination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{dish.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Delicious Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Savor the authentic flavors of South India with our carefully crafted traditional dishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Main Dishes */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Main Dishes</h3>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium text-gray-800">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Dishes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Side Dishes</h3>
              <div className="space-y-4">
                {sideDishes.map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium text-gray-800">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional dining experiences with quality and tradition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Quality That Speaks for Itself</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">25+</div>
                <div className="text-xl">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">1000+</div>
                <div className="text-xl">Happy Customers Daily</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-4">15+</div>
                <div className="text-xl">Authentic Dishes</div>
              </div>
            </div>
            
            <div className="mt-16 bg-white bg-opacity-10 rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl italic mb-4">
                "The most authentic South Indian food I've ever tasted. 
                Mydukur Hotel brings the true flavors of traditional cuisine to every plate."
              </blockquote>
              <cite className="text-lg">- Satisfied Customer</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit us today and experience the authentic taste of South Indian cuisine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visit Us</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Mydukur Hotel<br />
                  Main Street, Mydukur<br />
                  Andhra Pradesh, India
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Call Us</h3>
                </div>
                <p className="text-gray-600 ml-16">+91 9876543210</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
                </div>
                <p className="text-gray-600 ml-16">info@mydukurhotel.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Opening Hours</h3>
                </div>
                <p className="text-gray-600 ml-16">
                  Monday - Sunday<br />
                  6:00 AM - 10:00 PM
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <ChefHat className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-400">Mydukur Hotel</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Serving authentic South Indian cuisine with traditional recipes and warm hospitality for over 25 years.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20of%20Mydukur%20Hotel." target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors flex items-center space-x-2">
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#menu" className="text-gray-300 hover:text-amber-400 transition-colors">Menu</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#quality" className="text-gray-300 hover:text-amber-400 transition-colors">Quality</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Main Street, Mydukur</li>
                <li>Andhra Pradesh, India</li>
                <li>Phone: +91 9876543210</li>
                <li>Email: info@mydukurhotel.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Mydukur Hotel. All rights reserved. Made with ❤️ for authentic South Indian cuisine lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
