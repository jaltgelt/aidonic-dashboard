'use client';

import React from 'react';
import Navigation from '@/shared/components/Navigation';
import DistributionListContainer from '../containers/DistributionList.container';

const DistributionListPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Aid Distribution Dashboard</h1>
        <DistributionListContainer />
      </div>
    </div>
  );
};

export default DistributionListPage;
