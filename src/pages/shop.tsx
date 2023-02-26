import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect, Dispatch } from 'react';
import { complexProducts } from '../dataBase/complexProducts';
import { tags } from '../dataBase/tags';
import { Product } from '@/components/Product';
import { MainContainer } from '@/components/MainContainer';
import { useRouter } from 'next/router';
import { CartProviderValue } from '@/context/CartProvider';
import { cartContext } from '@/context/CartProvider';
import Cart from './cart';

export interface ShopProps {
  defaultTags: string[];
}
export default function Shop({ defaultTags = [] }: ShopProps) {
  const router = useRouter();
  const [dynamicProducts, setDynamicProducts] = useState(complexProducts);

  const [tagsHaveBeenClicked, setTagsHaveBeenClicked] = useState(false);

  const tagsRef = useRef<HTMLInputElement[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

    function collectTags() {
      return tagsRef.current
        .filter((tag) => tag.checked === true)
        .map((tag) => tag.value);
    }

    let tagsChecked = collectTags();

    if (tagsHaveBeenClicked && !tagsChecked.length) {
      router.push('/shop');
    }

    if (!tagsHaveBeenClicked) {
      setDefaultTagsChecked();

      tagsChecked = collectTags();
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
  }

  useEffect(() => {
    handleTags();
  }, []);

  function handleSearch() {
    tagsRef.current.forEach((tag) => (tag.checked = false));

    if (searchInputRef.current?.value) {
      setDynamicProducts(
        complexProducts.filter(
          (product) =>
            product.name
              .toLowerCase()
              .includes(searchInputRef.current!.value.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(searchInputRef.current!.value.toLowerCase())
        )
      );
    } else {
      setDynamicProducts(complexProducts);
      router.push('/shop');
    }
  }

  return (
    <MainContainer keywords={'каталог'}>
      <div>
        <p>Тут магазин</p>
      </div>
      <br />
      <br />
      <div>
        <ul className='controls'>
          {tags.map((item, index) => (
            <li className='controls__item' key={item}>
              <label className='control__elem'>
                <input
                  type='checkbox'
                  name='tags'
                  value={item}
                  className='controls__checkbox'
                  ref={(element: HTMLInputElement) =>
                    (tagsRef.current[index] = element)
                  }
                  onChange={handleTags}
                />
                <div className='tag controls__tag'>{item}</div>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <br />
      <input ref={searchInputRef} type='text' onChange={handleSearch} />
      <br />
      <br />
      <ul className='catalog'>
        {dynamicProducts.map((dynamicProduct) => (
          <li key={dynamicProduct.name}>
            <Product id={dynamicProduct.id} layout={'productCard'} />
          </li>
        ))}
      </ul>
      {/* <Cart /> */}
    </MainContainer>
  );
}
