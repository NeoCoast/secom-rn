import {
  Modal,
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { User } from "@src/types";
import { colors, typography, common } from "@src/theme";
import { cx } from "@src/utils/styles";
import { PressableOpacity } from "@src/components/PressableOpacity/PressableOpacity";

import { UserRow } from "./UserRow/UserRow";
import { styles } from "./styles";

interface UserSelectorModalProps {
  visible: boolean;
  search: string;
  onSearchChange: (text: string) => void;
  users: User[];
  canClose: boolean;
  onClose: () => void;
  onSelect: (user: User) => void;
}

export const UserSelectorModal = ({
  visible,
  search,
  onSearchChange,
  users,
  canClose,
  onClose,
  onSelect,
}: UserSelectorModalProps) => (
  <Modal visible={visible} animationType="slide" transparent={false}>
    <SafeAreaView style={common.screen}>
      <View style={cx(common.rowBetween, styles.header)}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>¿Quién sos?</Text>
          <Text style={typography.subtitle}>
            Elegí tu usuario para continuar
          </Text>
        </View>
        {canClose && (
          <PressableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={22} color={colors.textSecondary} />
          </PressableOpacity>
        )}
      </View>

      <View style={cx(common.row, styles.searchWrapper)}>
        <Ionicons
          name="search-outline"
          size={18}
          color={colors.textMuted}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor={colors.textMuted}
          value={search}
          onChangeText={onSearchChange}
          autoCapitalize="none"
        />
      </View>

      <FlatList
        data={users}
        keyExtractor={(user) => user.id}
        renderItem={({ item }) => <UserRow user={item} onSelect={onSelect} />}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  </Modal>
);
