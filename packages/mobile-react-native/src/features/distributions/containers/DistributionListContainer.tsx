import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DistributionListContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Distribution List Container</Text>
      <Text style={styles.subtext}>Coming soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 8,
  },
  subtext: {
    fontSize: 16,
    color: '#64748b',
  },
});

export default DistributionListContainer;
