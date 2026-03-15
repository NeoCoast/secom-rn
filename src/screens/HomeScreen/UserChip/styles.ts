import { StyleSheet } from "react-native";

import { colors, spacing, radius } from "@src/theme";

export const styles = StyleSheet.create({
  userChip: {
    gap: spacing.xs,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.full,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  userDot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
    backgroundColor: colors.success,
  },
  userChipText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
  },
});
