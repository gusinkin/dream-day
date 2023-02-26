import { MainContainer } from '@/components/MainContainer';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <MainContainer keywords={'домашняя страница'}>
        <div>
          <p>Тут главная страница</p>
          <Link href={'/shop/filter/розовые'}>
            ссылка на магазин с тэгом розовые
          </Link>
          <br />
          <Link href={'/shop/filter/розовые+фикс цена'}>
            ссылка на магазин с тэгом розовые+фикс цена
          </Link>
        </div>
      </MainContainer>
    </>
  );
}
