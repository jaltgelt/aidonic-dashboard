import { Distribution } from '@aidonic/shared/types';
import { AidTypeDataPoint, TimeSeriesDataPoint } from '../hooks/useAnalytics';
import { AID_TYPE_COLORS } from '@aidonic/shared/constants';

export const transformAidTypeData = (distributions: Distribution[]): AidTypeDataPoint[] => {
  const aidTypeCounts = distributions.reduce((acc, distribution) => {
    acc[distribution.aidType] = (acc[distribution.aidType] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(aidTypeCounts).map(([aidType, count]) => ({
    name: aidType,
    value: count,
    color:
      AID_TYPE_COLORS[aidType as keyof typeof AID_TYPE_COLORS] || 'hsl(var(--chart-pale-blue))',
  }));
};

export const transformTimeSeriesData = (distributions: Distribution[]): TimeSeriesDataPoint[] => {
  const monthCounts = distributions.reduce((acc, distribution) => {
    const date = new Date(distribution.date);
    const monthKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    const existingEntry = acc.find((entry) => entry.date === monthKey);
    if (existingEntry) {
      existingEntry.beneficiaries += distribution.beneficiaries;
    } else {
      acc.push({ date: monthKey, beneficiaries: distribution.beneficiaries });
    }
    return acc;
  }, [] as Array<{ date: string; beneficiaries: number }>);

  return monthCounts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
