import React, { useEffect, useRef } from 'react';

export default function MermaidChart({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.mermaid) {
      window.mermaid.initialize({ startOnLoad: false });
      window.mermaid.render(`mermaid-${Math.random()}`, chart, (svgCode) => {
        ref.current.innerHTML = svgCode;
      });
    }
  }, [chart]);

  return <div ref={ref} />;
}
