import { MainContainer } from '@/components/MainContainer';
import { HeroSection } from '@/components/HeroSection';

import styles from '@/styles/Main.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { DeliverySection } from '@/components/DeliverySection';
import { FilteredRoutesSection } from '@/components/FilteredRoutesSection';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AboutSection } from '@/components/AboutSection';

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
        <AboutSection />
        <DeliverySection />
      </MainContainer>
    </>
  );
}
