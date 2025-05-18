import React from 'react';
import styles from './ChartComponents.module.css';

export function GeographicImpactMap({ selectedModel }) {
  return (
    <div className={styles.chartContainer}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Geographic Impact Map</h3>
        <p>Map data for {selectedModel === 'all' ? 'all models' : selectedModel}</p>
      </div>
    </div>
  );
}