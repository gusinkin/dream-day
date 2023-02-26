import { Vujahday_Script } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
// import '../App.css';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { BaseBlock, baseBlocks } from '../dataBase/baseBlocks';
import { ComplexProduct, complexProducts } from '../dataBase/complexProducts';
import { cartContext } from '../context/CartProvider';
import { CartProviderValue } from '../context/CartProvider';

export interface ProductProps {
  id: number;
  layout: 'productPage' | 'productCard' | 'cartItem';
}

export const Product = ({ id, layout }: ProductProps) => {
  const { addToCart } = useContext(cartContext) as CartProviderValue;

  // const { query } = useRouter();

  function getPrice(obj: ComplexProduct) {
    if (typeof obj.composition === 'number') return obj.composition;
    let result: number = 0;
    for (let position in obj.composition) {
      result +=
        baseBlocks.find((block) => block.name === position)!.price *
        obj.composition[position];
    }
    return result;
  }

  // function getQuantity(id: number) {
  //   const product = cart.find((item) => item.id === id);
  //   return product?.quantity;
  // }

  function createProduct(id: number) {
    let result = complexProducts.find((item) => item.id === id)!;
    const price = getPrice(result);
    result = { ...result, price };
    // if (layout === 'cartItem') {
    //   result = { ...result, quantity: getQuantity(id) };
    // }
    return result;
  }

  const product = createProduct(id);

  // Можно ли вот от этого избавиться? по сути лишний код, функция которая только запускает другую
  // выдает ошибку если напрямую контекстную функцию (addToCart и тд) вызвать через onClick

  // function addProductToCart() {
  //   addToCart(product.id, 1);
  // }

  // function removeProductFromCart() {
  //   removeFromCart(product.id);
  // }

  // function increase() {
  //   increaseQuantity(product.id);
  // }
  // function decrease() {
  //   decreaseQuantity(product.id);
  // }

  if (layout === 'productPage') {
    return (
      <div className=''>
        <div className='item__image--big'>
          <div className='item__pic'>
            <img src={`../../images/${product.id}.jpg`} alt={product.name} />
          </div>
        </div>
        <div className='item__info'>
          <div className='item__name'>{product.name}</div>
          <div className='item__description'>{product.description}</div>
          <ul className='reviews__tags'>
            {product.tags.map((tag) => (
              <li className='reviews__tags-item tag tag--green' key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <div className='item__price'>{product.price}</div>

          <div className='item__buy'>
            {' '}
            <div className='item__add-to-cart'>
              <button onClick={() => addToCart(product.id, 1)}>
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (layout === 'productCard') {
    return (
      <>
        <div className='item'>
          <Link href={`/shop/item/${product.id}`}>
            <div className='item__image'>
              <div className='item__pic'>
                {
                  // query === {} ? (
                  //   <img src={`images/${product.id}.jpg`} alt={product.name} />
                  // ) : (
                  <img
                    src={`../../images/${product.id}.jpg`}
                    alt={product.name}
                  />
                  // )
                }
              </div>
            </div>
            <div className='item__info'>
              <div className='item__name'>{product.name}</div>
              <div className='item__description'>{product.description}</div>
              <ul className='reviews__tags'>
                {product.tags.map((tag) => (
                  <li className='reviews__tags-item tag tag--green' key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <div className='item__price'>{product.price}</div>
            </div>
          </Link>
          <div className='item__buy'>
            {' '}
            {/* <div className='item__price'>{product.price}</div> */}
            <div className='item__add-to-cart'>
              <button onClick={() => addToCart(product.id, 1)}>
                В корзину
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='item cart-item'>
        <div className='item__image'>
          <Link href={`/shop/item/${product.id}`}>
            <div className='item__pic'>
              <img src={`../../images/${product.id}.jpg`} alt={product.name} />
            </div>
          </Link>
        </div>
        <div className='item__info'>
          <div className='item__name'>{product.name}</div>
          {/* <div className='item__description'>{product.description}</div>
          <ul className='reviews__tags'>
            {product.tags.map((tag) => (
              <li className='reviews__tags-item tag tag--green' key={tag}>
                {tag}
              </li>
            ))}
          </ul> */}
        </div>

        <div className='item__buy'>
          <div className='item__price'>{product.price}</div>
          {/* <div className='item__quantity'>
            <button onClick={decrease}>-</button>
            {product.quantity} шт
            <button onClick={increase}>+</button>
            <p>{product.quantity! * product.price!} Р</p>
          </div> */}
          {/* <div className='item__add-to-cart'>
            <button onClick={removeProductFromCart}>удалить из корзины</button>
          </div> */}
        </div>
      </div>
    </>
  );
};
