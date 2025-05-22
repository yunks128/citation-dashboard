// src/components/ChartComponents/CitationChart.js
import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { citationData } from '@site/src/data/citationData';

export function CitationChart({ modelId }) {
  // Filter data for the specific model
  const filteredData = citationData.filter(item => item.model === modelId);
  
  return (
    <div style={{ width: '100%', height: 400, marginBottom: '2rem' }}>
      <ResponsiveContainer>
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
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}