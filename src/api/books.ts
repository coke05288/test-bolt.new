import { Book } from '../types';

const dummyBooks: Book[] = [
  {
    id: '1',
    title: '해리 포터와 마법사의 돌',
    author: 'J.K. 롤링',
    price: 15000,
    imageUrl: 'https://source.unsplash.com/random/300x400?book',
    description: '해리 포터 시리즈의 첫 번째 책입니다.',
    category: 'fiction'
  },
  {
    id: '2',
    title: '사피엔스',
    author: '유발 하라리',
    price: 22000,
    imageUrl: 'https://source.unsplash.com/random/300x400?history',
    description: '인류의 역사를 다룬 논픽션 베스트셀러입니다.',
    category: 'non-fiction'
  },
  {
    id: '3',
    title: '코스모스',
    author: '칼 세이건',
    price: 18000,
    imageUrl: 'https://source.unsplash.com/random/300x400?space',
    description: '우주와 과학에 대한 흥미로운 이야기를 담은 책입니다.',
    category: 'science'
  },
];

export const fetchBooks = (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyBooks), 500);
  });
};

export const fetchBookById = (id: string): Promise<Book | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = dummyBooks.find(book => book.id === id);
      resolve(book || null);
    }, 500);
  });
};