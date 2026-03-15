import { View, Text } from 'react-native';

import type { OrderStatus } from '@src/types';
import { cx } from '@src/utils/styles';

import { styles, STATUS_LABELS, badgeStyles, dotStyles, textStyles } from './styles';

interface StatusBadgeProps {
  status: OrderStatus;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => (
  <View style={cx(styles.badge, badgeStyles[status])}>
    <View style={cx(styles.dot, dotStyles[status])} />
    <Text style={cx(styles.label, textStyles[status])}>{STATUS_LABELS[status]}</Text>
  </View>
);
