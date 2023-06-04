import { MainContainer } from '@/components/MainContainer';
import { HeroSection } from '@/components/HeroSection';

import styles from '@/styles/Main.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { SomeSection } from '@/components/SomeSection';
import { FilteredRoutesSection } from '@/components/FilteredRoutesSection';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Main() {
  // useEffect(() => {
  //   window.scrollTo({
  //     top: scroll * window.innerHeight,
  //     behavior: 'smooth',
  //   });
  // }, [scroll]);

  return (
    <>
      <MainContainer keywords={'домашняя страница'}>
        <HeroSection />
        <FilteredRoutesSection />
        <SomeSection />
      </MainContainer>
    </>
  );
}
