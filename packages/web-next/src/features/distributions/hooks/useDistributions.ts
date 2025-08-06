import { useQuery } from '@tanstack/react-query';
import { getDistributions } from '../api/getDistributions';
import { Distribution } from '../types/distribution';

export function useDistributions() {
  return useQuery<Distribution[]>({
    queryKey: ['distributions'],
    queryFn: getDistributions,
  });
}
