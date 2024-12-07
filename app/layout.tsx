import { Metadata } from 'next';
import './globals.css';
import { getLottoData } from './landing/_apis/get-lotto-data';
import LottoProvider from './landing/contexts/LottoProvider';

export const metadata: Metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const data = await getLottoData();

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
