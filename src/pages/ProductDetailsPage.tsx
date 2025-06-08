import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Star, ChevronLeft } from 'lucide-react';
import { toast } from 'sonner';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  const [selectedColor, setSelectedColor] = useState<string>('');

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }
    addToCart(product);
    toast.success('Added to cart successfully');
  };

  const handleWishlistToggle = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-boat-red text-white px-3 py-1 rounded-full text-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold">₹{product.price.toFixed(2)}</span>
              <span className="text-lg text-gray-500 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
              <span className="text-boat-red font-semibold">
                {product.discount}% OFF
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 rounded-full border ${
                    selectedColor === color
                      ? 'border-boat-red text-boat-red'
                      : 'border-gray-300'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <Button
              className="flex-1 bg-boat-red hover:bg-boat-red-dark"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              variant="outline"
              className={`flex-1 ${
                isInWishlist(product.id)
                  ? 'text-boat-red border-boat-red'
                  : ''
              }`}
              onClick={handleWishlistToggle}
            >
              <Heart
                className={`h-5 w-5 mr-2 ${
                  isInWishlist(product.id) ? 'fill-current' : ''
                }`}
              />
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </Button>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Category:</span>
              <span>{product.category}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Stock:</span>
              <span>{product.stock} units available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage; 