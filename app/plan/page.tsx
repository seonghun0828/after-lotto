'use client';

import PriceInfo from './components/PriceInfo';
import BottomSheet from './components/BottomSheet';
import AddedItemList from './components/AddedItemList';
import { IItem } from './types/plan.types';
import { useState } from 'react';

const Plan = () => {
  const [selectedItems, setSelectedItems] = useState<IItem[]>([]);

  return (
    <div className='font-pretendard text-small'>
      <div className='p-8'>
        <div className='text-medium text-right'>공유하기</div>

        <PriceInfo />
      </div>

      <AddedItemList selectedItems={selectedItems} />

      <BottomSheet setSelectedItems={setSelectedItems} />

      <div>네비게이션</div>
    </div>
  );
};

export default Plan;
