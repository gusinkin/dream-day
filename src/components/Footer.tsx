import styles from '@/styles/Footer.module.scss';

interface FooterProps {
  large: boolean;
}

export const Footer = ({ large }: FooterProps) => {
  const FooterContent = () => (
    <div className={styles.footer__container}>
      <div className={styles.footer__text}>
        <p className={styles.footer__title}>Dream Day</p>
        <p className={styles.footer__subtitle}>Создание счастливых моментов</p>
        <a href='tel:+7 (952) 447 96 53' className={styles.footer__phone}>
          +7 (952) 447 96 53
        </a>
      </div>
      <ul className={styles.footer__contacts}>
        <li>
          <a href='https://vk.com/dream_day_nn'>
            <img src='../../svg/contacts/vk.svg' />
          </a>
        </li>
        <li>
          <a href='https://t.me/dreamday_nn'>
            <img src='../../svg/contacts/tg.svg' />
          </a>
        </li>
        <li>
          <a href='https://wa.me/79524479653'>
            <img src='../../svg/contacts/wa.svg' />
          </a>
        </li>
      </ul>
    </div>
  );

  if (large)
    return (
      <div className={`${styles.footer} ${styles.large}`}>
        <FooterContent />
      </div>
    );
  return (
    <div className={styles.footer}>
      <FooterContent />
    </div>
  );
};
