import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { CitationTrendsChart } from '@site/src/components/ChartComponents/CitationTrendsChart';
import { ModelComparisonChart } from '@site/src/components/ChartComponents/ModelComparisonChart';
import { ResearchDomainsChart } from '@site/src/components/ChartComponents/ResearchDomainsChart';
import { EngagementLevelsChart } from '@site/src/components/ChartComponents/EngagementLevelsChart';
import { MetricCards } from '@site/src/components/ChartComponents/MetricCards';
import { GeographicImpactMap } from '@site/src/components/ChartComponents/GeographicImpactMap';
import { ProjectCards } from '@site/src/components/ModelCards/ProjectCards';

import styles from './dashboard.module.css';

export default function Dashboard() {
  const [selectedModel, setSelectedModel] = useState('all');
  const [yearRange, setYearRange] = useState([2010, 2025]);
  
  return (
    <Layout
      title="Scientific Models Dashboard"
      description="Interactive dashboard for scientific models citation analytics">
      <main className={styles.dashboardContainer}>
        <div className={styles.dashboardHeader}>
          <h1>Scientific Models Citation Dashboard</h1>
          <p>Analyze citation trends and impact of scientific models</p>
          
          <div className={styles.filterControls}>
            <div className={styles.filterGroup}>
              <label htmlFor="model-select">Model:</label>
              <select 
                id="model-select" 
                value={selectedModel} 
                onChange={(e) => setSelectedModel(e.target.value)}
                className={styles.selectControl}
              >
                <option value="all">All Models</option>
                <option value="rapid">RAPID</option>
                <option value="cms-flux">CMS-Flux</option>
                <option value="ecco">ECCO</option>
                <option value="issm">ISSM</option>
                <option value="momo-chem">MOMO-CHEM</option>
              </select>
            </div>
            
            <div className={styles.filterGroup}>
              <label>Year Range:</label>
              <div className={styles.yearRangeControls}>
                <input 
                  type="number" 
                  min="2010" 
                  max="2025" 
                  value={yearRange[0]}
                  onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                  className={styles.yearInput}
                />
                <span>to</span>
                <input 
                  type="number" 
                  min="2010" 
                  max="2025" 
                  value={yearRange[1]}
                  onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                  className={styles.yearInput}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Cards Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Models Overview</h2>
          <ProjectCards selectedModel={selectedModel} />
        </section>
        
        {/* Metrics Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Metrics</h2>
          <MetricCards selectedModel={selectedModel} />
        </section>
        
        {/* Citation Trends Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Citation Trends</h2>
          <CitationTrendsChart selectedModel={selectedModel} yearRange={yearRange} />
        </section>
        
        {/* Research Domains and Engagement Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Research Impact Analysis</h2>
          <div className={styles.chartsGrid}>
            <div className={styles.chartCard}>
              <h3>Research Domains</h3>
              <ResearchDomainsChart selectedModel={selectedModel} />
            </div>
            <div className={styles.chartCard}>
              <h3>Engagement Levels</h3>
              <EngagementLevelsChart selectedModel={selectedModel} />
            </div>
          </div>
        </section>
        
        {/* Model Comparison Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Model Comparison</h2>
          <ModelComparisonChart selectedModel={selectedModel} />
        </section>
        
        {/* Geographic Impact Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Geographic Impact</h2>
          <GeographicImpactMap selectedModel={selectedModel} />
        </section>
      </main>
    </Layout>
  );
}