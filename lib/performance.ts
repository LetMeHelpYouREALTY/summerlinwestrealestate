/**
 * Performance monitoring utilities for Core Web Vitals
 * Optimized for real estate website performance tracking
 */

import React from 'react';

export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

export interface PerformanceConfig {
  analyticsId?: string;
  debug?: boolean;
  sampleRate?: number;
  realEstateOptimized?: boolean;
}

export interface RealEstateMetrics {
  propertySearchINP: number;
  imageLoadLCP: number;
  formSubmissionFID: number;
  mapLoadCLS: number;
  pageNavigationTTFB: number;
}

class PerformanceMonitor {
  private config: PerformanceConfig;
  private metrics: Map<string, WebVitalsMetric> = new Map();
  private realEstateMetrics: Partial<RealEstateMetrics> = {};

  constructor(config: PerformanceConfig = {}) {
    this.config = {
      debug: false,
      sampleRate: 1,
      realEstateOptimized: true,
      ...config,
    };
  }

  /**
   * Send metric to analytics service with real estate context
   */
  private sendToAnalytics(metric: WebVitalsMetric): void {
    if (this.config.debug) {
      console.log('Web Vitals Metric:', metric);
    }

    // Enhanced analytics for real estate site
    const realEstateContext = this.getRealEstateContext(metric);

    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
        custom_map: {
          dimension1: realEstateContext.pageType,
          dimension2: realEstateContext.userAction,
          dimension3: realEstateContext.deviceType,
        },
      });
    }

    // Store metric for debugging
    this.metrics.set(metric.id, metric);

    // Track real estate specific metrics
    this.trackRealEstateMetric(metric);
  }

  /**
   * Get real estate context for metrics
   */
  private getRealEstateContext(metric: WebVitalsMetric) {
    const path = window.location.pathname;
    const userAgent = navigator.userAgent;

    return {
      pageType: this.getPageType(path),
      userAction: this.getUserAction(metric),
      deviceType: this.getDeviceType(userAgent),
    };
  }

  /**
   * Determine page type for real estate context
   */
  private getPageType(path: string): string {
    if (path === '/') return 'homepage';
    if (path.includes('/properties')) return 'property-listings';
    if (path.includes('/communities')) return 'community-pages';
    if (path.includes('/market')) return 'market-reports';
    if (path.includes('/contact')) return 'contact-forms';
    if (path.includes('/about')) return 'about-page';
    return 'other';
  }

  /**
   * Determine user action based on metric
   */
  private getUserAction(metric: WebVitalsMetric): string {
    switch (metric.name) {
      case 'LCP':
        return 'page-load';
      case 'FID':
      case 'INP':
        return 'user-interaction';
      case 'CLS':
        return 'layout-shift';
      case 'FCP':
        return 'first-paint';
      case 'TTFB':
        return 'server-response';
      default:
        return 'unknown';
    }
  }

  /**
   * Determine device type
   */
  private getDeviceType(userAgent: string): string {
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      return 'mobile';
    }
    if (/Tablet|iPad/.test(userAgent)) {
      return 'tablet';
    }
    return 'desktop';
  }

  /**
   * Track real estate specific metrics
   */
  private trackRealEstateMetric(metric: WebVitalsMetric): void {
    const path = window.location.pathname;

    // Track property search interactions
    if (path.includes('/properties') && metric.name === 'INP') {
      this.realEstateMetrics.propertySearchINP = metric.value;
    }

    // Track image loading performance
    if (metric.name === 'LCP' && this.isImageElement(metric)) {
      this.realEstateMetrics.imageLoadLCP = metric.value;
    }

    // Track form submission performance
    if (path.includes('/contact') && metric.name === 'FID') {
      this.realEstateMetrics.formSubmissionFID = metric.value;
    }

    // Track map loading layout shifts
    if (metric.name === 'CLS' && this.isMapRelated(metric)) {
      this.realEstateMetrics.mapLoadCLS = metric.value;
    }

    // Track page navigation
    if (metric.name === 'TTFB') {
      this.realEstateMetrics.pageNavigationTTFB = metric.value;
    }
  }

  /**
   * Check if LCP element is an image
   */
  private isImageElement(metric: WebVitalsMetric): boolean {
    return metric.entries.some((entry) => entry.element && entry.element.tagName === 'IMG');
  }

  /**
   * Check if CLS is related to map loading
   */
  private isMapRelated(metric: WebVitalsMetric): boolean {
    return metric.entries.some(
      (entry) =>
        entry.element &&
        (entry.element.classList.contains('map') ||
          entry.element.id.includes('map') ||
          entry.element.querySelector('.map'))
    );
  }

  /**
   * Initialize Core Web Vitals monitoring with real estate optimizations
   */
  public async init(): Promise<void> {
    if (typeof window === 'undefined') return;

    try {
      // Dynamic import to avoid bundling issues
      const { getCLS, getFID, getFCP, getLCP, getTTFB, getINP } = await import('web-vitals');

      // Monitor all Core Web Vitals with real estate context
      getCLS(this.sendToAnalytics.bind(this), { reportAllChanges: true });
      getFID(this.sendToAnalytics.bind(this));
      getFCP(this.sendToAnalytics.bind(this));
      getLCP(this.sendToAnalytics.bind(this), { reportAllChanges: true });
      getTTFB(this.sendToAnalytics.bind(this));

      // Monitor Interaction to Next Paint (INP) - critical for property search
      if (getINP) {
        getINP(this.sendToAnalytics.bind(this), { reportAllChanges: true });
      }

      // Initialize real estate specific monitoring
      this.initRealEstateMonitoring();

      if (this.config.debug) {
        console.log('Real Estate Performance monitoring initialized');
      }
    } catch (error) {
      console.error('Failed to initialize performance monitoring:', error);
    }
  }

  /**
   * Initialize real estate specific performance monitoring
   */
  private initRealEstateMonitoring(): void {
    // Monitor property search form interactions
    this.monitorPropertySearch();

    // Monitor image loading performance
    this.monitorImageLoading();

    // Monitor map loading performance
    this.monitorMapLoading();
  }

  /**
   * Monitor property search form performance
   */
  private monitorPropertySearch(): void {
    const searchForms = document.querySelectorAll(
      'form[data-property-search], .property-search-form'
    );

    searchForms.forEach((form) => {
      form.addEventListener('submit', (_event) => {
        const startTime = performance.now();

        // Track form submission performance
        setTimeout(() => {
          const duration = performance.now() - startTime;

          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'property_search_submit', {
              event_category: 'Real Estate',
              event_label: 'Form Submission',
              value: Math.round(duration),
            });
          }
        }, 100);
      });
    });
  }

  /**
   * Monitor image loading performance
   */
  private monitorImageLoading(): void {
    const images = document.querySelectorAll('img[data-property-image], .property-image img');

    images.forEach((img) => {
      img.addEventListener('load', () => {
        const loadTime = performance.now() - performance.timing.navigationStart;

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'property_image_load', {
            event_category: 'Real Estate',
            event_label: 'Image Loading',
            value: Math.round(loadTime),
          });
        }
      });
    });
  }

  /**
   * Monitor map loading performance
   */
  private monitorMapLoading(): void {
    const maps = document.querySelectorAll('.map, [data-map], iframe[src*="google.com/maps"]');

    maps.forEach((map) => {
      map.addEventListener('load', () => {
        const loadTime = performance.now() - performance.timing.navigationStart;

        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'map_load', {
            event_category: 'Real Estate',
            event_label: 'Map Loading',
            value: Math.round(loadTime),
          });
        }
      });
    });
  }

  /**
   * Get cumulative layout shift score
   */
  public getCLS(): number {
    const clsMetrics = Array.from(this.metrics.values()).filter((m) => m.name === 'CLS');
    return clsMetrics.reduce((total, metric) => total + metric.value, 0);
  }

  /**
   * Get Interaction to Next Paint score
   */
  public getINP(): number {
    const inpMetrics = Array.from(this.metrics.values()).filter((m) => m.name === 'INP');
    return inpMetrics.length > 0 ? inpMetrics[inpMetrics.length - 1].value : 0;
  }

  /**
   * Get Largest Contentful Paint score
   */
  public getLCP(): number {
    const lcpMetrics = Array.from(this.metrics.values()).filter((m) => m.name === 'LCP');
    return lcpMetrics.length > 0 ? lcpMetrics[lcpMetrics.length - 1].value : 0;
  }

  /**
   * Get real estate specific metrics
   */
  public getRealEstateMetrics(): Partial<RealEstateMetrics> {
    return { ...this.realEstateMetrics };
  }

  /**
   * Get stored metrics for debugging
   */
  public getMetrics(): WebVitalsMetric[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Clear stored metrics
   */
  public clearMetrics(): void {
    this.metrics.clear();
    this.realEstateMetrics = {};
  }

  /**
   * Check if Core Web Vitals meet real estate performance thresholds
   */
  public checkRealEstatePerformanceThresholds(): {
    passed: boolean;
    issues: string[];
    recommendations: string[];
  } {
    const issues: string[] = [];
    const recommendations: string[] = [];

    const cls = this.getCLS();
    const inp = this.getINP();
    const lcp = this.getLCP();

    // Real estate specific thresholds
    if (cls > 0.1) {
      issues.push(`CLS is ${cls.toFixed(3)} (should be < 0.1 for real estate sites)`);
      recommendations.push('Optimize property image loading to prevent layout shifts');
    }

    if (inp > 200) {
      issues.push(`INP is ${inp}ms (should be < 200ms for property search)`);
      recommendations.push('Optimize property search form interactions');
    }

    if (lcp > 2500) {
      issues.push(`LCP is ${lcp}ms (should be < 2500ms for property listings)`);
      recommendations.push('Optimize hero images and property photos');
    }

    return {
      passed: issues.length === 0,
      issues,
      recommendations,
    };
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor({
  debug: process.env.NODE_ENV === 'development',
  realEstateOptimized: true,
});

/**
 * Hook for React components to initialize performance monitoring
 */
export function usePerformanceMonitoring(_config?: PerformanceConfig) {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [realEstateMetrics, setRealEstateMetrics] = React.useState<Partial<RealEstateMetrics>>({});

  React.useEffect(() => {
    if (!isInitialized) {
      performanceMonitor.init().then(() => {
        setIsInitialized(true);
      });
    }

    // Update real estate metrics periodically
    const interval = setInterval(() => {
      setRealEstateMetrics(performanceMonitor.getRealEstateMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, [isInitialized]);

  return {
    isInitialized,
    realEstateMetrics,
    performanceCheck: performanceMonitor.checkRealEstatePerformanceThresholds(),
  };
}

/**
 * Utility to measure custom performance metrics for real estate
 */
export function measureRealEstatePerformance<T>(
  name: string,
  fn: () => T | Promise<T>,
  context?: { pageType?: string; userAction?: string }
): Promise<T> {
  const start = performance.now();

  return Promise.resolve(fn()).then(
    (result) => {
      const duration = performance.now() - start;

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: name,
          value: Math.round(duration),
          event_category: 'Real Estate',
          custom_map: {
            dimension1: context?.pageType || 'unknown',
            dimension2: context?.userAction || 'unknown',
          },
        });
      }

      return result;
    },
    (error) => {
      const duration = performance.now() - start;

      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'timing_complete', {
          name: `${name}_error`,
          value: Math.round(duration),
          event_category: 'Real Estate',
        });
      }

      throw error;
    }
  );
}

/**
 * Check if Core Web Vitals meet performance thresholds
 */
export function checkPerformanceThresholds(metrics: WebVitalsMetric[]): {
  passed: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  metrics.forEach((metric) => {
    switch (metric.name) {
      case 'LCP':
        if (metric.value > 2500) {
          issues.push(`LCP is ${metric.value}ms (should be < 2500ms)`);
        }
        break;
      case 'FID':
        if (metric.value > 100) {
          issues.push(`FID is ${metric.value}ms (should be < 100ms)`);
        }
        break;
      case 'CLS':
        if (metric.value > 0.1) {
          issues.push(`CLS is ${metric.value} (should be < 0.1)`);
        }
        break;
      case 'INP':
        if (metric.value > 200) {
          issues.push(`INP is ${metric.value}ms (should be < 200ms)`);
        }
        break;
    }
  });

  return {
    passed: issues.length === 0,
    issues,
  };
}

export default performanceMonitor;
