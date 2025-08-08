import React from 'react';
import { render } from '@testing-library/react-native';
import DistributionListScreen from '../DistributionListScreen';
import { Distribution } from '@aidonic/shared/types';

const mockDistributions: Distribution[] = [
  {
    id: '1',
    region: 'West Nile',
    date: '2025-01-15',
    status: 'Completed',
    beneficiaries: 800,
    aidType: 'Food',
    deliveryChannel: 'Vouchers',
  },
  {
    id: '2',
    region: 'Eastern Province',
    date: '2025-02-10',
    status: 'In Progress',
    beneficiaries: 1200,
    aidType: 'Medical',
    deliveryChannel: 'Direct Distribution',
  },
];

describe('DistributionListScreen', () => {
  it('renders without crashing', () => {
    const onDistributionPress = jest.fn();
    const onRefresh = jest.fn();

    const { toJSON } = render(
      <DistributionListScreen
        distributions={mockDistributions}
        isLoading={false}
        error={null}
        onRefresh={onRefresh}
        onDistributionPress={onDistributionPress}
      />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders loading state', () => {
    const onDistributionPress = jest.fn();
    const onRefresh = jest.fn();

    const { toJSON } = render(
      <DistributionListScreen
        distributions={[]}
        isLoading={true}
        error={null}
        onRefresh={onRefresh}
        onDistributionPress={onDistributionPress}
      />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders error state', () => {
    const onDistributionPress = jest.fn();
    const onRefresh = jest.fn();

    const { toJSON } = render(
      <DistributionListScreen
        distributions={[]}
        isLoading={false}
        error={new Error('Failed to load distributions')}
        onRefresh={onRefresh}
        onDistributionPress={onDistributionPress}
      />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders empty state', () => {
    const onDistributionPress = jest.fn();
    const onRefresh = jest.fn();

    const { toJSON } = render(
      <DistributionListScreen
        distributions={[]}
        isLoading={false}
        error={null}
        onRefresh={onRefresh}
        onDistributionPress={onDistributionPress}
      />,
    );

    expect(toJSON()).toBeTruthy();
  });

  it('renders with distributions data', () => {
    const onDistributionPress = jest.fn();
    const onRefresh = jest.fn();

    const { toJSON } = render(
      <DistributionListScreen
        distributions={mockDistributions}
        isLoading={false}
        error={null}
        onRefresh={onRefresh}
        onDistributionPress={onDistributionPress}
      />,
    );

    expect(toJSON()).toBeTruthy();
  });
});
