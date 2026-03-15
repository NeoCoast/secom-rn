import { useState } from 'react';

import { USERS } from '@src/data/mockData';
import { useUser } from '@src/context/UserContext';

export const useUserSelector = () => {
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

  return {
    isVisible: isUserSelectorVisible,
    search,
    setSearch,
    filtered,
    canClose,
    handleClose,
    onSelect: setCurrentUser,
  };
};
