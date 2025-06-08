import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const productCategories = [
    { name: 'Wireless Earbuds', path: '/products?category=Wireless Earbuds' },
    { name: 'Headphones', path: '/products?category=Headphones' },
    { name: 'Speakers', path: '/products?category=Speakers' },
    { name: 'Smart Watches', path: '/products?category=Smart Watches' },
    { name: 'Neckbands', path: '/products?category=Neckbands' },
    { name: 'Gaming Audio', path: '/products?category=Gaming Audio' }
  ];

  const supportLinks = [
    { name: 'Customer Support', path: '/support' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'Returns & Exchange', path: '/returns' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Blog', path: '/blog' },
    { name: 'Investor Relations', path: '/investors' },
    { name: 'Corporate Info', path: '/corporate' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-boat-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with <span className="text-boat-red">BOAT</span>
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest updates on new products, exclusive offers, and audio tips
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-boat-red hover:bg-boat-red-dark px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold text-boat-red mb-4 block">BOAT</Link>
            <p className="text-gray-300 mb-6 max-w-md">
              India's leading audio lifestyle brand that's making quality sound accessible to everyone. 
              Join the revolution of affordable premium audio.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-boat-red" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-boat-red" />
                <span>support@boat-lifestyle.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-boat-red" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.path}
                    className="text-gray-300 hover:text-boat-red transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-boat-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-boat-red transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 BOAT Lifestyle. Made with</span>
              <Heart className="h-4 w-4 text-boat-red fill-current" />
              <span>in India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 hidden md:block">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-full hover:bg-boat-red transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-boat-red transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-boat-red transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-boat-red transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
