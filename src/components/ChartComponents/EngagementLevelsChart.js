import React from 'react';
import styles from './ChartComponents.module.css';

export function EngagementLevelsChart({ selectedModel }) {
  return (
    <div className={styles.chartContainer}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3>Engagement Levels Chart</h3>
        <p>Engagement data for {selectedModel === 'all' ? 'all models' : selectedModel}</p>
      </div>
    </div>
  );
}