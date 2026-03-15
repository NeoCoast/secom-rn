export interface User {
  id: string;
  firstName: string;
  lastName: string;
  nickname: string;
  role: "standard" | "admin";
}

export type OrderStatus = "open" | "closed" | "ordered" | "delivered";

export const ACTIVE_STATUSES: OrderStatus[] = ["open", "closed", "ordered"];

export interface Restaurant {
  id: string;
  name: string;
}

export interface Topping {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
}

export interface Extra {
  id: string;
  menuItemId: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
}

export interface IndividualOrder {
  id: string;
  userId: string;
  userName: string;
  menuItemId: string;
  menuItemName: string;
  total: number;
  paid: boolean;
  selectedToppingNames: string[];
  selectedExtraNames: string[];
}

export interface GroupOrder {
  id: string;
  restaurantId: string;
  restaurantName: string;
  status: OrderStatus;
  date: string;
  createdById: string;
  creatorName: string;
  percentageDiscount: number;
  bankAccount: string | null;
  individualOrders: IndividualOrder[];
}
