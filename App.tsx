import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { UserProvider } from "@src/context/UserContext";
import { OrdersProvider } from "@src/context/OrdersContext";
import { RootNavigator } from "@src/navigation/RootNavigator";
import { UserSelectorModal } from "@src/components/UserSelectorModal/UserSelectorModal";
import { useUserSelector } from "@src/hooks/useUserSelector";

const AppContent = () => {
  const {
    isVisible,
    search,
    setSearch,
    filtered,
    canClose,
    handleClose,
    onSelect,
  } = useUserSelector();

  return (
    <>
      <RootNavigator />
      <UserSelectorModal
        visible={isVisible}
        search={search}
        onSearchChange={setSearch}
        users={filtered}
        canClose={canClose}
        onClose={handleClose}
        onSelect={onSelect}
      />
      <StatusBar style="light" />
    </>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <OrdersProvider>
          <AppContent />
        </OrdersProvider>
      </UserProvider>
    </SafeAreaProvider>
  );
}
