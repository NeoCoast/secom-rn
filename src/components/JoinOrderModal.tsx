import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { MenuItem, Topping, Extra } from '@src/types';
import { formatCurrency } from '@src/data/mockData';
import { colors, spacing, radius } from '@src/theme';

interface JoinOrderModalProps {
  visible: boolean;
  restaurantName: string;
  menuItems: MenuItem[];
  getToppings: (menuItemId: string) => Topping[];
  getExtras: (menuItemId: string) => Extra[];
  onClose: () => void;
  onConfirm: (menuItemId: string, toppingIds: string[], extraIds: string[]) => void;
}

const MenuItemRow = ({
  item,
  isSelected,
  onPress,
}: {
  item: MenuItem;
  isSelected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[styles.menuItem, isSelected && styles.menuItemSelected]}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Text style={[styles.menuItemName, isSelected && styles.menuItemNameSelected]}>
      {item.name}
    </Text>
    <Text style={[styles.menuItemPrice, isSelected && styles.menuItemPriceSelected]}>
      {formatCurrency(item.price)}
    </Text>
  </TouchableOpacity>
);

const OptionChip = ({
  name,
  price,
  isSelected,
  onToggle,
}: {
  name: string;
  price: number;
  isSelected: boolean;
  onToggle: () => void;
}) => (
  <TouchableOpacity
    style={[styles.chip, isSelected && styles.chipSelected]}
    onPress={onToggle}
    activeOpacity={0.7}
  >
    <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>{name}</Text>
    {price > 0 && (
      <Text style={[styles.chipPrice, isSelected && styles.chipPriceSelected]}>
        +{formatCurrency(price)}
      </Text>
    )}
  </TouchableOpacity>
);

export const JoinOrderModal = ({
  visible,
  restaurantName,
  menuItems,
  getToppings,
  getExtras,
  onClose,
  onConfirm,
}: JoinOrderModalProps) => {
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<string | null>(null);
  const [selectedToppingIds, setSelectedToppingIds] = useState<string[]>([]);
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([]);

  const selectedItem = menuItems.find(item => item.id === selectedMenuItemId);
  const toppings = selectedMenuItemId ? getToppings(selectedMenuItemId) : [];
  const extras = selectedMenuItemId ? getExtras(selectedMenuItemId) : [];

  const total = selectedItem
    ? selectedItem.price +
      toppings.filter(t => selectedToppingIds.includes(t.id)).reduce((sum, t) => sum + t.price, 0) +
      extras.filter(e => selectedExtraIds.includes(e.id)).reduce((sum, e) => sum + e.price, 0)
    : 0;

  const handleSelectMenuItem = (id: string) => {
    setSelectedMenuItemId(id);
    setSelectedToppingIds([]);
    setSelectedExtraIds([]);
  };

  const toggleTopping = (id: string) =>
    setSelectedToppingIds(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id],
    );

  const toggleExtra = (id: string) =>
    setSelectedExtraIds(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id],
    );

  const handleConfirm = () => {
    if (!selectedMenuItemId) return;
    onConfirm(selectedMenuItemId, selectedToppingIds, selectedExtraIds);
    setSelectedMenuItemId(null);
    setSelectedToppingIds([]);
    setSelectedExtraIds([]);
  };

  const handleClose = () => {
    setSelectedMenuItemId(null);
    setSelectedToppingIds([]);
    setSelectedExtraIds([]);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Agregar mi pedido</Text>
            <Text style={styles.subtitle}>{restaurantName}</Text>
          </View>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionLabel}>Elegí un plato</Text>
          {menuItems.map(item => (
            <MenuItemRow
              key={item.id}
              item={item}
              isSelected={selectedMenuItemId === item.id}
              onPress={() => handleSelectMenuItem(item.id)}
            />
          ))}

          {toppings.length > 0 && (
            <>
              <Text style={[styles.sectionLabel, { marginTop: spacing.xl }]}>Proteínas / Toppings</Text>
              <View style={styles.chipsRow}>
                {toppings.map(topping => (
                  <OptionChip
                    key={topping.id}
                    name={topping.name}
                    price={topping.price}
                    isSelected={selectedToppingIds.includes(topping.id)}
                    onToggle={() => toggleTopping(topping.id)}
                  />
                ))}
              </View>
            </>
          )}

          {extras.length > 0 && (
            <>
              <Text style={[styles.sectionLabel, { marginTop: spacing.xl }]}>Extras</Text>
              <View style={styles.chipsRow}>
                {extras.map(extra => (
                  <OptionChip
                    key={extra.id}
                    name={extra.name}
                    price={extra.price}
                    isSelected={selectedExtraIds.includes(extra.id)}
                    onToggle={() => toggleExtra(extra.id)}
                  />
                ))}
              </View>
            </>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {selectedItem && (
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
            </View>
          )}
          <TouchableOpacity
            style={[styles.confirmBtn, !selectedMenuItemId && styles.confirmBtnDisabled]}
            onPress={handleConfirm}
            disabled={!selectedMenuItemId}
            activeOpacity={0.8}
          >
            <Text style={styles.confirmBtnText}>Agregar al pedido</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  headerLeft: {
    gap: spacing.xs,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMuted,
  },
  closeBtn: {
    padding: spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.md,
    marginBottom: spacing.sm,
  },
  menuItemSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  menuItemName: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.textSecondary,
    flex: 1,
  },
  menuItemNameSelected: {
    color: colors.text,
    fontWeight: '600',
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
  },
  menuItemPriceSelected: {
    color: colors.primary,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  chipSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  chipTextSelected: {
    color: colors.text,
    fontWeight: '600',
  },
  chipPrice: {
    fontSize: 11,
    color: colors.textMuted,
  },
  chipPriceSelected: {
    color: colors.primary,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    gap: spacing.md,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  confirmBtn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  confirmBtnDisabled: {
    backgroundColor: colors.mutedLight,
  },
  confirmBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
});
