import { useDistributionDetails as useSharedDistributionDetails } from '@aidonic/shared/hooks';

export const useDistributionDetails = (distributionId: string) => {
  const {
    data: distribution,
    isLoading,
    error,
    refetch,
  } = useSharedDistributionDetails(distributionId);

  return {
    distribution,
    loading: isLoading,
    error: error?.message || null,
    refetch,
  };
};
