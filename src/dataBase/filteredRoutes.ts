import { tagObjects } from './tags';

export interface FilteredRoute {
  id: number;
  name: string;
  link: string;
}

// В функцию нужно передать НАЗВАНИЯ нужных тегов через запятую
const getLink = (...tagNames: string[]) => {
  const tagRoutes = tagNames.flatMap((tagName) => {
    const obj = tagObjects.find((tagObject) => tagObject.name === tagName);
    return obj ? obj.route : [];
  });

  if (!tagRoutes.length) return '/shop';

  return `/shop/filter/${tagRoutes.join('+')}`;
};

export const filteredRoutes: FilteredRoute[] = [
  { id: 0, name: 'девочке', link: getLink('девочке') },
  { id: 1, name: 'день рождения', link: getLink('день рождения') },
  { id: 2, name: 'мальчику', link: getLink('мальчику') },
  { id: 3, name: 'годовасие', link: getLink('годовасие') },
  { id: 4, name: 'розовые', link: getLink('розовые') },
  { id: 5, name: '3 кота', link: getLink('3 кота') },
  { id: 6, name: 'золото', link: getLink('коробка-сюрприз') },
  { id: 7, name: 'шары хром', link: getLink('шары хром') },
  { id: 8, name: 'годовасиее', link: getLink('годовасие') },
];
