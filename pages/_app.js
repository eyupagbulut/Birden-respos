import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import PerformanceMonitor from '../components/PerformanceMonitor';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
      <PerformanceMonitor />
    </>
  );
}

export default MyApp;
