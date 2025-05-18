import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import ModelCards from '@site/src/components/ModelCards';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/dashboard">
            Explore the Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Track the impact and reach of scientific models through citation metrics">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <h2 className="text--center margin-bottom--lg">
                Tracking Impact Across Scientific Models
              </h2>
              <p className="text--center">
                The Scientific Models Citation Dashboard provides comprehensive metrics 
                for tracking how scientific models are being used, cited, and extended in 
                research communities worldwide. Our interactive visualizations help researchers,
                institutions, and funding agencies understand the impact and reach of models
                across various disciplines.
              </p>
            </div>
          </div>
        </div>
        <HomepageFeatures />
        <div className="container margin-top--xl">
          <h2 className="text--center margin-bottom--lg">
            Featured Models
          </h2>
          <ModelCards />
        </div>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            <div className="col col--6">
              <div className="card shadow--md">
                <div className="card__header">
                  <h3>Latest Updates</h3>
                </div>
                <div className="card__body">
                  <p>
                    <strong>May 16, 2025</strong> - Quarterly data update completed with 
                    citation data through Q1 2025.
                  </p>
                  <p>
                    <strong>April 5, 2025</strong> - Added new visualization for geographic 
                    impact with interactive mapping.
                  </p>
                  <p>
                    <strong>March 15, 2025</strong> - Improved engagement level classification 
                    using enhanced NLP algorithms.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary button--block"
                    to="/blog">
                    Read All Updates
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div className="card shadow--md">
                <div className="card__header">
                  <h3>Getting Started</h3>
                </div>
                <div className="card__body">
                  <p>
                    New to the dashboard? Our getting started guide will help you
                    navigate the features and make the most of the citation metrics.
                  </p>
                  <ul>
                    <li>Learn about our impact metrics and how they're calculated</li>
                    <li>Explore individual model dashboards</li>
                    <li>Compare citation metrics across different models</li>
                    <li>Understand the methodology behind our data collection</li>
                  </ul>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--secondary button--block"
                    to="/docs/getting-started">
                    View Getting Started Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}