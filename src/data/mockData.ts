import type { User, Restaurant, MenuItem, Topping, Extra, GroupOrder } from '@src/types';

export const USERS: User[] = [
  { id: '1', firstName: 'Demian', lastName: 'Ardus', nickname: 'Dem', role: 'standard' },
  { id: '2', firstName: 'Fabián', lastName: 'Kremer', nickname: 'Fava', role: 'standard' },
  { id: '3', firstName: 'Sebastián', lastName: 'Melgar', nickname: 'Seba', role: 'standard' },
  { id: '4', firstName: 'Damián', lastName: 'Jackson', nickname: 'Chipi', role: 'standard' },
  { id: '5', firstName: 'Nicolás', lastName: 'Luraschi', nickname: 'Lura', role: 'standard' },
  { id: '6', firstName: 'Agustín', lastName: 'Peluffo', nickname: 'Peluffo', role: 'standard' },
  { id: '7', firstName: 'Juan Manuel', lastName: 'Cámera', nickname: 'JM', role: 'standard' },
  { id: '8', firstName: 'Lucas', lastName: 'Bruzzone', nickname: 'Lucas', role: 'admin' },
  { id: '9', firstName: 'Lucía', lastName: 'Del Arco', nickname: 'Lu', role: 'standard' },
  { id: '10', firstName: 'Martín', lastName: 'Manitto', nickname: 'Manitto', role: 'standard' },
  { id: '11', firstName: 'Gonzalo', lastName: 'Sismondi', nickname: 'Sismo', role: 'standard' },
  { id: '12', firstName: 'Josefina', lastName: 'Suarez', nickname: 'Jose', role: 'standard' },
  { id: '13', firstName: 'Allison', lastName: 'Labadie', nickname: 'Alli', role: 'standard' },
  { id: '14', firstName: 'Enzo', lastName: 'Cozza', nickname: 'Enz', role: 'standard' },
  { id: '15', firstName: 'Lía', lastName: 'Malvárez', nickname: 'Li', role: 'standard' },
  { id: '16', firstName: 'Sebastián', lastName: 'Reolon', nickname: 'Sabas', role: 'standard' },
  { id: '17', firstName: 'Santiago', lastName: 'Hernández', nickname: 'Santi', role: 'standard' },
  { id: '18', firstName: 'Alexis', lastName: 'Friss', nickname: 'Alexis', role: 'standard' },
  { id: '19', firstName: 'Lorenzo', lastName: 'Motta', nickname: 'Loren', role: 'standard' },
  { id: '20', firstName: 'Federico', lastName: 'Dallo', nickname: 'Fede', role: 'standard' },
  { id: '21', firstName: 'Noel', lastName: 'Layerle', nickname: 'Noe', role: 'standard' },
  { id: '22', firstName: 'Ignacio', lastName: 'Gavilanes', nickname: 'Nacho', role: 'standard' },
  { id: '23', firstName: 'Bernardo', lastName: 'Bocking', nickname: 'Berni', role: 'standard' },
  { id: '24', firstName: 'Antonela', lastName: 'Falcón', nickname: 'Anto', role: 'standard' },
  { id: '25', firstName: 'María José', lastName: 'Marra', nickname: 'Majo M', role: 'standard' },
  { id: '26', firstName: 'Joaquín', lastName: 'Asís', nickname: 'Joaco', role: 'standard' },
  { id: '27', firstName: 'Mathias', lastName: 'Sellanes', nickname: 'Mathi', role: 'standard' },
  { id: '28', firstName: 'Nicolás', lastName: 'Barate', nickname: 'Nico', role: 'standard' },
  { id: '29', firstName: 'Valentina', lastName: 'Acuña', nickname: 'Vale', role: 'standard' },
  { id: '30', firstName: 'Agustina', lastName: 'Babic', nickname: 'Babi', role: 'standard' },
  { id: '31', firstName: 'Candelaria', lastName: 'López', nickname: 'Cande', role: 'standard' },
  { id: '32', firstName: 'Federico', lastName: 'Charbonnier', nickname: 'Colo', role: 'standard' },
  { id: '33', firstName: 'Romina', lastName: 'Piria', nickname: 'Romi', role: 'standard' },
  { id: '34', firstName: 'María Jesús', lastName: 'Echeguía', nickname: 'Maiu', role: 'standard' },
  { id: '35', firstName: 'Stefano', lastName: 'Gazzoti', nickname: 'Stefano', role: 'standard' },
  { id: '36', firstName: 'Federica', lastName: 'Mancebo', nickname: 'Fefa', role: 'standard' },
  { id: '37', firstName: 'Milena', lastName: 'Gimenez', nickname: 'Mile', role: 'standard' },
  { id: '38', firstName: 'Gastón', lastName: 'Cabana', nickname: 'Gas', role: 'standard' },
  { id: '39', firstName: 'Francisca', lastName: 'Rivas', nickname: 'Chita', role: 'standard' },
  { id: '40', firstName: 'Felipe', lastName: 'Lussich', nickname: 'Pipe', role: 'standard' },
  { id: '41', firstName: 'Alexandra', lastName: 'McCulloch', nickname: 'Ale', role: 'standard' },
  { id: '42', firstName: 'María José', lastName: 'Lorenzoni', nickname: 'Majo L', role: 'standard' },
  { id: '43', firstName: 'Sofía', lastName: 'Symonds', nickname: 'Sofi', role: 'standard' },
  { id: '44', firstName: 'Agustina', lastName: 'Suburú', nickname: 'Agus', role: 'standard' },
  { id: '45', firstName: 'Viviana', lastName: 'Wald', nickname: 'Vivi', role: 'standard' },
  { id: '46', firstName: 'Isabel', lastName: 'Muñoz', nickname: 'Isa', role: 'standard' },
  { id: '47', firstName: 'Victoria', lastName: 'Pizzorno', nickname: 'Vicky', role: 'standard' },
  { id: '48', firstName: 'Gonzalo', lastName: 'Fontes', nickname: 'Gonza', role: 'standard' },
  { id: '49', firstName: 'Claudio', lastName: 'Russi', nickname: 'Claudio', role: 'standard' },
  { id: '50', firstName: 'Belén', lastName: 'Castro', nickname: 'Belu', role: 'standard' },
  { id: '51', firstName: 'Facundo', lastName: 'Barla', nickname: 'Facu', role: 'standard' },
  { id: '52', firstName: 'Julieta', lastName: 'Bardecio', nickname: 'Juli', role: 'standard' },
  { id: '53', firstName: 'Guillermina', lastName: 'Lanza', nickname: 'Guille', role: 'standard' },
  { id: '54', firstName: 'Victoria', lastName: 'Rivao', nickname: 'Mavi', role: 'standard' },
  { id: '55', firstName: 'Josefina', lastName: 'Gonzalez', nickname: 'Jojo', role: 'standard' },
  { id: '56', firstName: 'Florencia', lastName: 'Barreto', nickname: 'Flor', role: 'standard' },
];

export const RESTAURANTS: Restaurant[] = [
  { id: '1', name: 'Rudy' },
  { id: '2', name: 'Ashot' },
  { id: '3', name: 'Bilas' },
  { id: '4', name: 'Kona Poke' },
  { id: '5', name: 'Tropical Smoothies' },
  { id: '6', name: 'Donut City' },
  { id: '7', name: 'Nomnom Bakery' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Rudy (id: '1')
  { id: '101', restaurantId: '1', name: 'Cheeseburger', price: 440 },
  { id: '102', restaurantId: '1', name: 'Bacon Cheeseburger', price: 480 },
  { id: '103', restaurantId: '1', name: 'Doble Cheeseburger', price: 590 },
  { id: '104', restaurantId: '1', name: 'Doble Bacon Cheeseburger', price: 640 },
  { id: '105', restaurantId: '1', name: 'Hamburger', price: 430 },
  { id: '106', restaurantId: '1', name: 'Doble Hamburger', price: 580 },
  { id: '107', restaurantId: '1', name: 'Veggie', price: 465 },
  // Ashot (id: '2')
  { id: '201', restaurantId: '2', name: 'Cerdo', price: 430 },
  { id: '202', restaurantId: '2', name: 'Pollo', price: 430 },
  { id: '203', restaurantId: '2', name: 'Falafel', price: 370 },
  // Kona Poke (id: '4')
  { id: '401', restaurantId: '4', name: 'Arma tu bowl', price: 468 },
  { id: '402', restaurantId: '4', name: 'Arma tu poke - Classic', price: 495 },
  { id: '403', restaurantId: '4', name: 'Arma tu poke - Proteico', price: 549 },
  // Tropical Smoothies (id: '5')
  { id: '501', restaurantId: '5', name: 'Rio Smooth', price: 359 },
  { id: '502', restaurantId: '5', name: 'Strawberry Fields', price: 306 },
  { id: '503', restaurantId: '5', name: 'Avocado Smoothie', price: 311 },
  { id: '504', restaurantId: '5', name: 'Banana Tropical', price: 282 },
  { id: '505', restaurantId: '5', name: 'Blue Lagoon', price: 323 },
  { id: '506', restaurantId: '5', name: 'Jamaica Mango', price: 330 },
  { id: '507', restaurantId: '5', name: 'Mango Mambo', price: 342 },
  { id: '508', restaurantId: '5', name: 'Mr. Kiwi', price: 311 },
  { id: '509', restaurantId: '5', name: 'Pitufo Berry', price: 311 },
  { id: '510', restaurantId: '5', name: 'Amazonas Açaí', price: 359 },
  { id: '511', restaurantId: '5', name: 'Green Smoothie', price: 299 },
  { id: '512', restaurantId: '5', name: 'Pura Vida', price: 210 },
  { id: '513', restaurantId: '5', name: 'Jugo de Naranja', price: 210 },
  { id: '514', restaurantId: '5', name: 'Jugo Mi Medicina', price: 258 },
  // Donut City (id: '6')
  { id: '601', restaurantId: '6', name: 'Box Donuts 2x2', price: 495 },
  { id: '602', restaurantId: '6', name: 'Box de 2 rosquillas', price: 225 },
  { id: '603', restaurantId: '6', name: 'Box Posta de donuts', price: 711 },
  { id: '604', restaurantId: '6', name: 'Lemon Pie', price: 171 },
  { id: '605', restaurantId: '6', name: 'Maracuyá', price: 180 },
  { id: '606', restaurantId: '6', name: 'Choco Dulce', price: 171 },
  { id: '607', restaurantId: '6', name: 'Boston Cream', price: 162 },
  { id: '608', restaurantId: '6', name: 'Pistacho Lover', price: 207 },
  { id: '609', restaurantId: '6', name: 'Dulce de leche', price: 171 },
  { id: '610', restaurantId: '6', name: 'Brownie', price: 198 },
  { id: '611', restaurantId: '6', name: 'Cookie NY Chocolate', price: 216 },
  { id: '612', restaurantId: '6', name: 'Coca-Cola 600ml', price: 135 },
  // Nomnom Bakery (id: '7')
  { id: '701', restaurantId: '7', name: 'Cookie ny oreo', price: 240 },
  { id: '702', restaurantId: '7', name: 'Cookie ny red velvet', price: 240 },
  { id: '703', restaurantId: '7', name: 'Cookie ny pistacho', price: 250 },
  { id: '704', restaurantId: '7', name: 'Carrot Cake', price: 310 },
  { id: '705', restaurantId: '7', name: 'Red Velvet', price: 310 },
  { id: '706', restaurantId: '7', name: 'Cheesecake frutos rojos', price: 310 },
  { id: '707', restaurantId: '7', name: 'Rogel', price: 285 },
  { id: '708', restaurantId: '7', name: 'Scon de queso', price: 130 },
  { id: '709', restaurantId: '7', name: 'Brownie sin gluten', price: 255 },
  { id: '710', restaurantId: '7', name: 'Espresso doble', price: 150 },
  { id: '711', restaurantId: '7', name: 'Latte macchiatto', price: 190 },
  { id: '712', restaurantId: '7', name: 'Limonada clásica', price: 200 },
];

export const TOPPINGS: Topping[] = [
  // Rudy - Cheeseburger (101)
  ...['Cebolla', 'Ketchup', 'Lechuga', 'Mayonesa', 'Mostaza', 'Pepinillos', 'Tomate', 'Sin toppings'].map(
    (name, index) => ({ id: `t101_${index}`, menuItemId: '101', name, price: 0 }),
  ),
  // Rudy - Bacon Cheeseburger (102)
  ...['Cebolla', 'Salsa Rudy', 'Sin toppings'].map(
    (name, index) => ({ id: `t102_${index}`, menuItemId: '102', name, price: 0 }),
  ),
  // Rudy - Doble Cheeseburger (103)
  ...['Cebolla', 'Ketchup', 'Lechuga', 'Mayonesa', 'Mostaza', 'Pepinillos', 'Tomate', 'Sin toppings'].map(
    (name, index) => ({ id: `t103_${index}`, menuItemId: '103', name, price: 0 }),
  ),
  // Rudy - Doble Bacon Cheeseburger (104)
  ...['Cebolla', 'Ketchup', 'Lechuga', 'Mayonesa', 'Mostaza', 'Pepinillos', 'Tomate', 'Sin toppings'].map(
    (name, index) => ({ id: `t104_${index}`, menuItemId: '104', name, price: 0 }),
  ),
  // Rudy - Hamburger (105)
  ...['Cebolla', 'Ketchup', 'Lechuga', 'Mayonesa', 'Mostaza', 'Pepinillos', 'Tomate', 'Sin toppings'].map(
    (name, index) => ({ id: `t105_${index}`, menuItemId: '105', name, price: 0 }),
  ),
  // Rudy - Doble Hamburger (106)
  ...['Cebolla', 'Ketchup', 'Lechuga', 'Mayonesa', 'Mostaza', 'Pepinillos', 'Tomate', 'Sin toppings'].map(
    (name, index) => ({ id: `t106_${index}`, menuItemId: '106', name, price: 0 }),
  ),
  // Rudy - Veggie (107)
  ...['Cebolla', 'Rucula', 'Alioli', 'Muzzarella', 'Palta', 'Tomate'].map(
    (name, index) => ({ id: `t107_${index}`, menuItemId: '107', name, price: 0 }),
  ),
  // Ashot - Cerdo (201)
  ...['Hummus', 'Tomate', 'Mayonesa', 'Repollo con zanahoria', 'Picante', 'Pepino', 'Cebolla', 'Salsa de tomate con curry', 'Yogurt', 'Salsa de sesamo thina', 'Papas pay'].map(
    (name, index) => ({ id: `t201_${index}`, menuItemId: '201', name, price: 0 }),
  ),
  // Ashot - Pollo (202)
  ...['Hummus', 'Tomate', 'Mayonesa', 'Repollo con zanahoria', 'Picante', 'Pepino', 'Cebolla', 'Salsa de tomate con curry', 'Yogurt', 'Salsa de sesamo thina', 'Papas pay'].map(
    (name, index) => ({ id: `t202_${index}`, menuItemId: '202', name, price: 0 }),
  ),
  // Ashot - Falafel (203)
  ...['Hummus', 'Tomate', 'Mayonesa', 'Repollo con zanahoria', 'Picante', 'Pepino', 'Cebolla', 'Salsa de tomate con curry', 'Yogurt', 'Salsa de sesamo thina', 'Papas pay'].map(
    (name, index) => ({ id: `t203_${index}`, menuItemId: '203', name, price: 0 }),
  ),
  // Kona Poke - Arma tu bowl (401) - no salmon
  ...['Arroz de sushi', 'Mix de verdes', 'Quinoa'].map((name, index) => ({ id: `t401b_${index}`, menuItemId: '401', name, price: 0 })),
  ...['Pollo', 'Tofu', 'Langostinos', 'Pollo crispy', 'Garbanzos', 'Tofu frito'].map((name, index) => ({ id: `t401p_${index}`, menuItemId: '401', name, price: 0 })),
  ...['Verdeo', 'Edamame', 'Palta', 'Cream cheese', 'Cherrys', 'Repollo colorado', 'Cebolla colorada', 'Ananá', 'Zanahoria', 'Pepino', 'Mango'].map((name, index) => ({ id: `t401t_${index}`, menuItemId: '401', name, price: 0 })),
  ...['Soja', 'Ponzu (soja cítrica)', 'Teriyaki', 'Mostaza y miel', 'Maracuyá', 'Spicy mayo', 'Salsa anguila', 'Sriracha', 'Sweet Wasabi'].map((name, index) => ({ id: `t401s_${index}`, menuItemId: '401', name, price: 0 })),
  ...['Cebolla crispy', 'Maíz crispy', 'Sésamo'].map((name, index) => ({ id: `t401c_${index}`, menuItemId: '401', name, price: 0 })),
  // Kona Poke - Classic (402)
  ...['Arroz de sushi', 'Mix de verdes', 'Quinoa'].map((name, index) => ({ id: `t402b_${index}`, menuItemId: '402', name, price: 0 })),
  ...['Salmón fresco', 'Pollo', 'Tofu', 'Langostinos', 'Pollo crispy', 'Garbanzos', 'Salmón crispy', 'Lango panko', 'Tofu frito'].map((name, index) => ({ id: `t402p_${index}`, menuItemId: '402', name, price: 0 })),
  ...['Verdeo', 'Edamame', 'Palta', 'Cream cheese', 'Cherrys', 'Repollo colorado', 'Cebolla colorada', 'Ananá', 'Zanahoria', 'Pepino', 'Mango'].map((name, index) => ({ id: `t402t_${index}`, menuItemId: '402', name, price: 0 })),
  ...['Soja', 'Ponzu (soja cítrica)', 'Teriyaki', 'Mostaza y miel', 'Maracuyá', 'Spicy mayo', 'Salsa anguila', 'Sriracha', 'Sweet Wasabi'].map((name, index) => ({ id: `t402s_${index}`, menuItemId: '402', name, price: 0 })),
  ...['Cebolla crispy', 'Maíz crispy', 'Sésamo'].map((name, index) => ({ id: `t402c_${index}`, menuItemId: '402', name, price: 0 })),
  // Kona Poke - Proteico (403)
  ...['Arroz de sushi', 'Mix de verdes', 'Quinoa'].map((name, index) => ({ id: `t403b_${index}`, menuItemId: '403', name, price: 0 })),
  ...['Salmón fresco', 'Pollo', 'Tofu', 'Langostinos', 'Pollo crispy', 'Garbanzos', 'Salmón crispy', 'Lango panko', 'Tofu frito'].map((name, index) => ({ id: `t403p_${index}`, menuItemId: '403', name, price: 0 })),
  ...['Verdeo', 'Edamame', 'Palta', 'Cream cheese', 'Cherrys', 'Repollo colorado', 'Cebolla colorada', 'Ananá', 'Zanahoria', 'Pepino', 'Mango'].map((name, index) => ({ id: `t403t_${index}`, menuItemId: '403', name, price: 0 })),
  ...['Soja', 'Ponzu (soja cítrica)', 'Teriyaki', 'Mostaza y miel', 'Maracuyá', 'Spicy mayo', 'Salsa anguila', 'Sriracha', 'Sweet Wasabi'].map((name, index) => ({ id: `t403s_${index}`, menuItemId: '403', name, price: 0 })),
  ...['Cebolla crispy', 'Maíz crispy', 'Sésamo'].map((name, index) => ({ id: `t403c_${index}`, menuItemId: '403', name, price: 0 })),
];

export const EXTRAS: Extra[] = [
  // Rudy extras (101-106)
  ...['101', '102', '103', '104', '105', '106'].flatMap(menuItemId =>
    [
      { name: 'Bacon', price: 60 },
      { name: 'Queso', price: 65 },
      { name: 'Papas', price: 170 },
      { name: 'Papas rusticas', price: 190 },
    ].map((extra, index) => ({ id: `e${menuItemId}_${index}`, menuItemId, ...extra })),
  ),
  // Rudy Veggie extras (107)
  ...([
    { name: 'Queso', price: 65 },
    { name: 'Veggie', price: 144 },
    { name: 'Papas', price: 170 },
    { name: 'Papas rusticas', price: 190 },
  ].map((extra, index) => ({ id: `e107_${index}`, menuItemId: '107', ...extra }))),
  // Ashot extras (201-203)
  ...['201', '202', '203'].map((menuItemId, index) => ({ id: `e${menuItemId}_0`, menuItemId, name: 'Papas', price: 0 })),
  // Kona extras (401-403)
  ...['401', '402', '403'].flatMap(menuItemId =>
    [
      { name: 'Palta', price: 63 },
      { name: 'Salmón', price: 63 },
      { name: 'Pollo', price: 54 },
      { name: 'Tofu', price: 54 },
      { name: 'Cebolla crispy', price: 45 },
      { name: 'Mango', price: 63 },
      { name: 'Cream cheese', price: 45 },
      { name: 'Camarones', price: 63 },
      { name: 'Maíz crispy', price: 45 },
      { name: 'Ananá', price: 54 },
    ].map((extra, index) => ({ id: `ek${menuItemId}_${index}`, menuItemId, ...extra })),
  ),
];

export const INITIAL_ORDERS: GroupOrder[] = [
  {
    id: '1',
    restaurantId: '4',
    restaurantName: 'Kona Poke',
    status: 'open',
    date: new Date(Date.now() + 90 * 60 * 1000).toISOString(),
    createdById: '8',
    creatorName: 'Lucas',
    percentageDiscount: 0,
    bankAccount: null,
    individualOrders: [
      {
        id: '1',
        userId: '8',
        userName: 'Lucas',
        menuItemId: '402',
        menuItemName: 'Arma tu poke - Classic',
        total: 558,
        paid: false,
        selectedToppingNames: ['Arroz de sushi', 'Salmón fresco', 'Palta', 'Soja'],
        selectedExtraNames: [],
      },
      {
        id: '2',
        userId: '11',
        userName: 'Sismo',
        menuItemId: '401',
        menuItemName: 'Arma tu bowl',
        total: 531,
        paid: false,
        selectedToppingNames: ['Quinoa', 'Pollo', 'Edamame', 'Teriyaki'],
        selectedExtraNames: ['Palta'],
      },
    ],
  },
  {
    id: '2',
    restaurantId: '1',
    restaurantName: 'Rudy',
    status: 'closed',
    date: new Date(Date.now() + 25 * 60 * 1000).toISOString(),
    createdById: '3',
    creatorName: 'Seba',
    percentageDiscount: 0,
    bankAccount: null,
    individualOrders: [
      {
        id: '3',
        userId: '3',
        userName: 'Seba',
        menuItemId: '103',
        menuItemName: 'Doble Cheeseburger',
        total: 760,
        paid: false,
        selectedToppingNames: ['Cebolla', 'Ketchup', 'Lechuga'],
        selectedExtraNames: ['Papas'],
      },
      {
        id: '4',
        userId: '26',
        userName: 'Joaco',
        menuItemId: '101',
        menuItemName: 'Cheeseburger',
        total: 610,
        paid: false,
        selectedToppingNames: ['Tomate', 'Mayonesa'],
        selectedExtraNames: ['Papas rusticas'],
      },
      {
        id: '5',
        userId: '17',
        userName: 'Santi',
        menuItemId: '107',
        menuItemName: 'Veggie',
        total: 635,
        paid: false,
        selectedToppingNames: ['Palta', 'Tomate', 'Rucula'],
        selectedExtraNames: ['Papas'],
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
