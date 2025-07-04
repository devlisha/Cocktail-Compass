/**
 * Performance monitoring for Cocktail Compass
 * This file sets up performance tracking and monitoring
 */

// Web Vitals reporting
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'production') {
    // Log to console in development
    console.log(metric);
    
    // You can send to analytics service
    // Example: sendToAnalytics(metric)
  }
}

// Performance observer for monitoring
if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
  // Monitor Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('LCP:', entry.startTime);
    }
  });
  lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

  // Monitor First Input Delay
  const fidObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const fidEntry = entry as any;
      if (fidEntry.processingStart) {
        console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
      }
    }
  });
  fidObserver.observe({ type: 'first-input', buffered: true });

  // Monitor Cumulative Layout Shift
  const clsObserver = new PerformanceObserver((list) => {
    let clsValue = 0;
    for (const entry of list.getEntries()) {
      const clsEntry = entry as any;
      if (!clsEntry.hadRecentInput) {
        clsValue += clsEntry.value || 0;
      }
    }
    console.log('CLS:', clsValue);
  });
  clsObserver.observe({ type: 'layout-shift', buffered: true });
}
