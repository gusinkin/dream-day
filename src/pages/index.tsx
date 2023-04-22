import { MainContainer } from '@/components/MainContainer';
import styles from '@/styles/Home.module.scss';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <MainContainer keywords={'домашняя страница'}>
        <section className={styles.section}>
          <p>Тут главная страница</p>
          <Link className={styles.link} href={'/shop/filter/розовые'}>
            ссылка на магазин с тэгом розовые
          </Link>
          <br />
          <Link className={styles.link} href={'/shop/filter/розовые+фикс цена'}>
            ссылка на магазин с тэгом розовые+фикс цена
          </Link>
        </section>
      </MainContainer>
    </>
  );
}
