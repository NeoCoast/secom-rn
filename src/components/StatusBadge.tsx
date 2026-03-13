import { View, Text, StyleSheet } from 'react-native';

import type { OrderStatus } from '@src/types';
import { colors, radius, spacing } from '@src/theme';

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string; dot: string }> = {
  open: { label: 'Abierto', bg: colors.successLight, text: colors.success, dot: colors.success },
  closed: { label: 'Cerrado', bg: colors.primaryLight, text: colors.primary, dot: colors.primary },
  ordered: { label: 'Pedido', bg: colors.infoLight, text: colors.info, dot: colors.info },
  delivered: { label: 'Entregado', bg: colors.mutedLight, text: colors.textMuted, dot: colors.muted },
};

interface StatusBadgeProps {
  status: OrderStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = STATUS_CONFIG[status];

  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <View style={[styles.dot, { backgroundColor: config.dot }]} />
      <Text style={[styles.label, { color: config.text }]}>{config.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
