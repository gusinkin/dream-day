import Link from 'next/link';
import styles from '@/styles/Footer.module.scss';
// import styles from '@/styles/Header.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <p className={styles.footer__title}>Dream Day</p>
        <p className={styles.footer__subtitle}>Создание счастливых моментов</p>
        <p className={styles.footer__phone}>+7 (952) 447 96 53</p>
      </div>
    </div>
  );
};
