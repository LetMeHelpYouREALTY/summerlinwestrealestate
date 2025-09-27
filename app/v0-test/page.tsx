'use client';

import { useState } from 'react';
import styles from './v0-test.module.css';

interface GeneratedComponent {
  component: string;
  metadata: {
    generatedAt: string;
    options: any;
  };
}

export default function V0TestPage() {
  const [prompt, setPrompt] = useState('');
  const [generatedComponent, setGeneratedComponent] = useState<GeneratedComponent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateComponent = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/v0/generate-component', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          options: {
            framework: 'next',
            style: 'tailwind',
            includeTypes: true,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate component');
      }

      setGeneratedComponent(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePage = async (pageType: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/v0/generate-page', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pageType,
          requirements: {
            community: 'Summerlin West',
            features: ['luxury homes', 'golf courses', 'Red Rock Canyon views'],
            seoKeywords: ['Summerlin West real estate', 'luxury homes Las Vegas'],
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate page');
      }

      setGeneratedComponent({
        component: data.page,
        metadata: data.metadata,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>V0 AI Integration Test</h1>
        <p className={styles.subtitle}>
          Test AI-powered component generation for Summerlin West Real Estate
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Generate Custom Component</h2>
        <div className={styles.inputGroup}>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the React component you want to generate..."
            className={styles.textarea}
            rows={4}
          />
          <button onClick={handleGenerateComponent} disabled={loading} className={styles.button}>
            {loading ? 'Generating...' : 'Generate Component'}
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Page Templates</h2>
        <div className={styles.buttonGrid}>
          <button
            onClick={() => handleGeneratePage('homepage')}
            disabled={loading}
            className={styles.templateButton}
          >
            Homepage
          </button>
          <button
            onClick={() => handleGeneratePage('property-listing')}
            disabled={loading}
            className={styles.templateButton}
          >
            Property Listing
          </button>
          <button
            onClick={() => handleGeneratePage('community')}
            disabled={loading}
            className={styles.templateButton}
          >
            Community Page
          </button>
          <button
            onClick={() => handleGeneratePage('market-report')}
            disabled={loading}
            className={styles.templateButton}
          >
            Market Report
          </button>
          <button
            onClick={() => handleGeneratePage('contact')}
            disabled={loading}
            className={styles.templateButton}
          >
            Contact Page
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}

      {generatedComponent && (
        <div className={styles.result}>
          <h2 className={styles.sectionTitle}>Generated Component</h2>
          <div className={styles.metadata}>
            <p>
              <strong>Generated:</strong>{' '}
              {new Date(generatedComponent.metadata.generatedAt).toLocaleString()}
            </p>
            <p>
              <strong>Options:</strong>{' '}
              {JSON.stringify(generatedComponent.metadata.options, null, 2)}
            </p>
          </div>
          <pre className={styles.codeBlock}>
            <code>{generatedComponent.component}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
