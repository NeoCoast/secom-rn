import { StyleSheet } from "react-native";

import { colors, spacing, radius, shadow } from "@src/theme";

export const styles = StyleSheet.create({
  restaurantCard: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.sm,
    minHeight: 110,
    ...shadow.card,
  },
  restaurantCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  restaurantIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.mutedLight,
  },
  restaurantIconSelected: {
    backgroundColor: colors.primary,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
    textAlign: "center",
  },
  restaurantNameSelected: {
    color: colors.text,
  },
  checkmark: {
    position: "absolute",
    top: spacing.sm,
    right: spacing.sm,
    width: 20,
    height: 20,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
});
