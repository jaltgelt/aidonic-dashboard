'use client';

import React from 'react';
import DistributionDetails from '../components/DistributionDetails';
import { useDistributionDetails } from '@aidonic/shared/hooks';

interface DistributionDetailsContainerProps {
  distributionId: string;
}

const DistributionDetailsContainer: React.FC<DistributionDetailsContainerProps> = ({
  distributionId,
}) => {
  const { data: distribution, isLoading: loading, error } = useDistributionDetails(distributionId);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-lg font-medium text-muted-foreground">
          Loading distribution details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-lg font-medium text-red-600">Error: {error.message}</div>
      </div>
    );
  }

  if (!distribution) {
    return (
      <div className="text-center py-8">
        <div className="text-lg font-medium text-muted-foreground">Distribution not found</div>
      </div>
    );
  }

  return <DistributionDetails distribution={distribution} />;
};

export default DistributionDetailsContainer;
