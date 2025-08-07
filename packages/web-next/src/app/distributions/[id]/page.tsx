import React from 'react';
import DistributionDetailsPage from '@/features/distributions/pages/DistributionDetailsPage';

interface DistributionPageProps {
  params: Promise<{ id: string }>;
}

const DistributionPage: React.FC<DistributionPageProps> = async ({ params }) => {
  const { id } = await params;
  return <DistributionDetailsPage distributionId={id} />;
};

export default DistributionPage;
