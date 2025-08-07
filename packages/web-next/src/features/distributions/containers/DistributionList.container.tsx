'use client';

import React from 'react';
import DistributionFilters from '../components/DistributionFilters';
import DistributionTable from '../components/DistributionTable';
import DistributionPagination from '../components/DistributionPagination';
import { useDistributions } from '../hooks/useDistributions';

const DistributionListContainer: React.FC = () => {
  const {
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
  } = useDistributions();

  if (loading) {
    return <div className="text-center py-8">Loading distributions...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">Error: {error}</div>;
  }

  return (
    <>
      <DistributionFilters
        regions={regions}
        statuses={statuses}
        selectedRegion={selectedRegion}
        selectedStatus={selectedStatus}
        onRegionChange={handleRegionChange}
        onStatusChange={handleStatusChange}
        onReset={handleReset}
      />
      <div className="bg-white rounded-lg border border-table-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <DistributionTable distributions={paginatedDistributions} />
        </div>
        {paginatedDistributions.length > 0 && (
          <DistributionPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
};

export default DistributionListContainer;
