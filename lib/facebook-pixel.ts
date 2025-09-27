// Facebook Pixel utility functions for real estate tracking
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: Record<string, unknown>) => void;
  }
}

// Facebook Pixel event types for real estate
export interface FacebookPixelEvent {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  content_ids?: string[];
  num_items?: number;
  search_string?: string;
  status?: string;
}

// Initialize Facebook Pixel (called automatically in layout.tsx)
export const initFacebookPixel = (pixelId: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }
};

// Track page views
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Track lead form submissions
export const trackLead = (data: FacebookPixelEvent = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: data.content_name || 'Property Inquiry',
      content_category: data.content_category || 'Real Estate',
      value: data.value || 100, // Estimated lead value
      currency: data.currency || 'USD',
      ...data,
    });
  }
};

// Track property views
export const trackPropertyView = (propertyId: string, propertyName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: propertyName,
      content_category: 'Property',
      content_ids: [propertyId],
      value: value || 0,
      currency: 'USD',
    });
  }
};

// Track property searches
export const trackPropertySearch = (searchTerm: string, resultsCount: number) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchTerm,
      content_category: 'Property Search',
      num_items: resultsCount,
    });
  }
};

// Track contact form submissions
export const trackContact = (formType: string = 'Contact Form') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: formType,
      content_category: 'Lead Generation',
      value: 50, // Estimated contact value
      currency: 'USD',
    });
  }
};

// Track market report downloads
export const trackMarketReportDownload = (reportName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: reportName,
      content_category: 'Market Report',
      value: 25, // Estimated report value
      currency: 'USD',
    });
  }
};

// Track phone number clicks
export const trackPhoneClick = (_phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Call',
      content_category: 'Lead Generation',
      value: 75, // Estimated phone call value
      currency: 'USD',
    });
  }
};

// Track email clicks
export const trackEmailClick = (_emailAddress: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Email Contact',
      content_category: 'Lead Generation',
      value: 50, // Estimated email value
      currency: 'USD',
    });
  }
};

// Track community page views
export const trackCommunityView = (communityName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: communityName,
      content_category: 'Community',
      value: 0,
      currency: 'USD',
    });
  }
};

// Track blog post views
export const trackBlogView = (postTitle: string, postCategory: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: postTitle,
      content_category: postCategory,
      value: 0,
      currency: 'USD',
    });
  }
};

// Track custom events
export const trackCustomEvent = (eventName: string, data: FacebookPixelEvent = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, {
      content_category: 'Real Estate',
      currency: 'USD',
      ...data,
    });
  }
};

// Track conversion events
export const trackConversion = (conversionType: string, value: number, data: FacebookPixelEvent = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      content_name: conversionType,
      content_category: 'Real Estate Conversion',
      value: value,
      currency: 'USD',
      ...data,
    });
  }
};

// Utility to check if Facebook Pixel is loaded
export const isFacebookPixelLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

// Real estate specific tracking functions
export const realEstateTracking = {
  // Track when someone views a property listing
  propertyView: (propertyId: string, propertyName: string, price?: number) => {
    trackPropertyView(propertyId, propertyName, price);
  },

  // Track when someone submits a lead form
  leadSubmission: (formType: string, propertyId?: string, propertyName?: string) => {
    trackLead({
      content_name: formType,
      content_category: 'Property Inquiry',
      value: 100,
      content_ids: propertyId ? [propertyId] : undefined,
    });
  },

  // Track when someone searches for properties
  propertySearch: (searchTerm: string, resultsCount: number) => {
    trackPropertySearch(searchTerm, resultsCount);
  },

  // Track when someone contacts Dr. Jan Duffy
  contact: (method: 'phone' | 'email' | 'form', details?: string) => {
    switch (method) {
      case 'phone':
        trackPhoneClick(details ?? '702-550-0112');
        break;
      case 'email':
        trackEmailClick(details ?? 'DrJanSells@SummerlinWestRealEstate.com');
        break;
      case 'form':
        trackContact('Contact Form');
        break;
    }
  },

  // Track when someone downloads a market report
  marketReportDownload: (reportName: string) => {
    trackMarketReportDownload(reportName);
  },

  // Track when someone views a community page
  communityView: (communityName: string) => {
    trackCommunityView(communityName);
  },

  // Track when someone views a blog post
  blogView: (postTitle: string, category: string) => {
    trackBlogView(postTitle, category);
  },
};
