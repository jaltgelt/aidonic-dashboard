'use client';

import React from 'react';
import ChartsContainer from '../components/ChartsContainer';
import { useAnalytics } from '../hooks/useAnalytics';

const AnalyticsContainer: React.FC = () => {
  const { aidTypeData, timeSeriesData, loading, error } = useAnalytics();

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-lg font-medium text-muted-foreground">Loading analytics data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-lg font-medium text-red-600">Error: {error}</div>
      </div>
    );
  }

  return <ChartsContainer aidTypeData={aidTypeData} timeSeriesData={timeSeriesData} />;
};

export default AnalyticsContainer;
