import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/app/_components/ui/sheet';
import { Dispatch, SetStateAction, useState } from 'react';
import { ICategory, IItem, TItems } from '../_types/plan.types';
import { ITEMS } from '../_const/item';
import { CATEGORIES } from '../_const/category';

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
                  {ITEMS[category?.value.replaceAll('-', '_').toUpperCase() as TItems].map(
                    (item) => (
                      <span
                        key={item.name}
                        className='w-full max-w-[520px] h-[92px] flex justify-between items-center border-b-2 border-light-gray text-small cursor-pointer'
                        onClick={() => handleItemClick(item)}
                      >
                        <span>{item?.name}</span>
                        <span>{item?.price.toLocaleString()}원</span>
                      </span>
                    ),
                  )}
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
