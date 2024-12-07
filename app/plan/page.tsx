'use client';

import Image from 'next/image';
import { ITEMS } from './const/item';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

const AMOUNT = 1422132976;

type TItem = 'CODE_COMPUTER' | 'BUILDING' | 'CAR' | 'SHOPPING' | 'AIRPLANE';

interface ICategory {
  name: string;
  value: string;
}

const CATEGORYS = [
  { name: '개발자', value: 'code-computer' },
  { name: '부동산', value: 'building' },
  { name: '자동차', value: 'car' },
  { name: '쇼핑', value: 'shopping' },
  { name: '뷰티미용', value: 'makeups' },
  { name: '여행숙박', value: 'airplane' },
];

const Plan = () => {
  const [category, setCategory] = useState<ICategory>();
  const [isCategoryClick, setIsCategoryClick] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCategoryClick = (curCategory: ICategory) => {
    setCategory(curCategory);
    setIsCategoryClick(true);
  };

  return (
    <div className='font-pretendard text-small'>
      <div className='p-8'>
        <div className='text-medium text-right'>공유하기</div>
        <div>
          <div>당첨금액</div>
          <div className='text-xlarge'>{AMOUNT.toLocaleString()}원</div>
        </div>
        <div>
          <div>프로그래스바</div>
          <div>계획 0원</div>
          <div>남은 예산 {AMOUNT.toLocaleString()}원</div>
        </div>
      </div>

      <div className='flex justify-center items-center h-[671px] mt-6 mb-14 bg-gray'>
        {selectedItems.length ? (
          <div>아이템 리스트</div>
        ) : (
          <div className='text-text-gray'>아이템을 추가해주세요!</div>
        )}
      </div>

      <div className='text-center mb-10'>
        <Sheet>
          <SheetTrigger className='w-[476px] h-[72px] rounded-2xl p-2 bg-gradient-to-r from-main-gradation-start to-main-gradation-end text-black font-bold'>
            아이템 담기
          </SheetTrigger>

          <SheetContent side='bottom' className='bg-black h-3/5'>
            {isCategoryClick ? (
              <SheetHeader>
                <SheetTitle className='flex flex-row align-center text-white gap-2'>
                  {/* TODO: image로 교체 */}
                  <div className='mr-4 cursor-pointer' onClick={() => setIsCategoryClick(false)}>
                    {'<'}
                  </div>{' '}
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
                    {ITEMS[category?.value.replaceAll('-', '_').toUpperCase() as TItem].map(
                      (subCategory) => (
                        <div
                          key={subCategory.name}
                          className='w-full max-w-[520px] h-[92px] flex justify-between items-center border-b-2 border-light-gray text-small cursor-pointer'
                        >
                          <div>{subCategory?.name}</div>
                          <div>{subCategory?.price.toLocaleString()}원</div>
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
                    {CATEGORYS.map((category) => (
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
      <div>네비게이션</div>
    </div>
  );
};

export default Plan;
