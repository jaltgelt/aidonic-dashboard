export interface Beneficiary {
  id: string;
  name: string;
}

export interface Distribution {
  id: string;
  region: string;
  date: string;
  status: 'Planned' | 'Completed' | 'In Progress';
  beneficiaries: number;
  aidType: string;
  deliveryChannel: string;
  beneficiaryList?: Beneficiary[];
}
