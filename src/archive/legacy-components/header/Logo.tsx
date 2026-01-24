
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/"
      className="flex items-center"
    >
      <img 
        src="/assets/pundm-logo.png" 
        alt="Pietrobon & Michel Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
