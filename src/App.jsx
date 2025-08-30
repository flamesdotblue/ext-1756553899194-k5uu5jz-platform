import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import BattleShowcase from './components/BattleShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter','IBM Plex Sans','Manrope',system-ui]">
      <HeroSection />
      <FeaturesSection />
      <BattleShowcase />
      <Footer />
    </div>
  );
}

export default App;
