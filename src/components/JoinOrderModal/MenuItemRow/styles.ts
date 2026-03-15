import { StyleSheet } from "react-native";

import { colors, spacing, radius } from "@src/theme";

export const styles = StyleSheet.create({
  menuItem: {
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
    fontWeight: "500",
    color: colors.textSecondary,
    flex: 1,
  },
  menuItemNameSelected: {
    color: colors.text,
    fontWeight: "600",
  },
  menuItemPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textMuted,
  },
  menuItemPriceSelected: {
    color: colors.primary,
  },
});
