import styles from '@/styles/HeroSection.module.scss';

export const HeroSection = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={`${styles.section} ${styles.heroSection}`}>
      {/* <div className={styles.section__container}> */}
      <div className={styles.heroSection__content}>
        <h3 className={styles.heroSection__subtitle}>СОЗДАНИЕ СЧАСТЛИВЫХ МОМЕНТОВ</h3>
        <h1 className={styles.heroSection__title}>DREAM DAY</h1>
        <h3 className={styles.heroSection__subtitle}>ВОЗДУШНЫЕ ШАРЫ И ОФОРМЛЕНИЕ</h3>
        <p className={styles.heroSection__text}>
          МЫ – КОМАНДА DREAM DAY. УЖЕ НЕСКОЛЬКО ЛЕТ МЫ СОЗДАЕМ КРАСОЧНЫЕ КОМПОЗИЦИИ ИЗ ВОЗДУШНЫХ
          ШАРОВ, ФОТОЗОНЫ, ОФОРМЛЯЕМ ПРАЗДНИКИ И МЕРОПРИЯТИЯ. НАША ЗАДАЧА – СДЕЛАТЬ ВАШ ПРАЗДНИК
          ЯРЧЕ!
        </p>
        <button className={styles.button} onClick={scrollDown}>
          ПОДОБРАТЬ ШАРИКИ
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};
