import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { CartProvider } from '../context/CartProvider';
import styles from '@/styles/MainContainer.module.scss';
import { Header } from './Header';
import { Footer } from './Footer';

const inter = Inter({ subsets: ['latin'] });

export const MainContainer = ({
  children,
  keywords,
}: {
  children: any;
  keywords: string;
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
      {/* <div className={styles.something}></div> */}
    </>
  );
};
