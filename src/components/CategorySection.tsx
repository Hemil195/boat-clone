import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { getProductsByCategory, products } from '@/data/products';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    {
      id: 'all',
      name: 'All Products',
      icon: '🎵',
      count: products.length
    },
    {
      id: 'WIRELESS EARBUDS',
      name: 'Wireless Earbuds',
      icon: '🎧',
      count: getProductsByCategory('WIRELESS EARBUDS').length
    },
    {
      id: 'BLUETOOTH HEADPHONES',
      name: 'Headphones',
      icon: '🎤',
      count: getProductsByCategory('BLUETOOTH HEADPHONES').length
    },
    {
      id: 'BLUETOOTH SPEAKERS',
      name: 'Speakers',
      icon: '🔊',
      count: getProductsByCategory('BLUETOOTH SPEAKERS').length
    },
    {
      id: 'SMART WATCHES',
      name: 'Smart Watches',
      icon: '⌚',
      count: getProductsByCategory('SMART WATCHES').length
    },
    {
      id: 'BLUETOOTH EARPHONES',
      name: 'Neckbands',
      icon: '🎵',
      count: getProductsByCategory('BLUETOOTH EARPHONES').length
    }
  ];

  const featuredCategories = [
    {
      name: 'Wireless Earbuds',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop',
      description: 'Premium sound quality with active noise cancellation',
      products: `${getProductsByCategory('Wireless Earbuds').length}+ Products`,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Headphones',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=600&h=400&fit=crop',
      description: '7.1 surround sound for immersive gaming experience',
      products: `${getProductsByCategory('Headphones').length}+ Products`,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      name: 'Speakers',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=400&fit=crop',
      description: 'Powerful bass with water resistance',
      products: `${getProductsByCategory('Speakers').length}+ Products`,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    navigate(`/products?category=${encodeURIComponent(categoryId)}`);
  };

  return (
    <section id="categories" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect audio gear for every need and lifestyle
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-boat-red text-white shadow-lg'
                  : 'glass hover:bg-boat-red/10'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-muted'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category, index) => (
            <Card 
              key={category.name} 
              className="group hover-lift glass-card border-0 shadow-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-sm opacity-90 mb-2">{category.description}</p>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                        {category.products}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                  <button 
                    onClick={() => navigate(`/products?category=${encodeURIComponent(category.name)}`)}
                    className="w-full py-3 px-4 bg-boat-red text-white rounded-lg hover:bg-boat-red-dark transition-colors duration-300 font-medium"
                  >
                    Explore Category
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '5M+', label: 'Happy Customers' },
            { number: `${products.length}+`, label: 'Products' },
            { number: '50+', label: 'Awards Won' },
            { number: '99%', label: 'Customer Satisfaction' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
