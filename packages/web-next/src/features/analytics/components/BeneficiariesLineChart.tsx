'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { TimeSeriesDataPoint } from '@aidonic/shared/hooks';
import { CHART_CONSTANTS } from '../constants';
import { CHART_COLORS } from '@aidonic/shared/constants';

interface BeneficiariesLineChartProps {
  data: TimeSeriesDataPoint[];
}

const BeneficiariesLineChart: React.FC<BeneficiariesLineChartProps> = ({ data }) => {
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
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-table-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-sm text-muted-foreground">
            {payload[0].value.toLocaleString()} beneficiaries
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="focus:outline-none border-none"
      style={{ border: 'none', outline: 'none' }}
    >
      <LineChart data={data} style={{ border: 'none', outline: 'none' }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--table-border))" />
        <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          domain={[0, 'dataMax + 1000']}
          tickFormatter={(value) => value.toLocaleString()}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="beneficiaries"
          stroke={CHART_COLORS.primary}
          strokeWidth={CHART_CONSTANTS.LINE_CHART.STROKE_WIDTH}
          dot={{
            fill: CHART_COLORS.primary,
            strokeWidth: 2,
            r: CHART_CONSTANTS.LINE_CHART.DOT_RADIUS,
          }}
          activeDot={{
            r: CHART_CONSTANTS.LINE_CHART.ACTIVE_DOT_RADIUS,
            stroke: CHART_COLORS.primary,
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BeneficiariesLineChart;
