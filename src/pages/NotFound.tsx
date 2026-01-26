import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Home, Search, ArrowLeft } from "lucide-react";
import { SEO } from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title={t('errors.404Title' as any, '404 - Page Not Found | Pietrobon & Michel')}
        description={t('errors.404Description' as any, 'The page you are looking for could not be found. Return to our homepage or explore our dental technology services.')}
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dental-50 via-white to-white">
        <div className="container max-w-2xl mx-auto px-4 text-center py-16">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-dental-800 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-dental-700 mb-4">
            {t('errors.pageNotFound', 'Page Not Found')}
          </h2>
          <p className="text-lg text-dental-600 mb-8">
            {t('errors.pageNotFoundDescription', 'The page you are looking for could not be found. It may have been moved or deleted.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              {t('errors.returnHome', 'Return to Home')}
            </Link>
            <Link 
              to="/visit" 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-dental-600 text-dental-600 rounded-lg font-medium hover:bg-dental-50 transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              {t('errors.visitLab', 'Visit Our Lab')}
            </Link>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-dental-100">
            <h3 className="text-xl font-display font-semibold text-dental-800 mb-4">
              {t('errors.popularPages', 'Popular Pages')}
            </h3>
            <nav className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-dental-600 hover:text-dental-800 underline">
                {t('navigation.about', 'About Us')}
              </Link>
              <Link to="/for-dentists" className="text-dental-600 hover:text-dental-800 underline">
                {t('navigation.forDentists', 'For Dentists')}
              </Link>
              <Link to="/visit" className="text-dental-600 hover:text-dental-800 underline">
                {t('navigation.location', 'Location')}
              </Link>
              <Link to="/testimonials" className="text-dental-600 hover:text-dental-800 underline">
                {t('navigation.credo', 'Testimonials')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
