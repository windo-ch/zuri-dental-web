import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone } from 'lucide-react';
import { useAnimationObserver } from '../hooks/useAnimationObserver';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
const Location = () => {
  const {
    t
  } = useLanguage();
  useAnimationObserver();
  return;
};
export default Location;