import styles from '@/styles/FilteredRoute.module.scss';
import Link from 'next/link';
import { FilteredRoute } from '@/dataBase/filteredRoutes';

export const Route = (props: FilteredRoute) => {
  const { id, name, link } = props;
  return (
    <Link className={styles.link} href={link}>
      <img
        className={styles.link__img}
        src={`../../images/filteredRoutes/${id}.jpg`}
        alt={name}
      />
      <div className={styles.link__text}>{name}</div>
    </Link>
  );
};
