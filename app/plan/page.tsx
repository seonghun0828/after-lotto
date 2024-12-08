'use client';

import PriceInfo from './_components/PriceInfo';
import BottomSheet from './_components/BottomSheet';
import AddedItemList from './_components/AddedItemList';
import { IItem } from './_types/plan.types';
import { useState } from 'react';
import ShareButton from './_components/ShareButton';

const Plan = () => {
  const [, setSelectedItems] = useState<IItem[]>([]);

  return (
    <div className='font-pretendard text-small'>
      <div className='p-8'>
        <ShareButton />

        <PriceInfo />
      </div>

      <AddedItemList />

      <BottomSheet setSelectedItems={setSelectedItems} />

      <div>네비게이션</div>
    </div>
  );
};

export default Plan;
