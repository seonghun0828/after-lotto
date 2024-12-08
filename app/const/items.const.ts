import { Category } from './categories.const';

export interface IItem {
  id: number;
  name: string;
  category: Category;
  price: number;
}

export const ITEMS: IItem[] = [
  // developer 카테고리
  {
    id: 1,
    name: 'Apple 2025 MacBook Pro 16 (M4)',
    category: 'developer',
    price: 3200000,
  },
  {
    id: 2,
    name: 'ChatGPT Pro 1년 구독료',
    category: 'developer',
    price: 3414276,
  },
  {
    id: 3,
    name: '허먼밀러 뉴 에어론',
    category: 'developer',
    price: 2540000,
  },
  {
    id: 4,
    name: '데스커 모션데스크',
    category: 'developer',
    price: 800000,
  },
  {
    id: 5,
    name: '삼성전자 오디세이 Neo G9 57인치',
    category: 'developer',
    price: 2690000,
  },
  {
    id: 6,
    name: 'LG 힐링미 오브제 컬렉션 안마의자',
    category: 'developer',
    price: 5290000,
  },
  // real-estate 카테고리
  {
    id: 7,
    name: '부동산 소분류 1',
    category: 'real-estate',
    price: 3200000,
  },
  {
    id: 8,
    name: '부동산 소분류 2',
    category: 'real-estate',
    price: 3414276,
  },
  {
    id: 9,
    name: '부동산 소분류 3',
    category: 'real-estate',
    price: 2540000,
  },
  {
    id: 10,
    name: '부동산 소분류 4',
    category: 'real-estate',
    price: 800000,
  },
  {
    id: 11,
    name: '부동산 소분류 5',
    category: 'real-estate',
    price: 2690000,
  },
  {
    id: 12,
    name: '부동산 소분류 6',
    category: 'real-estate',
    price: 5290000,
  },
  // car 카테고리
  {
    id: 13,
    name: '자동차 소분류 1',
    category: 'car',
    price: 3200000,
  },
  {
    id: 14,
    name: '자동차 소분류 2',
    category: 'car',
    price: 3414276,
  },
  {
    id: 15,
    name: '자동차 소분류 3',
    category: 'car',
    price: 2540000,
  },
  {
    id: 16,
    name: '자동차 소분류 4',
    category: 'car',
    price: 800000,
  },
  {
    id: 17,
    name: '자동차 소분류 5',
    category: 'car',
    price: 2690000,
  },
  {
    id: 18,
    name: '자동차 소분류 6',
    category: 'car',
    price: 5290000,
  },
  // shopping 카테고리
  {
    id: 19,
    name: '쇼핑 소분류 1',
    category: 'shopping',
    price: 3200000,
  },
  {
    id: 20,
    name: '쇼핑 소분류 2',
    category: 'shopping',
    price: 3414276,
  },
  {
    id: 21,
    name: '쇼핑 소분류 3',
    category: 'shopping',
    price: 2540000,
  },
  {
    id: 22,
    name: '쇼핑 소분류 4',
    category: 'shopping',
    price: 800000,
  },
  {
    id: 23,
    name: '쇼핑 소분류 5',
    category: 'shopping',
    price: 2690000,
  },
  {
    id: 24,
    name: '쇼핑 소분류 6',
    category: 'shopping',
    price: 5290000,
  },
  // beauty 카테고리
  {
    id: 25,
    name: '뷰티미용 소분류 1',
    category: 'beauty',
    price: 3200000,
  },
  {
    id: 26,
    name: '뷰티미용 소분류 2',
    category: 'beauty',
    price: 3414276,
  },
  {
    id: 27,
    name: '뷰티미용 소분류 3',
    category: 'beauty',
    price: 2540000,
  },
  {
    id: 28,
    name: '뷰티미용 소분류 4',
    category: 'beauty',
    price: 800000,
  },
  {
    id: 29,
    name: '뷰티미용 소분류 5',
    category: 'beauty',
    price: 2690000,
  },
  {
    id: 30,
    name: '뷰티미용 소분류 6',
    category: 'beauty',
    price: 5290000,
  },
  // travel 카테고리
  {
    id: 31,
    name: '여행숙박 소분류 1',
    category: 'travel',
    price: 3200000,
  },
  {
    id: 32,
    name: '여행숙박 소분류 2',
    category: 'travel',
    price: 3414276,
  },
  {
    id: 33,
    name: '여행숙박 소분류 3',
    category: 'travel',
    price: 2540000,
  },
  {
    id: 34,
    name: '여행숙박 소분류 4',
    category: 'travel',
    price: 800000,
  },
  {
    id: 35,
    name: '여행숙박 소분류 5',
    category: 'travel',
    price: 2690000,
  },
  {
    id: 36,
    name: '여행숙박 소분류 6',
    category: 'travel',
    price: 5290000,
  },
];
