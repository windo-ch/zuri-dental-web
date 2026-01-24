import * as webVitals from 'web-vitals';

type MetricHandler = (metric: webVitals.Metric) => void;

// Create a reportWebVitals function that sends metrics to various analytics services
const reportWebVitals = (onPerfEntry?: MetricHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Measure and report Core Web Vitals metrics
    webVitals.onCLS(onPerfEntry);
    webVitals.onFCP(onPerfEntry);
    webVitals.onLCP(onPerfEntry);
    webVitals.onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;