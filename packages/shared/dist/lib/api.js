export const API_CONFIG = {
    BASE_URL: 'http://localhost:3001',
    ENDPOINTS: {
        DISTRIBUTIONS: '/distributions',
        DISTRIBUTION_BY_ID: (id) => `/distributionDetails/${id}`,
    },
};
