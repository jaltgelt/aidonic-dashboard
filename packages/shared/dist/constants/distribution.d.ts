export declare const DISTRIBUTION_CONSTANTS: {
    readonly DEFAULT_REGION: "All Regions";
    readonly DEFAULT_STATUS: "All Statuses";
    readonly ITEMS_PER_PAGE: 4;
    readonly STATUS_OPTIONS: {
        readonly COMPLETED: "Completed";
        readonly IN_PROGRESS: "In Progress";
        readonly PENDING: "Pending";
        readonly CANCELLED: "Cancelled";
    };
    readonly AID_TYPES: {
        readonly FOOD: "Food";
        readonly MEDICAL: "Medical";
        readonly SHELTER: "Shelter";
        readonly CLOTHING: "Clothing";
        readonly HYGIENE: "Hygiene";
    };
    readonly DELIVERY_CHANNELS: {
        readonly MOBILE_UNITS: "Mobile Units";
        readonly DIRECT_DISTRIBUTION: "Direct Distribution";
        readonly VOUCHERS: "Vouchers";
        readonly PARTNERS: "Partners";
    };
    readonly REGIONS: {
        readonly WEST_NILE: "West Nile";
        readonly EASTERN_PROVINCE: "Eastern Province";
        readonly NORTHERN_REGION: "Northern Region";
        readonly CENTRAL_REGION: "Central Region";
    };
};
export declare const API_ENDPOINTS: {
    readonly DISTRIBUTIONS: "/distributions";
    readonly DISTRIBUTION_DETAILS: (id: string) => string;
};
export declare const FILTER_LABELS: {
    readonly REGION: "Region";
    readonly STATUS: "Status";
};
//# sourceMappingURL=distribution.d.ts.map