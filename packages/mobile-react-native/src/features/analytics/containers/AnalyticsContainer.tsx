import React from 'react';
import { useAnalytics } from '@aidonic/shared/hooks';
import AnalyticsScreen from '../pages/AnalyticsScreen';

const AnalyticsContainer: React.FC = () => {
  const { pieData, lineData, loading, error } = useAnalytics();

  return (
    <AnalyticsScreen
      loading={loading}
      errorMsg={error || undefined}
      pieData={pieData}
      lineData={lineData}
    />
  );
};

export default AnalyticsContainer;
