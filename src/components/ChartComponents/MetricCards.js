import React from 'react';
import styles from './ChartComponents.module.css';

export function MetricCards({ selectedModel }) {
  return (
    <div className="row">
      <div className="col col--4">
        <div className="card margin-bottom--md">
          <div className="card__header">
            <h3>Total Citations</h3>
          </div>
          <div className="card__body">
            <p>265</p>
          </div>
        </div>
      </div>
      <div className="col col--4">
        <div className="card margin-bottom--md">
          <div className="card__header">
            <h3>Impact Score</h3>
          </div>
          <div className="card__body">
            <p>15.2</p>
          </div>
        </div>
      </div>
      <div className="col col--4">
        <div className="card margin-bottom--md">
          <div className="card__header">
            <h3>Implementation Rate</h3>
          </div>
          <div className="card__body">
            <p>34.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}