'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { LottoType } from '../landing/types';

interface LottoProviderProps {
  initialData: LottoType;
  children: ReactNode;
}

interface LottoContextType {
  lottoData: LottoType | null;
  setLottoData: (data: LottoType | null) => void;
}

const LottoContext = createContext<LottoContextType | undefined>(undefined);

export default function LottoProvider({ children, initialData }: LottoProviderProps) {
  const [lottoData, setLottoData] = useState<LottoType | null>(initialData);

  return (
    <LottoContext.Provider value={{ lottoData, setLottoData }}>{children}</LottoContext.Provider>
  );
}

export const useLottoContext = (): LottoContextType => {
  const context = useContext(LottoContext);
  if (!context) throw new Error('복권 정보를 불러오지 못했습니다.');
  return context;
};
