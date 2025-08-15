import { CHART_COLORS, AID_TYPE_COLORS } from '@aidonic/shared/constants';

export const colors = {
  // Background colors
  background: '#f8fafc',
  card: '#ffffff',
  surface: '#fafafa',
  
  // Text colors
  primary: '#1e293b',
  secondary: '#334155',
  muted: '#64748b',
  mutedLight: '#94a3b8',
  
  // Status colors
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',
  
  // Border colors
  border: '#e2e8f0',
  borderLight: '#f1f5f9',
  
  // Chart colors - using shared constants
  chartPrimary: CHART_COLORS.primary,
  chartSecondary: CHART_COLORS.secondary,
  chartAccent: CHART_COLORS.accent,
  chartDanger: CHART_COLORS.danger,
  chartPurple: CHART_COLORS.purple,
  
  // Aid type colors - using shared constants
  aidTypeFood: AID_TYPE_COLORS.Food,
  aidTypeMedical: AID_TYPE_COLORS.Medical,
  aidTypeShelter: AID_TYPE_COLORS.Shelter,
  aidTypeWater: AID_TYPE_COLORS.Water,
  aidTypeEducation: AID_TYPE_COLORS.Education,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const borderRadius = {
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  xxl: 16,
} as const;

export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
} as const;

// Re-export shared constants for convenience
export { CHART_COLORS, AID_TYPE_COLORS, getAidTypeColor, CHART_TITLES } from '@aidonic/shared/constants';

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
} as const;

export type Theme = typeof theme;
