import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import OfferZone from "./pages/OfferZone";
import { WishlistProvider } from '@/context/WishlistContext';
import WishlistPage from '@/pages/WishlistPage';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import CartPage from '@/pages/CartPage';
import ProductDetailsPage from '@/pages/ProductDetailsPage';
import { CheckoutProvider } from '@/context/CheckoutContext';
import CheckoutPage from '@/pages/CheckoutPage';
import { OrderProvider } from '@/context/OrderContext';
import OrdersPage from '@/pages/OrdersPage';
import ScrollToTop from '@/components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CheckoutProvider>
              <OrderProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <Header />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/product/:id" element={<ProductDetailsPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/offer-zone" element={<OfferZone />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </OrderProvider>
            </CheckoutProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
