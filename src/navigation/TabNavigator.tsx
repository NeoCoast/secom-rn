import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "@src/screens/HomeScreen/HomeScreen";
import OrderDetailScreen from "@src/screens/OrderDetailScreen/OrderDetailScreen";
import CreateOrderScreen from "@src/screens/CreateOrderScreen/CreateOrderScreen";
import { colors } from "@src/theme";
import type { TabParamList, HomeStackParamList } from "@src/navigation/types";

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="OrderDetail" component={OrderDetailScreen} />
  </HomeStack.Navigator>
);

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.tabBar,
        borderTopColor: colors.tabBarBorder,
        borderTopWidth: 1,
        paddingBottom: 6,
        paddingTop: 6,
        height: 64,
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textMuted,
      tabBarLabelStyle: {
        fontSize: 11,
        fontWeight: "600",
        marginTop: 2,
      },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStackNavigator}
      options={{
        title: "Pedidos",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="receipt-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CreateTab"
      component={CreateOrderScreen}
      options={{
        title: "Nuevo",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
