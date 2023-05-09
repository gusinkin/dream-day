import Link from 'next/link';
import styles from '@/styles/Header.module.scss';

interface HeaderProps {
  hidden: boolean;
  colored: boolean;
}

export const Header = ({ hidden, colored }: HeaderProps) => {
  return (
    <div
      className={
        hidden
          ? `${styles.header} ${styles.hidden}`
          : colored
          ? `${styles.header} ${styles.colored}`
          : styles.header
      }
    >
      <div className={styles.header__container}>
        {/* <Link className={styles.logo} href='/'>
          <img className={styles.logo} src={''} alt='logo' />
        </Link> */}
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
        {/* <Link className={styles.logo} href='/cart'>
          <img className={styles.logo} src={''} alt='logo' />
        </Link> */}
      </div>
    </div>
  );
};
