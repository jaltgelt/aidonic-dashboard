import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography } from '../../../shared/styles/theme';

export const distributionDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  
  content: {
    padding: spacing.md,
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  
  region: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    color: colors.secondary,
  },
  
  status: {
    fontSize: typography.sizes.md,
    color: colors.muted,
  },
  
  section: {
    marginBottom: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.secondary,
    marginBottom: spacing.md,
  },
  
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  label: {
    fontSize: typography.sizes.sm,
    color: colors.muted,
    fontWeight: typography.weights.medium,
  },
  
  value: {
    fontSize: typography.sizes.sm,
    color: colors.secondary,
    fontWeight: typography.weights.normal,
  },
  
  beneficiaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  
  beneficiaryName: {
    fontSize: typography.sizes.sm,
    color: colors.secondary,
    fontWeight: typography.weights.medium,
  },
  
  beneficiaryId: {
    fontSize: typography.sizes.xs,
    color: colors.mutedLight,
  },
});
