# Secom RN

App móvil para gestión de pedidos grupales de comida del equipo. Permite crear pedidos por restaurante, sumarse con tu plato y seguir el estado en tiempo real.

## Stack

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) — bottom tabs + stack navigator
- TypeScript

## Requisitos

- Node.js 18+
- [Expo Go](https://expo.dev/go) instalado en el celular

## Instalación

```bash
npm install
npx expo start
```

Escanear el QR con Expo Go.

## Pantallas

| Pantalla | Descripción |
|---|---|
| **HomeScreen** | Lista de pedidos activos con status, participantes y total |
| **OrderDetailScreen** | Detalle del pedido, lista de participantes y botón de join |
| **CreateOrderScreen** | Grilla de restaurantes para crear un nuevo pedido grupal |

## Flujo principal

1. Al abrir la app → modal para elegir tu usuario (sin auth real)
2. **Home**: ves los pedidos activos
3. **Detalle**: ves quién pidió qué y podés sumarte si el pedido está abierto
4. **Nuevo**: elegís restaurante → se crea el pedido → te lleva al detalle
5. **Join**: elegís plato + toppings/extras → el total se calcula en tiempo real

## Arquitectura

```
src/
├── theme/
│   ├── colors.ts           paleta dark (navy + amber)
│   ├── tokens.ts           spacing, radius, shadow
│   ├── typography.ts       estilos de texto reutilizables
│   └── common.ts           StyleSheet compartido (screen, card, btn, layout)
├── types.ts                interfaces TypeScript + constantes de dominio
├── utils/
│   ├── format.ts           formatCurrency, getTimeUntil
│   └── styles.ts           utilidad cx() para combinar estilos
├── data/mockData.ts        usuarios, restaurantes, menús, pedidos mock
├── hooks/
│   └── useUserSelector.ts  lógica del modal de selección de usuario
├── context/
│   ├── UserContext.tsx     usuario actual + visibilidad del selector
│   └── OrdersContext.tsx   pedidos + createOrder / joinOrder
├── navigation/
│   ├── types.ts
│   ├── RootNavigator.tsx
│   └── TabNavigator.tsx    bottom tabs + home stack
├── components/
│   ├── PressableOpacity    wrapper de Pressable con opacity feedback
│   ├── SectionLabel        label de sección en uppercase
│   ├── StatusBadge         open / closed / ordered / delivered
│   ├── MetaRow             fila de metadatos con íconos
│   ├── EmptyState
│   ├── OrderCard           card con acento de color por status
│   ├── UserSelectorModal   lista de usuarios con búsqueda
│   │   ├── UserRow
│   │   └── AvatarChip
│   └── JoinOrderModal      plato + toppings + total en vivo
│       ├── MenuItemRow
│       ├── OptionChip
│       └── useJoinOrder.ts
└── screens/
    ├── HomeScreen
    │   └── UserChip        chip del usuario activo en el header
    ├── OrderDetailScreen
    │   └── ParticipantRow  fila de participante con plato y total
    └── CreateOrderScreen
        └── RestaurantCard  card seleccionable de restaurante
```

