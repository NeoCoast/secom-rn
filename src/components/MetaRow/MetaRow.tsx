import React from "react";
import { View, Text } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "@src/theme";

import { styles } from "./styles";

interface MetaItem {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  iconSize?: number;
}

interface MetaRowProps {
  items: MetaItem[];
  style?: StyleProp<ViewStyle>;
}

export const MetaRow = ({ items, style }: MetaRowProps) => (
  <View style={[styles.row, style]}>
    {items.map((item, index) => (
      <React.Fragment key={index}>
        {index > 0 && <View style={styles.dot} />}

        <View style={styles.item}>
          <Ionicons
            name={item.icon}
            size={item.iconSize ?? 13}
            color={colors.textMuted}
          />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </React.Fragment>
    ))}
  </View>
);
