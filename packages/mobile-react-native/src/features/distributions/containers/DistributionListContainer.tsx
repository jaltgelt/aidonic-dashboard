import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDistributions } from '@aidonic/shared/hooks';
import DistributionListPage from '../pages/DistributionListScreen';
import { Distribution } from '@aidonic/shared/types';
import { RootStackParamList } from '../../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type DistributionListNavigationProp = StackNavigationProp<RootStackParamList, 'DistributionList'>;

const DistributionListContainer: React.FC = () => {
  const navigation = useNavigation<DistributionListNavigationProp>();
  const { data: distributions, isLoading, error, refetch } = useDistributions();

  const handleDistributionPress = (distribution: Distribution) => {
    navigation.navigate('DistributionDetails', { id: distribution.id });
  };

  return (
    <DistributionListPage
      distributions={distributions}
      isLoading={isLoading}
      error={error}
      onRefresh={refetch}
      onDistributionPress={handleDistributionPress}
    />
  );
};

export default DistributionListContainer;
