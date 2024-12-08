import { useItems } from '@/app/_hooks/useItems';

export const useBudget = (firstWinamnt: number) => {
  const { getItems } = useItems();

  const items = getItems();

  const totalBudget = items.reduce((acc, item) => acc + item.price, 0);

  const remainingBudget = firstWinamnt - totalBudget;

  const progress = (totalBudget / firstWinamnt) * 100;

  return { totalBudget, remainingBudget, progress };
};
