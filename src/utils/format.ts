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
