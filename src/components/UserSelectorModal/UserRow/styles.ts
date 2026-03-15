import { StyleSheet } from "react-native";

import { colors, spacing } from "@src/theme";

export const styles = StyleSheet.create({
  userRow: {
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  userInfo: {
    flex: 1,
    gap: 2,
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  userFullName: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
