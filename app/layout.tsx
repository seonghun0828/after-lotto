import { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import { getLottoData } from './_apis/get-lotto-data';
import LottoProvider from './_contexts/LottoProvider';
import { getCurrentLottoRound } from './_utils/get-current-lotto-round';
import './globals.css';
import Script from 'next/script';

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
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer,drawing`}
          strategy='beforeInteractive'
        />
      </head>
      <body className='flex w-screen justify-center text-white'>
        <Suspense>
          <LottoProvider initialData={data}>
            <div className='min-h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
          </LottoProvider>
        </Suspense>
      </body>
    </html>
  );
}
