import { Distribution } from '../types/distribution';
export declare const fetcher: <T>(url: string) => Promise<T>;
export declare const fetchDistributions: () => Promise<Distribution[]>;
export declare const fetchDistributionById: (id: string) => Promise<Distribution>;
//# sourceMappingURL=fetcher.d.ts.map