import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { CartProvider } from '../context/CartProvider';

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
      <div className='navbar'>
        <Link href='/'>Главная</Link>
        <Link href='/shop'>Магазин</Link>
        <Link href='/cart'>Корзина</Link>
      </div>
      <div>{children}</div>
    </>
  );
};
