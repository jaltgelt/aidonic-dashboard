import { useState, useEffect, useMemo } from 'react';
import { Distribution } from '@/shared/types/distribution';
import { fetchDistributions } from '@/shared/lib/fetcher';
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
        const data = await fetchDistributions();
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
