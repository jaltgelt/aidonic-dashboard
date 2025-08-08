import { useState, useEffect } from 'react';
import { Distribution } from '../types/distribution';
import { fetchDistributionById } from '../lib/fetcher';

export const useDistributionDetails = (distributionId: string) => {
  const [distribution, setDistribution] = useState<Distribution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDistribution = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDistributionById(distributionId);
        setDistribution(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load distribution details');
      } finally {
        setLoading(false);
      }
    };

    if (distributionId) {
      loadDistribution();
    }
  }, [distributionId]);

  return {
    distribution,
    loading,
    error,
  };
};
