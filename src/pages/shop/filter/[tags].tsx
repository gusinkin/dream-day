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

export const getStaticPaths: GetStaticPaths = () => {
  // const paths = complexProducts.map((product) => ({
  //   params: { id: product.id.toString() },
  // }));

  return { paths: filteredRoutes, fallback: false };
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
