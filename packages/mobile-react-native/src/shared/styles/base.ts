import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows, CHART_COLORS } from './theme';

export const baseStyles = StyleSheet.create({
  // Layout styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  contentContainer: {
    padding: spacing.md,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },
  
  cardElevated: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    ...shadows.md,
  },
  
  // Section styles
  section: {
    marginBottom: spacing.lg,
    backgroundColor: colors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  
  // Text styles
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  
  subtitle: {
    fontSize: typography.sizes.md,
    color: colors.muted,
  },
  
  heading: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.secondary,
    marginBottom: spacing.md,
  },
  
  bodyText: {
    fontSize: typography.sizes.md,
    color: colors.secondary,
  },
  
  caption: {
    fontSize: typography.sizes.sm,
    color: colors.muted,
  },
  
  // Button styles
  button: {
    backgroundColor: CHART_COLORS.primary,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonText: {
    color: colors.card,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.medium,
  },
  
  // Loading and error states
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  
  loadingText: {
    marginTop: spacing.md,
    fontSize: typography.sizes.md,
    color: colors.muted,
  },
  
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  
  errorText: {
    fontSize: typography.sizes.md,
    color: CHART_COLORS.danger,
    textAlign: 'center',
  },
  
  // Row and column layouts
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  column: {
    flexDirection: 'column',
  },
  
  // Spacing utilities
  marginBottom: {
    marginBottom: spacing.md,
  },
  
  marginTop: {
    marginTop: spacing.md,
  },
  
  padding: {
    padding: spacing.md,
  },
  
  paddingHorizontal: {
    paddingHorizontal: spacing.md,
  },
  
  paddingVertical: {
    paddingVertical: spacing.md,
  },
});
