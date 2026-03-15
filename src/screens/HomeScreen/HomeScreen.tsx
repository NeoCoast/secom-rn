import { View, Text, FlatList, SafeAreaView } from "react-native";

import { useOrders } from "@src/context/OrdersContext";
import { OrderCard } from "@src/components/OrderCard/OrderCard";
import { EmptyState } from "@src/components/EmptyState/EmptyState";
import { SectionLabel } from "@src/components/SectionLabel/SectionLabel";
import { common } from "@src/theme";
import { cx } from "@src/utils/styles";
import type { HomeScreenProps } from "@src/navigation/types";
import { ACTIVE_STATUSES } from "@src/types";

import { UserChip } from "./UserChip/UserChip";
import { styles } from "./styles";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { orders } = useOrders();

  const activeOrders = orders.filter(({ status }) =>
    ACTIVE_STATUSES.includes(status),
  );

  return (
    <SafeAreaView style={common.screen}>
      <View style={common.screen}>
        <View style={cx(common.rowBetween, styles.header)}>
          <View style={cx(common.row, styles.logoRow)}>
            <View style={cx(common.centered, styles.logoMark)}>
              <Text style={styles.logoMarkText}>S</Text>
            </View>
            <Text style={styles.logoText}>Secom</Text>
          </View>
          <UserChip />
        </View>

        <FlatList
          data={activeOrders}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
              onPress={() =>
                navigation.navigate("OrderDetail", { orderId: item.id })
              }
            />
          )}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <SectionLabel text="Pedidos activos" />
            </View>
          }
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
