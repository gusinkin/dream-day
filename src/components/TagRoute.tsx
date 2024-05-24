import { TagObject, tagObjects } from '@/dataBase/tags';
import styles from '@/styles/TagRoute.module.scss';
import Link from 'next/link';

export interface TagLinkProps {
  tagName: string;
}

export const TagRoute = (props: TagLinkProps) => {
  const { tagName } = props;

  const tag = tagObjects.find((obj) => obj.name === tagName);
  // console.log('tag', tag);
  const route = `/shop/filter/${tag?.route}`;
  // console.log('route', route);

  if (tag) {
    return (
      <li className={styles.tagLink} key={tag.name}>
        <Link className={styles.link} href={route}>
          {tag.name}
        </Link>
      </li>
    );
  }
  return null;
};
