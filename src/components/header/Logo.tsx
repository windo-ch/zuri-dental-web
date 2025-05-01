
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/"
      className="flex items-center"
    >
      <img 
        src="/lovable-uploads/796794fe-b808-4402-b097-f7a6b0da65d8.png" 
        alt="Pietrobon & Michel Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
