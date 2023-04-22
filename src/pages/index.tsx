import { MainContainer } from '@/components/MainContainer';
import { HeroSection } from '@/components/HeroSection';

import styles from '@/styles/Main.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import { SomeSection } from '@/components/SomeSection';
import { FilteredRoutesSection } from '@/components/FilteredRoutesSection';

export default function Main() {
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
