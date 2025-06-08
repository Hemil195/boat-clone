import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/products';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Defensive context usage with correct signatures
  let addToWishlist: (product: Product) => void = () => {};
  let removeFromWishlist: (productId: number) => void = () => {};
  let isInWishlist: (productId: number) => boolean = () => false;
  try {
    const wishlistContext = useWishlist();
    addToWishlist = wishlistContext.addToWishlist;
    removeFromWishlist = wishlistContext.removeFromWishlist;
    isInWishlist = wishlistContext.isInWishlist;
  } catch (e) {
    // Context not available, fallback to no-op
  }

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const wishlisted = isInWishlist(product.id);

  // Defensive checks for product properties
  const rating = typeof product.rating === 'number' ? product.rating : 0;
  const reviews = typeof product.reviews === 'number' ? product.reviews : 0;
  const price = typeof product.price === 'number' ? product.price : 0;
  const originalPrice = typeof product.originalPrice === 'number' ? product.originalPrice : 0;
  const discount = typeof product.discount === 'number' ? product.discount : 0;
  const features = Array.isArray(product.features) ? product.features : [];
  const badge = typeof product.badge === 'string' ? product.badge : '';
  const isBestSeller = Boolean(product.isBestSeller);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      toast.error('Please login to add items to wishlist');
      navigate('/login');
      return;
    }

    if (wishlisted) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
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

  return (
    <Card className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 animate-slide-up">
      <CardContent className="p-0">
        {/* Product Image */}
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Badges */}
            {(badge === 'Engraving Available' || badge === 'Restocking Soon') && (
              <div className="absolute top-2 left-2 z-10">
                <span className={`text-white text-xs font-semibold px-2 py-1 rounded ${badge === 'Engraving Available' ? 'bg-black/60' : 'bg-yellow-500/80'}`}>
                  {badge}
                </span>
              </div>
            )}
            {/* Playback Hours */}
            {features.some(feature => feature.includes('Hours Playback')) && (
              <div className="absolute bottom-2 left-2 z-10">
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  {features.find(feature => feature.includes('Hours Playback'))}
                </span>
              </div>
            )}
            {isBestSeller && (
               <div className="absolute top-2 right-2 z-10">
                 <span className="bg-blue-500/80 text-white text-xs font-semibold px-2 py-1 rounded">
                   Best Seller
                 </span>
               </div>
             )}

            {/* Wishlist Button */}
            <button
              onClick={handleWishlistClick}
              className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200 z-10"
            >
              <Heart
                className={`h-5 w-5 ${wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </button>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          {/* Rating and Reviews */}
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">{rating.toFixed(1)}</span>
            <span className="ml-1">({reviews})</span>
          </div>

          {/* Product Name */}
          <Link to={`/product/${product.id}`} className="text-base font-semibold text-gray-900 dark:text-white hover:text-red-600 transition-colors duration-200">
            {product.name}
          </Link>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900 dark:text-white">₹{price.toLocaleString()}</span>
            {originalPrice > price && (
              <span className="text-sm line-through text-gray-500 dark:text-gray-400">₹{originalPrice.toLocaleString()}</span>
            )}
             {discount > 0 && (
              <span className="text-xs font-semibold text-green-600 dark:text-green-400">{discount}% off</span>
            )}
          </div>

          {/* Features/Tags */}
          <div className="flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature, idx) => (
              <span key={idx} className="text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
       {/* Add to Cart Button */}
      <div className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Add To Cart</span>
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;