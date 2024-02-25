import styles from '@/styles/AboutSection.module.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 920 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 920, min: 520 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
  },
};

export const AboutSection = () => {
  return (
    <section className={`${styles.section} ${styles.aboutSection}`}>
      <div className={styles.section__container}>
        <div className={styles.aboutInfo}>
          <h2 className={styles.section__title}>О нас</h2>
          <div className={styles.aboutText}>
            <p>
              Нас зовут Дима и Лена, и вот уже несколько лет мы надуваем воздушные шарики, делаем
              красочные композиции из них и праздничные фотозоны! Свои первые воздушные шарики мы
              надули на свою собственную свадьбу 5 лет назад и с тех пор посвящаем часть своей жизни
              этому прекрасному занятию. Мы очень любим своё дело, любим создавать что-то новое,
              красивое и очень любим радовать вас своими работами.
            </p>
          </div>
        </div>

        <Carousel autoPlay draggable={false} infinite responsive={responsive} ssr swipeable>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='../../images/about/1.jpg' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='../../images/about/2.jpg' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='../../images/about/3.jpg' />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
