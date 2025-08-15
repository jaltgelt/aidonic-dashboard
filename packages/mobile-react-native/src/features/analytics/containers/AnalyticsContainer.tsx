import React from 'react';
import { useDistributions } from '@aidonic/shared/hooks';
import { groupCountByAidType, countByDate } from '@aidonic/shared/utils';
import AnalyticsScreen from '../pages/AnalyticsScreen';

const AnalyticsContainer: React.FC = () => {
  const { data: distributions, isLoading, error } = useDistributions();

  const pieData = distributions ? groupCountByAidType(distributions) : [];
  const lineData = distributions ? countByDate(distributions) : [];

  return (
    <AnalyticsScreen
      loading={isLoading}
      errorMsg={error?.message}
      pieData={pieData}
      lineData={lineData}
    />
  );
};

export default AnalyticsContainer;
