import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { User } from "@src/types";
import { colors, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { AvatarChip } from "../AvatarChip/AvatarChip";
import { styles } from "./styles";

interface UserRowProps {
  user: User;
  onSelect: (user: User) => void;
}

export const UserRow = ({ user, onSelect }: UserRowProps) => (
  <PressableOpacity
    style={cx(common.row, styles.userRow)}
    onPress={() => onSelect(user)}
  >
    <AvatarChip user={user} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{user.nickname}</Text>
      <Text style={styles.userFullName}>
        {user.firstName} {user.lastName}
      </Text>
    </View>
    <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
  </PressableOpacity>
);
