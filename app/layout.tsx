import './globals.css';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${pretendard.variable}`}>
      <body className='w-screen flex justify-center text-white'>
        <div className='h-full min-h-screen w-[600px] min-w-[320px] bg-black '>{children}</div>
      </body>
    </html>
  );
}
