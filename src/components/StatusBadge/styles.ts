import { StyleSheet } from 'react-native';

import { colors, radius, spacing } from '@src/theme';
import type { OrderStatus } from '@src/types';

export const STATUS_LABELS: Record<OrderStatus, string> = {
  open: 'Abierto',
  closed: 'Cerrado',
  ordered: 'Pedido',
  delivered: 'Entregado',
};

export const badgeStyles = StyleSheet.create({
  open: { backgroundColor: colors.successLight },
  closed: { backgroundColor: colors.primaryLight },
  ordered: { backgroundColor: colors.infoLight },
  delivered: { backgroundColor: colors.mutedLight },
});

export const dotStyles = StyleSheet.create({
  open: { backgroundColor: colors.success },
  closed: { backgroundColor: colors.primary },
  ordered: { backgroundColor: colors.info },
  delivered: { backgroundColor: colors.muted },
});

export const textStyles = StyleSheet.create({
  open: { color: colors.success },
  closed: { color: colors.primary },
  ordered: { color: colors.info },
  delivered: { color: colors.textMuted },
});

export const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
    gap: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: radius.full,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
