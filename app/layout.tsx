import { Metadata } from 'next';
import './globals.css';
import { getLottoData } from './_apis/get-lotto-data';
import LottoProvider from './contexts/LottoProvider';
import { getCurrentLottoRound } from './_utils/get-current-lotto-round';

export const metadata: Metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getLottoData(getCurrentLottoRound());

  return (
    <html lang='en'>
      <body className='w-screen flex justify-center'>
        <LottoProvider initialData={data}>
          <div className='h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
        </LottoProvider>
      </body>
    </html>
  );
}
