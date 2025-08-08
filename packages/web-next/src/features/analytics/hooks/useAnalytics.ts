import { useState, useEffect, useMemo } from 'react';
import { Distribution } from '@aidonic/shared/types';
import { distributionApi } from '@aidonic/shared/api';
import { transformAidTypeData, transformTimeSeriesData } from '../utils/chartDataTransformers';

export interface AidTypeDataPoint {
  name: string;
  value: number;
  color: string;
}

export interface TimeSeriesDataPoint {
  date: string;
  beneficiaries: number;
}

export const useAnalytics = () => {
  const [distributions, setDistributions] = useState<Distribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await distributionApi.getDistributions();
        setDistributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const aidTypeData = useMemo(() => {
    return transformAidTypeData(distributions);
  }, [distributions]);

  const timeSeriesData = useMemo(() => {
    return transformTimeSeriesData(distributions);
  }, [distributions]);

  return {
    aidTypeData,
    timeSeriesData,
    loading,
    error,
  };
};
