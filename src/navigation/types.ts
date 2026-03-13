import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
  OrderDetail: { orderId: string };
};

export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  CreateTab: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
export type OrderDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'OrderDetail'>;
