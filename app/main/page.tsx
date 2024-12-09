'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLottoData } from '../_apis/get-lotto-data';
import { NavigationBar } from '@/components/ui/navigationBar';

const purchaseOptions = [
  '🏢 수도권 아파트 3채 구매 가능',
  '📈 엔비디아 주식 2만 개 구매 가능',
  '🪙 도지코인 6백만개 구매 가능',
  '🍗 치킨 600만 마리 구매 가능',
  '🍜 마라탕 40만명에게 쏘기 가능',
];

export default function Main() {
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const router = useRouter();

  const handlePlanClick = () => {
    router.push('/plan');
  };

// TODO
//   useEffect(() => {
//     const fetchLottoData = async () => {
//       try {
//         const data = await getLottoData(1);
//         const numbers = [
//           data.drwtNo1,
//           data.drwtNo2,
//           data.drwtNo3,
//           data.drwtNo4,
//           data.drwtNo5,
//           data.drwtNo6,
//         ];
//         setWinningNumbers(numbers);
//       } catch (error) {
//         console.error('로또 번호를 가져오는 중 오류 발생:', error);
//       }
//     };

//     fetchLottoData();
//   }, []);

  return (
    <div className="flex flex-col items-start px-[40px] pt-10 gap-4 text-white">
      <div className="flex items-center w-[520px] h-[67px] bg-gray rounded-3xl pl-4 self-center">
        <p className="text-2xl">
          <span className="text-[#FF7C78]">1등 </span>당첨! 축하드립니다 🎉
        </p>
      </div>

      <div>
        <p>당첨금액</p>
        <p className="text-5xl">1,422,132,976원</p>
      </div>

      <div>
        <p>이번주 당첨 번호</p>
        {/* TODO */}
      </div>
      <div>
        <p>내 번호</p>
        <p className="text-3xl">O O O O O</p>
      </div>

      <div className="flex flex-col w-[600px] gap-4 bg-gray rounded-3xl py-10 px-[40px] self-center">
        <p className="pb-4">당첨금으로 뭘 할 수 있을까?</p>
        {purchaseOptions.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div>

      <div className="w-full text-center">
        <p>나는 뭘 살 수 있을까?</p>
      </div>
      <button
        className="w-full h-[72px] font-semibold text-[24px] text-[#222222] rounded-[20px] bg-gradient-to-r from-[#FFAEAC] to-[#FF7C78]"
        type="button"
        onClick={handlePlanClick}
      >
        계획 세우러 가기
      </button>

        {/* Link TODO */}
      <div className="flex w-full gap-4 h-[72px] mt-4 mb-14">
        <button className="flex-1 border rounded-3xl text-xl" onClick={() => router.push('/')}>
          당첨 행동강령
        </button>
        <button className="flex-1 border rounded-3xl text-xl" onClick={() => router.push('/')}>
          당첨금 수령방법
        </button>
      </div>
        
    <NavigationBar />
    </div>
  );
}
