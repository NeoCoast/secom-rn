import { StyleSheet } from "react-native";

import { colors, spacing } from "@src/theme";

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    gap: spacing.xs,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.text,
  },
  grid: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  gridRow: {
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    gap: spacing.sm,
  },
  selectionInfo: {
    justifyContent: "center",
    gap: spacing.xs,
  },
  selectionText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: "600",
  },
  createBtn: {
    justifyContent: "center",
    gap: spacing.sm,
  },
  createBtnDisabled: {
    backgroundColor: colors.mutedLight,
  },
  createBtnTextDisabled: {
    color: colors.textMuted,
  },
});
