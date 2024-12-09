
import Image from 'next/image';
import Shopping from '@/public/svgs/shopping.svg';
import Bless from '@/public/svgs/bless.svg';
import NewsFolding from '@/public/svgs/news-folding.svg';
import Map from '@/public/svgs/map.svg';
import Main from '@/public/svgs/main.svg';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: Shopping, label: '계획', href: '/plan' },
  { icon: Bless, label: '꿈', href: '/dream' },
  { icon: Main, label: '홈', href: '/main' },
  { icon: NewsFolding, label: '아티클', href: '/article' },
  { icon: Map, label: '지도', href: '/' },
];

const MenuItem = ({ icon, label, isActive, href }: { icon: any; label: string; isActive?: boolean; href: string }) => (
  <button
      onClick={() => (window.location.href = href)}
      className={`flex flex-col items-center text-center ${
        isActive ? 'text-[#FF7C78]' : 'text-black'
      }`}
    >
    <Image src={icon} alt={label} className={`w-[36px] h-[36px] mb-2 ${isActive ? 'text-[#FF7C78]' : 'text-black'}`} />
    <p>{label}</p>
    </button>
);

export function NavigationBar() {
  const pathname = usePathname();

    return (
    <div className="flex w-full gap-12 h-[88px] py-2 px-16 bg-white rounded-full">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={pathname === item.href}
            href={item.href}
          />
        ))}
      </div>
    )
}