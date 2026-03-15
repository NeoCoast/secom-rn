import { useState } from "react";
import { View, Text, FlatList, SafeAreaView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { RESTAURANTS, getMenuItemsByRestaurantId } from "@src/data/mockData";
import { useOrders } from "@src/context/OrdersContext";
import { useUser } from "@src/context/UserContext";
import { colors, typography, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";
import type { CreateScreenNavProp } from "@src/navigation/types";

import { RestaurantCard } from "./RestaurantCard/RestaurantCard";
import { styles } from "./styles";

const restaurantsWithMenu = RESTAURANTS.filter(
  ({ id }) => getMenuItemsByRestaurantId(id).length > 0,
);

export default function CreateOrderScreen() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(null);
  const { createOrder } = useOrders();
  const { currentUser, showUserSelector } = useUser();
  const navigation = useNavigation<CreateScreenNavProp>();

  const selectedRestaurant = restaurantsWithMenu.find(
    ({ id }) => id === selectedRestaurantId,
  );

  const handleCreate = () => {
    if (!currentUser) {
      showUserSelector();

      return;
    }

    if (!selectedRestaurantId) return;

    const newOrderId = createOrder(selectedRestaurantId);

    setSelectedRestaurantId(null);

    if (newOrderId) {
      navigation.navigate("HomeTab", {
        screen: "OrderDetail",
        params: { orderId: newOrderId },
      });
    } else {
      Alert.alert("Error", "No se pudo crear el pedido");
    }
  };

  return (
    <SafeAreaView style={common.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Nuevo pedido</Text>
        <Text style={typography.subtitle}>
          Elegí el restaurante para el grupo
        </Text>
      </View>

      <FlatList
        data={restaurantsWithMenu}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <RestaurantCard
            name={item.name}
            isSelected={selectedRestaurantId === item.id}
            onPress={() => setSelectedRestaurantId(item.id)}
          />
        )}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.gridRow}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        {selectedRestaurant && (
          <View style={cx(common.row, styles.selectionInfo)}>
            <Ionicons
              name="restaurant-outline"
              size={16}
              color={colors.primary}
            />
            <Text style={styles.selectionText}>{selectedRestaurant.name}</Text>
          </View>
        )}
        <PressableOpacity
          style={cx(
            common.primaryBtn,
            common.row,
            styles.createBtn,
            !selectedRestaurantId && styles.createBtnDisabled,
          )}
          onPress={handleCreate}
          disabled={!selectedRestaurantId}
        >
          <Ionicons
            name="add-circle-outline"
            size={20}
            color={selectedRestaurantId ? colors.background : colors.textMuted}
          />
          <Text
            style={cx(
              typography.primaryBtnText,
              !selectedRestaurantId && styles.createBtnTextDisabled,
            )}
          >
            Crear pedido
          </Text>
        </PressableOpacity>
      </View>
    </SafeAreaView>
  );
}
