import { createContext, useContext, useState } from "react";

import type { GroupOrder, IndividualOrder } from "@src/types";
import {
  INITIAL_ORDERS,
  RESTAURANTS,
  getMenuItemById,
  getToppingsByMenuItemId,
  getExtrasByMenuItemId,
} from "@src/data/mockData";
import { useUser } from "@src/context/UserContext";

interface OrdersContextValue {
  orders: GroupOrder[];
  createOrder: (restaurantId: string) => string;
  joinOrder: (
    groupOrderId: string,
    menuItemId: string,
    selectedToppingIds: string[],
    selectedExtraIds: string[],
  ) => void;
}

const OrdersContext = createContext<OrdersContextValue>({
  orders: [],
  createOrder: () => "",
  joinOrder: () => {},
});

export const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<GroupOrder[]>(INITIAL_ORDERS);
  const { currentUser } = useUser();

  const createOrder = (restaurantId: string): string => {
    const restaurant = RESTAURANTS.find(({ id }) => id === restaurantId);

    if (!restaurant || !currentUser) return "";

    const newOrder: GroupOrder = {
      id: String(Date.now()),
      restaurantId,
      restaurantName: restaurant.name,
      status: "open",
      date: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      createdById: currentUser.id,
      creatorName: currentUser.nickname,
      percentageDiscount: 0,
      bankAccount: null,
      individualOrders: [],
    };

    setOrders((previous) => [newOrder, ...previous]);

    return newOrder.id;
  };

  const joinOrder = (
    groupOrderId: string,
    menuItemId: string,
    selectedToppingIds: string[],
    selectedExtraIds: string[],
  ) => {
    if (!currentUser) return;

    const menuItem = getMenuItemById(menuItemId);

    if (!menuItem) return;

    const allToppings = getToppingsByMenuItemId(menuItemId);
    const allExtras = getExtrasByMenuItemId(menuItemId);

    const selectedToppings = allToppings.filter((topping) =>
      selectedToppingIds.includes(topping.id),
    );
    const selectedExtras = allExtras.filter((extra) =>
      selectedExtraIds.includes(extra.id),
    );

    const total =
      menuItem.price +
      selectedToppings.reduce((sum, topping) => sum + topping.price, 0) +
      selectedExtras.reduce((sum, extra) => sum + extra.price, 0);

    const newIndividualOrder: IndividualOrder = {
      id: String(Date.now()),
      userId: currentUser.id,
      userName: currentUser.nickname,
      menuItemId,
      menuItemName: menuItem.name,
      total,
      paid: false,
      selectedToppingNames: selectedToppings.map(({ name }) => name),
      selectedExtraNames: selectedExtras.map(({ name }) => name),
    };

    setOrders((previous) =>
      previous.map((order) => {
        if (order.id !== groupOrderId) return order;

        return {
          ...order,
          individualOrders: [...order.individualOrders, newIndividualOrder],
        };
      }),
    );
  };

  return (
    <OrdersContext.Provider value={{ orders, createOrder, joinOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
