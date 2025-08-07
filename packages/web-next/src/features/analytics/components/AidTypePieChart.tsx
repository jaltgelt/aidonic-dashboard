'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AidTypeDataPoint } from '../hooks/useAnalytics';
import { CHART_CONSTANTS } from '../constants';

interface AidTypePieChartProps {
  data: AidTypeDataPoint[];
}

const AidTypePieChart: React.FC<AidTypePieChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>No data available</p>
      </div>
    );
  }

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{ name: string; value: number }>;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-table-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium">{`${payload[0].name}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full flex flex-col focus:outline-none border-none">
      <div className="flex-1 focus:outline-none border-none">
        <ResponsiveContainer width="100%" height="100%" style={{ border: 'none', outline: 'none' }}>
          <PieChart style={{ border: 'none', outline: 'none' }}>
            <Pie
              data={data}
              cx="50%"
              cy={CHART_CONSTANTS.PIE_CHART.CENTER_Y}
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={CHART_CONSTANTS.PIE_CHART.OUTER_RADIUS}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm font-medium text-foreground">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AidTypePieChart;
