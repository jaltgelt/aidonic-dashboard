import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Distribution } from '../types/distribution';

interface DistributionDetailsPageProps {
  distribution?: Distribution;
  isLoading: boolean;
  error: Error | null;
  onRefresh: () => void;
}

const DistributionDetailsPage: React.FC<DistributionDetailsPageProps> = ({
  distribution,
  isLoading,
  error,
  onRefresh,
}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#64748b" />
        <Text style={styles.subtitle}>Loading distribution details...</Text>
      </View>
    );
  }

  if (error || !distribution) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Error</Text>
        <Text style={styles.subtitle}>Failed to load distribution details</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
    >
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.region}>{distribution.region}</Text>
          <Text style={styles.status}>{distribution.status}</Text>
        </View>

        {/* Main Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Distribution Information</Text>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{distribution.date}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Aid Type</Text>
            <Text style={styles.value}>{distribution.aidType}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Delivery Channel</Text>
            <Text style={styles.value}>{distribution.deliveryChannel}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Total Beneficiaries</Text>
            <Text style={styles.value}>{distribution.beneficiaries.toLocaleString()}</Text>
          </View>
        </View>

        {/* Beneficiaries List */}
        {distribution.beneficiaryList && distribution.beneficiaryList.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Beneficiaries</Text>
            {distribution.beneficiaryList.map((beneficiary) => (
              <View key={beneficiary.id} style={styles.beneficiaryItem}>
                <Text style={styles.beneficiaryName}>{beneficiary.name}</Text>
                <Text style={styles.beneficiaryId}>ID: {beneficiary.id}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  region: {
    fontSize: 24,
    fontWeight: '600',
    color: '#334155',
  },
  status: {
    fontSize: 16,
    color: '#64748b',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  label: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '400',
  },
  beneficiaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  beneficiaryName: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '500',
  },
  beneficiaryId: {
    fontSize: 12,
    color: '#94a3b8',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
  },
});

export default DistributionDetailsPage;
