import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrendingProducts from '@/components/TrendingProducts';
import CategorySection from '@/components/CategorySection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendingProducts />
        <CategorySection />
        <TestimonialsSection />
      </main>
    </div>
  );
};

export default Index;
