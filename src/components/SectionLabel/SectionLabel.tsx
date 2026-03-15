import { Text } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import { styles } from './styles';

interface SectionLabelProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export const SectionLabel = ({ text, style }: SectionLabelProps) => (
  <Text style={[styles.label, style]}>{text}</Text>
);
