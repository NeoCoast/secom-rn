import { colors } from './colors';

export const typography = {
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: colors.background,
  },
} as const;
