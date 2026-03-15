import { StyleSheet } from "react-native";

import { colors, radius, spacing } from "@src/theme";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: radius.full,
    backgroundColor: colors.textMuted,
  },
  text: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
