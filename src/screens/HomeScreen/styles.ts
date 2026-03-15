import { StyleSheet } from "react-native";

import { colors, spacing, radius } from "@src/theme";

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  logoRow: {
    gap: spacing.sm,
  },
  logoMark: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },
  logoMarkText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.background,
  },
  logoText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    letterSpacing: -0.5,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  listHeader: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
});
