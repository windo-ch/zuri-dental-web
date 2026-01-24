import '@testing-library/jest-dom';

// Mock IntersectionObserver
class MockIntersectionObserver {
  readonly root: Element | null;
  readonly rootMargin: string;
  readonly thresholds: ReadonlyArray<number>;
  
  constructor() {
    this.root = null;
    this.rootMargin = "";
    this.thresholds = [];
  }
  
  disconnect() {
    return null;
  }
  
  observe() {
    return null;
  }
  
  takeRecords() {
    return [];
  }
  
  unobserve() {
    return null;
  }
}

// Mock framer-motion
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    __esModule: true,
    ...actual,
    motion: {
      div: 'div',
      p: 'p',
      span: 'span',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      ul: 'ul',
      li: 'li',
      button: 'button',
      img: 'img',
      section: 'section',
      form: 'form',
      input: 'input',
      textarea: 'textarea',
      a: 'a',
      nav: 'nav',
      header: 'header',
      footer: 'footer',
      main: 'main',
      article: 'article',
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  };
});

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string, params?: Record<string, string>) => {
        if (typeof key !== 'string') return key;
        
        // Return the key if no translation is found (testing mode)
        if (params) {
          return `${key} ${JSON.stringify(params)}`;
        }
        return key;
      },
      i18n: {
        changeLanguage: () => new Promise(() => {}),
        language: 'en'
      }
    };
  },
  Trans: ({ i18nKey, components }: { i18nKey: string; components?: any[] }) => {
    return i18nKey;
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock window.IntersectionObserver
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock scroll behavior
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  writable: true,
  value: jest.fn(),
});

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })),
}); 