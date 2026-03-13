import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useOrders } from '@src/context/OrdersContext';
import { useUser } from '@src/context/UserContext';
import { StatusBadge } from '@src/components/StatusBadge';
import { JoinOrderModal } from '@src/components/JoinOrderModal';
import {
  getMenuItemsByRestaurantId,
  getToppingsByMenuItemId,
  getExtrasByMenuItemId,
  formatCurrency,
  getTimeUntil,
} from '@src/data/mockData';
import { colors, spacing, radius } from '@src/theme';
import type { OrderDetailScreenProps } from '@src/navigation/types';
import type { IndividualOrder } from '@src/types';

const ParticipantRow = ({ individualOrder }: { individualOrder: IndividualOrder }) => {
  const tags = [...individualOrder.selectedToppingNames, ...individualOrder.selectedExtraNames];

  return (
    <View style={styles.participantRow}>
      <View style={styles.participantAvatar}>
        <Text style={styles.participantAvatarText}>
          {individualOrder.userName[0].toUpperCase()}
        </Text>
      </View>
      <View style={styles.participantInfo}>
        <Text style={styles.participantName}>{individualOrder.userName}</Text>
        <Text style={styles.participantItem}>{individualOrder.menuItemName}</Text>
        {tags.length > 0 && (
          <View style={styles.tagsRow}>
            {tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
      <Text style={styles.participantTotal}>{formatCurrency(individualOrder.total)}</Text>
    </View>
  );
};

export default function OrderDetailScreen({ route, navigation }: OrderDetailScreenProps) {
  const { orderId } = route.params;
  const { orders, joinOrder } = useOrders();
  const { currentUser, showUserSelector } = useUser();
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Pedido no encontrado</Text>
      </SafeAreaView>
    );
  }

  const hasJoined = order.individualOrders.some(io => io.userId === currentUser?.id);
  const canJoin = order.status === 'open' && !hasJoined;
  const grandTotal = order.individualOrders.reduce((sum, io) => sum + io.total, 0);

  const menuItems = getMenuItemsByRestaurantId(order.restaurantId);

  const handleJoinPress = () => {
    if (!currentUser) {
      showUserSelector();

      return;
    }
    setJoinModalVisible(true);
  };

  const handleConfirmJoin = (
    menuItemId: string,
    toppingIds: string[],
    extraIds: string[],
  ) => {
    joinOrder(order.id, menuItemId, toppingIds, extraIds);
    setJoinModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>
        <StatusBadge status={order.status} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.restaurantName}>{order.restaurantName}</Text>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="person-outline" size={14} color={colors.textMuted} />
            <Text style={styles.metaText}>por {order.creatorName}</Text>
          </View>
          <View style={styles.metaDot} />
          <View style={styles.metaItem}>
            <Ionicons name="time-outline" size={14} color={colors.textMuted} />
            <Text style={styles.metaText}>{getTimeUntil(order.date)}</Text>
          </View>
        </View>

        <View style={styles.totalsCard}>
          <View style={styles.totalItem}>
            <Text style={styles.totalLabel}>Total del pedido</Text>
            <Text style={styles.totalAmount}>{formatCurrency(grandTotal)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalItem}>
            <Text style={styles.totalLabel}>Participantes</Text>
            <Text style={styles.totalAmount}>{order.individualOrders.length}</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>Participantes</Text>

        {order.individualOrders.length === 0 ? (
          <Text style={styles.emptyParticipants}>Nadie se sumó todavía</Text>
        ) : (
          <View style={styles.participantsList}>
            {order.individualOrders.map((io, index) => (
              <View key={io.id}>
                <ParticipantRow individualOrder={io} />
                {index < order.individualOrders.length - 1 && (
                  <View style={styles.participantDivider} />
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {canJoin && (
        <View style={styles.joinBar}>
          <TouchableOpacity style={styles.joinBtn} onPress={handleJoinPress} activeOpacity={0.85}>
            <Ionicons name="add-circle-outline" size={20} color={colors.background} />
            <Text style={styles.joinBtnText}>Agregar mi pedido</Text>
          </TouchableOpacity>
        </View>
      )}

      {hasJoined && order.status === 'open' && (
        <View style={styles.joinBar}>
          <View style={styles.joinedBadge}>
            <Ionicons name="checkmark-circle" size={18} color={colors.success} />
            <Text style={styles.joinedText}>Ya estás en este pedido</Text>
          </View>
        </View>
      )}

      <JoinOrderModal
        visible={joinModalVisible}
        restaurantName={order.restaurantName}
        menuItems={menuItems}
        getToppings={getToppingsByMenuItemId}
        getExtras={getExtrasByMenuItemId}
        onClose={() => setJoinModalVisible(false)}
        onConfirm={handleConfirmJoin}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  backBtn: {
    padding: spacing.sm,
    marginLeft: -spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.xl,
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
  totalsCard: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  totalItem: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xs,
  },
  divider: {
    width: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.md,
  },
  totalLabel: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '500',
    textAlign: 'center',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: spacing.md,
  },
  emptyParticipants: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    paddingVertical: spacing.xl,
  },
  participantsList: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
  participantRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: spacing.lg,
    gap: spacing.md,
  },
  participantAvatar: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  participantAvatarText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
  },
  participantInfo: {
    flex: 1,
    gap: 3,
  },
  participantName: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  participantItem: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  tag: {
    backgroundColor: colors.infoLight,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 11,
    color: colors.info,
    fontWeight: '500',
  },
  participantTotal: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  participantDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.lg,
  },
  joinBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  joinBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
  },
  joinBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  joinedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  joinedText: {
    fontSize: 14,
    color: colors.success,
    fontWeight: '600',
  },
  errorText: {
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.xxxl,
  },
});
