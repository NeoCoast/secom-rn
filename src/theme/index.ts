export const colors = {
  background: '#070b14',
  surface: '#0f1629',
  card: 'rgba(255, 255, 255, 0.04)',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
  primary: '#f59e0b',
  primaryDark: '#d97706',
  primaryLight: 'rgba(245, 158, 11, 0.12)',
  success: '#10b981',
  successLight: 'rgba(16, 185, 129, 0.12)',
  info: '#6366f1',
  infoLight: 'rgba(99, 102, 241, 0.12)',
  muted: '#475569',
  mutedLight: 'rgba(71, 85, 105, 0.12)',
  text: '#f1f5f9',
  textSecondary: '#94a3b8',
  textMuted: '#64748b',
  error: '#ef4444',
  divider: 'rgba(255, 255, 255, 0.06)',
  tabBar: '#0a0f1e',
  tabBarBorder: 'rgba(255, 255, 255, 0.06)',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
} as const;
