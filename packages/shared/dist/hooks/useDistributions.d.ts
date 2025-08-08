export declare const useDistributions: () => import("@tanstack/react-query").UseQueryResult<import("..").Distribution[], Error>;
export declare const useDistributionDetails: (id: string) => import("@tanstack/react-query").UseQueryResult<import("..").Distribution, Error>;
export declare const useDistributionsWithFilters: (filters: {
    region?: string;
    status?: string;
    page?: number;
    limit?: number;
}) => import("@tanstack/react-query").UseQueryResult<{
    data: import("..").Distribution[];
    total: number;
    page: number;
    limit: number;
}, Error>;
//# sourceMappingURL=useDistributions.d.ts.map