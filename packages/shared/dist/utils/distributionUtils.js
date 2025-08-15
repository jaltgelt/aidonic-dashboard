import { DISTRIBUTION_CONSTANTS } from '../constants/distribution';
export const filterDistributions = (distributions, filters) => {
    return distributions.filter((distribution) => {
        const regionMatch = !filters.region ||
            filters.region === DISTRIBUTION_CONSTANTS.DEFAULT_REGION ||
            distribution.region === filters.region;
        const statusMatch = !filters.status ||
            filters.status === DISTRIBUTION_CONSTANTS.DEFAULT_STATUS ||
            distribution.status === filters.status;
        return regionMatch && statusMatch;
    });
};
export const paginateDistributions = (distributions, page, itemsPerPage = DISTRIBUTION_CONSTANTS.ITEMS_PER_PAGE) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return distributions.slice(startIndex, endIndex);
};
export const getUniqueRegions = (distributions) => {
    const regions = [...new Set(distributions.map((d) => d.region))];
    return [DISTRIBUTION_CONSTANTS.DEFAULT_REGION, ...regions];
};
export const getUniqueStatuses = (distributions) => {
    const statuses = [...new Set(distributions.map((d) => d.status))];
    return [DISTRIBUTION_CONSTANTS.DEFAULT_STATUS, ...statuses];
};
export const calculateTotalBeneficiaries = (distributions) => {
    return distributions.reduce((total, distribution) => total + distribution.beneficiaries, 0);
};
export const getDistributionStats = (distributions) => {
    const totalDistributions = distributions.length;
    const totalBeneficiaries = calculateTotalBeneficiaries(distributions);
    const completedDistributions = distributions.filter((d) => d.status === 'Completed').length;
    const inProgressDistributions = distributions.filter((d) => d.status === 'In Progress').length;
    return {
        totalDistributions,
        totalBeneficiaries,
        completedDistributions,
        inProgressDistributions,
        completionRate: totalDistributions > 0 ? (completedDistributions / totalDistributions) * 100 : 0,
    };
};
export const groupCountByStatus = (distributions) => {
    const statusCounts = distributions.reduce((acc, distribution) => {
        acc[distribution.status] = (acc[distribution.status] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(statusCounts).map(([status, count]) => ({
        x: status,
        y: count,
    }));
};
export const groupCountByAidType = (distributions) => {
    const aidTypeCounts = distributions.reduce((acc, distribution) => {
        acc[distribution.aidType] = (acc[distribution.aidType] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(aidTypeCounts).map(([aidType, count]) => ({
        x: aidType,
        y: count,
    }));
};
export const countByDate = (distributions) => {
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
    // Tomar solo algunos puntos para evitar superposición
    const step = Math.max(1, Math.floor(sortedEntries.length / 6));
    const filteredEntries = sortedEntries.filter((_, index) => index % step === 0);
    return filteredEntries.map(([date, count]) => ({
        x: date,
        y: count,
    }));
};
