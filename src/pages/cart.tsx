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
import { saveCartState } from '@/context/localStorage';
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
  } = useContext(cartContext) as CartProviderValue;
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  // не считается цена, она считается внутри продукта, а Cart ее не видит, выдает NaN

  // в Provider приделал повторный расчет цены для корзины, теперь работает

  useEffect(() => {
    setAmount(countTotal(cart));
    saveCartState(cart);
  }, [cart]);

  return (
    <MainContainer keywords='корзина'>
      <div className={styles.longpage__container}>
        <h2 className={styles.section__title}>Корзина</h2>
        <div>
          {!cart.length ? (
            <p>в корзине пусто</p>
          ) : (
            <>
              <ul className={styles.cart__list}>
                {cart.map((cartItem) => (
                  <li key={cartItem.id}>
                    <Link href={`/shop/item/${cartItem.id}`} className={styles.cart__item}>
                      <Product id={cartItem.id} layout={'cartItem'} />
                      <div className={styles.cart__quantity_block}>
                        <div className={styles.cart__quantity_container}>
                          <div className={styles.cart__quantity}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                decreaseQuantity(cartItem.id);
                              }}
                              className={`${styles.button} ${styles.smallButton}`}
                            >
                              -
                            </button>
                            <p>{`${cartItem.quantity}\u00A0шт`}</p>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                increaseQuantity(cartItem.id);
                              }}
                              className={`${styles.button} ${styles.smallButton}`}
                            >
                              +
                            </button>
                          </div>
                          <div className={styles.cart__price}>
                            <b>{`${cartItem.quantity! * cartItem.price!}\u00A0\u20bd`}</b>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromCart(cartItem.id);
                        }}
                        className={`${styles.button} ${styles.smallButton} ${styles.removeButton}`}
                      >
                        x
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
              <br />
              <b>
                <p>ИТОГО: {`${amount}\u00A0\u20bd`}</p>
              </b>
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
