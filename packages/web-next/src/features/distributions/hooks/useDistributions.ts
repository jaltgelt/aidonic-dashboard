import { useMemo, useState } from 'react';
import { useDistributions as useSharedDistributions } from '@aidonic/shared/hooks';
import { DISTRIBUTION_CONSTANTS } from '@aidonic/shared/constants';
import {
  filterDistributions,
  paginateDistributions,
  getUniqueRegions,
  getUniqueStatuses,
} from '@aidonic/shared/utils';

export const useDistributions = () => {
  const { data: distributions = [], isLoading, error, refetch } = useSharedDistributions();

  const [selectedRegion, setSelectedRegion] = useState<string>(
    DISTRIBUTION_CONSTANTS.DEFAULT_REGION,
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    DISTRIBUTION_CONSTANTS.DEFAULT_STATUS,
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDistributions = useMemo(() => {
    return filterDistributions(distributions, {
      region: selectedRegion,
      status: selectedStatus,
    });
  }, [distributions, selectedRegion, selectedStatus]);

  const totalPages = Math.ceil(
    filteredDistributions.length / DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE,
  );

  const paginatedDistributions = useMemo(() => {
    return paginateDistributions(
      filteredDistributions,
      currentPage,
      DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE,
    );
  }, [filteredDistributions, currentPage]);

  // Extract unique regions and statuses from the data
  const regions = useMemo(() => {
    return getUniqueRegions(distributions);
  }, [distributions]);

  const statuses = useMemo(() => {
    return getUniqueStatuses(distributions);
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
    loading: isLoading,
    error: error?.message || null,
    handleRegionChange,
    handleStatusChange,
    handlePageChange,
    handleReset,
    refetch,
  };
};
