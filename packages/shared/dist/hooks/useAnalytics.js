import { useQuery } from '@tanstack/react-query';
import { distributionApi } from '../api/distributionApi';
import { AID_TYPE_COLORS } from '../constants';
// Data transformation utilities
const transformAidTypeData = (distributions) => {
    const aidTypeCounts = distributions.reduce((acc, distribution) => {
        acc[distribution.aidType] = (acc[distribution.aidType] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(aidTypeCounts).map(([aidType, count]) => ({
        name: aidType,
        value: count,
        color: AID_TYPE_COLORS[aidType] || 'hsl(var(--chart-pale-blue))',
    }));
};
const transformTimeSeriesData = (distributions) => {
    const monthCounts = distributions.reduce((acc, distribution) => {
        const date = new Date(distribution.date);
        const monthKey = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
        const existingEntry = acc.find((entry) => entry.date === monthKey);
        if (existingEntry) {
            existingEntry.beneficiaries += distribution.beneficiaries;
        }
        else {
            acc.push({ date: monthKey, beneficiaries: distribution.beneficiaries });
        }
        return acc;
    }, []);
    return monthCounts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};
// Legacy format for mobile compatibility
const transformAidTypeDataLegacy = (distributions) => {
    const aidTypeCounts = distributions.reduce((acc, distribution) => {
        acc[distribution.aidType] = (acc[distribution.aidType] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(aidTypeCounts).map(([aidType, count]) => ({
        x: aidType,
        y: count,
    }));
};
const transformTimeSeriesDataLegacy = (distributions) => {
    const dateCounts = distributions.reduce((acc, distribution) => {
        const date = new Date(distribution.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });
        acc[date] = (acc[date] || 0) + distribution.beneficiaries;
        return acc;
    }, {});
    const sortedEntries = Object.entries(dateCounts)
        .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime());
    // Take only some points to avoid overlap
    const step = Math.max(1, Math.floor(sortedEntries.length / 6));
    const filteredEntries = sortedEntries.filter((_, index) => index % step === 0);
    return filteredEntries.map(([date, count]) => ({
        x: date,
        y: count,
    }));
};
export const useAnalytics = () => {
    const { data: distributions = [], isLoading, error, refetch } = useQuery({
        queryKey: ['analytics'],
        queryFn: () => distributionApi.getDistributions(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
    });
    return {
        distributions,
        aidTypeData: transformAidTypeData(distributions),
        timeSeriesData: transformTimeSeriesData(distributions),
        // Legacy format for mobile compatibility
        pieData: transformAidTypeDataLegacy(distributions),
        lineData: transformTimeSeriesDataLegacy(distributions),
        loading: isLoading,
        error: error?.message || null,
        refetch,
    };
};
