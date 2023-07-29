import Link from 'next/link';
import React, { useContext } from 'react';
import { baseBlocks } from '../dataBase/baseBlocks';
import { ComplexProduct, complexProducts } from '../dataBase/complexProducts';
import { cartContext } from '../context/CartProvider';
import { CartProviderValue } from '../context/CartProvider';
import styles from '@/styles/Product.module.scss';
import cartStyles from '@/styles/Cart.module.scss';

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
      <div className={styles.section__container}>
        <div className={styles.productPage}>
          <div className={styles.productPage__image}>
            <div className={styles.item__pic}>
              <img
                className={styles.item__img}
                src={`../../images/complexProducts/${product.id}.jpg`}
                alt={product.name}
              />
            </div>
          </div>
          <div className={styles.productPage__info}>
            <div className={styles.item__name}>{product.name}</div>
            <div className={styles.item__description}>{product.description}</div>
            <p>Теги для поиска:</p>
            <ul className={styles.productPage__tags}>
              {product.tags.map((tag) => (
                <li className={styles.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
            <div className={styles.item__price}>{`${product.price} \u20bd`}</div>

            <div className={styles.item__buy}>
              {' '}
              <div className={styles.item__addtocart}>
                <button
                  className={styles.button}
                  onClick={() => {
                    addToCart(product.id, 1);
                    openSnackbar();
                  }}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (layout === 'productCard') {
    return (
      <div className={styles.productCard}>
        <div className={styles.item}>
          <Link href={`/shop/item/${product.id}`}>
            <div className={styles.item__image}>
              <div className={styles.item__pic}>
                {
                  // query === {} ? (
                  //   <img src={`images/complexProducts/${product.id}.jpg`} alt={product.name} />
                  // ) : (
                  <img
                    className={styles.item__img}
                    src={`../../images/complexProducts/${product.id}.jpg`}
                    alt={product.name}
                  />
                  // )
                }
              </div>
            </div>
            <div className={styles.item__info}>
              <div className={styles.item__name}>{product.name}</div>
              {/* <div className={styles.item__description}>
                {product.description}
              </div> */}
              {/* <ul className='reviews__tags'>
                {product.tags.map((tag) => (
                  <li className='reviews__tags-item tag tag--green' key={tag}>
                    {tag}
                  </li>
                ))}
              </ul> */}
              <div className={styles.item__price}>{`${product.price} \u20bd`}</div>
            </div>{' '}
            <div className={styles.item__buy}>
              {' '}
              {/* <div className={styles.item}__price'>{product.price}</div> */}
              <div className={styles.item__addtocart}>
                <button
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product.id, 1);
                    openSnackbar();
                  }}
                >
                  В корзину
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  return (
    // <div className={styles.Product}>
    <div className={cartStyles.cart__product}>
      <div className={styles.item__image}>
        <Link href={`/shop/item/${product.id}`}>
          <div className={styles.item__pic}>
            <img
              className={styles.item__img}
              src={`../../images/complexProducts/${product.id}.jpg`}
              alt={product.name}
            />
          </div>
        </Link>
      </div>
      <div className={styles.item__info}>
        <div className={styles.item__name}>{product.name}</div>
        {/* <div className={styles.item}__description'>{product.description}</div>
          <ul className='reviews__tags'>
            {product.tags.map((tag) => (
              <li className='reviews__tags-item tag tag--green' key={tag}>
                {tag}
              </li>
            ))}
          </ul> */}
      </div>

      <div className={styles.item__buy}>
        <div className={styles.item__price}>{product.price}</div>
      </div>
    </div>
    // </div>
  );
};
