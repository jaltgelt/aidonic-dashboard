import { Distribution } from '../types/distribution';

// Get API URL from environment variables or use default
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3001';

export class DistributionApi {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || API_BASE_URL;
  }

  async getDistributions(): Promise<Distribution[]> {
    const response = await fetch(`${this.baseUrl}/distributions`);
    if (!response.ok) {
      throw new Error('Failed to fetch distributions');
    }
    return response.json();
  }

  async getDistributionById(id: string): Promise<Distribution> {
    const response = await fetch(`${this.baseUrl}/distributionDetails/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch distribution details');
    }
    return response.json();
  }

  async getDistributionsWithFilters(filters: {
    region?: string;
    status?: string;
    page?: number;
    limit?: number;
  }): Promise<{ data: Distribution[]; total: number; page: number; limit: number }> {
    const params = new URLSearchParams();
    if (filters.region) params.append('region', filters.region);
    if (filters.status) params.append('status', filters.status);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    const response = await fetch(`${this.baseUrl}/distributions?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch distributions with filters');
    }
    return response.json();
  }
}

// Default instance
export const distributionApi = new DistributionApi();
