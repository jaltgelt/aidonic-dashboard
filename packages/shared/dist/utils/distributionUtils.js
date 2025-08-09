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
