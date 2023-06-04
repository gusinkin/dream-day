import Link from 'next/link';
import styles from '@/styles/Header.module.scss';
import { useRouter } from 'next/router';

interface HeaderProps {
  hidden: boolean;
  colored: boolean;
}

export const Header = ({ hidden, colored }: HeaderProps) => {
  const router = useRouter();

  const scrollToSection = (n: number) => {
    if (router.route !== '/') {
      router.push('/');
    }
    setTimeout(() => {
      window.scrollTo({
        top: n * window.innerHeight,
        behavior: 'smooth',
      });
    }, 100);
  };

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
              <button
                className={styles.menu__link}
                onClick={() => scrollToSection(0)}
              >
                главная
              </button>
            </li>
            <li className={styles.menu__item}>
              <button
                className={styles.menu__link}
                onClick={() => scrollToSection(1)}
              >
                секция
              </button>
            </li>
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
