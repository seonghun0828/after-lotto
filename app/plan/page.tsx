'use client';

import PriceInfo from './_components/PriceInfo';
import BottomSheet from './_components/BottomSheet';
import AddedItemList from './_components/AddedItemList';
import { Suspense } from 'react';
import ShareButton from './_components/ShareButton';

const Plan = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='font-pretendard text-small'>
        <div className='p-8'>
          <ShareButton />
          <PriceInfo />
        </div>

        <AddedItemList />

        <BottomSheet />
      </div>
    </Suspense>
  );
};

export default Plan;
