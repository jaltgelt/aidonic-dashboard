'use client';

import React from 'react';
import Navigation from '@/shared/components/Navigation';
import DistributionDetailsContainer from '../containers/DistributionDetails.container';

interface DistributionDetailsPageProps {
  distributionId: string;
}

const DistributionDetailsPage: React.FC<DistributionDetailsPageProps> = ({ distributionId }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <DistributionDetailsContainer distributionId={distributionId} />
      </div>
    </div>
  );
};

export default DistributionDetailsPage;
