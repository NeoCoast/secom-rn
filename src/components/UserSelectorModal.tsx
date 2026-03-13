import { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { User } from '@src/types';
import { USERS } from '@src/data/mockData';
import { useUser } from '@src/context/UserContext';
import { colors, spacing, radius } from '@src/theme';

const getInitials = (user: User) =>
  `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

const AvatarChip = ({ user }: { user: User }) => (
  <View style={styles.avatar}>
    <Text style={styles.avatarText}>{getInitials(user)}</Text>
  </View>
);

interface UserRowProps {
  user: User;
  onSelect: (user: User) => void;
}

const UserRow = ({ user, onSelect }: UserRowProps) => (
  <TouchableOpacity style={styles.userRow} onPress={() => onSelect(user)} activeOpacity={0.7}>
    <AvatarChip user={user} />
    <View style={styles.userInfo}>
      <Text style={styles.userName}>{user.nickname}</Text>
      <Text style={styles.userFullName}>{user.firstName} {user.lastName}</Text>
    </View>
    <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
  </TouchableOpacity>
);

export const UserSelectorModal = () => {
  const { currentUser, setCurrentUser, isUserSelectorVisible, hideUserSelector } = useUser();
  const [search, setSearch] = useState('');

  const filtered = USERS.filter(user => {
    const query = search.toLowerCase();

    return (
      user.nickname.toLowerCase().includes(query) ||
      user.firstName.toLowerCase().includes(query) ||
      user.lastName.toLowerCase().includes(query)
    );
  });

  const canClose = currentUser !== null;

  const handleClose = () => {
    if (canClose) {
      hideUserSelector();
      setSearch('');
    }
  };

  return (
    <Modal visible={isUserSelectorVisible} animationType="slide" transparent={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>¿Quién sos?</Text>
            <Text style={styles.subtitle}>Elegí tu usuario para continuar</Text>
          </View>
          {canClose && (
            <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
              <Ionicons name="close" size={22} color={colors.textSecondary} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.searchWrapper}>
          <Ionicons name="search-outline" size={18} color={colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor={colors.textMuted}
            value={search}
            onChangeText={setSearch}
            autoCapitalize="none"
          />
        </View>

        <FlatList
          data={filtered}
          keyExtractor={user => user.id}
          renderItem={({ item }) => (
            <UserRow user={item} onSelect={setCurrentUser} />
          )}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  headerLeft: {
    gap: spacing.xs,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
  },
  closeBtn: {
    padding: spacing.sm,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    borderRadius: radius.md,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  searchIcon: {
    marginRight: spacing.xs,
  },
  searchInput: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: 15,
    color: colors.text,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxxl,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  userInfo: {
    flex: 1,
    gap: 2,
  },
  userName: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  userFullName: {
    fontSize: 13,
    color: colors.textMuted,
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
  },
});
