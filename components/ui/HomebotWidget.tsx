import { useCallback, useEffect, useRef, useState } from 'react';

// ===== TYPE DEFINITIONS =====
declare global {
  interface Window {
    Homebot?: unknown;
  }
}

interface HomebotOptions {
  theme?: 'light-theme' | 'dark-mode-theme';
  height?: number;
  autoResize?: boolean;
}

interface HomebotWidgetProps {
  apiKey?: string;
  theme?: HomebotOptions['theme'];
  height?: number;
  className?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

// ===== CONSTANTS =====
const HOMEBOT_SCRIPT_SRC = 'https://embed.homebotapp.com/lgw/v1/widget.js';
const DEFAULT_WIDGET_KEY = '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43';
const SCRIPT_LOAD_TIMEOUT = 10000; // 10 seconds
const MAX_RETRY_ATTEMPTS = 3;

// ===== LOADING STATES =====
type LoadingState = 'idle' | 'loading' | 'loaded' | 'error' | 'retrying';

export default function HomebotWidget({
  apiKey = DEFAULT_WIDGET_KEY,
  theme = 'dark-mode-theme',
  height = 480,
  className = '',
  onLoad,
  onError,
}: HomebotWidgetProps) {
  // ===== STATE MANAGEMENT =====
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<ShadowRoot | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);
  const retryLoadRef = useRef<() => void>();

  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  // ===== UTILITY FUNCTIONS =====
  const clearLoadTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleError = useCallback(
    (errorMessage: string, originalError?: Error) => {
      const error = new Error(errorMessage);
      setError(errorMessage);
      setLoadingState('error');
      onError?.(originalError || error);
      console.error('[HomebotWidget]', errorMessage, originalError);
    },
    [onError]
  );

  const initializeWidget = useCallback(() => {
    if (!shadowRef.current) return;

    try {
      if (window.Homebot) {
        window.Homebot('#homebot_homeowner', apiKey, {
          theme,
          height,
          autoResize: true,
        });
        setLoadingState('loaded');
        setError(null);
        onLoad?.();
      } else {
        throw new Error('Homebot library not available');
      }
    } catch (err) {
      handleError('Failed to initialize Homebot widget', err as Error);
    }
  }, [apiKey, theme, height, onLoad, handleError]);

  const loadScript = useCallback(() => {
    if (!shadowRef.current || !containerRef.current) return;

    const shadow = shadowRef.current;

    // Check if script already exists and is working
    const existingScript = shadow.querySelector(`script[src="${HOMEBOT_SCRIPT_SRC}"]`);
    if (existingScript && window.Homebot) {
      initializeWidget();
      return;
    }

    setLoadingState('loading');

    // Create script element
    const script = document.createElement('script');
    script.src = HOMEBOT_SCRIPT_SRC;
    script.async = true;
    script.crossOrigin = 'anonymous';

    // Set up timeout
    timeoutRef.current = setTimeout(() => {
      handleError('Script load timeout');
      retryLoadRef.current?.();
    }, SCRIPT_LOAD_TIMEOUT);

    // Handle successful load
    script.onload = () => {
      clearLoadTimeout();
      scriptRef.current = script;
      // Give the script a moment to initialize
      setTimeout(() => {
        initializeWidget();
      }, 100);
    };

    // Handle load error
    script.onerror = () => {
      clearLoadTimeout();
      handleError('Failed to load Homebot script');
      retryLoadRef.current?.();
    };

    // Note: Append to document head instead of shadow DOM
    // Scripts in shadow DOM don&apos;t execute in global scope
    document.head.appendChild(script);
  }, [initializeWidget, handleError, clearLoadTimeout]);

  const retryLoad: () => void = useCallback(() => {
    if (retryCountRef.current >= MAX_RETRY_ATTEMPTS) {
      handleError(`Failed to load after ${MAX_RETRY_ATTEMPTS} attempts`);
      return;
    }

    retryCountRef.current++;
    setLoadingState('retrying');
    setError(null);

    // Remove failed script
    if (scriptRef.current && shadowRef.current?.contains(scriptRef.current)) {
      shadowRef.current.removeChild(scriptRef.current);
      scriptRef.current = null;
    }

    // Retry after delay
    setTimeout(() => {
      loadScript();
    }, 1000 * retryCountRef.current); // Exponential backoff
  }, [handleError, loadScript]);

  // Assign retryLoad to ref so loadScript can use it
  retryLoadRef.current = retryLoad;

  const setupShadowDOM = useCallback(() => {
    if (!containerRef.current) return;

    // Create shadow DOM if not exists
    if (!shadowRef.current) {
      shadowRef.current = containerRef.current.attachShadow({ mode: 'open' });
    }

    const shadow = shadowRef.current;

    // Create widget mount point
    let mount = shadow.getElementById('homebot_homeowner');
    if (!mount) {
      mount = document.createElement('div');
      mount.id = 'homebot_homeowner';
      mount.style.cssText = `
        min-height: ${height}px;
        width: 100%;
        z-index: 1000;
        border-radius: inherit;
        overflow: hidden;
      `;
      shadow.appendChild(mount);
    }

    // Add custom styles to shadow DOM
    let styles = shadow.querySelector('style');
    if (!styles) {
      styles = document.createElement('style');
      styles.textContent = `
        :host {
          display: block;
          width: 100%;
        }
        
        #homebot_homeowner {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Loading spinner */
        .loading-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: ${height}px;
          background: linear-gradient(135deg, #f9fafb, #f3f4f6);
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #e5e7eb;
          border-top: 3px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Error styles */
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: ${height}px;
          padding: 2rem;
          background: #fef2f2;
          color: #dc2626;
          text-align: center;
          border-radius: inherit;
        }
        
        .error-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .error-message {
          font-size: 0.875rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }
        
        .retry-button {
          padding: 0.5rem 1rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .retry-button:hover {
          background: #b91c1c;
        }
      `;
      shadow.appendChild(styles);
    }
  }, [height]);

  // ===== COMPONENT LIFECYCLE =====
  useEffect(() => {
    setupShadowDOM();
    void loadScript();

    // Cleanup
    return () => {
      void clearLoadTimeout();

      // Remove script from document head if we added it
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }

      // Reset retry counter
      retryCountRef.current = 0;
    };
  }, [setupShadowDOM, loadScript, clearLoadTimeout]);

  // ===== RENDER LOADING/ERROR STATES =====
  useEffect(() => {
    if (!shadowRef.current) return;

    const mount = shadowRef.current.getElementById('homebot_homeowner');
    if (!mount) return;

    if (loadingState === 'loading' || loadingState === 'retrying') {
      mount.innerHTML = `
        <div class="loading-spinner">
          <div class="spinner"></div>
        </div>
      `;
    } else if (loadingState === 'error') {
      mount.innerHTML = `
        <div class="error-container">
          <div class="error-title">Unable to Load Widget</div>
          <div class="error-message">${error}</div>
          <button class="retry-button" onclick="this.dispatchEvent(new CustomEvent(&apos;retry&apos;, { bubbles: true }))">
            Retry${retryCountRef.current > 0 ? ` (${retryCountRef.current}/${MAX_RETRY_ATTEMPTS})` : ''}
          </button>
        </div>
      `;

      // Add retry event listener
      const retryHandler = (e: Event) => {
        if ((e as CustomEvent).type === 'retry') {
          retryLoad();
        }
      };

      mount.addEventListener('retry', retryHandler);

      return () => {
        mount.removeEventListener('retry', retryHandler);
      };
    }
  }, [loadingState, error, retryLoad]);

  // ===== RENDER COMPONENT =====
  if (loadingState === 'loading' || loadingState === 'retrying') {
    return (
      <div
        ref={containerRef}
        className={`homebot-widget card-elevated w-full min-h-[${height}px] rounded-2xl overflow-hidden transition-all duration-250 ease-out ${className}`.trim()}
        role="application"
        aria-label="Homebot Property Widget"
        aria-live="polite"
        aria-busy="true"
      />
    );
  } else {
    return (
      <div
        ref={containerRef}
        className={`homebot-widget card-elevated w-full min-h-[${height}px] rounded-2xl overflow-hidden transition-all duration-250 ease-out ${className}`.trim()}
        role="application"
        aria-label="Homebot Property Widget"
        aria-live="polite"
        aria-busy="false"
      />
    );
  }
}

// ===== USAGE EXAMPLES =====
/*
// Basic usage
<HomebotWidget />

// Custom configuration
<HomebotWidget
  apiKey="your-api-key"
  theme="light-theme"
  height={600}
  className="my-custom-class"
  onLoad={() => console.log("Widget loaded!")}
  onError={(error) => console.error("Widget error:", error)}
/>

// With our design system
<div className="grid-auto-fit space-y-content">
  <HomebotWidget className="animate-fade-in" />
  <HomebotWidget 
    theme="light-theme" 
    className="card-glass animate-slide-up" 
  />
</div>
*/
