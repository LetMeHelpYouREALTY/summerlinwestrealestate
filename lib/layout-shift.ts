/**
 * Layout Shift Detection utilities for CLS optimization
 * Optimized for real estate website layout stability
 */

import React from 'react';

export interface LayoutShiftEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
  sources: LayoutShiftSource[];
}

export interface LayoutShiftSource {
  node?: Node;
  previousRect: DOMRect;
  currentRect: DOMRect;
}

export interface LayoutShiftIssue {
  element: Element;
  selector: string;
  shiftValue: number;
  cause: 'image' | 'font' | 'dynamic-content' | 'advertisement' | 'unknown';
  recommendation: string;
}

class LayoutShiftDetector {
  private shifts: LayoutShiftEntry[] = [];
  private issues: LayoutShiftIssue[] = [];
  private observer: PerformanceObserver | null = null;

  /**
   * Initialize layout shift monitoring
   */
  public init(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('Layout Shift Detection not supported in this environment');
      return;
    }

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as PerformanceEntry & LayoutShiftEntry;
            this.shifts.push(layoutShiftEntry);
            this.analyzeShift(layoutShiftEntry);
          }
        }
      });

      this.observer.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.error('Failed to initialize layout shift detection:', error);
    }
  }

  /**
   * Analyze layout shift and identify causes
   */
  private analyzeShift(shift: LayoutShiftEntry): void {
    if (shift.value < 0.1) return; // Only analyze significant shifts

    shift.sources.forEach((source) => {
      if (source.node && source.node.nodeType === Node.ELEMENT_NODE) {
        const element = source.node as Element;
        const issue = this.identifyShiftCause(element, shift.value);
        if (issue) {
          this.issues.push(issue);
        }
      }
    });
  }

  /**
   * Identify the cause of a layout shift
   */
  private identifyShiftCause(element: Element, shiftValue: number): LayoutShiftIssue | null {
    const selector = this.getElementSelector(element);
    const tagName = element.tagName.toLowerCase();

    // Check for common causes
    if (tagName === 'img') {
      return {
        element,
        selector,
        shiftValue,
        cause: 'image',
        recommendation: 'Add width and height attributes to prevent layout shift',
      };
    }

    if (element.querySelector('img')) {
      return {
        element,
        selector,
        shiftValue,
        cause: 'image',
        recommendation: 'Ensure all images have explicit dimensions',
      };
    }

    // Check for font-related shifts
    const computedStyle = window.getComputedStyle(element);
    const fontFamily = computedStyle.fontFamily;
    if (fontFamily && !fontFamily.includes('system-ui') && !fontFamily.includes('sans-serif')) {
      return {
        element,
        selector,
        shiftValue,
        cause: 'font',
        recommendation: 'Use font-display: swap and preload critical fonts',
      };
    }

    // Check for dynamic content
    if (element.hasAttribute('data-dynamic') || element.classList.contains('dynamic')) {
      return {
        element,
        selector,
        shiftValue,
        cause: 'dynamic-content',
        recommendation: 'Reserve space for dynamic content or use skeleton loading',
      };
    }

    // Check for advertisements
    if (
      element.classList.contains('ad') ||
      element.id.includes('ad') ||
      element.id.includes('banner')
    ) {
      return {
        element,
        selector,
        shiftValue,
        cause: 'advertisement',
        recommendation: 'Reserve space for ads or load them after page content',
      };
    }

    return {
      element,
      selector,
      shiftValue,
      cause: 'unknown',
      recommendation: 'Investigate and add explicit dimensions or use CSS containment',
    };
  }

  /**
   * Get cumulative layout shift score
   */
  public getCLS(): number {
    return this.shifts.reduce((total, shift) => {
      return total + shift.value;
    }, 0);
  }

  /**
   * Get layout shift issues
   */
  public getIssues(): LayoutShiftIssue[] {
    return [...this.issues];
  }

  /**
   * Get layout shift entries
   */
  public getShifts(): LayoutShiftEntry[] {
    return [...this.shifts];
  }

  /**
   * Clear stored data
   */
  public clear(): void {
    this.shifts = [];
    this.issues = [];
  }

  /**
   * Disconnect observer
   */
  public disconnect(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  /**
   * Get CSS selector for element
   */
  private getElementSelector(element: Element): string {
    if (element.id) {
      return `#${element.id}`;
    }

    if (element.className) {
      const classes = element.className.split(' ').filter((cls) => cls.trim());
      if (classes.length > 0) {
        return `.${classes.join('.')}`;
      }
    }

    return element.tagName.toLowerCase();
  }

  /**
   * Generate recommendations for fixing layout shifts
   */
  public getRecommendations(): string[] {
    const recommendations: string[] = [];
    const causes = new Set(this.issues.map((issue) => issue.cause));

    if (causes.has('image')) {
      recommendations.push('Add explicit width and height attributes to all images');
      recommendations.push('Use aspect-ratio CSS property for responsive images');
      recommendations.push('Consider using Next.js Image component with priority loading');
    }

    if (causes.has('font')) {
      recommendations.push('Preload critical fonts using <link rel="preload">');
      recommendations.push('Use font-display: swap for better loading performance');
      recommendations.push('Consider using system fonts as fallbacks');
    }

    if (causes.has('dynamic-content')) {
      recommendations.push('Reserve space for dynamic content using CSS');
      recommendations.push('Use skeleton loading states');
      recommendations.push('Implement CSS containment for dynamic elements');
    }

    if (causes.has('advertisement')) {
      recommendations.push('Reserve space for advertisements');
      recommendations.push('Load ads after critical content');
      recommendations.push('Use CSS containment for ad containers');
    }

    return recommendations;
  }
}

// Create singleton instance
export const layoutShiftDetector = new LayoutShiftDetector();

/**
 * Hook for React components to monitor layout shifts
 */
export function useLayoutShiftDetection() {
  const [cls, setCLS] = React.useState(0);
  const [issues, setIssues] = React.useState<LayoutShiftIssue[]>([]);
  const [isMonitoring, setIsMonitoring] = React.useState(false);

  React.useEffect(() => {
    if (!isMonitoring) {
      layoutShiftDetector.init();
      setIsMonitoring(true);
    }

    // Update CLS score periodically
    const interval = setInterval(() => {
      setCLS(layoutShiftDetector.getCLS());
      setIssues(layoutShiftDetector.getIssues());
    }, 1000);

    return () => {
      clearInterval(interval);
      layoutShiftDetector.disconnect();
    };
  }, [isMonitoring]);

  return {
    cls,
    issues,
    isMonitoring,
    recommendations: layoutShiftDetector.getRecommendations(),
  };
}

/**
 * Utility to prevent layout shifts for specific elements
 */
export function preventLayoutShift(
  element: Element,
  dimensions: { width: number; height: number }
): void {
  if (element instanceof HTMLElement) {
    element.style.width = `${dimensions.width}px`;
    element.style.height = `${dimensions.height}px`;
    element.style.aspectRatio = `${dimensions.width} / ${dimensions.height}`;
  }
}

/**
 * Utility to add CSS containment to prevent layout shifts
 */
export function addLayoutContainment(element: Element): void {
  if (element instanceof HTMLElement) {
    element.style.contain = 'layout style paint';
  }
}

export default layoutShiftDetector;
