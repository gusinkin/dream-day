import styles from '@/styles/HeroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.section__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>DreamDay</h1>
          <p className={styles.hero__text}>
            Тут какой-нибудь слоган чтобы все офигели от того какие же мы
            классные
          </p>
          <button className='g'>Подробнее</button>
        </div>
      </div>
    </section>
  );
};
