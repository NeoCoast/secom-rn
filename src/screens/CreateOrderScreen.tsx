import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RESTAURANTS } from '@src/data/mockData';
import { useOrders } from '@src/context/OrdersContext';
import { useUser } from '@src/context/UserContext';
import { colors, spacing, radius, shadow } from '@src/theme';
import type { TabParamList, HomeStackParamList } from '@src/navigation/types';

type CreateScreenNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'CreateTab'>,
  NativeStackNavigationProp<HomeStackParamList>
>;

const RestaurantCard = ({
  name,
  isSelected,
  onPress,
}: {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.restaurantCard, isSelected && styles.restaurantCardSelected]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <View style={[styles.restaurantIcon, isSelected && styles.restaurantIconSelected]}>
      <Ionicons
        name="restaurant-outline"
        size={20}
        color={isSelected ? colors.background : colors.textMuted}
      />
    </View>
    <Text style={[styles.restaurantName, isSelected && styles.restaurantNameSelected]} numberOfLines={2}>
      {name}
    </Text>
    {isSelected && (
      <View style={styles.checkmark}>
        <Ionicons name="checkmark" size={14} color={colors.background} />
      </View>
    )}
  </TouchableOpacity>
);

export default function CreateOrderScreen() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const { createOrder } = useOrders();
  const { currentUser, showUserSelector } = useUser();
  const navigation = useNavigation<CreateScreenNavProp>();

  const selectedRestaurant = RESTAURANTS.find(r => r.id === selectedRestaurantId);

  const handleCreate = () => {
    if (!currentUser) {
      showUserSelector();

      return;
    }

    if (!selectedRestaurantId) return;

    const newOrderId = createOrder(selectedRestaurantId);

    setSelectedRestaurantId(null);

    if (newOrderId) {
      navigation.navigate('HomeTab', {
        screen: 'OrderDetail',
        params: { orderId: newOrderId },
      });
    } else {
      Alert.alert('Error', 'No se pudo crear el pedido');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Nuevo pedido</Text>
        <Text style={styles.subtitle}>Elegí el restaurante para el grupo</Text>
      </View>

      <FlatList
        data={RESTAURANTS}
        keyExtractor={item => item.id}
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
          <View style={styles.selectionInfo}>
            <Ionicons name="restaurant-outline" size={16} color={colors.primary} />
            <Text style={styles.selectionText}>{selectedRestaurant.name}</Text>
          </View>
        )}
        <TouchableOpacity
          style={[styles.createBtn, !selectedRestaurantId && styles.createBtnDisabled]}
          onPress={handleCreate}
          disabled={!selectedRestaurantId}
          activeOpacity={0.85}
        >
          <Ionicons
            name="add-circle-outline"
            size={20}
            color={selectedRestaurantId ? colors.background : colors.textMuted}
          />
          <Text style={[styles.createBtnText, !selectedRestaurantId && styles.createBtnTextDisabled]}>
            Crear pedido
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    gap: spacing.xs,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
  },
  grid: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  gridRow: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  restaurantCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.sm,
    minHeight: 110,
    justifyContent: 'center',
    ...shadow.card,
  },
  restaurantCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  restaurantIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.mutedLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantIconSelected: {
    backgroundColor: colors.primary,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  restaurantNameSelected: {
    color: colors.text,
  },
  checkmark: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 20,
    height: 20,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    gap: spacing.sm,
  },
  selectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  selectionText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
  createBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
  },
  createBtnDisabled: {
    backgroundColor: colors.mutedLight,
  },
  createBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  createBtnTextDisabled: {
    color: colors.textMuted,
  },
});
