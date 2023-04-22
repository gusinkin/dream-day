import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { CartProvider } from '../context/CartProvider';
import styles from '@/styles/MainContainer.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const MainContainer = ({
  children,
  keywords,
}: {
  children: any;
  keywords: string;
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.header__container}>
            <Link className={styles.logo} href='/'>
              <img className={styles.logo} src={''} alt='logo' />
            </Link>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href='/'>
                    Главная
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href='/shop'>
                    Магазин
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link className={styles.menu__link} href='/cart'>
                    Корзина
                  </Link>
                </li>
              </ul>
            </nav>{' '}
            <Link className={styles.logo} href='/cart'>
              <img className={styles.logo} src={''} alt='logo' />
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <div>{children}</div>
        </div>
        <div className={styles.footer}></div>
      </div>
      {/* <div className={styles.something}></div> */}
    </>
  );
};
