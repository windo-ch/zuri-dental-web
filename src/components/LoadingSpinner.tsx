import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClass = size === "lg" ? "w-40 h-40" : size === "sm" ? "w-16 h-16" : "w-28 h-28";

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      role="status" 
      aria-label="Loading"
    >
      <motion.img
        key={Date.now()}
        src="/assets/images/pietrobon-logo-animated.svg"
        alt="Pietrobon & Michel Animated Logo"
        className={sizeClass}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 2.4,
          delay: 0.6,
          ease: [0.4, 0.0, 0.2, 1] // Custom easing for a more luxurious feel
        }}
        draggable={false}
      />
    </motion.div>
  );
};

export default LoadingSpinner; 