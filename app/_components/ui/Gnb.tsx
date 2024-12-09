import Shopping from '@/public/svgs/shopping.svg';
import Bless from '@/public/svgs/bless.svg';
import NewsFolding from '@/public/svgs/news-folding.svg';
import Map from '@/public/svgs/map.svg';
import Main from '@/public/svgs/main.svg';

const GNB_ITEMS = [
  { icon: Shopping, label: '계획', href: '/plan' },
  { icon: Bless, label: '꿈', href: '/dream' },
  { icon: Main, label: '홈', href: '/main' },
  { icon: NewsFolding, label: '아티클', href: '/article' },
  { icon: Map, label: '지도', href: '/' },
];

export default function Gnb() {
  return <div></div>;
}
