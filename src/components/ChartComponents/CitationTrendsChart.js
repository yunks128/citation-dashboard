import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { citationData } from '@site/src/data/citationData';
import styles from './ChartComponents.module.css';

export function CitationTrendsChart({ selectedModel, yearRange }) {
  // Filter data based on selected model and year range
  const filteredData = citationData
    .filter(item => selectedModel === 'all' || item.model === selectedModel)
    .filter(item => item.year >= yearRange[0] && item.year <= yearRange[1]);
  
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={filteredData}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" />
          <YAxis yAxisId="left" orientation="left" label={{ value: 'Annual Citations', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Cumulative Citations', angle: 90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="annual" name="Annual Citations" fill="#4285F4" barSize={30} />
          <Line yAxisId="right" type="monotone" dataKey="cumulative" name="Cumulative Citations" stroke="#0F9D58" strokeWidth={2} />
          <Area yAxisId="right" type="monotone" dataKey="cumulative" fill="#0F9D58" fillOpacity={0.1} stroke="none" />
        </ComposedChart>
      </ResponsiveContainer>
      
      <div className={styles.chartMetadata}>
        <div className={styles.metadataItem}>
          <div className={styles.colorBox} style={{ backgroundColor: '#4285F4' }}></div>
          <span>Annual Citations</span>
        </div>
        <div className={styles.metadataItem}>
          <div className={styles.colorBox} style={{ backgroundColor: '#0F9D58' }}></div>
          <span>Cumulative Citations</span>
        </div>
        {selectedModel !== 'all' && (
          <div className={styles.metadataHighlight}>
            <span>Total Citations: {filteredData.length > 0 ? filteredData[filteredData.length - 1].cumulative : 0}</span>
          </div>
        )}
      </div>
    </div>
  );
}