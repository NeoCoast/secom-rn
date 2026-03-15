import { StyleSheet } from "react-native";

import { colors, spacing, radius } from "@src/theme";

export const styles = StyleSheet.create({
  navBar: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  backBtn: {
    padding: spacing.sm,
    marginLeft: -spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 100,
  },
  restaurantName: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  metaRow: {
    marginBottom: spacing.xl,
  },
  totalsCard: {
    flexDirection: "row",
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  totalItem: {
    flex: 1,
    gap: spacing.xs,
  },
  divider: {
    width: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.md,
  },
  totalLabel: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: "500",
    textAlign: "center",
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
  },
  sectionLabel: {
    marginBottom: spacing.md,
  },
  emptyParticipants: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: "center",
    paddingVertical: spacing.xl,
  },
  participantsList: {
    overflow: "hidden",
  },
  participantRow: {
    alignItems: "flex-start",
    padding: spacing.lg,
    gap: spacing.md,
  },
  participantAvatar: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  participantAvatarText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.primary,
  },
  participantInfo: {
    flex: 1,
    gap: 3,
  },
  participantName: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },
  participantItem: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  tag: {
    backgroundColor: colors.infoLight,
    borderRadius: radius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 11,
    color: colors.info,
    fontWeight: "500",
  },
  participantTotal: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.primary,
  },
  participantDivider: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.lg,
  },
  joinBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  joinBtn: {
    justifyContent: "center",
    gap: spacing.sm,
  },
  joinedBadge: {
    justifyContent: "center",
    gap: spacing.sm,
  },
  joinedText: {
    fontSize: 14,
    color: colors.success,
    fontWeight: "600",
  },
  errorText: {
    color: colors.textMuted,
    textAlign: "center",
    marginTop: spacing.xxxl,
  },
});
