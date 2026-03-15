import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useUser } from "@src/context/UserContext";
import { colors, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { styles } from "./styles";

export const UserChip = () => {
  const { currentUser, showUserSelector } = useUser();

  return (
    <PressableOpacity
      style={cx(common.row, styles.userChip)}
      onPress={showUserSelector}
    >
      <View style={styles.userDot} />
      <Text style={styles.userChipText}>
        {currentUser ? currentUser.nickname : "Sin usuario"}
      </Text>
      <Ionicons name="chevron-down" size={13} color={colors.textMuted} />
    </PressableOpacity>
  );
};
