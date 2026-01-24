# 🚀 **Development Guide - Pietrobon & Michel**

## 🎯 **Getting Started**

### **Prerequisites**
- **Node.js 18+** 
- **npm** or **yarn**
- **Git**

### **Quick Setup**
```bash
# Clone and install
git clone <repository-url>
cd pietrobon-v1
npm install

# Start development
npm run dev

# Open browser
http://localhost:5173
```

## 🏗️ **Project Structure**

```
pietrobon-v1/
├── public/                    # Static assets
│   ├── assets/
│   │   ├── images/           # Images and testimonials
│   │   └── zurich-pundm.webm # Video backgrounds
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable components
│   │   ├── slides/          # Core slide system
│   │   ├── ui/              # Shadcn components
│   │   └── *.tsx            # Feature components
│   ├── pages/               # Page components
│   │   ├── *Slide.tsx       # Slide-based pages
│   │   └── *.tsx            # Essential pages
│   ├── data/
│   │   └── translations/    # i18n content
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and config
│   ├── archive/             # Legacy components (DO NOT USE)
│   ├── App.tsx              # Main routing
│   └── main.tsx             # App entry point
├── cleanup-plan.md          # Cleanup documentation
├── ARCHITECTURE.md          # Architecture overview
└── package.json             # Dependencies and scripts
```

## 📝 **Adding New Content**

### **Adding a New Slide Page**

1. **Create the component**:
```tsx
// src/pages/NewFeatureSlide.tsx
import React from 'react';
import { motion } from 'framer-motion';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';

const NewFeatureSlide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <FloatingBackButton />
      
      <main className="pt-16 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
              New Feature
            </h1>
            <p className="text-xl text-dental-600 mb-8">
              Description of your new feature
            </p>
            
            {/* Your content here */}
          </motion.div>
        </div>
      </main>
      
      <SlideNavBarBottom />
    </div>
  );
};

export default NewFeatureSlide;
```

2. **Add route in App.tsx**:
```tsx
// src/App.tsx
import NewFeatureSlide from './pages/NewFeatureSlide';

// Inside Routes:
<Route path="/new-feature" element={<NewFeatureSlide />} />
```

3. **Add navigation link** (if needed):
```tsx
// In SlideNavBar.tsx or SlideDemoPage.tsx
onClick={() => navigate('/new-feature')}
```

### **Adding Content to Main Slides**

To add a new slide to the main presentation:

1. **Create slide component**:
```tsx
// src/components/slides/YourSlide.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Slide from './Slide';

const YourSlide: React.FC = () => {
  return (
    <Slide background="dental-light" className="relative">
      <motion.div
        className="container mx-auto px-4 h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Your slide content */}
      </motion.div>
    </Slide>
  );
};

export default YourSlide;
```

2. **Add to SlideDemoPage.tsx**:
```tsx
import YourSlide from '@/components/slides/YourSlide';

// Inside SlideContainer:
<YourSlide />
```

3. **Update SlideNavBar** descriptions if needed.

## 🎨 **Styling Guidelines**

### **Color Usage**
```tsx
// Backgrounds
bg-dental-50          // Light page background
bg-dental-100         // Card backgrounds
bg-dental-600         // Primary buttons
bg-dental-800         // Dark elements

// Text
text-dental-600       // Body text
text-dental-700       // Secondary headings
text-dental-800       // Main headings
text-white           // On dark backgrounds

// Borders & Accents
border-dental-200     // Subtle borders
border-dental-100     // Card borders
```

### **Animation Patterns**
```tsx
// Page Entry
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}

// Section Entry
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.7, delay: 0.1 * index }}

// Hover Effects
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.2 }}

// Staggered Children
transition={{
  staggerChildren: 0.1,
  delayChildren: 0.2
}}
```

### **Responsive Patterns**
```tsx
// Containers
className="container max-w-4xl mx-auto px-4"

// Grids
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Text Sizes
className="text-lg md:text-xl lg:text-2xl"

// Spacing
className="py-8 md:py-12 lg:py-16"
className="px-4 md:px-6 lg:px-8"
```

## 🔧 **Component Patterns**

### **Standard Card Component**
```tsx
<motion.div
  className="bg-white rounded-xl p-8 shadow-lg border border-dental-100"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7 }}
>
  {/* Card content */}
</motion.div>
```

### **Section Header**
```tsx
<motion.h2
  className="text-3xl font-display font-bold text-dental-800 mb-12 text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, delay: 0.2 }}
>
  Section Title
</motion.h2>
```

### **Interactive Button**
```tsx
<motion.button
  className="bg-dental-600 hover:bg-dental-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={handleClick}
>
  Button Text
</motion.button>
```

## 🌍 **Internationalization**

### **Adding New Translations**

1. **Add to translation files**:
```typescript
// src/data/translations/en.ts
export const en = {
  // ... existing translations
  newFeature: {
    title: "New Feature",
    description: "Feature description"
  }
};

// Repeat for de.ts, it.ts, ru.ts
```

2. **Use in components**:
```tsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  
  return (
    <h1>{t('newFeature.title')}</h1>
  );
};
```

### **Language Switching**
Language switching happens within components (not URLs):
- Users select language in EntrySlide
- Language persists in localStorage
- Content updates without route changes

## 🖼️ **Working with Images**

### **Adding New Images**
1. **Place images** in `public/assets/images/`
2. **Reference directly** from public path:
```tsx
<img src="/assets/images/your-image.jpg" alt="Description" />
```

### **Testimonial Gallery**
To add new testimonial images:
1. **Add to** `public/assets/images/PM-testimonials-2025/`
2. **Follow naming** `testimonial-*.jpg` or similar
3. **TestimonialsSlide** will auto-detect and display

### **Optimization Tips**
- **Use WebP** for better compression
- **Optimize file sizes** before adding
- **Use responsive images** when needed:
```tsx
<img
  src="/assets/images/image.jpg"
  className="w-full h-auto object-contain"
  loading="lazy"
/>
```

## 🧪 **Testing & Development**

### **Development Commands**
```bash
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### **Testing Checklist**
- [ ] All slide navigation works
- [ ] Floating back buttons function
- [ ] Language switching works
- [ ] Mobile responsiveness
- [ ] All animations smooth
- [ ] No console errors
- [ ] Images load properly
- [ ] Contact forms work

### **Browser Testing**
Test in modern browsers:
- **Chrome** (primary)
- **Firefox**
- **Safari**
- **Edge**
- **Mobile Safari**
- **Chrome Mobile**

## 🚀 **Deployment**

### **Build Process**
```bash
# Production build
npm run build

# Output in dist/ directory
ls dist/
```

### **Deployment Checklist**
- [ ] Build completes without errors
- [ ] All routes work correctly
- [ ] Images and videos load
- [ ] No console errors in production
- [ ] SEO meta tags present
- [ ] Performance is acceptable

### **Environment Variables**
Currently no environment variables needed, but add to `.env` if required:
```env
VITE_API_URL=https://api.example.com
```

## 🔍 **Debugging Tips**

### **Common Issues**

**1. Import Errors**
```typescript
// ✅ Correct
import Component from '@/components/Component';

// ❌ Avoid
import Component from '../../../components/Component';
```

**2. Animation Performance**
```tsx
// ✅ GPU-accelerated
transform: 'translateY(0px) scale(1)'

// ❌ Causes reflow
top: '0px', width: 'auto'
```

**3. Image Loading**
```tsx
// ✅ Proper public path
<img src="/assets/images/image.jpg" />

// ❌ Incorrect path
<img src="./assets/images/image.jpg" />
```

### **Development Tools**
- **React DevTools** - Component inspection
- **Framer Motion DevTools** - Animation debugging
- **Lighthouse** - Performance auditing
- **Browser DevTools** - Network and performance

## 📚 **Resources**

### **Documentation**
- [Vite Guide](https://vitejs.dev/guide/)
- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/)

### **Design System**
- **Figma**: [Design System] (if available)
- **Colors**: See `tailwind.config.ts`
- **Typography**: Playfair Display + Inter
- **Icons**: Lucide React

---

## 🎯 **Quick Start Recipes**

### **Add a Simple Page**
```tsx
// 1. Create component
const SimplePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
    <FloatingBackButton />
    <main className="pt-16 pb-20">
      <div className="container max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-display font-bold text-dental-800 mb-4">
          Page Title
        </h1>
        <p className="text-xl text-dental-600">Page content</p>
      </div>
    </main>
    <SlideNavBarBottom />
  </div>
);

// 2. Add route
<Route path="/simple" element={<SimplePage />} />
```

### **Add a Card Section**
```tsx
<motion.div
  className="bg-white rounded-xl p-8 shadow-lg border border-dental-100"
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 30 }}
  viewport={{ once: true }}
>
  <h3 className="text-xl font-bold text-dental-800 mb-4">Card Title</h3>
  <p className="text-dental-600">Card content</p>
</motion.div>
```

### **Add a Button Action**
```tsx
<motion.button
  className="bg-dental-600 hover:bg-dental-700 text-white px-6 py-3 rounded-lg"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/target-page')}
>
  Action Button
</motion.button>
```

**Happy coding!** 🎉 This guide should help you efficiently develop and maintain the Pietrobon & Michel website.
