import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Star, Clock, Utensils, Shield, Award } from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Plain Dosa", price: "₹80", category: "main" },
    { name: "Karam Dosa", price: "₹90", category: "main" },
    { name: "Masala Dosa", price: "₹100", category: "main" },
    { name: "Karam Masala Dosa", price: "₹110", category: "main" },
    { name: "Ghee Karam Dosa", price: "₹120", category: "main" },
    { name: "Ghee Masala Dosa", price: "₹130", category: "main" },
    { name: "Idly", price: "₹60", category: "main" },
    { name: "Vada", price: "₹70", category: "main" },
    { name: "Poori", price: "₹75", category: "main" },
    { name: "Bonda", price: "₹65", category: "main" },
    { name: "Pongal", price: "₹85", category: "main" },
  ];

  const sideDishes = [
    { name: "Coconut Chutney", price: "₹30" },
    { name: "Red Chilli Onion Chutney", price: "₹35" },
    { name: "Masala for Poori", price: "₹40" },
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
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
      <section id="home" className="pt-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-amber-600">Mydukur Hotel</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the authentic taste of South Indian cuisine with our traditional recipes 
              and warm hospitality that has been serving families for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#menu" className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
                View Our Menu
              </a>
              <a href="#contact" className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
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
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium text-gray-800">{item.name}</span>
                    <span className="text-lg font-bold text-amber-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Dishes */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Side Dishes</h3>
              <div className="space-y-4">
                {sideDishes.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-lg font-medium text-gray-800">{item.name}</span>
                    <span className="text-lg font-bold text-emerald-600">{item.price}</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    Mydukur Hotel<br />
                    Main Street, Mydukur<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                  <p className="text-gray-600">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600">info@mydukurhotel.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday<br />
                    6:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Mydukur Hotel</h3>
              <p className="text-gray-300 mb-4">
                Serving authentic South Indian cuisine with traditional recipes and warm hospitality for over 25 years.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Instagram</a>
                <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Twitter</a>
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
              © 2024 Mydukur Hotel. All rights reserved. Made with ❤️ for authentic South Indian cuisine lovers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
