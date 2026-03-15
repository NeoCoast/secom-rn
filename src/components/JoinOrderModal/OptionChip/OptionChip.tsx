import { Text } from "react-native";

import { common } from "@src/theme";
import { formatCurrency } from "@src/utils/format";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { styles } from "./styles";

interface OptionChipProps {
  name: string;
  price: number;
  isSelected: boolean;
  onToggle: () => void;
}

export const OptionChip = ({
  name,
  price,
  isSelected,
  onToggle,
}: OptionChipProps) => (
  <PressableOpacity
    style={cx(common.row, styles.chip, isSelected && styles.chipSelected)}
    onPress={onToggle}
  >
    <Text style={cx(styles.chipText, isSelected && styles.chipTextSelected)}>
      {name}
    </Text>
    <Text style={cx(styles.chipPrice, isSelected && styles.chipPriceSelected)}>
      +{formatCurrency(price)}
    </Text>
  </PressableOpacity>
);
