import { API_URL } from '@/shared/config/api';
import { Distribution } from '../types/distribution';
import { fetcher } from '@/shared/lib/fetcher';

export const getDistributions = (): Promise<Distribution[]> => {
  return fetcher<Distribution[]>(`${API_URL}/distributions`);
};
