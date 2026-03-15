import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { styles } from "./styles";

interface RestaurantCardProps {
  name: string;
  isSelected: boolean;
  onPress: () => void;
}

export const RestaurantCard = ({
  name,
  isSelected,
  onPress,
}: RestaurantCardProps) => (
  <PressableOpacity
    style={cx(common.card, common.centered, styles.restaurantCard, {
      [styles.restaurantCardSelected]: isSelected,
    })}
    onPress={onPress}
  >
    <View
      style={cx(common.centered, styles.restaurantIcon, {
        [styles.restaurantIconSelected]: isSelected,
      })}
    >
      <Ionicons
        name="restaurant-outline"
        size={20}
        color={isSelected ? colors.background : colors.textMuted}
      />
    </View>
    <Text
      style={cx(styles.restaurantName, {
        [styles.restaurantNameSelected]: isSelected,
      })}
      numberOfLines={2}
    >
      {name}
    </Text>
    {isSelected && (
      <View style={cx(common.centered, styles.checkmark)}>
        <Ionicons name="checkmark" size={14} color={colors.background} />
      </View>
    )}
  </PressableOpacity>
);
