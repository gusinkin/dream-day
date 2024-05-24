import { TagObject, tagObjects } from '@/dataBase/tags';
import styles from '@/styles/TagLink.module.scss';
import Link from 'next/link';

export interface TagLinkProps {
  tagName: string;
}

// Ссылка в виде тега, при переходе по ней открывается каталог,
// отфильтрованный по этому тегу
export const TagLink = (props: TagLinkProps) => {
  const { tagName } = props;

  const tag = tagObjects.find((obj) => obj.name === tagName);
  const route = `/shop/filter/${tag?.route}`;

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
