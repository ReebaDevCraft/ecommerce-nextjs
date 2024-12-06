import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <CategorySection />
      <ProductSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
};

export default Home;
