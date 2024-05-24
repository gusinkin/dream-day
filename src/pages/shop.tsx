import { useState, useRef, useEffect } from 'react';
import { ComplexProduct, complexProducts } from '../dataBase/complexProducts';
import { Product } from '@/components/Product';
import { MainContainer } from '@/components/MainContainer';
import { useRouter } from 'next/router';
import styles from '@/styles/Shop.module.scss';
import { Button, Dialog, IconButton, TextField } from '@mui/material';
import {
  tagObjects,
  tagsTypeColor,
  tagsTypeReason,
  tagsTypeFor,
  tagsTypeHero,
  tagsTypeRest,
  tagsTypeHidden,
} from '@/dataBase/tags';
import { VirtuosoGrid } from 'react-virtuoso';
import CloseIcon from '@mui/icons-material/Close';
import { loadTagsState, saveTagsState } from '@/context/localStorage';
import { Tag } from '@/components/Tag';

// export default function Shop(defaultTags: string[] = []) {
export interface ShopProps {
  presetTags: string[];
}
export default function Shop({ presetTags = [] }: ShopProps) {
  // const screenWidth = window?.innerWidth;
  // const LOAD_STEP = screenWidth > 1100 ? 10 : 6;
  const LOAD_STEP = 10;
  const router = useRouter();
  const defaultTags = presetTags.length > 0 ? presetTags : loadTagsState();

  const [dynamicProducts, setDynamicProducts] = useState(complexProducts);
  // const [visibleProducts, setVisibleProducts] = useState(dynamicProducts.slice(0, LOAD_STEP * 2));
  const [visibleProducts, setVisibleProducts] = useState<ComplexProduct[]>([]);

  const [tagsHaveBeenClicked, setTagsHaveBeenClicked] = useState(false);
  const tagsRef = useRef<HTMLInputElement[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  function collectCheckedTags() {
    return tagsRef.current.filter((tag) => tag.checked === true).map((tag) => tag.value);
  }

  const checkedTags = collectCheckedTags();

  // function collectNotCheckedTags() {
  //   return tagsRef.current.filter((tag) => tag.checked === false).map((tag) => tag.value);
  // }

  function handleTags() {
    setDynamicProducts(complexProducts);
    setTagsHaveBeenClicked(() => true);

    // tagsHaveBeenClicked работает с отставанием на шаг (ебучий useState),
    // но т.к. при загрузке срабатывает useEffect, то после этого срабатывает с первого нажатия

    // вот тут можно поразбираться

    if (searchInputRef.current?.value) {
      searchInputRef.current.value = '';
    }

    function setDefaultTagsChecked() {
      tagsRef.current.forEach((tag) => {
        if (defaultTags.includes(tag.value)) {
          tag.checked = true;
        }
      });
    }

    let tagsChecked = collectCheckedTags();

    if (tagsHaveBeenClicked && !tagsChecked.length) {
      router.push('/shop');
    }

    if (!tagsHaveBeenClicked) {
      setDefaultTagsChecked();

      tagsChecked = collectCheckedTags();
    }

    if (tagsChecked.length) {
      for (let tag of tagsChecked) {
        setDynamicProducts((prevState) =>
          prevState.filter((product) => product.tags.includes(tag))
        );
      }
    } else {
      setDynamicProducts(complexProducts);
    }

    saveTagsState(tagsChecked);
  }

  useEffect(() => {
    handleTags();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleProducts(dynamicProducts.slice(0, 2 * LOAD_STEP));
    }, 0);
    return () => clearTimeout(timeout);
  }, [dynamicProducts]);

  function handleSearch() {
    tagsRef.current.forEach((tag) => (tag.checked = false));

    if (searchInputRef.current?.value) {
      setDynamicProducts(
        complexProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchInputRef.current!.value.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchInputRef.current!.value.toLowerCase()) ||
            product.tags.join().toLowerCase().includes(searchInputRef.current!.value.toLowerCase())
        )
      );
    } else {
      setDynamicProducts(complexProducts);
      router.push('/shop');
    }
  }

  const [tagsModalOpen, setTagsModalOpen] = useState(false);
  const openTagsModal = () => setTagsModalOpen(true);
  const closeTagsModal = () => setTagsModalOpen(false);

  const uncheckTag = (name: string) => {
    tagsRef.current.forEach((el) => {
      if (el.value === name) {
        el.checked = false;
        handleTags();
      }
    });
  };

  const loadMore = (last: number) => {
    return setTimeout(() => {
      setVisibleProducts((prev) =>
        prev.concat(dynamicProducts.slice(last + 1, last + 1 + LOAD_STEP))
      );
    }, 600);
  };

  return (
    <>
      <MainContainer keywords={'каталог'}>
        <div className={styles.longpage__container}>
          <div className={styles.searchBlock}>
            <button className={styles.button} onClick={openTagsModal}>
              Теги для поиска
            </button>
            <TextField
              inputRef={searchInputRef}
              onChange={handleSearch}
              label='Текстовый поиск товара'
            />
          </div>

          <br />

          <div className={styles.checkedTagsBlock}>
            {checkedTags.length > 0 && (
              <>
                <ul className={styles.checkedTagsList}>
                  {checkedTags.map((tag) => (
                    <Tag key={tag} tag={tag} refFunction={null} onChange={uncheckTag} />
                  ))}
                </ul>
              </>
            )}
          </div>

          <br />
          <br />

          <VirtuosoGrid
            useWindowScroll
            data={visibleProducts}
            endReached={loadMore}
            overscan={200}
            itemClassName={styles.catalog__item}
            listClassName={styles.catalog}
            itemContent={(index, dynamicProduct) => (
              <li key={dynamicProduct.id} className={styles.catalog__item}>
                <Product id={dynamicProduct.id} layout={'productCard'} />
              </li>
            )}
            // components={{ Footer }}
          />
        </div>
      </MainContainer>

      <Dialog open={tagsModalOpen} onClose={closeTagsModal} scroll='body' keepMounted disablePortal>
        <div className={styles.modalContent}>
          <div className={styles.closeIconContainer}>
            <IconButton className={styles.icon} onClick={closeTagsModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <p>Цвет</p>
          <ul className={styles.tagsTypeBlock}>
            {tagsTypeColor.map((tag) => (
              <Tag
                key={tag.id}
                tag={tag}
                refFunction={(element: HTMLInputElement) => (tagsRef.current[tag.id] = element)}
                onChange={handleTags}
              />
            ))}
          </ul>
          <p>Повод</p>
          <ul className={styles.tagsTypeBlock}>
            {tagsTypeReason.map((tag) => (
              <Tag
                key={tag.id}
                tag={tag}
                refFunction={(element: HTMLInputElement) => (tagsRef.current[tag.id] = element)}
                onChange={handleTags}
              />
            ))}
          </ul>
          <p>Кому</p>
          <ul className={styles.tagsTypeBlock}>
            {tagsTypeFor.map((tag) => (
              <Tag
                key={tag.id}
                tag={tag}
                refFunction={(element: HTMLInputElement) => (tagsRef.current[tag.id] = element)}
                onChange={handleTags}
              />
            ))}
          </ul>
          <p>Герои</p>
          <ul className={styles.tagsTypeBlock}>
            {tagsTypeHero.map((tag) => (
              <Tag
                key={tag.id}
                tag={tag}
                refFunction={(element: HTMLInputElement) => (tagsRef.current[tag.id] = element)}
                onChange={handleTags}
              />
            ))}
          </ul>
          <p>Прочие</p>
          <ul className={styles.tagsTypeBlock}>
            {tagsTypeRest.map((tag) => (
              <Tag
                key={tag.id}
                tag={tag}
                refFunction={(element: HTMLInputElement) => (tagsRef.current[tag.id] = element)}
                onChange={handleTags}
              />
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
}

// const Footer = () => {
//   return (
//     <div
//       style={{
//         padding: '2rem',
//         display: 'flex',
//         justifyContent: 'center',
//       }}
//     >
//       Loading...
//     </div>
//   );
// };
