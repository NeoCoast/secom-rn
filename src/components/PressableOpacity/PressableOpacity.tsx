import { Pressable } from 'react-native';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

interface PressableOpacityProps extends Omit<PressableProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

export const PressableOpacity = ({ style, ...props }: PressableOpacityProps) => (
  <Pressable
    style={({ pressed }) => [
      { opacity: pressed ? 0.7 : 1 },
      typeof style === 'function' ? style({ pressed }) : style,
    ]}
    {...props}
  />
);
