import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
// import styles from '@/styles/Header.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
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
  );
};
