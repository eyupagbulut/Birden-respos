import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load Prism.js only when needed (for code blocks)
    const loadPrism = async () => {
      if (typeof window !== 'undefined' && document.querySelector('pre code')) {
        const { default: Prism } = await import('prismjs');
        await import('prismjs/themes/prism-tomorrow.css');
        Prism.highlightAll();
      }
    };
    
    loadPrism();
  }, []);

  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
