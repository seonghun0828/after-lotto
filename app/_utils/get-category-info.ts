import { Category } from '../const/categories.const';

const KOREAN_NAME_MAP = {
  developer: '개발자',
  'real-estate': '부동산',
  car: '차',
  shopping: '쇼핑',
  beauty: '뷰티',
  travel: '여행',
};

const IMAGE_NAME_MAP = {
  developer: 'code-computer.png',
  'real-estate': 'building.png',
  car: 'car.png',
  shopping: 'shopping.png',
  beauty: 'makeups.png',
  travel: 'airplane.png',
};

const IMAGE_PATH = '/images/plan';

export const getKoreanName = (category: Category) => {
  return KOREAN_NAME_MAP[category] ?? '';
};

export const getImageName = (category: Category) => {
  return `${IMAGE_PATH}/${IMAGE_NAME_MAP[category] ?? ''}`;
};
