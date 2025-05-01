
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Add parallax effect to the background
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground) {
        (heroBackground as HTMLElement).style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-800/80 to-dental-900/80 z-10">
        <div 
          className="hero-background absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1593022356769-11a0ec0b3214?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0.35,
            transformOrigin: 'center bottom',
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-dental-500/10 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-dental-200/10 rounded-full blur-3xl animate-pulse-gentle" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-20 text-white pt-20">
        <div className="max-w-2xl">
          <div className="overflow-hidden">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t('hero.title')}
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <h2 className="text-xl md:text-3xl font-light mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {t('hero.subtitle')}
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl mb-8 text-white/90 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {t('hero.description')}
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button 
              className={cn(
                "group flex items-center gap-2 px-8 py-3 bg-dental-500 hover:bg-dental-600 rounded-lg",
                "text-white font-medium transition-all duration-300",
                "shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              )}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('hero.cta')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center cursor-pointer" onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}>
          <span className="text-white/80 text-sm mb-2">Scroll</span>
          <div className="w-6 h-9 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-float mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
