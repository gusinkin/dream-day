import { ComplexProductsType } from '@/dataBase/complexProducts';

export const loadCartState = (): ComplexProductsType => {
  try {
    const serialState = localStorage.getItem('dream-day-cart');
    if (serialState === null) {
      return [];
    }
    return JSON.parse(serialState);
  } catch (err) {
    return [];
  }
};

export const saveCartState = (state: ComplexProductsType) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('dream-day-cart', serialState);
  } catch (err) {
    console.log(err);
  }
};

export const loadTagsState = (): string[] => {
  try {
    const serialState = sessionStorage.getItem('dream-day-tags');
    if (serialState === null) {
      return [];
    }
    return JSON.parse(serialState);
  } catch (err) {
    return [];
  }
};

export const saveTagsState = (tags: string[]) => {
  try {
    const serialState = JSON.stringify(tags);
    sessionStorage.setItem('dream-day-tags', serialState);
  } catch (err) {
    console.log(err);
  }
};
