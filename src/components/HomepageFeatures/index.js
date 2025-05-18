import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Citation Tracking',
    icon: '📊',
    description: (
      <>
        Track annual and cumulative citations over time, broken down by publication type,
        research domain, and geographic region.
      </>
    ),
  },
  {
    title: 'Impact Metrics',
    icon: '📈',
    description: (
      <>
        View comprehensive impact scores that consider citation quality, engagement depth,
        field impact, and more.
      </>
    ),
  },
  {
    title: 'Geographic Visualization',
    icon: '🌎',
    description: (
      <>
        Explore where models are being applied globally, with detailed information on
        specific geographic areas of implementation.
      </>
    ),
  },
  {
    title: 'Research Domain Analysis',
    icon: '🔬',
    description: (
      <>
        Understand how models are being applied across different research domains
        and disciplines.
      </>
    ),
  },
  {
    title: 'Comparative Assessment',
    icon: '⚖️',
    description: (
      <>
        Compare citation metrics and impact scores across different models to
        benchmark performance.
      </>
    ),
  },
  {
    title: 'Future Projections',
    icon: '🔮',
    description: (
      <>
        View data-driven projections of future citation growth and emerging
        research directions.
      </>
    ),
  },
];

function Feature({title, icon, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md margin-bottom--lg">
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}