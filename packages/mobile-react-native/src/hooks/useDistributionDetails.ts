import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useDistributionDetails = (id: string) => {
  return useQuery({
    queryKey: ['distribution', id],
    queryFn: () => api.getDistributionById(id),
    enabled: !!id,
  });
};
