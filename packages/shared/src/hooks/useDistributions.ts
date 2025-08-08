import { useMemo, useState, useEffect } from 'react';
import { Distribution } from '../types/distribution';
import { DISTRIBUTION_CONSTANTS } from '../constants/distribution';
import { fetchDistributions } from '../lib/fetcher';

export const useDistributions = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>(
    DISTRIBUTION_CONSTANTS.DEFAULT_REGION,
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    DISTRIBUTION_CONSTANTS.DEFAULT_STATUS,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [distributions, setDistributions] = useState<Distribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDistributions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchDistributions();
        setDistributions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load distributions');
      } finally {
        setLoading(false);
      }
    };

    loadDistributions();
  }, []);

  const filteredDistributions = useMemo(() => {
    return distributions.filter((dist: Distribution) => {
      const regionMatch =
        selectedRegion === DISTRIBUTION_CONSTANTS.DEFAULT_REGION || dist.region === selectedRegion;
      const statusMatch =
        selectedStatus === DISTRIBUTION_CONSTANTS.DEFAULT_STATUS || dist.status === selectedStatus;
      return regionMatch && statusMatch;
    });
  }, [distributions, selectedRegion, selectedStatus]);

  const totalPages = Math.ceil(
    filteredDistributions.length / DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE,
  );
  const paginatedDistributions = filteredDistributions.slice(
    (currentPage - 1) * DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE,
    currentPage * DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE,
  );

  // Extract unique regions and statuses from the data
  const regions = useMemo(() => {
    const uniqueRegions = [...new Set(distributions.map((dist) => dist.region))];
    return [DISTRIBUTION_CONSTANTS.DEFAULT_REGION, ...uniqueRegions];
  }, [distributions]);

  const statuses = useMemo(() => {
    const uniqueStatuses = [...new Set(distributions.map((dist) => dist.status))];
    return [DISTRIBUTION_CONSTANTS.DEFAULT_STATUS, ...uniqueStatuses];
  }, [distributions]);

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReset = () => {
    setSelectedRegion(DISTRIBUTION_CONSTANTS.DEFAULT_REGION);
    setSelectedStatus(DISTRIBUTION_CONSTANTS.DEFAULT_STATUS);
    setCurrentPage(1);
  };

  return {
    selectedRegion,
    selectedStatus,
    currentPage,
    totalPages,
    paginatedDistributions,
    regions,
    statuses,
    loading,
    error,
    handleRegionChange,
    handleStatusChange,
    handlePageChange,
    handleReset,
  };
};
