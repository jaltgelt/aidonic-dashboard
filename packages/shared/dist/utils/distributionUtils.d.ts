import { Distribution } from '../types/distribution';
export declare const getStatusColor: (status: string) => string;
export declare const filterDistributions: (distributions: Distribution[], filters: {
    region?: string;
    status?: string;
}) => Distribution[];
export declare const paginateDistributions: (distributions: Distribution[], page: number, itemsPerPage?: number) => Distribution[];
export declare const getUniqueRegions: (distributions: Distribution[]) => string[];
export declare const getUniqueStatuses: (distributions: Distribution[]) => string[];
export declare const calculateTotalBeneficiaries: (distributions: Distribution[]) => number;
export declare const getDistributionStats: (distributions: Distribution[]) => {
    totalDistributions: number;
    totalBeneficiaries: number;
    completedDistributions: number;
    inProgressDistributions: number;
    completionRate: number;
};
//# sourceMappingURL=distributionUtils.d.ts.map