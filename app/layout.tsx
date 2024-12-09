import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import { getLottoData } from './_apis/get-lotto-data';
import LottoProvider from './_contexts/LottoProvider';
import { getCurrentLottoRound } from './_utils/get-current-lotto-round';
import './globals.css';

const pretendard = localFont({
  src: './_fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'After Lotto',
  description: '로또, 그 이후를 위한 나만의 플랜',
  openGraph: {
    title: 'After Lotto',
    description: '로또, 그 이후를 위한 나만의 플랜',
    images: 'https://after-lotto.vercel.app/opengraph-image.png',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getLottoData(getCurrentLottoRound());

  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className='flex justify-center text-white'>
        <LottoProvider initialData={data}>
          <div className='min-h-screen w-full max-w-[600px] bg-black'>{children}</div>
        </LottoProvider>
      </body>
    </html>
  );
}
