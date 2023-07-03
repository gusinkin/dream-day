import type { ComplexProduct, ComplexProductsType } from '@/dataBase/complexProducts';
import { complexProducts } from '@/dataBase/complexProducts';
import React, { createContext, Dispatch, ReactElement, useEffect, useState } from 'react';
import { baseBlocks } from '@/dataBase/baseBlocks';
import { loadState } from './localStorage';

export interface CartProviderValue {
  cart: ComplexProductsType;
  addToCart: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  countTotal: (cart: ComplexProductsType) => number;
  clearCart: () => void;
  getCartFromLocalStorage: () => void;
}
export const cartContext = createContext<CartProviderValue | null>(null);

export function CartProvider({ children }: { children: ReactElement }) {
  const initialCart: ComplexProductsType = loadState();
  const [cart, setCart] = useState<ComplexProductsType>([]);
  const Provider = cartContext.Provider;

  useEffect(() => {
    setCart(initialCart);
  }, []);

  // тут дублирование, как по другому сделать я не придумал, эта функция скопирована из компонента Product
  // получается эта функция считает цену в каждом продукте, а тут для каждого продукта в корзине еще раз
  function getPrice(obj: ComplexProduct) {
    if (typeof obj.composition === 'number') return obj.composition;
    let result: number = 0;
    for (let position in obj.composition) {
      result +=
        baseBlocks.find((block) => block.name === position)!.price * obj.composition[position];
    }
    return result;
  }

  function addToCart(id: number, quantity: number): void {
    const productToAdd = complexProducts.find((product) => product.id === id)!!;
    setCart((prevCart) => {
      if (!prevCart?.some((cartItem) => cartItem.id === id)) {
        const newItem = {
          ...productToAdd,
          quantity: 0,
          price: getPrice(productToAdd),
        };
        prevCart.push(newItem as ComplexProduct);
      }
      const newCart = prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + quantity : quantity,
          };
        }
        return cartItem;
      });
      return newCart;
    });
  }

  function removeFromCart(id: number): void {
    const productToRemove = cart.find((product) => product.id === id)!!;
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== productToRemove.id));
  }

  function increaseQuantity(id: number): void {
    addToCart(id, 1);
  }

  function decreaseQuantity(id: number): void {
    const product = cart.find((cartItem) => cartItem.id === id)!!;
    if (product.quantity === 1) return;
    addToCart(product.id, -1);
  }

  function countTotal(cart: ComplexProductsType) {
    return cart.reduce((prev, current) => {
      // нам не видно current.price, т.к. компонент Product запускается не здесь
      // может тут вообще геттер присрать каждому товару

      // выше приделал повторный расчет цены для корзины, теперь работает
      return prev + current.price! * current.quantity!;
    }, 0);
  }

  function clearCart(): void {
    setCart([]);
  }

  function getCartFromLocalStorage() {
    console.log('getCartFromLocalStorage in context');
    const state = loadState();
    console.log('state', state);
    setCart(state);
  }
  // useEffect(() => {
  //   console.log('getCartFromLocalStorage');
  //   getCartFromLocalStorage();
  // }, []);

  return (
    <Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        countTotal,
        clearCart,
        getCartFromLocalStorage,
      }}
    >
      {children}
    </Provider>
  );
}
