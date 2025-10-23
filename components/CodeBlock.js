import { memo, useEffect, useRef } from 'react';

const CodeBlock = memo(function CodeBlock({ children, className, ...props }) {
  const codeRef = useRef(null);

  useEffect(() => {
    // Only load Prism.js if there's code content
    if (codeRef.current && codeRef.current.querySelector('code')) {
      import('prismjs').then((Prism) => {
        Prism.highlightAllUnder(codeRef.current);
      });
    }
  }, [children]);

  return (
    <pre ref={codeRef} className={className} {...props}>
      {children}
    </pre>
  );
});

export default CodeBlock;