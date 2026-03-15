import { useState } from "react";

import type { MenuItem, Topping, Extra } from "@src/types";

interface UseJoinOrderProps {
  menuItems: MenuItem[];
  getToppings: (menuItemId: string) => Topping[];
  getExtras: (menuItemId: string) => Extra[];
  onConfirm: (
    menuItemId: string,
    toppingIds: string[],
    extraIds: string[],
  ) => void;
  onClose: () => void;
}

const sumPrice = (sum: number, item: { price: number }) => sum + item.price;

export const useJoinOrder = ({
  menuItems,
  getToppings,
  getExtras,
  onConfirm,
  onClose,
}: UseJoinOrderProps) => {
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<string | null>(
    null,
  );
  const [selectedToppingIds, setSelectedToppingIds] = useState<string[]>([]);
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([]);

  const selectedItem = menuItems.find(({ id }) => id === selectedMenuItemId);
  const toppings = selectedMenuItemId ? getToppings(selectedMenuItemId) : [];
  const extras = selectedMenuItemId ? getExtras(selectedMenuItemId) : [];

  let total = 0;

  if (selectedItem) {
    total =
      selectedItem.price +
      toppings
        .filter(({ id }) => selectedToppingIds.includes(id))
        .reduce(sumPrice, 0) +
      extras
        .filter(({ id }) => selectedExtraIds.includes(id))
        .reduce(sumPrice, 0);
  }

  const resetSelection = () => {
    setSelectedMenuItemId(null);
    setSelectedToppingIds([]);
    setSelectedExtraIds([]);
  };

  const handleSelectMenuItem = (menuItemId: string) => {
    setSelectedMenuItemId(menuItemId);
    setSelectedToppingIds([]);
    setSelectedExtraIds([]);
  };

  const toggleTopping = (toppingId: string) =>
    setSelectedToppingIds((currentIds) =>
      currentIds.includes(toppingId)
        ? currentIds.filter((existingId) => existingId !== toppingId)
        : [...currentIds, toppingId],
    );

  const toggleExtra = (extraId: string) =>
    setSelectedExtraIds((currentIds) =>
      currentIds.includes(extraId)
        ? currentIds.filter((existingId) => existingId !== extraId)
        : [...currentIds, extraId],
    );

  const handleConfirm = () => {
    if (!selectedMenuItemId) return;
    onConfirm(selectedMenuItemId, selectedToppingIds, selectedExtraIds);
    resetSelection();
  };

  const handleClose = () => {
    resetSelection();
    onClose();
  };

  return {
    selectedMenuItemId,
    selectedToppingIds,
    selectedExtraIds,
    selectedItem,
    toppings,
    extras,
    total,
    handleSelectMenuItem,
    toggleTopping,
    toggleExtra,
    handleConfirm,
    handleClose,
  };
};
