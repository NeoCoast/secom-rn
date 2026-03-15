import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useOrders } from "@src/context/OrdersContext";
import { useUser } from "@src/context/UserContext";
import { StatusBadge } from "@src/components/StatusBadge/StatusBadge";
import { JoinOrderModal } from "@src/components/JoinOrderModal/JoinOrderModal";
import { MetaRow } from "@src/components/MetaRow/MetaRow";
import { SectionLabel } from "@src/components/SectionLabel/SectionLabel";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";
import {
  getMenuItemsByRestaurantId,
  getToppingsByMenuItemId,
  getExtrasByMenuItemId,
} from "@src/data/mockData";
import { formatCurrency, getTimeUntil } from "@src/utils/format";
import { colors, typography, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import type { OrderDetailScreenProps } from "@src/navigation/types";

import { ParticipantRow } from "./ParticipantRow";
import { styles } from "./styles";

export default function OrderDetailScreen({
  route,
  navigation,
}: OrderDetailScreenProps) {
  const { orderId } = route.params;
  const { orders, joinOrder } = useOrders();
  const { currentUser, showUserSelector } = useUser();
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  const order = orders.find(({ id }) => id === orderId);

  if (!order) {
    return (
      <SafeAreaView style={common.screen}>
        <Text style={styles.errorText}>Pedido no encontrado</Text>
      </SafeAreaView>
    );
  }

  const hasJoined = order.individualOrders.some(
    (individualOrder) => individualOrder.userId === currentUser?.id,
  );
  const canJoin = order.status === "open" && !hasJoined;
  const grandTotal = order.individualOrders.reduce(
    (sum, individualOrder) => sum + individualOrder.total,
    0,
  );

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
    <SafeAreaView style={common.screen}>
      <View style={cx(common.rowBetween, styles.navBar)}>
        <PressableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </PressableOpacity>
        <StatusBadge status={order.status} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.restaurantName}>{order.restaurantName}</Text>

        <MetaRow
          items={[
            {
              icon: "person-outline",
              text: `por ${order.creatorName}`,
              iconSize: 14,
            },
            {
              icon: "time-outline",
              text: getTimeUntil(order.date),
              iconSize: 14,
            },
          ]}
          style={styles.metaRow}
        />

        <View style={cx(common.card, styles.totalsCard)}>
          <View style={cx(common.centered, styles.totalItem)}>
            <Text style={styles.totalLabel}>Total del pedido</Text>
            <Text style={styles.totalAmount}>{formatCurrency(grandTotal)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={cx(common.centered, styles.totalItem)}>
            <Text style={styles.totalLabel}>Participantes</Text>
            <Text style={styles.totalAmount}>
              {order.individualOrders.length}
            </Text>
          </View>
        </View>

        <SectionLabel text="Participantes" style={styles.sectionLabel} />

        {order.individualOrders.length === 0 ? (
          <Text style={styles.emptyParticipants}>Nadie se sumó todavía</Text>
        ) : (
          <View style={cx(common.card, styles.participantsList)}>
            {order.individualOrders.map((individualOrder, index) => (
              <View key={individualOrder.id}>
                <ParticipantRow individualOrder={individualOrder} />
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
          <PressableOpacity
            style={cx(common.primaryBtn, common.row, styles.joinBtn)}
            onPress={handleJoinPress}
          >
            <Ionicons
              name="add-circle-outline"
              size={20}
              color={colors.background}
            />
            <Text style={typography.primaryBtnText}>Agregar mi pedido</Text>
          </PressableOpacity>
        </View>
      )}

      {hasJoined && order.status === "open" && (
        <View style={styles.joinBar}>
          <View style={cx(common.row, styles.joinedBadge)}>
            <Ionicons
              name="checkmark-circle"
              size={18}
              color={colors.success}
            />
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
