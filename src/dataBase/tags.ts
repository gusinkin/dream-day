type TagType = 'color' | 'reason' | 'for' | 'hero' | 'rest' | 'hidden';

export interface TagObject {
  name: string;
  route: string;
  type: TagType;
}

export const tagObjects: TagObject[] = [
  //Цвета
  { name: 'розовые', route: 'розовые', type: 'color' },
  { name: 'золото', route: 'золото', type: 'color' },
  { name: 'розовое золото', route: 'розовое золото', type: 'color' },
  { name: 'синие', route: 'синие', type: 'color' },
  { name: 'черные', route: 'черные', type: 'color' },
  { name: 'серебро', route: 'серебро', type: 'color' },
  { name: 'красные', route: 'красные', type: 'color' },
  { name: 'белые', route: 'белые', type: 'color' },
  { name: 'зеленые', route: 'зеленые', type: 'color' },
  { name: 'радуга', route: 'радуга', type: 'color' },
  { name: 'разноцветные', route: 'разноцветные', type: 'color' },
  { name: 'сиреневые', route: 'сиреневые', type: 'color' },
  { name: 'бирюзовые', route: 'бирюзовые', type: 'color' },

  //Повод
  { name: 'день рождения', route: 'день рождения', type: 'reason' },
  { name: 'определение пола', route: 'определение пола', type: 'reason' },
  { name: 'годовасие', route: 'годовасие', type: 'reason' },
  { name: 'выписка', route: 'выписка', type: 'reason' },
  { name: 'девичник', route: 'девичник', type: 'reason' },
  { name: 'свадьба', route: 'свадьба', type: 'reason' },
  { name: 'выпускной', route: 'выпускной', type: 'reason' },
  { name: '1 сентября', route: '1 сентября', type: 'reason' },

  //Кому
  { name: 'девочке', route: 'девочке', type: 'for' },
  { name: 'мальчику', route: 'мальчику', type: 'for' },
  { name: 'парню/мужчине', route: 'парню мужчине', type: 'for' },
  { name: 'девушке/женщине', route: 'девушке женщине', type: 'for' },
  { name: 'маме', route: 'маме', type: 'for' },

  //Герои
  { name: 'животные', route: 'животные', type: 'hero' },
  { name: 'заяц', route: 'заяц', type: 'hero' },
  { name: 'олень', route: 'олень', type: 'hero' },
  { name: 'ежик', route: 'ежик', type: 'hero' },
  { name: 'кошка', route: 'кошка', type: 'hero' },
  { name: 'енот', route: 'енот', type: 'hero' },
  { name: 'динозавры', route: 'динозавры', type: 'hero' },
  { name: 'леди Баг', route: 'леди баг', type: 'hero' },
  { name: 'маша и медведь', route: 'маша и медведь', type: 'hero' },
  { name: '3 кота', route: '3 кота', type: 'hero' },
  { name: 'Микки Маус', route: 'Микки Маус', type: 'hero' },
  { name: 'Холодное Сердце', route: 'Холодное Сердце', type: 'hero' },
  { name: 'кукла Лол', route: 'кукла Лол', type: 'hero' },
  { name: 'трактор', route: 'трактор', type: 'hero' },
  { name: 'лебедь', route: 'лебедь', type: 'hero' },
  { name: 'самолёт', route: 'самолёт', type: 'hero' },
  { name: 'щенячий патруль', route: 'щенячий патруль', type: 'hero' },
  { name: 'пони', route: 'пони', type: 'hero' },
  { name: 'майнкрафт', route: 'майнкрафт', type: 'hero' },
  { name: 'человек паук', route: 'человек паук', type: 'hero' },
  { name: 'русалочка', route: 'русалочка', type: 'hero' },
  { name: 'золушка', route: 'золушка', type: 'hero' },
  { name: 'машинка', route: 'машинка', type: 'hero' },

  //Тип
  { name: 'коробка-сюрприз', route: 'коробка-сюрприз', type: 'rest' },
  { name: 'шары под потолок', route: 'шары под потолок', type: 'rest' },
  { name: 'шары на стойке', route: 'шары на стойке', type: 'rest' },
  { name: 'фотозона', route: 'фотозона', type: 'rest' },
  { name: 'шар с коробкой', route: 'шар с коробкой', type: 'rest' },
  { name: 'шар с водой', route: 'шар с водой', type: 'rest' },

  //Прочее
  { name: '18+', route: '18+', type: 'rest' },
  { name: 'сафари', route: 'сафари', type: 'rest' },
  { name: 'космос', route: 'космос', type: 'rest' },
  { name: 'футбол', route: 'футбол', type: 'rest' },
  { name: 'бабл', route: 'бабл', type: 'rest' },
  { name: 'шары хром', route: 'шары хром', type: 'rest' },
  { name: 'шары агат', route: 'шары агат', type: 'rest' },
  { name: 'шары конфетти', route: 'шары конфетти', type: 'rest' },
  { name: 'надпись', route: 'надпись', type: 'rest' },
  { name: 'шар кристалл', route: 'шар кристалл', type: 'rest' },
  { name: 'цифры', route: 'цифры', type: 'rest' },
  { name: 'шар гигант', route: 'шар гигант', type: 'rest' },

  //Скрытые теги
  { name: 'ручная цена', route: 'ручная цена', type: 'hidden' },
];
