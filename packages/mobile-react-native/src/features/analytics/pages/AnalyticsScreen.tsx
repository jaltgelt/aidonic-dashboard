import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import { CHART_TITLES } from '@aidonic/shared/constants';

interface AnalyticsScreenProps {
  loading: boolean;
  errorMsg?: string;
  pieData: Array<{ x: string; y: number }>;
  lineData: Array<{ x: string; y: number }>;
}

const AnalyticsScreen: React.FC<AnalyticsScreenProps> = ({
  loading,
  errorMsg,
  pieData,
  lineData,
}) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text style={styles.loadingText}>Loading analytics...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {errorMsg}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{CHART_TITLES.AID_DISTRIBUTION_BY_TYPE}</Text>
        <PieChart data={pieData} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{CHART_TITLES.BENEFICIARIES_OVER_TIME}</Text>
        <LineChart data={lineData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  contentContainer: {
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#64748b',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#ef4444',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default AnalyticsScreen;
