import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDistributions } from '../hooks/useDistributions';
import DistributionCard from '../components/DistributionCard';
import { Distribution } from '../types/distribution';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type DistributionListNavigationProp = StackNavigationProp<RootStackParamList, 'DistributionList'>;

const DistributionListScreen: React.FC = () => {
  const navigation = useNavigation<DistributionListNavigationProp>();
  const { data: distributions, isLoading, error, refetch } = useDistributions();

  const handleDistributionPress = (distribution: Distribution) => {
    navigation.navigate('DistributionDetails', { id: distribution.id });
  };

  const renderDistributionCard = ({ item }: { item: Distribution }) => (
    <DistributionCard distribution={item} onPress={handleDistributionPress} />
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
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
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
    backgroundColor: '#fafafa', // Background from web palette
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

export default DistributionListScreen;
