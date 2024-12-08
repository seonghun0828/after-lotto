import Image from 'next/image';
import { useMoveToReport } from '../_hooks/useMoveToReport';

const ShareButton = () => {
  const { handleShareClick } = useMoveToReport();

  return (
    <div className='flex justify-end items-center gap-2' onClick={handleShareClick}>
      <div className='text-medium text-right'>공유하기</div>

      <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center'>
        <Image src='/images/plan/share.png' width={24} height={24} alt='share icon' />
      </div>
    </div>
  );
};

export default ShareButton;
