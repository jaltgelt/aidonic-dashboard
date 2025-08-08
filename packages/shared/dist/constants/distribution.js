export const DISTRIBUTION_CONSTANTS = {
    // Default values
    DEFAULT_REGION: 'All Regions',
    DEFAULT_STATUS: 'All Statuses',
    ITEMS_PER_PAGE: 4,
    // Status options
    STATUS_OPTIONS: {
        COMPLETED: 'Completed',
        IN_PROGRESS: 'In Progress',
        PENDING: 'Pending',
        CANCELLED: 'Cancelled',
    },
    // Aid types
    AID_TYPES: {
        FOOD: 'Food',
        MEDICAL: 'Medical',
        SHELTER: 'Shelter',
        CLOTHING: 'Clothing',
        HYGIENE: 'Hygiene',
    },
    // Delivery channels
    DELIVERY_CHANNELS: {
        MOBILE_UNITS: 'Mobile Units',
        DIRECT_DISTRIBUTION: 'Direct Distribution',
        VOUCHERS: 'Vouchers',
        PARTNERS: 'Partners',
    },
    // Regions
    REGIONS: {
        WEST_NILE: 'West Nile',
        EASTERN_PROVINCE: 'Eastern Province',
        NORTHERN_REGION: 'Northern Region',
        CENTRAL_REGION: 'Central Region',
    },
};
export const API_ENDPOINTS = {
    DISTRIBUTIONS: '/distributions',
    DISTRIBUTION_DETAILS: (id) => `/distributions/${id}`,
};
export const FILTER_LABELS = {
    REGION: 'Region',
    STATUS: 'Status',
};
