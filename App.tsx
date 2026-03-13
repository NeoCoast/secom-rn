import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserProvider } from '@src/context/UserContext';
import { OrdersProvider } from '@src/context/OrdersContext';
import { RootNavigator } from '@src/navigation/RootNavigator';
import { UserSelectorModal } from '@src/components/UserSelectorModal';

const AppContent = () => (
  <>
    <RootNavigator />
    <UserSelectorModal />
    <StatusBar style="light" />
  </>
);

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
