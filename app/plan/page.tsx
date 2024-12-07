'use client';

import { ITEMS } from './const/item';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const AMOUNT = 1422132976;

const Plan = () => {
  const handlePutItem = () => {
    console.log('bottom-sheet');
  };

  return (
    <div className='text-small'>
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
        {ITEMS.length ? (
          <div>아이템 리스트</div>
        ) : (
          <div className='text-text-gray'>아이템을 추가해주세요!</div>
        )}
      </div>

      <div className='text-center mb-10'>
        <Sheet>
          <SheetTrigger
            className='w-[476px] h-[72px] rounded-2xl p-2 bg-gradient-to-r from-main-gradation-start to-main-gradation-end text-black font-bold'
            onClick={handlePutItem}
          >
            아이템 담기
          </SheetTrigger>

          <SheetContent side='bottom'>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div>네비게이션</div>
    </div>
  );
};

export default Plan;
