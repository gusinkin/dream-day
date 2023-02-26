import { MainContainer } from '@/components/MainContainer';
import Head from 'next/head';
import Link from 'next/link';
import { cartContext } from '@/context/CartProvider';
import { useContext, useEffect } from 'react';
import { CartProviderValue } from '@/context/CartProvider';
import { Product } from '@/components/Product';
import { useState } from 'react';
import { ComplexProductsType } from '@/dataBase/complexProducts';

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    countTotal,
    clearCart,
  } = useContext(cartContext) as CartProviderValue;
  const [amount, setAmount] = useState(0);

  // не считается цена, она считается внутри продукта, а Cart ее не видит, выдает NaN

  // в Provider приделал повторный расчет цены для корзины, теперь работает

  useEffect(() => {
    setAmount(countTotal(cart));
  }, [cart]);

  return (
    <MainContainer keywords='корзина'>
      <div>
        <p>Тут корзина</p>
        <b>
          <p>ИТОГО: {amount}</p>
        </b>
        <button onClick={() => clearCart()}>ОЧИСТИТЬ КОРЗИНУ</button>
        <br />
        <br />
        <br />
        <div>
          {!cart.length ? (
            <p>в корзине пусто</p>
          ) : (
            <ul className='cart'>
              {cart.map((cartItem) => (
                <li key={cartItem.name} className='cart-item'>
                  <Product id={cartItem.id} layout={'cartItem'} />
                  <div className='item__quantity'>
                    <button onClick={() => decreaseQuantity(cartItem.id)}>
                      -
                    </button>
                    {cartItem.quantity} шт
                    <button onClick={() => increaseQuantity(cartItem.id)}>
                      +
                    </button>
                    <p>{cartItem.quantity! * cartItem.price!} Р</p>
                    <button onClick={() => removeFromCart(cartItem.id)}>
                      удалить из корзины
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
