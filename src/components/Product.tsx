import Link from 'next/link';
import React, { useContext } from 'react';
import { baseBlocks } from '../dataBase/baseBlocks';
import { ComplexProduct, complexProducts } from '../dataBase/complexProducts';
import { cartContext } from '../context/CartProvider';
import { CartProviderValue } from '../context/CartProvider';
import styles from '@/styles/Product.module.scss';
import cartStyles from '@/styles/Cart.module.scss';
import { TagRoute } from './TagRoute';

export interface ProductProps {
  id: number;
  layout: 'productPage' | 'productCard' | 'cartItem';
}

export const Product = ({ id, layout }: ProductProps) => {
  const { addToCart, openSnackbar } = useContext(cartContext) as CartProviderValue;

  function getPrice(obj: ComplexProduct) {
    if (typeof obj.composition === 'number') return obj.composition;
    let result: number = 0;
    for (let position in obj.composition) {
      result +=
        baseBlocks.find((block) => block.name === position)!.price * obj.composition[position];
    }
    return result;
  }

  function createProduct(id: number) {
    let result = complexProducts.find((item) => item.id === id)!;
    const price = getPrice(result);
    result = { ...result, price };

    return result;
  }

  const product = createProduct(id);

  if (layout === 'productPage') {
    return (
      <div className={styles.shortpage__container}>
        <div className={styles.productPage}>
          <div className={styles.productPage__image}>
            <div className={styles.productPage__pic}>
              <img
                className={styles.productPage__img}
                src={`../../images/complexProducts/big/${product.id}.jpg`}
                alt={product.name}
              />
            </div>
          </div>
          <div className={styles.productPage__info}>
            <div className={styles.productPage__info_container}>
              <div className={styles.productPage__name}>{product.name}</div>
              <div className={styles.productPage__description}>{product.description}</div>
              <div className={styles.productPage__tags}>
                <p>Теги для поиска:</p>
                <ul className={styles.productPage__tags_container}>
                  {product.tags.map((tag) => (
                    <TagRoute tagName={tag} key={tag} />
                  ))}
                </ul>
              </div>
              <div className={styles.productPage__price}>{`${product.price}\u00A0\u20bd`}</div>{' '}
              <div className={styles.productPage__addtocart}>
                <button
                  className={styles.button}
                  onClick={() => {
                    addToCart(product.id, 1);
                    openSnackbar('Добавлено в корзину!');
                  }}
                >
                  В корзину
                </button>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (layout === 'productCard') {
    return (
      <div className={styles.productCard}>
        <Link href={`/shop/item/${product.id}`} className={styles.productCard__link}>
          <div className={styles.productCard__image}>
            <div className={styles.productCard__pic}>
              <img
                className={styles.productCard__img}
                src={`../../images/complexProducts/small/${product.id}.jpg`}
                alt={product.name}
              />
            </div>
          </div>
          <div className={styles.productCard__info}>
            <div className={styles.productCard__name}>{product.name}</div>
          </div>
          <div className={styles.productCard__buy}>
            <div className={styles.productCard__price}>{`${product.price}\u00A0\u20bd`}</div>
            <div className={styles.productCard__addtocart}>
              <button
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(product.id, 1);
                  openSnackbar('Добавлено в корзину!');
                }}
              >
                В корзину
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  if (layout === 'cartItem') {
    return (
      <>
        <div className={styles.cartItem__image}>
          <div className={styles.cartItem__pic}>
            <img
              className={styles.cartItem__img}
              src={`../../images/complexProducts/small/${product.id}.jpg`}
              alt={product.name}
            />
          </div>
        </div>
        <div className={`${styles.cartItem__info} ${cartStyles.info}`}>
          <div className={styles.cartItem__name}>{product.name}</div>
        </div>
      </>
    );
  }
  return null;
};
