import { StyleSheet } from "react-native";

import { colors } from "./colors";
import { spacing, radius } from "./tokens";

export const common = StyleSheet.create({
  // Screen / modal root container
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Card base
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.lg,
  },

  // Primary action button base
  primaryBtn: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.lg,
    borderRadius: radius.md,
  },

  // Layout helpers
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
});
