import { useItems } from '@/app/_hooks/useItems';

export const useTotalBudget = (firstWinamnt: number) => {
  const { getItems } = useItems();

  const items = getItems();

  const totalBudget = items.reduce((acc, item) => acc + item.price, 0);

  const remainingBudget = firstWinamnt - totalBudget;

  return { totalBudget, remainingBudget };
};
