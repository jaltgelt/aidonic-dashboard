import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDistributionDetails } from '../hooks/useDistributionDetails';
import DistributionDetailsPage from '../pages/DistributionDetailsScreen';
import { RootStackParamList } from '../../../navigation/types';
import { RouteProp } from '@react-navigation/native';

type DistributionDetailsRouteProp = RouteProp<RootStackParamList, 'DistributionDetails'>;

const DistributionDetailsContainer: React.FC = () => {
  const route = useRoute<DistributionDetailsRouteProp>();
  const { id } = route.params;

  const { data: distribution, isLoading, error, refetch } = useDistributionDetails(id);

  return (
    <DistributionDetailsPage
      distribution={distribution}
      isLoading={isLoading}
      error={error}
      onRefresh={refetch}
    />
  );
};

export default DistributionDetailsContainer;
