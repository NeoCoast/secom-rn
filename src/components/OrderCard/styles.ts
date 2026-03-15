import { StyleSheet } from "react-native";

import { colors, spacing, radius, shadow } from "@src/theme";

export const accentStyles = StyleSheet.create({
  open: { backgroundColor: colors.success },
  closed: { backgroundColor: colors.primary },
  ordered: { backgroundColor: colors.info },
  delivered: { backgroundColor: colors.muted },
});

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: spacing.md,
    ...shadow.card,
  },
  accent: {
    width: 4,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  topRow: {
    gap: spacing.sm,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.text,
    flex: 1,
  },
  bottomRow: {
    marginTop: spacing.xs,
  },
  total: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.primary,
  },
  timeRow: {
    gap: 4,
  },
  time: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
