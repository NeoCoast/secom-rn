import type {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import type {
  NavigatorScreenParams,
  CompositeNavigationProp,
} from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type HomeStackParamList = {
  Home: undefined;
  OrderDetail: { orderId: string };
};

export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  CreateTab: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "Home"
>;
export type OrderDetailScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  "OrderDetail"
>;
export type CreateScreenNavProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "CreateTab">,
  NativeStackNavigationProp<HomeStackParamList>
>;
