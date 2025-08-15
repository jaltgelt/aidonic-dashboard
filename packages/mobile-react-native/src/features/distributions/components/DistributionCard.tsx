import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Distribution } from '@aidonic/shared/types';
import { distributionCardStyles } from '../styles/DistributionCard.styles';

interface DistributionCardProps {
  distribution: Distribution;
  onPress: (distribution: Distribution) => void;
  testID?: string;
}

const DistributionCard: React.FC<DistributionCardProps> = ({ distribution, onPress, testID }) => {
  return (
    <TouchableOpacity
      style={distributionCardStyles.card}
      onPress={() => onPress(distribution)}
      activeOpacity={0.7}
      testID={testID}
    >
      <View style={distributionCardStyles.header}>
        <Text style={distributionCardStyles.region}>{distribution.region}</Text>
        <Text style={distributionCardStyles.statusText}>{distribution.status}</Text>
      </View>

      <View style={distributionCardStyles.details}>
        <Text style={distributionCardStyles.date}>{distribution.date}</Text>
        <Text style={distributionCardStyles.aidType}>{distribution.aidType}</Text>
      </View>

      <View style={distributionCardStyles.footer}>
        <Text style={distributionCardStyles.beneficiaries}>{distribution.beneficiaries} beneficiaries</Text>
        <Text style={distributionCardStyles.channel}>{distribution.deliveryChannel}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DistributionCard;
