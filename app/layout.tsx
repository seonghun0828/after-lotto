import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'After Lotto',
  description: 'Welcome to After Lotto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='w-screen flex justify-center'>
        <div className='h-screen w-[600px] min-w-[320px] bg-black'>{children}</div>
      </body>
    </html>
  );
}
