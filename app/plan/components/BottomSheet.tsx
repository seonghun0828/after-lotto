import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Dispatch, SetStateAction, useState } from 'react';
import { ICategory, IItem, TItems } from '../types/plan.types';
import { ITEMS } from '../const/item';
import { CATEGORIES } from '../const/category';

interface IBottomSheet {
  setSelectedItems: Dispatch<SetStateAction<IItem[]>>;
}

const BottomSheet = ({ setSelectedItems }: IBottomSheet) => {
  const [category, setCategory] = useState<ICategory>();
  const [isCategoryClick, setIsCategoryClick] = useState(false);

  const handleCategoryClick = (curCategory: ICategory) => {
    setCategory(curCategory);
    setIsCategoryClick(true);
  };

  const handleItemClick = (curItem: IItem) => {
    setSelectedItems((prev) => (prev ? [...prev, curItem] : [curItem]));
  };

  return (
    <div className='text-center mb-10'>
      <Sheet>
        <SheetTrigger className='w-[476px] h-[72px] rounded-2xl p-2 bg-gradient-to-r from-main-gradation-start to-main-gradation-end text-black font-bold'>
          아이템 담기
        </SheetTrigger>

        <SheetContent side='bottom' className='bg-black h-3/5'>
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

              <SheetDescription className='text-white'>
                <div className='flex flex-col items-center'>
                  {ITEMS[category?.value.replaceAll('-', '_').toUpperCase() as TItems].map(
                    (item) => (
                      <div
                        key={item.name}
                        className='w-full max-w-[520px] h-[92px] flex justify-between items-center border-b-2 border-light-gray text-small cursor-pointer'
                        onClick={() => handleItemClick(item)}
                      >
                        <div>{item?.name}</div>
                        <div>{item?.price.toLocaleString()}원</div>
                      </div>
                    ),
                  )}
                </div>
              </SheetDescription>
            </SheetHeader>
          ) : (
            <SheetHeader>
              <SheetTitle className='text-white text-left'>카테고리</SheetTitle>
              <SheetDescription className='text-white '>
                <div className='grid grid-cols-3 gap-8'>
                  {CATEGORIES.map((category) => (
                    <div
                      key={category.name}
                      className='flex flex-col items-center gap-2 max-w-36 p-4 cursor-pointer'
                      onClick={() => handleCategoryClick(category)}
                    >
                      <Image
                        src={`/images/plan/${category.value}.png`}
                        width={48}
                        height={48}
                        alt='code-computer'
                      />
                      <div className='text-small'>{category.name}</div>
                    </div>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BottomSheet;
