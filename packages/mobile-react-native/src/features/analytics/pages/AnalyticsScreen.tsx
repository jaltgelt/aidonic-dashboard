import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import { analyticsStyles, baseStyles, CHART_TITLES, CHART_COLORS } from '../../../shared/styles';

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
      <View style={baseStyles.loadingContainer}>
        <ActivityIndicator size="large" color={CHART_COLORS.primary} />
        <Text style={baseStyles.loadingText}>Loading analytics...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={baseStyles.errorContainer}>
        <Text style={baseStyles.errorText}>Error: {errorMsg}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={analyticsStyles.container} contentContainerStyle={analyticsStyles.contentContainer}>
      <View style={analyticsStyles.section}>
        <Text style={analyticsStyles.sectionTitle}>{CHART_TITLES.AID_DISTRIBUTION_BY_TYPE}</Text>
        <PieChart data={pieData} />
      </View>

      <View style={analyticsStyles.section}>
        <Text style={analyticsStyles.sectionTitle}>{CHART_TITLES.BENEFICIARIES_OVER_TIME}</Text>
        <LineChart data={lineData} />
      </View>
    </ScrollView>
  );
};

export default AnalyticsScreen;
