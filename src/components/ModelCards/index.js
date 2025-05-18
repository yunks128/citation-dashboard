import React from 'react';
import Link from '@docusaurus/Link';

export default function ModelCards() {
  const models = [
    {
      id: 'rapid',
      name: 'RAPID',
      description: 'River Application for Parallel computation of Discharge',
      citations: 265,
      impact: 15.2,
      color: 'var(--color-rapid)'
    },
    {
      id: 'cms-flux',
      name: 'CMS-Flux',
      description: 'Carbon Monitoring System Flux',
      citations: 212,
      impact: 14.6,
      color: 'var(--color-cms-flux)'
    },
    {
      id: 'ecco',
      name: 'ECCO',
      description: 'Estimating the Circulation and Climate of the Ocean',
      citations: 324,
      impact: 17.9,
      color: 'var(--color-ecco)'
    },
    {
      id: 'issm',
      name: 'ISSM',
      description: 'Ice Sheet System Model',
      citations: 198,
      impact: 16.3,
      color: 'var(--color-issm)'
    },
    {
      id: 'momo-chem',
      name: 'MOMO-CHEM',
      description: 'Modern-Era Retrospective analysis for Research and Applications Chemistry',
      citations: 176,
      impact: 13.8,
      color: 'var(--color-momo-chem)'
    }
  ];

  return (
    <div className="row">
      {models.map((model) => (
        <div key={model.id} className="col col--4 margin-bottom--lg">
          <div className="card card--full-height" style={{ borderTop: `4px solid ${model.color}` }}>
            <div className="card__header">
              <h3>{model.name}</h3>
            </div>
            <div className="card__body">
              <p>{model.description}</p>
              <div className="margin-top--md">
                <div><strong>Citations:</strong> {model.citations}</div>
                <div><strong>Impact Score:</strong> {model.impact}</div>
              </div>
            </div>
            <div className="card__footer">
              <Link
                className="button button--primary button--block"
                to={`/models/${model.id}`}>
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}