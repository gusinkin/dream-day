import { ComplexProductsType } from '@/dataBase/complexProducts';

export const loadState = (): ComplexProductsType => {
  try {
    const serialState = localStorage.getItem('dream-day');
    if (serialState === null) {
      return [];
    }
    return JSON.parse(serialState);
  } catch (err) {
    return [];
  }
};

export const saveState = (state: ComplexProductsType) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('dream-day', serialState);
  } catch (err) {
    console.log(err);
  }
};
