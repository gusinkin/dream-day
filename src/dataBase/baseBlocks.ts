export interface BaseBlock {
  name: string;
  price: number;
}

export const baseBlocks: BaseBlock[] = [
  {
    name: 'Шар латексный',
    price: 110,
  },
  {
    name: 'Цифра фольгированная',
    price: 850,
  },
  {
    name: 'Фигура фольгированная',
    price: 700,
  },
  {
    name: 'Звезда фольгированная',
    price: 220,
  },
  {
    name: 'Сердце фольгированное',
    price: 220,
  },
  {
    name: 'Бабл шар',
    price: 750,
  },
  {
    name: 'Надпись',
    price: 150,
  },
  {
    name: 'Шар с конфетти',
    price: 150,
  },
];
