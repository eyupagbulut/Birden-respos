import classNames from 'classnames';
import { useEffect, useCallback, memo } from 'react';
import styles from './Layout.module.css';

export const GradientBackground = memo(function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
});

export default function Layout({ children }) {
  const setAppTheme = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const theme = localStorage.getItem('theme');
    const darkMode = theme === 'dark';
    const lightMode = theme === 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else if (lightMode) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleSystemThemeChange = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      const theme = e.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', e.matches);
      localStorage.setItem('theme', theme);
    };

    darkQuery.addEventListener('change', handleChange);
    
    // Return cleanup function
    return () => darkQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setAppTheme();
    const cleanup = handleSystemThemeChange();
    return cleanup;
  }, [setAppTheme, handleSystemThemeChange]);

  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        {children}
      </div>
    </div>
  );
}
