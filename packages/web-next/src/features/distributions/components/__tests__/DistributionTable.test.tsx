import React from 'react';
import { render, screen } from '@testing-library/react';
import DistributionTable from '../DistributionTable';
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

describe('DistributionTable', () => {
  it('renders table with distributions', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    // Check if table headers are rendered
    expect(screen.getByText('Region')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Beneficiaries')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();

    // Check if distribution data is rendered
    expect(screen.getByText('West Nile')).toBeInTheDocument();
    expect(screen.getByText('Eastern Province')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('800')).toBeInTheDocument();
    expect(screen.getByText('1,200')).toBeInTheDocument();

    // Check if View Details buttons are rendered
    const viewDetailsButtons = screen.getAllByText('View Details');
    expect(viewDetailsButtons).toHaveLength(2);
  });

  it('renders empty state when no distributions', () => {
    render(<DistributionTable distributions={[]} />);

    expect(screen.getByText('No distributions found')).toBeInTheDocument();
    expect(screen.getByText(/Try adjusting your filters/)).toBeInTheDocument();
  });

  it('renders View Details links with correct hrefs', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    const viewDetailsLinks = screen.getAllByRole('link', { name: /view details/i });
    expect(viewDetailsLinks).toHaveLength(2);

    expect(viewDetailsLinks[0]).toHaveAttribute('href', '/distributions/1');
    expect(viewDetailsLinks[1]).toHaveAttribute('href', '/distributions/2');
  });

  it('formats dates correctly', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    // The formatDate function should format dates as YYYY-MM-DD
    expect(screen.getByText('2025-01-14')).toBeInTheDocument();
    expect(screen.getByText('2025-02-09')).toBeInTheDocument();
  });

  it('formats numbers with commas', () => {
    render(<DistributionTable distributions={mockDistributions} />);

    // The formatNumber function should add commas
    expect(screen.getByText('800')).toBeInTheDocument();
    expect(screen.getByText('1,200')).toBeInTheDocument();
  });
});
