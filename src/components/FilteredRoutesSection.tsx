import styles from '@/styles/FilteredRoutesSection.module.scss';
import Link from 'next/link';
import { filteredRoutes } from '@/dataBase/filteredRoutes';
import { Route } from './Route';

export const FilteredRoutesSection = () => {
  return (
    <section className={`${styles.section} ${styles.filteredRoutesSection}`}>
      <div className={styles.section__container}>
        {/* <h2 className={styles.section__title}>
          Тут секция с плитками-ссылками на типичные запросы
        </h2> */}
        <ul className={styles.filteredRoutesSection__list}>
          {filteredRoutes.map((route) => {
            return (
              <li
                key={route.name}
                className={styles.filteredRoutesSection__item}
              >
                <Route id={route.id} name={route.name} link={route.link} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
