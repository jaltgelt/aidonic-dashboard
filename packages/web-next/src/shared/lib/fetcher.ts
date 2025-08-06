import { API_CONFIG } from '../config/api';
import { Distribution } from '../types/distribution';

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const fetchDistributions = () => fetcher<Distribution[]>(API_CONFIG.ENDPOINTS.DISTRIBUTIONS);
export const fetchDistributionById = (id: string) =>
  fetcher<Distribution>(API_CONFIG.ENDPOINTS.DISTRIBUTION_BY_ID(id));
