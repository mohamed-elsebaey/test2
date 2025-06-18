
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1920&auto=format&fit=crop')",
          transform: `translateY(${backgroundY}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      
      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center items-center text-center px-4"
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block text-white/90 text-lg mb-4 tracking-wide border-b border-white/30 pb-2">
            {t.hero.subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="heroSolid" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/booking">{t.hero.bookStay}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/apartments">{t.hero.exploreApartments}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced centered scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <a 
          href="#welcome" 
          className="group flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
        >
          <span className="text-sm mb-3 font-medium tracking-wider uppercase opacity-90 group-hover:opacity-100 transition-opacity">
            {t.hero.scrollDown}
          </span>
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white/90 transition-colors">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white/90 transition-colors"></div>
            </div>
            <ChevronDown className="h-5 w-5 mt-2 animate-bounce opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        </a>
      </div>
      
      {/* Enhanced animated waves */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {/* Multiple wave layers for depth */}
        <svg 
          className="absolute bottom-0 w-full h-32 fill-white/90 dark:fill-background/90"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First wave layer */}
          <path 
            d="M0,60L40,55C80,50,160,40,240,45C320,50,400,70,480,75C560,80,640,70,720,65C800,60,880,60,960,70C1040,80,1120,100,1200,100C1280,100,1360,80,1400,70L1440,60L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            className="animate-wave opacity-30"
            style={{ animationDuration: '15s', animationDelay: '0s' }}
          />
          {/* Second wave layer */}
          <path 
            d="M0,80L40,75C80,70,160,60,240,65C320,70,400,90,480,95C560,100,640,90,720,85C800,80,880,80,960,90C1040,100,1120,120,1200,120C1280,120,1360,100,1400,90L1440,80L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            className="animate-wave opacity-60"
            style={{ animationDuration: '12s', animationDelay: '-2s' }}
          />
          {/* Third wave layer */}
          <path 
            d="M0,100L40,95C80,90,160,80,240,85C320,90,400,110,480,115C560,120,640,110,720,105C800,100,880,100,960,110C1040,120,1120,140,1200,140C1280,140,1360,120,1400,110L1440,100L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
            className="animate-wave opacity-90"
            style={{ animationDuration: '18s', animationDelay: '-4s' }}
          />
        </svg>
        
        {/* Foam effect */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/20 to-transparent dark:from-background/20 animate-pulse-slow"></div>
      </div>
    </section>
  );
}
