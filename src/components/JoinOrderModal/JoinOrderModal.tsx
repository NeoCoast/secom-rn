import { Modal, View, Text, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { MenuItem, Topping, Extra } from "@src/types";
import { colors, typography, common } from "@src/theme";
import { formatCurrency } from "@src/utils/format";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";
import { SectionLabel } from "@src/components/SectionLabel/SectionLabel";

import { useJoinOrder } from "./useJoinOrder";
import { MenuItemRow } from "./MenuItemRow/MenuItemRow";
import { OptionChip } from "./OptionChip/OptionChip";
import { styles } from "./styles";

interface JoinOrderModalProps {
  visible: boolean;
  restaurantName: string;
  menuItems: MenuItem[];
  getToppings: (menuItemId: string) => Topping[];
  getExtras: (menuItemId: string) => Extra[];
  onClose: () => void;
  onConfirm: (
    menuItemId: string,
    toppingIds: string[],
    extraIds: string[],
  ) => void;
}

export const JoinOrderModal = ({
  visible,
  restaurantName,
  menuItems,
  getToppings,
  getExtras,
  onClose,
  onConfirm,
}: JoinOrderModalProps) => {
  const {
    selectedMenuItemId,
    selectedToppingIds,
    selectedExtraIds,
    selectedItem,
    toppings,
    extras,
    total,
    handleSelectMenuItem,
    toggleTopping,
    toggleExtra,
    handleConfirm,
    handleClose,
  } = useJoinOrder({ menuItems, getToppings, getExtras, onConfirm, onClose });

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={common.screen}>
        <View style={cx(common.rowBetween, styles.header)}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Agregar mi pedido</Text>
            <Text style={styles.subtitle}>{restaurantName}</Text>
          </View>
          <PressableOpacity onPress={handleClose} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={colors.textSecondary} />
          </PressableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <SectionLabel text="Elegí un plato" style={styles.sectionLabel} />
          {menuItems.map((item) => (
            <MenuItemRow
              key={item.id}
              item={item}
              isSelected={selectedMenuItemId === item.id}
              onPress={() => handleSelectMenuItem(item.id)}
            />
          ))}

          {toppings.length > 0 && (
            <>
              <SectionLabel
                text="Proteínas / Toppings"
                style={styles.sectionLabelSpaced}
              />
              <View style={styles.chipsRow}>
                {toppings.map(({ id, name, price }) => (
                  <OptionChip
                    key={id}
                    name={name}
                    price={price}
                    isSelected={selectedToppingIds.includes(id)}
                    onToggle={() => toggleTopping(id)}
                  />
                ))}
              </View>
            </>
          )}

          {extras.length > 0 && (
            <>
              <SectionLabel text="Extras" style={styles.sectionLabelSpaced} />
              <View style={styles.chipsRow}>
                {extras.map(({ id, name, price }) => (
                  <OptionChip
                    key={id}
                    name={name}
                    price={price}
                    isSelected={selectedExtraIds.includes(id)}
                    onToggle={() => toggleExtra(id)}
                  />
                ))}
              </View>
            </>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {selectedItem && (
            <View style={common.rowBetween}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
            </View>
          )}
          <PressableOpacity
            style={cx(common.primaryBtn, styles.confirmBtn, {
              [styles.confirmBtnDisabled]: !selectedMenuItemId,
            })}
            onPress={handleConfirm}
            disabled={!selectedMenuItemId}
          >
            <Text
              style={cx(
                typography.primaryBtnText,
                !selectedMenuItemId && styles.confirmBtnTextDisabled,
              )}
            >
              Agregar al pedido
            </Text>
          </PressableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
