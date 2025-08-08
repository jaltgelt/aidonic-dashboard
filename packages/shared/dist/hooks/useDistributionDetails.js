import { useState, useEffect } from 'react';
import { fetchDistributionById } from '../lib/fetcher';
export const useDistributionDetails = (distributionId) => {
    const [distribution, setDistribution] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadDistribution = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchDistributionById(distributionId);
                setDistribution(data);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load distribution details');
            }
            finally {
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
