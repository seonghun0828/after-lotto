import { Metadata } from 'next';
import './globals.css';
import { getLottoData } from './_apis/get-lotto-data';
import LottoProvider from './_contexts/LottoProvider';
import { getCurrentLottoRound } from './_utils/get-current-lotto-round';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getLottoData(getCurrentLottoRound());

  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className='w-screen flex justify-center text-white'>
        <LottoProvider initialData={data}>
          <div className='min-h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
        </LottoProvider>
      </body>
    </html>
  );
}
