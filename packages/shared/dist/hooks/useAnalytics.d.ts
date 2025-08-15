import { Distribution } from '../types/distribution';
export interface AidTypeDataPoint {
    name: string;
    value: number;
    color: string;
}
export interface TimeSeriesDataPoint {
    date: string;
    beneficiaries: number;
}
export declare const useAnalytics: () => {
    distributions: Distribution[];
    aidTypeData: AidTypeDataPoint[];
    timeSeriesData: TimeSeriesDataPoint[];
    pieData: {
        x: string;
        y: number;
    }[];
    lineData: {
        x: string;
        y: number;
    }[];
    loading: boolean;
    error: string | null;
    refetch: (options?: import("@tanstack/react-query").RefetchOptions) => Promise<import("@tanstack/react-query").QueryObserverResult<Distribution[], Error>>;
};
//# sourceMappingURL=useAnalytics.d.ts.map