import { StyleSheet, Platform } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../../shared/styles/theme';

export const distributionCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    ...(Platform.OS === 'web'
      ? {
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        }
      : shadows.sm),
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  
  region: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.secondary,
  },
  
  statusText: {
    color: colors.muted,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.normal,
  },
  
  details: {
    marginBottom: spacing.sm,
  },
  
  date: {
    fontSize: typography.sizes.sm,
    color: colors.muted,
    marginBottom: spacing.xs,
  },
  
  aidType: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
    color: colors.secondary,
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  beneficiaries: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.muted,
  },
  
  channel: {
    fontSize: typography.sizes.xs,
    color: colors.mutedLight,
  },
});
