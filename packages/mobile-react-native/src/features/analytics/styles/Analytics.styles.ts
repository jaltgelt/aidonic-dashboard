import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, typography, shadows } from '../../../shared/styles/theme';

export const analyticsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  
  contentContainer: {
    padding: spacing.md,
  },
  
  section: {
    marginBottom: spacing.xl,
    backgroundColor: colors.card,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    ...shadows.md,
  },
  
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
});
