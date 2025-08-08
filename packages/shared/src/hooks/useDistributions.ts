import { useQuery } from '@tanstack/react-query';
import { distributionApi } from '../api/distributionApi';

export const useDistributions = () => {
  return useQuery({
    queryKey: ['distributions'],
    queryFn: () => distributionApi.getDistributions(),
  });
};

export const useDistributionDetails = (id: string) => {
  return useQuery({
    queryKey: ['distribution', id],
    queryFn: () => distributionApi.getDistributionById(id),
    enabled: !!id,
  });
};

export const useDistributionsWithFilters = (filters: {
  region?: string;
  status?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['distributions', filters],
    queryFn: () => distributionApi.getDistributionsWithFilters(filters),
    enabled: Object.keys(filters).length > 0,
  });
};
