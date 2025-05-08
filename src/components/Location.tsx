import { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';
const Location = () => {
  const {
    t
  } = useLanguage();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return;
};
export default Location;