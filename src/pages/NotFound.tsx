import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const currentLang = i18n.language.split('-')[0]; // Get base language code
  const homeLink = currentLang === 'en' ? '/' : `/${currentLang}`;

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">{t('errors.pageNotFound', 'Oops! Page not found')}</p>
        <Link to={homeLink} className="text-blue-500 hover:text-blue-700 underline">
          {t('errors.returnHome', 'Return to Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
