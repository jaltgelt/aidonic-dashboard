import { Distribution } from '../types/distribution';
export declare class DistributionApi {
    private baseUrl;
    constructor(baseUrl?: string);
    getDistributions(): Promise<Distribution[]>;
    getDistributionById(id: string): Promise<Distribution>;
    getDistributionsWithFilters(filters: {
        region?: string;
        status?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        data: Distribution[];
        total: number;
        page: number;
        limit: number;
    }>;
}
export declare const distributionApi: DistributionApi;
//# sourceMappingURL=distributionApi.d.ts.map