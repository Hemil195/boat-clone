import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from 'sonner';
import { Product } from '@/data/products';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const heroSlides = [
    {
      id: 7,
      title: "boAt Storm",
      subtitle: "SMART WATCHES",
      description: "Experience the perfect blend of style and functionality with the boAt Storm smartwatch. Track your fitness, stay connected, and make a statement.",
      price: 2515.8,
      originalPrice: 5990,
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a6549acb-b075-4c3e-8ed3-9c9fcba32d42_600x.png?v=1625046216",
      bg: "bg-gradient-to-br from-boat-red to-boat-red-dark",
      colors: ["Red", "Green", "CoolGrey", "MidnightBlue", "Black"]
    },
    {
      id: 8,
      title: "boAt Watch Xtend",
      subtitle: "SMART WATCHES",
      description: "Elevate your lifestyle with the boAt Watch Xtend. Advanced health monitoring, stunning display, and premium design for the modern you.",
      price: 3196.0,
      originalPrice: 7990,
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-blue_d6503e2e-e0b1-4c4e-af28-2164903baf9f_600x.png?v=1640237576",
      bg: "bg-gradient-to-br from-boat-black to-boat-black-light",
      colors: ["Sporty Blue", "Red", "Active Black"]
    },
    {
      id: 11,
      title: "boAt Rockerz 450",
      subtitle: "BLUETOOTH HEADPHONES",
      description: "Immerse yourself in premium sound with the boAt Rockerz 450. Experience crystal clear audio and all-day comfort with these wireless headphones.",
      price: 1516.2,
      originalPrice: 3990,
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7499af44-9d7a-489c-80f0-51f7799289e4_600x.png?v=1625045491",
      bg: "bg-gradient-to-br from-gray-800 to-gray-900",
      colors: ["Black", "Beige", "LightBlue"]
    },
    {
      id: 1,
      title: "Premium Audio Experience",
      subtitle: "WIRELESS EARBUDS",
      description: "Experience crystal clear sound with our latest wireless earbuds. Perfect for music, calls, and gaming.",
      price: 1999,
      originalPrice: 3999,
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/32011675-2ad8-4b99-9787-895caf201d28_600x.png?v=1642405569",
      bg: "bg-gradient-to-br from-boat-red to-boat-red-dark",
      colors: ["Red", "Green", "CoolGrey", "MidnightBlue", "Black"] 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleWishlistToggle = (productId: number) => {
    const slide = heroSlides.find(slide => slide.id === productId);
    if (!slide) return;

    const product: Product = {
      id: slide.id,
      name: slide.title,
      category: slide.subtitle,
      subcategory: "",
      price: slide.price,
      originalPrice: slide.originalPrice,
      discount: Math.round((1 - slide.price / slide.originalPrice) * 100),
      rating: 4.8,
      reviews: 100,
      description: slide.description,
      features: ["Immersive Sound", "Long-lasting Battery", "Comfortable Fit"],
      specifications: {},
      colors: slide.colors,
      image: slide.image,
      stock: 100
    };

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`${slide.bg} h-full flex items-center`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Content */}
              <div className="text-white space-y-6 animate-slide-in">
                <div className="space-y-2">
                  <p className="text-lg font-medium opacity-90">{slide.subtitle}</p>
                  <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                </div>
                
                <p className="text-xl opacity-90 max-w-lg">{slide.description}</p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold">₹{slide.price.toLocaleString()}</span>
                  <span className="text-lg line-through opacity-60">₹{slide.originalPrice.toLocaleString()}</span>
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    SAVE {Math.round((1 - slide.price / slide.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Color Options */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm opacity-90">Available in:</span>
                  <div className="flex space-x-2">
                    {slide.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-white"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-gray-100 px-8"
                    onClick={() => navigate(`/product/${slide.id}`)}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white text-black hover:bg-gray-100 px-8"
                    onClick={() => navigate(`/product/${slide.id}`)}
                  >
                    Learn More
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() => handleWishlistToggle(slide.id)}
                  >
                    <Heart 
                      className={`h-6 w-6 ${isInWishlist(slide.id) ? 'fill-current text-red-500' : ''}`} 
                    />
                  </Button>
                </div>
              </div>

              {/* Product Image */}
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-auto max-h-[600px] object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-boat-red hover:text-white transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 glass p-3 rounded-full hover:bg-boat-red hover:text-white transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
