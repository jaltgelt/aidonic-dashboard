import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Distribution } from '@aidonic/shared/types';

interface DistributionCardProps {
  distribution: Distribution;
  onPress: (distribution: Distribution) => void;
}

const DistributionCard: React.FC<DistributionCardProps> = ({ distribution, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(distribution)} activeOpacity={0.7}>
      <View style={styles.header}>
        <Text style={styles.region}>{distribution.region}</Text>
        <Text style={styles.statusText}>{distribution.status}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.date}>{distribution.date}</Text>
        <Text style={styles.aidType}>{distribution.aidType}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.beneficiaries}>{distribution.beneficiaries} beneficiaries</Text>
        <Text style={styles.channel}>{distribution.deliveryChannel}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 6, // Match web app's border radius
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0', // Light border from web palette
    // Use boxShadow for web compatibility
    ...(Platform.OS === 'web'
      ? {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        }
      : {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          elevation: 2,
        }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  region: {
    fontSize: 18,
    fontWeight: '600',
    color: '#334155', // Foreground from web palette
  },
  statusText: {
    color: '#64748b', // Muted foreground
    fontSize: 14,
    fontWeight: '400',
  },
  details: {
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#64748b', // Muted foreground from web palette
    marginBottom: 4,
  },
  aidType: {
    fontSize: 16,
    fontWeight: '500',
    color: '#475569', // Secondary foreground from web palette
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  beneficiaries: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b', // Muted foreground from web palette
  },
  channel: {
    fontSize: 12,
    color: '#94a3b8', // Muted text from web palette
  },
});

export default DistributionCard;
