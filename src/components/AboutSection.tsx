import styles from '@/styles/AboutSection.module.scss';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

export const AboutSection = () => {
  return (
    <section className={`${styles.section} ${styles.aboutSection}`}>
      <div className={styles.section__container}>
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

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=''
          containerClass='container-with-dots'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          ssr
          swipeable
        >
          <div>
            <img src='../../images/about/1.jpg' />
          </div>
          <div>
            <img src='../../images/about/2.jpg' />
          </div>
          <div>
            <img src='../../images/about/3.jpg' />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
