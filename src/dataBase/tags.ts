export enum TagType {
  Color = 'color',
  Reason = 'reason',
  For = 'for',
  Hero = 'hero',
  Rest = 'rest',
  Hidden = 'hidden',
}

export interface TagObject {
  id: number;
  name: string;
  route: string;
  type: TagType;
}

export const tagsTypeColor: TagObject[] = [
  { id: 1, name: 'розовые', route: 'розовые', type: TagType.Color },
  { id: 2, name: 'золото', route: 'золото', type: TagType.Color },
  { id: 3, name: 'розовое золото', route: 'розовое золото', type: TagType.Color },
  { id: 4, name: 'синие', route: 'синие', type: TagType.Color },
  { id: 5, name: 'черные', route: 'черные', type: TagType.Color },
  { id: 6, name: 'серебро', route: 'серебро', type: TagType.Color },
  { id: 7, name: 'красные', route: 'красные', type: TagType.Color },
  { id: 8, name: 'белые', route: 'белые', type: TagType.Color },
  { id: 9, name: 'зеленые', route: 'зеленые', type: TagType.Color },
  { id: 10, name: 'радуга', route: 'радуга', type: TagType.Color },
  { id: 11, name: 'разноцветные', route: 'разноцветные', type: TagType.Color },
  { id: 12, name: 'сиреневые', route: 'сиреневые', type: TagType.Color },
  { id: 13, name: 'бирюзовые', route: 'бирюзовые', type: TagType.Color },
];

export const tagsTypeReason: TagObject[] = [
  { id: 101, name: 'день рождения', route: 'день рождения', type: TagType.Reason },
  { id: 102, name: 'определение пола', route: 'определение пола', type: TagType.Reason },
  { id: 103, name: 'годовасие', route: 'годовасие', type: TagType.Reason },
  { id: 104, name: 'выписка', route: 'выписка', type: TagType.Reason },
  { id: 105, name: 'девичник', route: 'девичник', type: TagType.Reason },
  { id: 106, name: 'свадьба', route: 'свадьба', type: TagType.Reason },
  { id: 107, name: 'выпускной', route: 'выпускной', type: TagType.Reason },
  { id: 108, name: '1 сентября', route: '1 сентября', type: TagType.Reason },
];

export const tagsTypeFor: TagObject[] = [
  { id: 201, name: 'девочке', route: 'девочке', type: TagType.For },
  { id: 202, name: 'мальчику', route: 'мальчику', type: TagType.For },
  { id: 203, name: 'парню/мужчине', route: 'парню мужчине', type: TagType.For },
  { id: 204, name: 'девушке/женщине', route: 'девушке женщине', type: TagType.For },
  { id: 205, name: 'маме', route: 'маме', type: TagType.For },
];

export const tagsTypeHero: TagObject[] = [
  { id: 301, name: 'животные', route: 'животные', type: TagType.Hero },
  { id: 302, name: 'заяц', route: 'заяц', type: TagType.Hero },
  { id: 303, name: 'олень', route: 'олень', type: TagType.Hero },
  { id: 304, name: 'ежик', route: 'ежик', type: TagType.Hero },
  { id: 305, name: 'кошка', route: 'кошка', type: TagType.Hero },
  { id: 306, name: 'енот', route: 'енот', type: TagType.Hero },
  { id: 307, name: 'динозавры', route: 'динозавры', type: TagType.Hero },
  { id: 308, name: 'леди Баг', route: 'леди баг', type: TagType.Hero },
  { id: 309, name: 'маша и медведь', route: 'маша и медведь', type: TagType.Hero },
  { id: 310, name: '3 кота', route: '3 кота', type: TagType.Hero },
  { id: 311, name: 'Микки Маус', route: 'Микки Маус', type: TagType.Hero },
  { id: 312, name: 'Холодное Сердце', route: 'Холодное Сердце', type: TagType.Hero },
  { id: 313, name: 'кукла Лол', route: 'кукла Лол', type: TagType.Hero },
  { id: 314, name: 'трактор', route: 'трактор', type: TagType.Hero },
  { id: 315, name: 'лебедь', route: 'лебедь', type: TagType.Hero },
  { id: 316, name: 'самолёт', route: 'самолёт', type: TagType.Hero },
  { id: 317, name: 'щенячий патруль', route: 'щенячий патруль', type: TagType.Hero },
  { id: 318, name: 'пони', route: 'пони', type: TagType.Hero },
  { id: 319, name: 'майнкрафт', route: 'майнкрафт', type: TagType.Hero },
  { id: 320, name: 'человек паук', route: 'человек паук', type: TagType.Hero },
  { id: 321, name: 'русалочка', route: 'русалочка', type: TagType.Hero },
  { id: 322, name: 'золушка', route: 'золушка', type: TagType.Hero },
  { id: 323, name: 'машинка', route: 'машинка', type: TagType.Hero },
];

export const tagsTypeRest: TagObject[] = [
  //Тип
  { id: 401, name: 'коробка-сюрприз', route: 'коробка-сюрприз', type: TagType.Rest },
  { id: 402, name: 'шары под потолок', route: 'шары под потолок', type: TagType.Rest },
  { id: 403, name: 'шары на стойке', route: 'шары на стойке', type: TagType.Rest },
  { id: 404, name: 'фотозона', route: 'фотозона', type: TagType.Rest },
  { id: 405, name: 'шар с коробкой', route: 'шар с коробкой', type: TagType.Rest },
  { id: 406, name: 'шар с водой', route: 'шар с водой', type: TagType.Rest },

  //Прочее
  { id: 501, name: '18+', route: '18+', type: TagType.Rest },
  { id: 502, name: 'сафари', route: 'сафари', type: TagType.Rest },
  { id: 503, name: 'космос', route: 'космос', type: TagType.Rest },
  { id: 504, name: 'футбол', route: 'футбол', type: TagType.Rest },
  { id: 505, name: 'бабл', route: 'бабл', type: TagType.Rest },
  { id: 506, name: 'шары хром', route: 'шары хром', type: TagType.Rest },
  { id: 507, name: 'шары агат', route: 'шары агат', type: TagType.Rest },
  { id: 508, name: 'шары конфетти', route: 'шары конфетти', type: TagType.Rest },
  { id: 509, name: 'надпись', route: 'надпись', type: TagType.Rest },
  { id: 510, name: 'шар кристалл', route: 'шар кристалл', type: TagType.Rest },
  { id: 511, name: 'цифры', route: 'цифры', type: TagType.Rest },
  { id: 512, name: 'шар гигант', route: 'шар гигант', type: TagType.Rest },
];

export const tagsTypeHidden: TagObject[] = [
  { id: 900, name: 'ручная цена', route: 'ручная цена', type: TagType.Hidden },
];

export const tagObjects = tagsTypeColor.concat(
  tagsTypeReason,
  tagsTypeFor,
  tagsTypeHero,
  tagsTypeRest,
  tagsTypeHidden
);
