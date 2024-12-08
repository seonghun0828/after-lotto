import { IItem } from '../_types/plan.types';

interface IAddedItemList {
  selectedItems: IItem[];
}

const AddedItemList = ({ selectedItems }: IAddedItemList) => {
  return (
    <div className='flex justify-center items-center h-[671px] mt-6 mb-14 bg-gray'>
      {selectedItems.length ? (
        <div>아이템 리스트</div>
      ) : (
        <div className='text-text-gray'>아이템을 추가해주세요!</div>
      )}
    </div>
  );
};

export default AddedItemList;
