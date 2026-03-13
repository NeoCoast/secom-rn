import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { GroupOrder } from '@src/types';
import { StatusBadge } from '@src/components/StatusBadge';
import { colors, spacing, radius, shadow } from '@src/theme';
import { formatCurrency, getTimeUntil } from '@src/data/mockData';

const STATUS_ACCENT: Record<string, string> = {
  open: colors.success,
  closed: colors.primary,
  ordered: colors.info,
  delivered: colors.muted,
};

interface OrderCardProps {
  order: GroupOrder;
  onPress: () => void;
}

const grandTotal = (order: GroupOrder) =>
  order.individualOrders.reduce((sum, io) => sum + io.total, 0);

export const OrderCard = ({ order, onPress }: OrderCardProps) => {
  const accentColor = STATUS_ACCENT[order.status] ?? colors.muted;
  const total = grandTotal(order);
  const participantCount = order.individualOrders.length;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.75}>
      <View style={[styles.accent, { backgroundColor: accentColor }]} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.restaurantName} numberOfLines={1}>
            {order.restaurantName}
          </Text>
          <StatusBadge status={order.status} />
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="person-outline" size={13} color={colors.textMuted} />
            <Text style={styles.metaText}>por {order.creatorName}</Text>
          </View>
          <View style={styles.metaDot} />
          <View style={styles.metaItem}>
            <Ionicons name="people-outline" size={13} color={colors.textMuted} />
            <Text style={styles.metaText}>
              {participantCount} {participantCount === 1 ? 'persona' : 'personas'}
            </Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.total}>{formatCurrency(total)}</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={12} color={colors.textMuted} />
            <Text style={styles.time}>{getTimeUntil(order.date)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    overflow: 'hidden',
    marginBottom: spacing.md,
    ...shadow.card,
  },
  accent: {
    width: 4,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 999,
    backgroundColor: colors.textMuted,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xs,
  },
  total: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  time: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
