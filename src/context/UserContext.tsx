import { createContext, useContext, useState } from 'react';

import type { User } from '@src/types';

interface UserContextValue {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  isUserSelectorVisible: boolean;
  showUserSelector: () => void;
  hideUserSelector: () => void;
}

const UserContext = createContext<UserContextValue>({
  currentUser: null,
  setCurrentUser: () => {},
  isUserSelectorVisible: true,
  showUserSelector: () => {},
  hideUserSelector: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isUserSelectorVisible, setIsUserSelectorVisible] = useState(true);

  const showUserSelector = () => setIsUserSelectorVisible(true);
  const hideUserSelector = () => setIsUserSelectorVisible(false);

  const handleSetCurrentUser = (user: User | null) => {
    setCurrentUser(user);

    if (user) {
      setIsUserSelectorVisible(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser: handleSetCurrentUser,
        isUserSelectorVisible,
        showUserSelector,
        hideUserSelector,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
