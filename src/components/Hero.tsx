
import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-800/70 to-dental-900/70">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1593022356769-11a0ec0b3214?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0.4
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-10 text-white pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          
          <h2 className="text-xl md:text-3xl font-light mb-6">
            {t('hero.subtitle')}
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('hero.description')}
          </p>
          
          <button 
            className={cn(
              "px-8 py-3 bg-dental-500 hover:bg-dental-600 rounded-lg",
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
          </button>
        </div>
      </div>
      
      {/* Overlay gradient at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
