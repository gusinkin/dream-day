import styles from '@/styles/FilteredRoutesSection.module.scss';
import Link from 'next/link';
import { filteredRoutes } from '@/dataBase/filteredRoutes';
import { Route } from './Route';
import { useRouter } from 'next/router';

export const FilteredRoutesSection = () => {
  const router = useRouter();
  return (
    <section className={`${styles.section} ${styles.filteredRoutesSection}`}>
      <div className={styles.section__container}>
        <div className={styles.filteredRoutesSection__listwrapper}>
          <ul className={styles.filteredRoutesSection__list}>
            {filteredRoutes.map((route) => {
              return (
                <li key={route.name} className={styles.filteredRoutesSection__item}>
                  <Route id={route.id} name={route.name} link={route.link} />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className={styles.button} onClick={() => router.push('/shop')}>
            Больше шариков!
          </button>
        </div>
      </div>
    </section>
  );
};
