import React from 'react';
import { render } from '@testing-library/react-native';
import DistributionCard from '../DistributionCard';
import { Distribution } from '@aidonic/shared/types';

const mockDistribution: Distribution = {
  id: '1',
  region: 'West Nile',
  date: '2025-01-15',
  status: 'Completed',
  beneficiaries: 800,
  aidType: 'Food',
  deliveryChannel: 'Vouchers',
};

describe('DistributionCard', () => {
  it('renders without crashing', () => {
    const onPress = jest.fn();
    const { toJSON } = render(
      <DistributionCard distribution={mockDistribution} onPress={onPress} />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders with different distribution data', () => {
    const differentDistribution = {
      ...mockDistribution,
      region: 'Eastern Province',
      status: 'In Progress',
      beneficiaries: 1200,
    };
    const onPress = jest.fn();
    const { toJSON } = render(
      <DistributionCard distribution={differentDistribution} onPress={onPress} />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders with all required props', () => {
    const onPress = jest.fn();
    const { toJSON } = render(
      <DistributionCard distribution={mockDistribution} onPress={onPress} testID="test-card" />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('handles empty distribution gracefully', () => {
    const emptyDistribution = {
      id: '',
      region: '',
      date: '',
      status: '',
      beneficiaries: 0,
      aidType: '',
      deliveryChannel: '',
    };
    const onPress = jest.fn();
    const { toJSON } = render(
      <DistributionCard distribution={emptyDistribution} onPress={onPress} />,
    );

    expect(toJSON()).toBeTruthy();
  });
});
