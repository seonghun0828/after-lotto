import { ITEMS } from '../const/items.const';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IItem } from '../const/items.const';

export const useItems = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const itemIds: number[] = params.get('items')?.split(',').map(Number) ?? [];

  const getItems = () => {
    return ITEMS.filter(({ id }) => itemIds.includes(id));
  };

  const addItem = (item: IItem) => {
    if (itemIds.includes(item.id)) return;

    const newItems = [...itemIds, item.id];
    params.set('items', newItems.join(','));
    const newParams = params.get('items');
    router.push(`${pathname}?items=${newParams}`);
  };

  const removeItem = (item: IItem) => {
    if (!itemIds.includes(item.id)) return;

    const removedItems = itemIds.filter((id) => id !== item.id);
    params.set('items', removedItems.join(','));
    const newParams = params.get('items');
    // 라우터 푸시할 때 스크롤 유지
    router.push(`${pathname}?items=${newParams}`, { scroll: false });

    // 마지막 아이템 삭제 시 url에서 쿼리 삭제
    if (removedItems.length === 0) {
      router.push(pathname);
    }
  };

  return { addItem, removeItem, getItems };
};
