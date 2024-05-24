import { TagObject } from '@/dataBase/tags';
import styles from '@/styles/Tag.module.scss';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export interface TagProps {
  tag: TagObject;
  refFunction: (element: HTMLInputElement) => void;
  onChange: () => void;
}

export interface CheckedTagProps {
  tag: string;
  refFunction: null;
  onChange: (tag: string) => void;
}

export const Tag = ({ tag, refFunction, onChange }: TagProps | CheckedTagProps) => {
  if (refFunction) {
    return (
      // теги для фильтрации, которые появляются в модалке
      <li>
        <label className={styles.label}>
          <input
            type='checkbox'
            name='tags'
            value={tag.name}
            className={styles.checkbox}
            ref={refFunction}
            onChange={onChange}
          />
          <div className={styles.tag}>{tag.name}</div>
        </label>
      </li>
    );
  }
  return (
    // отмеченные теги, которые выносятся перед списком товаров
    <li>
      <label className={styles.label}>
        <input type='checkbox' name='tags' value={tag} className={styles.checkbox} checked={true} />
        <div className={`${styles.tag} ${styles.tagWithDelete}`}>
          <p>{tag}</p>
          <div className={styles.deleteIconContainer}>
            <IconButton className={styles.icon} onClick={() => onChange(tag)}>
              <CloseIcon
                sx={{
                  fontSize: 16,
                  margin: '-4px',
                }}
              />
            </IconButton>
          </div>
        </div>
      </label>
    </li>
  );
};
