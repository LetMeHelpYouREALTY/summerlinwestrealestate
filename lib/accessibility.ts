/**
 * Accessibility audit utilities for WCAG compliance
 * Optimized for real estate website accessibility
 */

import React from 'react';

export interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: Element;
  selector?: string;
  wcagLevel?: 'A' | 'AA' | 'AAA';
  wcagGuideline?: string;
}

export interface AccessibilityAuditResult {
  score: number;
  issues: AccessibilityIssue[];
  passed: boolean;
  summary: {
    errors: number;
    warnings: number;
    info: number;
  };
}

class AccessibilityAuditor {
  private issues: AccessibilityIssue[] = [];

  /**
   * Run comprehensive accessibility audit
   */
  public audit(): AccessibilityAuditResult {
    this.issues = [];

    // Run all audit checks
    this.checkImages();
    this.checkHeadings();
    this.checkLinks();
    this.checkForms();
    this.checkColorContrast();
    this.checkKeyboardNavigation();
    this.checkFocusManagement();
    this.checkSemanticHTML();
    this.checkARIALabels();
    this.checkLanguageAttributes();

    const summary = this.getSummary();
    const score = this.calculateScore();

    return {
      score,
      issues: this.issues,
      passed: summary.errors === 0,
      summary,
    };
  }

  /**
   * Check for missing alt text on images
   */
  private checkImages(): void {
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
      const alt = img.getAttribute('alt');
      const src = img.getAttribute('src');

      if (!alt) {
        this.addIssue({
          type: 'error',
          message: 'Image missing alt text',
          element: img,
          selector: this.getElementSelector(img),
          wcagLevel: 'A',
          wcagGuideline: '1.1.1',
        });
      } else if (alt.trim() === '') {
        this.addIssue({
          type: 'warning',
          message: 'Image has empty alt text - should be decorative or have descriptive text',
          element: img,
          selector: this.getElementSelector(img),
          wcagLevel: 'A',
          wcagGuideline: '1.1.1',
        });
      }

      // Check for placeholder images without proper alt text
      if (
        src &&
        (src.includes('placeholder') || src.includes('placehold.co')) &&
        alt === 'placeholder'
      ) {
        this.addIssue({
          type: 'warning',
          message: 'Placeholder image should have descriptive alt text',
          element: img,
          selector: this.getElementSelector(img),
          wcagLevel: 'A',
          wcagGuideline: '1.1.1',
        });
      }
    });
  }

  /**
   * Check heading hierarchy
   */
  private checkHeadings(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingLevels: number[] = [];

    headings.forEach((heading) => {
      const level = parseInt(heading.tagName.charAt(1), 10);
      headingLevels.push(level);

      // Check for empty headings
      if (!heading.textContent?.trim()) {
        this.addIssue({
          type: 'error',
          message: 'Heading is empty',
          element: heading,
          selector: this.getElementSelector(heading),
          wcagLevel: 'A',
          wcagGuideline: '1.3.1',
        });
      }
    });

    // Check heading hierarchy
    for (let i = 1; i < headingLevels.length; i++) {
      if (headingLevels[i] > headingLevels[i - 1] + 1) {
        this.addIssue({
          type: 'warning',
          message: `Heading hierarchy skipped: h${headingLevels[i - 1]} followed by h${headingLevels[i]}`,
          element: headings[i],
          selector: this.getElementSelector(headings[i]),
          wcagLevel: 'A',
          wcagGuideline: '1.3.1',
        });
      }
    }
  }

  /**
   * Check link accessibility
   */
  private checkLinks(): void {
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      const text = link.textContent?.trim();

      // Check for empty links
      if (!text) {
        this.addIssue({
          type: 'error',
          message: 'Link has no accessible text',
          element: link,
          selector: this.getElementSelector(link),
          wcagLevel: 'A',
          wcagGuideline: '2.4.4',
        });
      }

      // Check for generic link text
      if (text && ['click here', 'read more', 'here', 'more'].includes(text.toLowerCase())) {
        this.addIssue({
          type: 'warning',
          message: 'Link text is not descriptive - avoid generic phrases like "click here"',
          element: link,
          selector: this.getElementSelector(link),
          wcagLevel: 'A',
          wcagGuideline: '2.4.4',
        });
      }

      // Check for external links without indication
      if (href?.startsWith('http') && !href.includes(window.location.hostname)) {
        const hasExternalIndicator =
          link.querySelector('[aria-label*="external"], [aria-label*="new window"]') ||
          link.textContent?.includes('(opens in new window)') ||
          link.textContent?.includes('(external)');

        if (!hasExternalIndicator) {
          this.addIssue({
            type: 'info',
            message: 'External link should indicate it opens in new window',
            element: link,
            selector: this.getElementSelector(link),
            wcagLevel: 'AA',
            wcagGuideline: '3.2.5',
          });
        }
      }
    });
  }

  /**
   * Check form accessibility
   */
  private checkForms(): void {
    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
      const inputs = form.querySelectorAll('input, textarea, select');

      inputs.forEach((input) => {
        const id = input.getAttribute('id');
        const _name = input.getAttribute('name');
        const type = input.getAttribute('type');
        const required = input.hasAttribute('required');

        // Check for labels
        let hasLabel = false;
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          hasLabel = !!label;
        }

        if (!hasLabel && type !== 'hidden') {
          this.addIssue({
            type: 'error',
            message: 'Form input missing label',
            element: input,
            selector: this.getElementSelector(input),
            wcagLevel: 'A',
            wcagGuideline: '1.3.1',
          });
        }

        // Check for required field indicators
        if (required && !input.getAttribute('aria-required')) {
          this.addIssue({
            type: 'warning',
            message: 'Required field should have aria-required attribute',
            element: input,
            selector: this.getElementSelector(input),
            wcagLevel: 'A',
            wcagGuideline: '3.3.2',
          });
        }
      });
    });
  }

  /**
   * Check color contrast (basic check)
   */
  private checkColorContrast(): void {
    // This is a simplified check - real contrast checking requires more complex calculations
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const color = computedStyle.color;
      const backgroundColor = computedStyle.backgroundColor;

      // Check for very light text on light background or dark text on dark background
      if (color && backgroundColor) {
        // This is a basic heuristic - real contrast checking would use WCAG formulas
        const isLightText =
          color.includes('255') || color.includes('white') || color.includes('light');
        const isLightBackground =
          backgroundColor.includes('255') ||
          backgroundColor.includes('white') ||
          backgroundColor.includes('light');

        if (isLightText && isLightBackground) {
          this.addIssue({
            type: 'warning',
            message: 'Potential color contrast issue - light text on light background',
            element: element,
            selector: this.getElementSelector(element),
            wcagLevel: 'AA',
            wcagGuideline: '1.4.3',
          });
        }
      }
    });
  }

  /**
   * Check keyboard navigation
   */
  private checkKeyboardNavigation(): void {
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]'
    );

    interactiveElements.forEach((element) => {
      const tabIndex = element.getAttribute('tabindex');

      // Check for positive tabindex values (should be avoided)
      if (tabIndex && parseInt(tabIndex, 10) > 0) {
        this.addIssue({
          type: 'warning',
          message: 'Positive tabindex values can disrupt keyboard navigation order',
          element: element,
          selector: this.getElementSelector(element),
          wcagLevel: 'A',
          wcagGuideline: '2.4.3',
        });
      }
    });
  }

  /**
   * Check focus management
   */
  private checkFocusManagement(): void {
    // Check for focus traps and focus indicators
    const focusableElements = document.querySelectorAll(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements.forEach((element) => {
      const computedStyle = window.getComputedStyle(element);
      const outline = computedStyle.outline;
      const outlineWidth = computedStyle.outlineWidth;

      if (outline === 'none' && outlineWidth === '0px') {
        this.addIssue({
          type: 'warning',
          message: 'Focusable element should have visible focus indicator',
          element: element,
          selector: this.getElementSelector(element),
          wcagLevel: 'AA',
          wcagGuideline: '2.4.7',
        });
      }
    });
  }

  /**
   * Check semantic HTML usage
   */
  private checkSemanticHTML(): void {
    // Check for proper use of semantic elements
    const divs = document.querySelectorAll('div');

    divs.forEach((div) => {
      const role = div.getAttribute('role');
      const className = div.getAttribute('class');

      // Check for divs that should be semantic elements
      if (className?.includes('button') && !role) {
        this.addIssue({
          type: 'warning',
          message: 'Div with button-like styling should have role="button" or use button element',
          element: div,
          selector: this.getElementSelector(div),
          wcagLevel: 'A',
          wcagGuideline: '1.3.1',
        });
      }
    });
  }

  /**
   * Check ARIA labels and attributes
   */
  private checkARIALabels(): void {
    const elementsWithAria = document.querySelectorAll(
      '[aria-label], [aria-labelledby], [aria-describedby]'
    );

    elementsWithAria.forEach((element) => {
      const ariaLabel = element.getAttribute('aria-label');
      const ariaLabelledBy = element.getAttribute('aria-labelledby');
      const _ariaDescribedBy = element.getAttribute('aria-describedby');

      // Check for empty ARIA labels
      if (ariaLabel && !ariaLabel.trim()) {
        this.addIssue({
          type: 'error',
          message: 'ARIA label is empty',
          element: element,
          selector: this.getElementSelector(element),
          wcagLevel: 'A',
          wcagGuideline: '4.1.2',
        });
      }

      // Check for missing referenced elements
      if (ariaLabelledBy) {
        const referencedElement = document.getElementById(ariaLabelledBy);
        if (!referencedElement) {
          this.addIssue({
            type: 'error',
            message: `ARIA labelledby references non-existent element: ${ariaLabelledBy}`,
            element: element,
            selector: this.getElementSelector(element),
            wcagLevel: 'A',
            wcagGuideline: '4.1.2',
          });
        }
      }
    });
  }

  /**
   * Check language attributes
   */
  private checkLanguageAttributes(): void {
    const html = document.documentElement;
    const lang = html.getAttribute('lang');

    if (!lang) {
      this.addIssue({
        type: 'error',
        message: 'HTML element missing lang attribute',
        element: html,
        selector: 'html',
        wcagLevel: 'A',
        wcagGuideline: '3.1.1',
      });
    }
  }

  /**
   * Add issue to the list
   */
  private addIssue(issue: AccessibilityIssue): void {
    this.issues.push(issue);
  }

  /**
   * Get summary of issues
   */
  private getSummary() {
    return {
      errors: this.issues.filter((issue) => issue.type === 'error').length,
      warnings: this.issues.filter((issue) => issue.type === 'warning').length,
      info: this.issues.filter((issue) => issue.type === 'info').length,
    };
  }

  /**
   * Calculate accessibility score
   */
  private calculateScore(): number {
    const total = this.issues.length;
    if (total === 0) return 100;

    const errors = this.issues.filter((issue) => issue.type === 'error').length;
    const warnings = this.issues.filter((issue) => issue.type === 'warning').length;

    // Score calculation: 100 - (errors * 10) - (warnings * 5)
    const score = Math.max(0, 100 - errors * 10 - warnings * 5);
    return Math.round(score);
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
}

// Create singleton instance
export const accessibilityAuditor = new AccessibilityAuditor();

/**
 * Hook for React components to run accessibility audit
 */
export function useAccessibilityAudit() {
  const [auditResult, setAuditResult] = React.useState<AccessibilityAuditResult | null>(null);
  const [isAuditing, setIsAuditing] = React.useState(false);

  const runAudit = React.useCallback(() => {
    setIsAuditing(true);

    // Run audit after a short delay to ensure DOM is ready
    setTimeout(() => {
      const result = accessibilityAuditor.audit();
      setAuditResult(result);
      setIsAuditing(false);
    }, 100);
  }, []);

  return {
    auditResult,
    isAuditing,
    runAudit,
  };
}

export default accessibilityAuditor;
