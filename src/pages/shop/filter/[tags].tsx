import { useRouter } from 'next/router';
import {
  Product,
  // ProductProps
} from '@/components/Product';
import { BaseBlock, baseBlocks } from '../../../dataBase/baseBlocks';
import {
  ComplexProduct,
  complexProducts,
} from '../../../dataBase/complexProducts';
import { MainContainer } from '@/components/MainContainer';
import Shop from '@/pages/shop';
import { GetStaticProps, GetStaticPaths } from 'next';
import { filteredRoutes } from '@/routes/filteredRoutes';
import { FilteredRoutes } from '@/dataBase/filteredRoutes';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = FilteredRoutes.map((route) => route.link);

  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { ...params },
});

export default function FilteredShop() {
  const { query } = useRouter();
  const str = query.tags;
  let result: string[];
  if (typeof str === 'string') {
    if (str.includes('+')) {
      result = str.split('+');
    } else {
      result = [str];
    }
  } else result = [];
  return <Shop defaultTags={result} />;
}
