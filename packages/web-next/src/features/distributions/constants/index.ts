export const DISTRIBUTION_CONSTANTS = {
  ITEMS_PER_PAGE: 4,
  DEFAULT_REGION: 'All Regions',
  DEFAULT_STATUS: 'All Statuses',
} as const;

export const TABLE_COLUMNS = {
  REGION: 'Region',
  DATE: 'Date',
  STATUS: 'Status',
  BENEFICIARIES: 'Beneficiaries',
  ACTION: 'Action',
} as const;

export const FILTER_LABELS = {
  REGION: 'Region',
  STATUS: 'Status',
} as const;
