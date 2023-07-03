import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { CartProvider } from '../context/CartProvider';
import styles from '@/styles/MainContainer.module.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import path from 'path';

const inter = Inter({ subsets: ['latin'] });

export const MainContainer = ({
  children,
  keywords,
}: {
  children: ReactElement | ReactElement[];
  keywords: string;
}) => {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerColored, setHeaderColored] = useState(false);
  const [backgroundDark, setBackgroundDark] = useState(true);

  const [scrollStatus, setScrollStatus] = useState({
    position: 0,
    up: true,
  });
  const { pathname } = useRouter();
  const handleScroll = (event: Event) => {
    setScrollStatus((prev) => {
      return {
        position: window.scrollY,
        up: window.scrollY < prev.position ? true : false,
      };
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      setBackgroundDark(true);
    } else if (scrollStatus.position >= window.innerHeight * 0.5) {
      setBackgroundDark(true);
    } else {
      setBackgroundDark(false);
    }
    if (scrollStatus.up) {
      setHeaderHidden(false);
    } else {
      setHeaderHidden(true);
    }
    if (scrollStatus.position < window.innerHeight * 0.1) {
      setHeaderColored(false);
    } else {
      setHeaderColored(true);
    }
  }, [scrollStatus]);

  return (
    <div
      className={backgroundDark ? `${styles.wrapper} ${styles.dark}` : styles.wrapper}
      // className={styles.wrapper}
    >
      <Header hidden={headerHidden} colored={headerColored} />
      <div
        className={styles.content}
        // className={
        //   backgroundDark ? `${styles.content} ${styles.dark}` : styles.content
        // }
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
