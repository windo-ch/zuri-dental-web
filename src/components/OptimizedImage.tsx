import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

/**
 * OptimizedImage component that automatically serves WebP format with fallback
 * Supports responsive images with srcset
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className,
  width,
  height,
  loading = 'lazy',
  sizes,
  ...props
}) => {
  // Generate WebP version path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const baseName = src.replace(/\.[^/.]+$/, '');
  const extension = src.match(/\.(jpg|jpeg|png)$/i)?.[0] || '.jpg';
  
  // Check if this is a responsive image (has width/height)
  const isResponsive = width && height;
  
  if (isResponsive) {
    // Generate srcset for responsive images
    const srcSetWebP = [
      `${baseName}-400w.webp 400w`,
      `${baseName}-800w.webp 800w`,
      `${baseName}-1200w.webp 1200w`,
    ].join(', ');
    
    const srcSetOriginal = [
      `${baseName}-400w${extension} 400w`,
      `${baseName}-800w${extension} 800w`,
      `${baseName}-1200w${extension} 1200w`,
    ].join(', ');
    
    const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px';
    
    return (
      <picture>
        <source srcSet={srcSetWebP} type="image/webp" sizes={defaultSizes} />
        <source srcSet={srcSetOriginal} sizes={defaultSizes} />
        <img 
          src={src} 
          alt={alt} 
          className={className}
          width={width}
          height={height}
          loading={loading}
          sizes={defaultSizes}
          {...props}
        />
      </picture>
    );
  }
  
  // Simple WebP with fallback
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img 
        src={src} 
        alt={alt} 
        className={className}
        width={width}
        height={height}
        loading={loading}
        {...props}
      />
    </picture>
  );
};
