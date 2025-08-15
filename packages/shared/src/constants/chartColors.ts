// Chart colors shared between web-next and mobile-react-native
// These colors are used for analytics charts to maintain consistency

export const AID_TYPE_COLORS = {
  Food: '#2d4a6b',      // Dark blue - hsl(220 60% 35%)
  Medical: '#3b5a8a',   // Medium blue - hsl(220 50% 50%)
  Shelter: '#5a7aa6',   // Light blue - hsl(220 40% 65%)
  Water: '#8ba3cc',     // Pale blue - hsl(220 30% 80%)
  Education: '#8ba3cc', // Pale blue - hsl(220 30% 80%)
} as const;

export const CHART_COLORS = {
  primary: '#3b82f6',     // Blue for line charts
  secondary: '#10b981',   // Green
  accent: '#f59e0b',      // Orange
  danger: '#ef4444',      // Red
  purple: '#8b5cf6',      // Purple
} as const;

export const AID_TYPE_COLOR_ARRAY = [
  AID_TYPE_COLORS.Food,
  AID_TYPE_COLORS.Medical,
  AID_TYPE_COLORS.Shelter,
  AID_TYPE_COLORS.Water,
  AID_TYPE_COLORS.Education,
] as const;

// Helper function to get color by index
export const getAidTypeColor = (index: number): string => {
  return AID_TYPE_COLOR_ARRAY[index % AID_TYPE_COLOR_ARRAY.length];
};

// Chart titles shared between web-next and mobile-react-native
export const CHART_TITLES = {
  AID_DISTRIBUTION_BY_TYPE: 'Aid Distribution by Type',
  BENEFICIARIES_OVER_TIME: 'Beneficiaries Over Time',
} as const;
