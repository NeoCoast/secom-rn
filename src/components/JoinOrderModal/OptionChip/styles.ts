import { StyleSheet } from "react-native";

import { colors, spacing, radius } from "@src/theme";

export const styles = StyleSheet.create({
  chip: {
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
    fontWeight: "500",
  },
  chipTextSelected: {
    color: colors.text,
    fontWeight: "600",
  },
  chipPrice: {
    fontSize: 11,
    color: colors.textMuted,
  },
  chipPriceSelected: {
    color: colors.primary,
  },
});
