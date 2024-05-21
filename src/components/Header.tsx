import { useState } from 'react';
import { useRouter } from 'next/router';
import { Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '@/styles/Header.module.scss';

interface HeaderProps {
  hidden: boolean;
  colored: boolean;
}

export const Header = ({ hidden, colored }: HeaderProps) => {
  const router = useRouter();

  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);

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

  const HeaderContent = () => (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__link}
            onClick={() => {
              scrollToSection(0);
              closeMenuModal();
            }}
          >
            Главная
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__link}
            onClick={() => {
              scrollToSection(2);
              closeMenuModal();
            }}
          >
            О нас
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__link}
            onClick={() => {
              scrollToSection(3);
              closeMenuModal();
            }}
          >
            Доставка и оплата
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__link}
            onClick={() => {
              router.push('/shop');
              closeMenuModal();
            }}
          >
            Каталог
          </button>
        </li>
        <li className={styles.menu__item}>
          <button
            className={styles.menu__link}
            onClick={() => {
              router.push('/cart');
              closeMenuModal();
            }}
          >
            Корзина
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <div
        className={
          hidden
            ? `${styles.header} ${styles.hidden}`
            : colored
            ? `${styles.header} ${styles.colored}`
            : styles.header
        }
      >
        <div className={`${styles.header__container} ${styles.header__container_desktop}`}>
          <HeaderContent />
        </div>

        <div className={`${styles.header__container} ${styles.header__container_mobile}`}>
          <IconButton className={styles.icon} onClick={openMenuModal}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Dialog
        open={menuModalOpen}
        onClose={closeMenuModal}
        scroll='body'
        fullScreen
        keepMounted
        disablePortal
      >
        <HeaderContent />
        <div className={styles.closeIconContainer}>
          <IconButton className={styles.icon} onClick={closeMenuModal}>
            <CloseIcon />
          </IconButton>
        </div>
      </Dialog>
    </>
  );
};
