import { StyleSheet } from "react-native";

import { colors, spacing } from "@src/theme";

export const styles = StyleSheet.create({
  header: {
    alignItems: "flex-start",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  headerLeft: {
    gap: spacing.xs,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMuted,
  },
  closeBtn: {
    padding: spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  sectionLabel: {
    marginBottom: spacing.sm,
  },
  sectionLabelSpaced: {
    marginBottom: spacing.sm,
    marginTop: spacing.xl,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    gap: spacing.md,
  },
  totalLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
  },
  confirmBtn: {
    alignItems: "center",
  },
  confirmBtnDisabled: {
    backgroundColor: colors.mutedLight,
  },
  confirmBtnTextDisabled: {
    color: colors.textMuted,
  },
});
