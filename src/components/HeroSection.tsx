import styles from '@/styles/HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={`${styles.section} ${styles.heroSection}`}>
      <div className={styles.section__container}>
        <div className={styles.heroSection__content}>
          <h1 className={styles.heroSection__title}>DreamDay</h1>
          <p className={styles.heroSection__text}>
            Тут какой-нибудь слоган чтобы все офигели от того какие же мы
            классные
          </p>
          <button className='g'>Подробнее</button>
        </div>
      </div>
    </section>
  );
};
