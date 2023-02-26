export interface ComplexProduct {
  id: number;
  name: string;
  description: string;
  tags: string[];
  composition:
    | {
        [key: string]: number;
      }
    | number;
  price?: number;
  quantity?: number;
}

export type ComplexProductsType = ComplexProduct[];

export const complexProducts: ComplexProduct[] = [
  {
    id: 0,
    name: 'Товар № 0',
    description: 'розовые шарики',
    tags: ['розовые', 'заяц'],
    composition: {
      'Шар латексный': 7,
      'Цифра фольгированная': 1,
      'Фигура фольгированная': 1,
    },
  },

  {
    id: 1,
    name: 'Товар № 1',
    description: 'синие шарики',
    tags: ['синие'],
    composition: {
      'Шар латексный': 10,
      'Звезда фольгированная': 2,
      'Сердце фольгированное': 2,
    },
  },

  {
    id: 2,
    name: 'Товар № 2',
    description: 'тут надпись',
    tags: ['розовые', 'день рождения'],
    composition: {
      'Шар латексный': 3,
      'Бабл шар': 1,
      Надпись: 1,
      'Шар с конфетти': 2,
    },
  },
  {
    id: 3,
    name: 'Товар № 3',
    tags: ['синие', 'фикс цена'],
    description: 'какой то товар с фиксированной ценой',
    composition: 1200,
  },
  {
    id: 4,
    name: 'Товар № 4',
    description: 'еще товар с фикс ценой',
    tags: ['розовые', 'заяц', 'фикс цена'],
    composition: 2000,
  },
];
