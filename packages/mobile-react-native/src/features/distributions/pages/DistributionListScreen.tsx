import React from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import DistributionCard from '../components/DistributionCard';
import { Distribution } from '@aidonic/shared/types';
import { distributionListStyles, baseStyles, colors } from '../../../shared/styles';

interface DistributionListPageProps {
  distributions?: Distribution[];
  isLoading: boolean;
  error: Error | null;
  onRefresh: () => void;
  onDistributionPress: (distribution: Distribution) => void;
}

const DistributionListPage: React.FC<DistributionListPageProps> = ({
  distributions,
  isLoading,
  error,
  onRefresh,
  onDistributionPress,
}) => {
  const renderDistributionCard = ({ item }: { item: Distribution }) => (
    <DistributionCard distribution={item} onPress={onDistributionPress} />
  );

  if (isLoading && !distributions) {
    return (
      <View style={baseStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={baseStyles.loadingText}>Loading distributions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={baseStyles.errorContainer}>
        <Text style={baseStyles.title}>Error</Text>
        <Text style={baseStyles.subtitle}>Failed to load distributions</Text>
      </View>
    );
  }

  return (
    <View style={distributionListStyles.container}>
      <FlatList
        data={distributions}
        renderItem={renderDistributionCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={distributionListStyles.listContainer}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={distributionListStyles.emptyContainer}>
            <Text style={distributionListStyles.emptyText}>No distributions found</Text>
          </View>
        }
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default DistributionListPage;
