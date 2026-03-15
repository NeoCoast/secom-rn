import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { GroupOrder } from "@src/types";
import { StatusBadge } from "@src/components/StatusBadge/StatusBadge";
import { MetaRow } from "@src/components/MetaRow/MetaRow";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";
import { colors, common } from "@src/theme";
import { formatCurrency, getTimeUntil } from "@src/utils/format";
import { cx } from "@src/utils/styles";

import { styles, accentStyles } from "./styles";

interface OrderCardProps {
  order: GroupOrder;
  onPress: () => void;
}

const grandTotal = (order: GroupOrder) =>
  order.individualOrders.reduce(
    (sum, individualOrder) => sum + individualOrder.total,
    0,
  );

export const OrderCard = ({ order, onPress }: OrderCardProps) => {
  const total = grandTotal(order);
  const participantCount = order.individualOrders.length;

  return (
    <PressableOpacity style={cx(common.card, styles.card)} onPress={onPress}>
      <View style={cx(styles.accent, accentStyles[order.status])} />

      <View style={styles.content}>
        <View style={cx(common.rowBetween, styles.topRow)}>
          <Text style={styles.restaurantName} numberOfLines={1}>
            {order.restaurantName}
          </Text>
          <StatusBadge status={order.status} />
        </View>

        <MetaRow
          items={[
            {
              icon: "person-outline",
              text: `por ${order.creatorName}`,
              iconSize: 13,
            },
            {
              icon: "people-outline",
              text: `${participantCount} ${participantCount === 1 ? "persona" : "personas"}`,
              iconSize: 13,
            },
          ]}
        />

        <View style={cx(common.rowBetween, styles.bottomRow)}>
          <Text style={styles.total}>{formatCurrency(total)}</Text>
          <View style={cx(common.row, styles.timeRow)}>
            <Ionicons name="time-outline" size={12} color={colors.textMuted} />
            <Text style={styles.time}>{getTimeUntil(order.date)}</Text>
          </View>
        </View>
      </View>
    </PressableOpacity>
  );
};
