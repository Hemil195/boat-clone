import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getTrendingProducts } from '@/data/products';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = getTrendingProducts();
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  const itemsPerView = 4;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextProducts = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevProducts = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleWishlistToggle = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success('Added to cart');
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trending <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular audio gear loved by music enthusiasts worldwide
          </p>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-1/4 flex-shrink-0 px-3">
                  <Card className="group hover-lift glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Badge */}
                        {product.badge && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-boat-red text-white px-3 py-1 rounded-full text-xs font-bold">
                              {product.badge}
                            </span>
                          </div>
                        )}
                        
                        {/* Wishlist */}
                        <button 
                          onClick={() => handleWishlistToggle(product.id)}
                          className="absolute top-3 right-3 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-boat-red hover:text-white"
                        >
                          <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-current text-red-500' : ''}`} />
                        </button>
                        
                        {/* Quick Actions */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            size="sm" 
                            className="bg-white text-black hover:bg-gray-100"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            Quick View
                          </Button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <p className="text-sm text-boat-red font-medium mb-1">{product.category}</p>
                        <h3 
                          className="font-bold text-lg mb-2 group-hover:text-boat-red transition-colors cursor-pointer"
                          onClick={() => navigate(`/products/${product.id}`)}
                        >
                          {product.name}
                        </h3>
                        
                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium ml-1">{product.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-center space-x-2 mb-4">
                          <span className="font-bold text-xl">₹{product.price.toLocaleString()}</span>
                          <span className="text-sm line-through text-muted-foreground">₹{product.originalPrice.toLocaleString()}</span>
                        </div>
                        
                        {/* Add to Cart */}
                        <Button 
                          className="w-full bg-boat-red hover:bg-boat-red-dark"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProducts}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-boat-red hover:text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextProducts}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-boat-red hover:text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-boat-red text-boat-red hover:bg-boat-red hover:text-white"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
