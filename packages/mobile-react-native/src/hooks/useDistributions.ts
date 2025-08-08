import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export const useDistributions = () => {
  return useQuery({
    queryKey: ['distributions'],
    queryFn: api.getDistributions,
  });
};
