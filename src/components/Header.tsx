import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Headset
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { products, Product } from '@/data/products'; // Import products data and Product type
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserMenu from './auth/UserMenu';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext'; // Import useAuth

// Define a type for our suggestions
interface SearchSuggestion {
  id: string;
  name: string;
  type: 'product' | 'category';
  image?: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]); // State for search suggestions
  const searchInputRef = useRef<HTMLInputElement>(null); // Ref for the search input
  const suggestionsRef = useRef<HTMLDivElement>(null); // Ref for the suggestions list

  const phrases = [
    "Search Earphones",
    "Try Airdopes 131",
    "Find Smartwatches",
    "Explore Speakers"
  ]; // Restore phrases state
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate(); // Initialize useNavigate
  const userMenuRef = useRef<HTMLDivElement>(null);
  const userButtonRef = useRef<HTMLButtonElement>(null);
  const { user } = useAuth(); // Use useAuth to get user object

  // Get unique categories from products
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[placeholderIndex];
      if (charIndex < currentPhrase.length) {
        setDisplayedText((prev) => prev + currentPhrase.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setPlaceholderIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [charIndex, placeholderIndex, phrases]); // Keep phrases in dependency array

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Effect to close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]); // Clear suggestions
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchInputRef, suggestionsRef]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?query=${encodeURIComponent(searchTerm.trim())}`);
      setSuggestions([]); // Clear suggestions after search
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle input change for suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      // Filter products and categories based on input value
      const productSuggestions = products
        .filter(product =>
          product.name.toLowerCase().includes(value.toLowerCase())
        )
        .map(product => ({
          id: `product-${product.id}`,
          name: product.name,
          type: 'product' as const,
          image: product.image
        }));

      const categorySuggestions = uniqueCategories
        .filter(category =>
          category.toLowerCase().includes(value.toLowerCase())
        )
        .map(category => ({
          id: `category-${category}`,
          name: category,
          type: 'category' as const
        }));

      // Combine and limit suggestions
      const allSuggestions = [...productSuggestions, ...categorySuggestions].slice(0, 5);
      setSuggestions(allSuggestions);
    }
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    
    if (suggestion.type === 'product') {
      navigate(`/products?query=${encodeURIComponent(suggestion.name)}`);
    } else {
      navigate(`/products?category=${encodeURIComponent(suggestion.name)}`);
    }
  };

  const handleUserClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const navItems = [
    {
      name: 'CATEGORIES',
      href: '#categories', // This is a placeholder href, actual links are in dropdown
      dropdown: [
        'WIRELESS EARBUDS',
        'WIRED EARPHONES',
        'HEADPHONES',
        'BLUETOOTH SPEAKERS',
        'SMART WATCHES',
        'BLUETOOTH EARPHONES',
        'IMMORTAL GAMING',
        'MOBILE ACCESSORIES',
        'HOME THEATRE & SOUND BARS',
        'AUDIOWEAR FOR WOMEN',
        'LIMITED EDITION',
        'MISFIT TRIMMERS',
        'WIRELESS HEADPHONES',
        'TREBEL',
        'BLUETOOTH HEADPHONES'
      ]
      
    },
    { name: 'ALL PRODUCTS', href: '/products' },
    { name: 'OFFER ZONE', href: '/offer-zone' },
    {
      name: 'MORE',
      href: '#more',
      dropdown: ['Blog', 'Community', 'About Us', 'Contact Us']
    }
  ];

  const { getTotalItems } = useCart();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-lg' : 'bg-white'
      }`}
    >
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0 mr-40">
              <img
                src="/logo.svg"
                alt="BOAT Lifestyle Logo"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                >
                  {item.name === 'ALL PRODUCTS' ? (
                    <Link
                      to={item.href}
                      className="text-black hover:text-red-600 hover:underline underline-offset-4 decoration-2 font-medium uppercase flex items-center"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-black hover:text-red-600 hover:underline underline-offset-4 decoration-2 font-medium uppercase flex items-center"
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </a>
                  )}


                  {item.dropdown && activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-md p-2 ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="space-y-1">
                        {item.dropdown.map((link) => (
                          <Link // Use Link for navigation
                            key={link}
                            to={`/products?category=${encodeURIComponent(link)}`} // Pass category as URL param
                            className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                handleDropdownLeave(); // Close dropdown on click
                                setIsMenuOpen(false); // Close mobile menu if open
                            }}
                          >
                            {link}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Icons & Search */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative hidden sm:flex items-center">
              <Search 
                className="absolute left-3 h-5 w-5 text-gray-400 cursor-pointer"
                onClick={handleSearch} // Trigger search on icon click
              />
              <input
                type="text"
                placeholder={displayedText}
                value={searchTerm}
                onChange={handleInputChange} // Use new handler for suggestions
                onKeyPress={handleKeyPress} // Trigger search on Enter key press
                ref={searchInputRef} // Attach ref to input
                className="pl-10 pr-3 py-2 rounded-full bg-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
              />
              {/* Clear search button - Optional */}
              {searchTerm && (
                 <button 
                   className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                   onClick={() => setSearchTerm('')}
                 >
                   <X className="h-4 w-4" />
                 </button>
              )}
            </div>

            {/* Search Suggestions */}
            {suggestions.length > 0 && searchTerm.trim() !== '' && (
              <div
                ref={suggestionsRef}
                className="absolute top-full mt-2 w-full bg-white rounded-md shadow-lg max-h-60 overflow-y-auto ring-1 ring-black ring-opacity-5 z-50"
              >
                <div className="py-1">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.id}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.type === 'product' && suggestion.image && (
                        <img 
                          src={suggestion.image} 
                          alt={suggestion.name} 
                          className="w-8 h-8 object-cover rounded mr-2"
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="text-gray-800 text-sm">{suggestion.name}</span>
                        <span className="text-xs text-gray-500">
                          {suggestion.type === 'product' ? 'Product' : 'Category'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Button */}
            <div className="relative" ref={userMenuRef}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      ref={userButtonRef}
                      variant="ghost" 
                      size="sm" 
                      className="p-2 text-black hover:text-red-600 transition-colors"
                      onClick={handleUserClick}
                    >
                      {user ? (
                        <div className="w-6 h-6 rounded-full bg-boat-red flex items-center justify-center text-white font-bold">
                          {user && user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                        </div>
                      ) : (
              <User className="h-5 w-5" />
                      )}
            </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{user ? 'View Profile' : 'Sign in to your account'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <UserMenu isOpen={isUserMenuOpen} onClose={() => setIsUserMenuOpen(false)} />
            </div>

            <Button variant="ghost" size="sm" className="p-2 text-black hover:text-red-600">
              <Headset className="h-5 w-5" />
            </Button>

            <Link to="/cart">
              <Button variant="ghost" size="sm" className="p-2 relative text-black hover:text-red-600">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 text-black hover:text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.name === 'ALL PRODUCTS' ? (
                    <Link
                      to={item.href}
                      className="w-full text-left block px-3 py-2 text-black hover:text-red-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className="w-full text-left flex justify-between items-center px-3 py-2 text-black hover:text-red-600 font-medium"
                      onClick={() =>
                        item.dropdown
                          ? setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          : setIsMenuOpen(false)
                      }
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((link) => (
                        <Link
                          key={link}
                          to={`/products?category=${encodeURIComponent(link)}`}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;