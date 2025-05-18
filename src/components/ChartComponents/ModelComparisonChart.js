import React from 'react';
import styles from './ChartComponents.module.css';

export function ModelComparisonChart({ selectedModel }) {
  return (
    <div className={styles.chartContainer}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Model Comparison Chart</h3>
        <p>Comparison data for {selectedModel === 'all' ? 'all models' : selectedModel}</p>
      </div>
    </div>
  );
}