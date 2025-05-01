
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/"
      className="flex items-center"
    >
      <h2 className="font-display text-2xl font-medium text-dental-800">
        Pietrobon <span className="text-dental-500">&</span> Michel
      </h2>
    </Link>
  );
};

export default Logo;
