import { NavigationContainer } from '@react-navigation/native';

import { TabNavigator } from '@src/navigation/TabNavigator';

export const RootNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
