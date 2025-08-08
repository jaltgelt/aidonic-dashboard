import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import DistributionCard from '../components/DistributionCard';
import { Distribution } from '@aidonic/shared/types';

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
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1e293b" />
        <Text style={styles.subtitle}>Loading distributions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>Failed to load distributions</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={distributions}
        renderItem={renderDistributionCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No distributions found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
  listContainer: {
    paddingVertical: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
  },
});

export default DistributionListPage;
