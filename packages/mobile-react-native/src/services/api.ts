import { Distribution } from '../types/distribution';

const API_BASE_URL = 'http://localhost:3002';

export const api = {
  async getDistributions(): Promise<Distribution[]> {
    const response = await fetch(`${API_BASE_URL}/distributions`);
    if (!response.ok) {
      throw new Error('Failed to fetch distributions');
    }
    return response.json();
  },

  async getDistributionById(id: string): Promise<Distribution> {
    const response = await fetch(`${API_BASE_URL}/distributions/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch distribution details');
    }
    return response.json();
  },
};
