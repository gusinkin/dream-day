import styles from '@/styles/FilteredRoute.module.scss';
import Link from 'next/link';
import { FilteredRoute } from '@/dataBase/filteredRoutes';

export const Route = (props: FilteredRoute) => {
  const { name, link } = props;
  return (
    <Link className={styles.link} href={link}>
      {name}
    </Link>
  );
};
