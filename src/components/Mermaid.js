import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Initialize mermaid with configuration
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'Arial, sans-serif',
      fontSize: 14,
      pie: {
        textPosition: 0.75
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      },
      sequence: {
        useMaxWidth: true
      },
      gantt: {
        useMaxWidth: true
      }
    });

    // Render the chart
    if (ref.current && chart) {
      const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
      mermaid.render(id, chart).then((result) => {
        ref.current.innerHTML = result.svg;
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
        ref.current.innerHTML = `<p style="color: red;">Error rendering chart: ${error.message}</p>`;
      });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-container" />;
};

export default Mermaid;