import { View, Text } from "react-native";

import type { User } from "@src/types";

import { styles } from "./styles";

const getInitials = (user: User) =>
  `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

export const AvatarChip = ({ user }: { user: User }) => (
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>{getInitials(user)}</Text>
  </View>
);
