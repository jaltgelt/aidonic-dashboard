export interface Distribution {
  id: string;
  region: string;
  date: string;
  status: string;
  beneficiaries: number;
  aidType: string;
  deliveryChannel: string;
  beneficiaryList?: Beneficiary[];
}

export interface Beneficiary {
  id: string;
  name: string;
}

export interface DistributionFilters {
  region: string;
  status: string;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
}
