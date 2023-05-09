import styles from '@/styles/FilteredRoutesSection.module.scss';
import Link from 'next/link';
import { FilteredRoutes } from '@/dataBase/filteredRoutes';
import { Route } from './Route';

export const FilteredRoutesSection = () => {
  return (
    <section className={`${styles.section} ${styles.filteredRoutesSection}`}>
      <div className={styles.section__container}>
        <h2 className={styles.section__title}>
          Тут секция с плитками-ссылками на типичные запросы
        </h2>
        <ul className={styles.filteredRoutesSection__list}>
          {FilteredRoutes.map((route) => {
            return (
              <li key={route.name}>
                <Route id={route.id} name={route.name} link={route.link} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
