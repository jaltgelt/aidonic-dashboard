import { API_CONFIG } from './api';
export const fetcher = async (url) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${url}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
export const fetchDistributions = () => fetcher(API_CONFIG.ENDPOINTS.DISTRIBUTIONS);
export const fetchDistributionById = (id) => fetcher(API_CONFIG.ENDPOINTS.DISTRIBUTION_BY_ID(id));
