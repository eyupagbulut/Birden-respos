import '../styles/globals.css';
import '../styles/prism.css';
import { memo } from 'react';
import PerformanceMonitor from '../components/PerformanceMonitor';

// Theme component to avoid unnecessary DOM elements
const ThemeProvider = memo(function ThemeProvider({ children }) {
  return (
    <>
      <span className="theme-bejamas" />
      {children}
    </>
  );
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <PerformanceMonitor />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
