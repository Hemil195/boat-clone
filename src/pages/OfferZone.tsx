import React from 'react';
import { products } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const OfferZone = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();

  // Filter products with discount greater than 30%
  const discountedProducts = products.filter(product => product.discount > 30);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }
    addToCart(product);
    toast.success('Added to cart');
  };

  const handleWishlistToggle = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error('Please login to add items to wishlist');
      navigate('/login');
      return;
    }

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Offer Zone</h1>
        <p className="text-gray-600">Grab these amazing deals before they're gone!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {discountedProducts.map((product) => (
          <Card 
            key={product.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                {product.discount}% OFF
              </div>
              <button
                onClick={(e) => handleWishlistToggle(e, product)}
                className="absolute top-2 left-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-boat-red">
                  ₹{product.price - (product.price * product.discount) / 100}
                </span>
                <span className="text-gray-500 line-through">₹{product.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <Button 
                className="w-full bg-boat-red hover:bg-boat-red-dark text-white"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OfferZone; 