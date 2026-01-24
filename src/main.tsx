import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Import i18n configuration
import './lib/i18n';
import { Suspense } from 'react';
import reportWebVitals from './utils/reportWebVitals';

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);

// If you want to measure and report performance metrics,
// pass a function to log results (e.g. to console or to an analytics service)
reportWebVitals(metric => {
  // Example: Log to console in development
  if (import.meta.env.DEV) {
    console.log(metric);
  }
  
  // Example: Send to an analytics endpoint in production
  // In a real app, you would send these to your analytics service
  if (import.meta.env.PROD) {
    const analyticsEndpoint = 'https://example.com/analytics';
    const body = JSON.stringify(metric);
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, body);
    } else {
      fetch(analyticsEndpoint, {
        body,
        method: 'POST',
        keepalive: true
      });
    }
  }
});
