import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const reportWebVitals = (metric) => {
      // You can send these metrics to your analytics service
      console.log(metric);
    };

    // Import web-vitals dynamically to avoid increasing bundle size
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    }).catch(() => {
      // Silently fail if web-vitals is not available
    });

    // Performance observer for monitoring resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log slow resources (>1s)
          if (entry.duration > 1000) {
            console.warn('Slow resource:', entry.name, entry.duration + 'ms');
          }
        });
      });

      observer.observe({ entryTypes: ['resource', 'navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
}