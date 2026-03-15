import { Text } from "react-native";

import type { MenuItem } from "@src/types";
import { common } from "@src/theme";
import { formatCurrency } from "@src/utils/format";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { styles } from "./styles";

interface MenuItemRowProps {
  item: MenuItem;
  isSelected: boolean;
  onPress: () => void;
}

export const MenuItemRow = ({
  item,
  isSelected,
  onPress,
}: MenuItemRowProps) => (
  <PressableOpacity
    style={cx(common.rowBetween, styles.menuItem, isSelected && styles.menuItemSelected)}
    onPress={onPress}
  >
    <Text
      style={cx(styles.menuItemName, isSelected && styles.menuItemNameSelected)}
    >
      {item.name}
    </Text>
    <Text
      style={cx(
        styles.menuItemPrice,
        isSelected && styles.menuItemPriceSelected,
      )}
    >
      {formatCurrency(item.price)}
    </Text>
  </PressableOpacity>
);
