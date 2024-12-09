'use client';

import Shopping from '@/public/svgs/shopping.svg';
import Bless from '@/public/svgs/bless.svg';
import NewsFolding from '@/public/svgs/news-folding.svg';
import Map from '@/public/svgs/map.svg';
import Main from '@/public/svgs/main.svg';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GNB_ITEMS = [
  { icon: Shopping, label: '계획', href: '/plan' },
  { icon: Bless, label: '꿈', href: '/dream' },
  { icon: Main, label: '홈', href: '/main' },
  { icon: NewsFolding, label: '아티클', href: '/article' },
  { icon: Map, label: '지도', href: '/map' },
];

export default function Gnb() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <nav className='fixed bottom-[20px] px-[20px] w-full flex justify-center'>
      <div className='flex items-center bg-white rounded-[100px] p-[12px] max-w-[560px] w-full justify-center gap-[12px]'>
        {GNB_ITEMS.map(({ href, icon: Icon, label }, index) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={index}
              className='w-[64px] h-[64px] flex flex-col justify-center items-center gap-[4px]'
              href={href}
            >
              <Icon className={`${isActive ? 'text-[#FF7C78]' : 'text-[#222222]'}`} />
              <p className={`${isActive ? 'text-[#FF7C78]' : 'text-[#222222]'}`}>{label}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
