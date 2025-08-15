import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../../shared/styles/theme';

export const distributionListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  
  listContainer: {
    paddingVertical: spacing.sm,
  },
  
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  
  emptyText: {
    fontSize: typography.sizes.md,
    color: colors.muted,
  },
});
