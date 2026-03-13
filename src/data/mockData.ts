import type { User, Restaurant, MenuItem, Topping, Extra, GroupOrder } from '@src/types';

export const USERS: User[] = [
  { id: '1', firstName: 'Lucas', lastName: 'Bruzzone', nickname: 'lucas', role: 'admin' },
  { id: '2', firstName: 'Sofía', lastName: 'García', nickname: 'sofi', role: 'standard' },
  { id: '3', firstName: 'Mateo', lastName: 'López', nickname: 'mateo', role: 'standard' },
  { id: '4', firstName: 'Valentina', lastName: 'Martínez', nickname: 'valen', role: 'standard' },
  { id: '5', firstName: 'Santiago', lastName: 'Rodríguez', nickname: 'santi', role: 'standard' },
  { id: '6', firstName: 'Camila', lastName: 'Fernández', nickname: 'cami', role: 'standard' },
  { id: '7', firstName: 'Joaquín', lastName: 'González', nickname: 'joaco', role: 'standard' },
  { id: '8', firstName: 'Isabella', lastName: 'Díaz', nickname: 'isa', role: 'standard' },
  { id: '9', firstName: 'Sebastián', lastName: 'Pérez', nickname: 'sebi', role: 'standard' },
  { id: '10', firstName: 'Martina', lastName: 'Sánchez', nickname: 'marti', role: 'standard' },
  { id: '11', firstName: 'Federico', lastName: 'Torres', nickname: 'fede', role: 'standard' },
  { id: '12', firstName: 'Lucía', lastName: 'Reyes', nickname: 'luci', role: 'standard' },
];

export const RESTAURANTS: Restaurant[] = [
  { id: '1', name: 'Ashot' },
  { id: '2', name: 'Bilas' },
  { id: '3', name: 'Donut City' },
  { id: '4', name: 'Kona Poke' },
  { id: '5', name: 'Nomnom Bakery' },
  { id: '6', name: 'Rudy' },
  { id: '7', name: 'Tropical Smoothies' },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', restaurantId: '4', name: 'Poke Bowl Regular', price: 1200 },
  { id: '2', restaurantId: '4', name: 'Poke Bowl Grande', price: 1500 },
  { id: '3', restaurantId: '4', name: 'Poke Bowl Small', price: 950 },
  { id: '4', restaurantId: '5', name: 'Sándwich de Pollo', price: 850 },
  { id: '5', restaurantId: '5', name: 'Tostado Mixto', price: 650 },
  { id: '6', restaurantId: '5', name: 'Croissant + Café', price: 580 },
  { id: '7', restaurantId: '5', name: 'Ensalada César', price: 780 },
  { id: '8', restaurantId: '6', name: 'Hamburguesa Clásica', price: 1100 },
  { id: '9', restaurantId: '6', name: 'Hamburguesa Doble', price: 1400 },
  { id: '10', restaurantId: '6', name: 'Wraps de Pollo', price: 950 },
  { id: '11', restaurantId: '6', name: 'Papas Fritas', price: 450 },
  { id: '12', restaurantId: '3', name: 'Combo 3 Donuts', price: 650 },
  { id: '13', restaurantId: '3', name: 'Combo 6 Donuts', price: 1200 },
  { id: '14', restaurantId: '3', name: 'Donut Clásica', price: 220 },
  { id: '15', restaurantId: '7', name: 'Smoothie Regular', price: 650 },
  { id: '16', restaurantId: '7', name: 'Smoothie Grande', price: 850 },
  { id: '17', restaurantId: '7', name: 'Acai Bowl', price: 1100 },
  { id: '18', restaurantId: '1', name: 'Almuerzo del Día', price: 1200 },
  { id: '19', restaurantId: '1', name: 'Wrap Vegetariano', price: 950 },
  { id: '20', restaurantId: '2', name: 'Milanesa Completa', price: 1100 },
  { id: '21', restaurantId: '2', name: 'Suprema Napolitana', price: 1250 },
];

export const TOPPINGS: Topping[] = [
  { id: '1', menuItemId: '1', name: 'Salmón', price: 250 },
  { id: '2', menuItemId: '1', name: 'Atún', price: 250 },
  { id: '3', menuItemId: '1', name: 'Langostinos', price: 350 },
  { id: '4', menuItemId: '1', name: 'Pollo Teriyaki', price: 200 },
  { id: '5', menuItemId: '1', name: 'Palta', price: 150 },
  { id: '6', menuItemId: '1', name: 'Mango', price: 150 },
  { id: '7', menuItemId: '1', name: 'Pepino', price: 100 },
  { id: '8', menuItemId: '1', name: 'Alga Wakame', price: 100 },
  { id: '9', menuItemId: '2', name: 'Salmón', price: 300 },
  { id: '10', menuItemId: '2', name: 'Atún', price: 300 },
  { id: '11', menuItemId: '2', name: 'Langostinos', price: 400 },
  { id: '12', menuItemId: '2', name: 'Palta', price: 150 },
  { id: '13', menuItemId: '2', name: 'Mango', price: 150 },
  { id: '14', menuItemId: '2', name: 'Alga Wakame', price: 100 },
];

export const EXTRAS: Extra[] = [
  { id: '1', menuItemId: '1', name: 'Extra Arroz', price: 100 },
  { id: '2', menuItemId: '1', name: 'Salsa Soja Extra', price: 80 },
  { id: '3', menuItemId: '1', name: 'Sriracha', price: 80 },
  { id: '4', menuItemId: '2', name: 'Extra Arroz', price: 100 },
  { id: '5', menuItemId: '2', name: 'Salsa Soja Extra', price: 80 },
];

export const INITIAL_ORDERS: GroupOrder[] = [
  {
    id: '1',
    restaurantId: '4',
    restaurantName: 'Kona Poke',
    status: 'open',
    date: new Date(Date.now() + 90 * 60 * 1000).toISOString(),
    createdById: '1',
    creatorName: 'lucas',
    percentageDiscount: 0,
    bankAccount: null,
    individualOrders: [
      {
        id: '1',
        userId: '1',
        userName: 'lucas',
        menuItemId: '1',
        menuItemName: 'Poke Bowl Regular',
        total: 1600,
        paid: false,
        selectedToppingNames: ['Salmón', 'Palta'],
        selectedExtraNames: [],
      },
      {
        id: '2',
        userId: '2',
        userName: 'sofi',
        menuItemId: '2',
        menuItemName: 'Poke Bowl Grande',
        total: 1950,
        paid: false,
        selectedToppingNames: ['Atún', 'Mango'],
        selectedExtraNames: ['Sriracha'],
      },
      {
        id: '3',
        userId: '3',
        userName: 'mateo',
        menuItemId: '3',
        menuItemName: 'Poke Bowl Small',
        total: 950,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
    ],
  },
  {
    id: '2',
    restaurantId: '6',
    restaurantName: 'Rudy',
    status: 'closed',
    date: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    createdById: '4',
    creatorName: 'valen',
    percentageDiscount: 0,
    bankAccount: null,
    individualOrders: [
      {
        id: '4',
        userId: '4',
        userName: 'valen',
        menuItemId: '8',
        menuItemName: 'Hamburguesa Clásica',
        total: 1100,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
      {
        id: '5',
        userId: '5',
        userName: 'santi',
        menuItemId: '9',
        menuItemName: 'Hamburguesa Doble',
        total: 1400,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
      {
        id: '6',
        userId: '6',
        userName: 'cami',
        menuItemId: '10',
        menuItemName: 'Wraps de Pollo',
        total: 950,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
      {
        id: '7',
        userId: '7',
        userName: 'joaco',
        menuItemId: '8',
        menuItemName: 'Hamburguesa Clásica + Papas',
        total: 1550,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: ['Papas Fritas'],
      },
    ],
  },
  {
    id: '3',
    restaurantId: '3',
    restaurantName: 'Donut City',
    status: 'ordered',
    date: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    createdById: '8',
    creatorName: 'isa',
    percentageDiscount: 0,
    bankAccount: null,
    individualOrders: [
      {
        id: '8',
        userId: '8',
        userName: 'isa',
        menuItemId: '13',
        menuItemName: 'Combo 6 Donuts',
        total: 1200,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
      {
        id: '9',
        userId: '9',
        userName: 'sebi',
        menuItemId: '12',
        menuItemName: 'Combo 3 Donuts',
        total: 650,
        paid: false,
        selectedToppingNames: [],
        selectedExtraNames: [],
      },
    ],
  },
];

export const getMenuItemsByRestaurantId = (restaurantId: string) =>
  MENU_ITEMS.filter(menuItem => menuItem.restaurantId === restaurantId);

export const getMenuItemById = (id: string) =>
  MENU_ITEMS.find(menuItem => menuItem.id === id);

export const getToppingsByMenuItemId = (menuItemId: string) =>
  TOPPINGS.filter(topping => topping.menuItemId === menuItemId);

export const getExtrasByMenuItemId = (menuItemId: string) =>
  EXTRAS.filter(extra => extra.menuItemId === menuItemId);

export const formatCurrency = (amount: number) =>
  `$${amount.toLocaleString('es-AR')}`;

export const getTimeUntil = (dateString: string) => {
  const diffMs = new Date(dateString).getTime() - Date.now();
  const minutes = Math.round(diffMs / 60000);

  if (minutes < 0) return 'ya pasó';
  if (minutes < 60) return `en ${minutes} min`;

  const hours = Math.round(minutes / 60);

  return `en ${hours}h`;
};
