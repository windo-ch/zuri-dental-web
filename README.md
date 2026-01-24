# 🦷 **Pietrobon & Michel - Dental Laboratory Website**

## 🎯 **Overview**

Professional website for Pietrobon & Michel dental laboratory, featuring a modern slide-based architecture for an elegant, immersive experience for dental professionals and patients.

## ✨ **Key Features**

### **🎨 Modern Slide Architecture**
- **Full-screen slides** with smooth transitions
- **Professional animations** powered by Framer Motion
- **Video backgrounds** for visual appeal
- **Mobile-responsive** design

### **🦷 Professional Tools**
- **Lab order forms** by category (Crown & Bridge, Implants, etc.)
- **Holiday schedule** for 2025 planning
- **Team profiles** with CV presentations
- **Patient testimonial gallery** (40+ images)

### **🌍 Multi-language Support**
- **4 languages**: English, German, Italian, Russian
- **In-component switching** (no URL changes)
- **Persistent language** selection

### **📱 User Experience**
- **Floating navigation** for clean aesthetics
- **Tooltips and hover effects** for guidance
- **Lazy loading** for performance
- **SEO optimized** with meta tags

## 🚀 **Quick Start**

### **Prerequisites**
- **Node.js 18+**
- **npm** or **yarn**

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd pietrobon-v1

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:5173
```

### **Available Scripts**
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run code quality checks
```

## 🏗️ **Architecture**

### **Technology Stack**
- **⚡ Vite** - Fast development and builds
- **⚛️ React 18** - Modern UI library
- **🎯 TypeScript** - Type safety
- **🎨 Tailwind CSS** - Utility-first styling
- **🎭 Framer Motion** - Smooth animations
- **🗺️ React Router** - Client-side routing
- **🌍 React i18next** - Internationalization

### **Project Structure**
```
src/
├── components/
│   ├── slides/              # Core slide system
│   │   ├── SlideContainer.tsx   # Master controller
│   │   ├── SlideNavBar.tsx      # Navigation
│   │   ├── EntrySlide.tsx       # Welcome slide
│   │   └── ClosingSlide.tsx     # Final slide
│   ├── ui/                  # Shadcn components
│   ├── FloatingBackButton.tsx
│   └── HolidaySchedule.tsx
├── pages/
│   ├── SlideDemoPage.tsx        # Main slide deck
│   ├── *Slide.tsx               # Individual slides
│   ├── ContactPage.tsx          # Essential pages
│   └── NotFound.tsx
├── data/
│   └── translations/        # i18n content
├── archive/                 # Legacy components
└── App.tsx                  # Clean routing
```

## 🎨 **Design System**

### **Color Palette**
```scss
dental-50   // Light backgrounds
dental-100  // Card backgrounds  
dental-600  // Primary buttons
dental-800  // Headers & emphasis
dental-900  // Dark backgrounds
```

### **Typography**
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

### **Animation Principles**
- **Smooth transitions** (0.3-0.8s duration)
- **Staggered entries** for visual hierarchy
- **GPU-accelerated** transforms
- **Reduced motion** respect

## 📄 **Pages & Routes**

### **Main Experience**
- **`/`** - Main slide presentation (Entry → Team → Services → Contact)

### **Dedicated Pages**
- **`/for-dentists`** - Lab forms, holiday schedule, professional resources
- **`/for-patients`** - Location information, visit details
- **`/about`** - Company values and mission
- **`/testimonials`** - Patient gallery (40+ images)
- **`/nicola-pietrobon`** - Nicola's professional CV
- **`/reto-michel`** - Reto's professional CV

### **Essential Pages**
- **`/contact`** - Contact information and details
- **`/privacy`** - Privacy policy
- **`/terms`** - Terms of service

## 🔧 **Development**

### **Adding New Content**
See **[DEVELOPMENT.md](./DEVELOPMENT.md)** for detailed guides on:
- Adding new slide pages
- Creating components
- Styling guidelines
- Animation patterns
- Internationalization

### **Architecture Details**
See **[ARCHITECTURE.md](./ARCHITECTURE.md)** for:
- System overview
- Component hierarchy
- Performance optimizations
- Future enhancements

## 🚀 **Deployment**

### **Build Process**
```bash
# Production build
npm run build

# Output in dist/ directory
npm run preview  # Test production build locally
```

### **Platform Support**
- **Vercel** (recommended)
- **Netlify**
- **Any static hosting**

### **Environment Requirements**
- **Node.js 18+**
- **Modern browsers** (ES2020+)

## 📱 **Browser Support**

### **Fully Supported**
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

### **Mobile**
- **iOS Safari** 14+
- **Chrome Mobile** 90+
- **Samsung Internet** 15+

## 🎯 **Key Highlights**

### **🏆 Professional Features**
1. **Lab Order Forms** - Categorized by dental procedure
2. **Holiday Schedule** - 2025 lab closure dates with planning notice
3. **Team Profiles** - Professional CV presentations
4. **Patient Gallery** - Testimonial showcase with lightbox

### **💡 Technical Excellence**
1. **Modern Architecture** - Clean slide-based system
2. **Performance Optimized** - Lazy loading, code splitting
3. **Mobile First** - Responsive design principles
4. **SEO Ready** - Meta tags and semantic structure

### **🎨 Design Excellence**
1. **Professional Aesthetics** - Dental industry appropriate
2. **Smooth Animations** - Framer Motion throughout
3. **Video Backgrounds** - Subtle, elegant enhancement
4. **Consistent Branding** - Cohesive visual identity

## 📞 **Contact & Support**

### **Business Contact**
- **Address**: Bahnhofstrasse 35, 8001 Zürich, Switzerland
- **Phone**: +41 44 222 05 65
- **Email**: lab@pietrobonandmichel.ch
- **Hours**: By appointment only

### **Development Support**
- **Documentation**: See `DEVELOPMENT.md` and `ARCHITECTURE.md`
- **Issues**: Create GitHub issues for bugs or feature requests
- **Architecture Questions**: Refer to architecture documentation

## 📋 **Recent Updates**

### **✅ December 2024 - Major Cleanup**
- **Archived legacy components** to `src/archive/`
- **Simplified routing** - removed complex language URLs
- **Updated all pages** to use consistent slide architecture
- **Created comprehensive documentation**
- **Improved performance** with clean component structure

### **🎨 Design System Established**
- **Consistent color palette** throughout
- **Professional typography** choices
- **Responsive animation** patterns
- **Mobile-first** approach

---

**🌟 This website represents a modern, professional approach to dental laboratory presentation, combining technical excellence with elegant design to serve both dental professionals and patients effectively.**