import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors, typography } from "@src/theme";
import { cx } from "@src/utils/styles";

import { styles } from "./styles";

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
}

export const EmptyState = ({
  icon = "receipt-outline",
  title,
  subtitle,
}: EmptyStateProps) => (
  <View style={styles.container}>
    <View style={styles.iconWrapper}>
      <Ionicons name={icon} size={40} color={colors.textMuted} />
    </View>
    <Text style={styles.title}>{title}</Text>
    {subtitle && (
      <Text style={cx(typography.subtitle, styles.subtitle)}>{subtitle}</Text>
    )}
  </View>
);
