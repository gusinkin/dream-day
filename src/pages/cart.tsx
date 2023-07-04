import { MainContainer } from '@/components/MainContainer';
import Head from 'next/head';
import Link from 'next/link';
import { cartContext } from '@/context/CartProvider';
import { useContext, useEffect } from 'react';
import { CartProviderValue } from '@/context/CartProvider';
import { Product } from '@/components/Product';
import { useState } from 'react';
import { ComplexProductsType } from '@/dataBase/complexProducts';
import styles from '@/styles/Cart.module.scss';
import { saveState } from '@/context/localStorage';
import { useRouter } from 'next/router';

export default function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    countTotal,
    clearCart,
    getCartFromLocalStorage,
  } = useContext(cartContext) as CartProviderValue;
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  // не считается цена, она считается внутри продукта, а Cart ее не видит, выдает NaN

  // в Provider приделал повторный расчет цены для корзины, теперь работает

  useEffect(() => {
    setAmount(countTotal(cart));
    saveState(cart);
  }, [cart]);

  return (
    <MainContainer keywords='корзина'>
      <div className={styles.cart__container}>
        <h2 className={styles.section__title}>Корзина</h2>
        <div>
          {!cart.length ? (
            <p>в корзине пусто</p>
          ) : (
            <>
              <ul className={styles.cart__list}>
                {cart.map((cartItem) => (
                  <li key={cartItem.id} className={styles.cart__item}>
                    <Product id={cartItem.id} layout={'cartItem'} />
                    <div className={styles.cart__quantity}>
                      <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
                      <b>{cartItem.quantity} шт</b>
                      <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
                      <p>{`${cartItem.quantity! * cartItem.price!} \u20bd`}</p>
                      <button onClick={() => removeFromCart(cartItem.id)}>
                        удалить из корзины
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <br />
              <b>
                <p>ИТОГО: {`${amount} \u20bd`}</p>
              </b>
              {/* <Link className={styles.button} href='/order'>
                {' '}
                Перейти к оформлению
              </Link> */}
              <br />
              <button className={styles.button} onClick={() => router.push('/order')}>
                Перейти к оформлению
              </button>
              <br />
              <br />
              <button className={styles.button} onClick={() => clearCart()}>
                ОЧИСТИТЬ КОРЗИНУ
              </button>
            </>
          )}
        </div>
      </div>
    </MainContainer>
  );
}
