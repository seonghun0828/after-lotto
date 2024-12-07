import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet';
import { useState } from 'react';
import { ICategory } from '../_types/plan.types';
import { CATEGORIES } from '../_const/category';
import { useItems } from '@/app/_hooks/useItems';
import { IItem, ITEMS } from '@/app/const/items.const';

const PLAN_TO_COMMON_TEMP: Record<string, string> = {
  'code-computer': 'developer',
  building: 'real-estate',
  car: 'car',
  shopping: 'shopping',
  makeups: 'beauty',
  airplane: 'travel',
};

const BottomSheet = () => {
  const [category, setCategory] = useState<ICategory>(); //대분류 리스트
  const [items, setItems] = useState<IItem[]>([]); //소분류 리스트
  const [isCategoryClick, setIsCategoryClick] = useState(false);

  const { addItem } = useItems();

  const handleCategoryClick = (curCategory: ICategory) => {
    setCategory(curCategory);
    setIsCategoryClick(true);

    getItemsByCategory(PLAN_TO_COMMON_TEMP[curCategory.value]);
  };

  const handleItemClick = (curItem: IItem) => {
    addItem(curItem);
  };

  const getItemsByCategory = (category: string) => {
    const items = ITEMS.filter((item) => item.category === category);
    setItems(items);
  };

  return (
    <div className='text-center mb-10'>
      <Sheet>
        <SheetTrigger className='w-[476px] h-[72px] rounded-2xl p-2 bg-gradient-to-r from-main-gradation-start to-main-gradation-end text-black font-bold'>
          아이템 담기
        </SheetTrigger>

        <SheetContent side='bottom' className='bg-black h-3/5 max-w-[600px] mx-auto'>
          {isCategoryClick ? (
            <SheetHeader>
              <SheetTitle className='flex flex-row align-center text-white gap-2'>
                <Image
                  className='cursor-pointer'
                  src={`/images/plan/arrow-left.png`}
                  width={28}
                  height={28}
                  alt='arrow-left'
                  onClick={() => setIsCategoryClick(false)}
                />
                <Image
                  src={`/images/plan/${category?.value}.png`}
                  width={28}
                  height={28}
                  alt='code-computer'
                />
                <div>{category?.name}</div>
              </SheetTitle>

              <SheetDescription className='text-white min-h-[500px] max-h-[50vh] overflow-y-auto custom-scrollbar'>
                <span className='flex flex-col items-center'>
                  {items.map((item) => (
                    <span
                      key={item.id}
                      className='w-full max-w-[520px] h-[92px] flex justify-between items-center border-b-2 border-light-gray text-small cursor-pointer'
                      onClick={() => handleItemClick(item)}
                    >
                      <span>{item?.name}</span>
                      <span>{item?.price.toLocaleString()}원</span>
                    </span>
                  ))}
                </span>
              </SheetDescription>
            </SheetHeader>
          ) : (
            <SheetHeader>
              <SheetTitle className='text-white text-left'>카테고리</SheetTitle>
              <SheetDescription className='text-white'>
                <span className='grid grid-cols-3 gap-8 justify-items-center'>
                  {CATEGORIES.map((category) => (
                    <span
                      key={category.name}
                      className='flex flex-col items-center gap-2 w-full max-w-36 p-4 cursor-pointer'
                      onClick={() => handleCategoryClick(category)}
                    >
                      <Image
                        src={`/images/plan/${category.value}.png`}
                        width={48}
                        height={48}
                        alt='code-computer'
                      />
                      <span className='text-small'>{category.name}</span>
                    </span>
                  ))}
                </span>
              </SheetDescription>
            </SheetHeader>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomSheet;
