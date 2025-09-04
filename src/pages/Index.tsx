import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TechnologySection from "@/components/sections/TechnologySection";
import PartnersSection from "@/components/sections/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="technology">
          <TechnologySection />
        </section>
        
        <section id="partners">
          <PartnersSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
