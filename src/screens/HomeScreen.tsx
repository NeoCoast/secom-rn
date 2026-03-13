import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useOrders } from '@src/context/OrdersContext';
import { useUser } from '@src/context/UserContext';
import { OrderCard } from '@src/components/OrderCard';
import { EmptyState } from '@src/components/EmptyState';
import { colors, spacing, radius } from '@src/theme';
import type { HomeScreenProps } from '@src/navigation/types';

const ACTIVE_STATUSES = ['open', 'closed', 'ordered'];

const UserChip = () => {
  const { currentUser, showUserSelector } = useUser();

  return (
    <TouchableOpacity style={styles.userChip} onPress={showUserSelector} activeOpacity={0.7}>
      <View style={styles.userDot} />
      <Text style={styles.userChipText}>
        {currentUser ? currentUser.nickname : 'Sin usuario'}
      </Text>
      <Ionicons name="chevron-down" size={13} color={colors.textMuted} />
    </TouchableOpacity>
  );
};

const ListHeader = () => (
  <View style={styles.listHeader}>
    <Text style={styles.sectionLabel}>Pedidos activos</Text>
  </View>
);

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { orders } = useOrders();

  const activeOrders = orders.filter(order => ACTIVE_STATUSES.includes(order.status));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoMark}>
              <Text style={styles.logoMarkText}>S</Text>
            </View>
            <Text style={styles.logoText}>Secom</Text>
          </View>
          <UserChip />
        </View>

        <FlatList
          data={activeOrders}
          keyExtractor={order => order.id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
              onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}
            />
          )}
          ListHeaderComponent={<ListHeader />}
          ListEmptyComponent={
            <EmptyState
              icon="fast-food-outline"
              title="No hay pedidos activos"
              subtitle="Creá un nuevo pedido desde la pestaña Nuevo"
            />
          }
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  logoMark: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMarkText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.background,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -0.5,
  },
  userChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  userDot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.success,
  },
  userChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  listHeader: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
