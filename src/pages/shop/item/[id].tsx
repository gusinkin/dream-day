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

import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = () => {
  // let paths;
  const paths = complexProducts.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { ...params },
});

export default function ShopItem() {
  const { query } = useRouter();
  const id: number = Number(query.id);
  return (
    <MainContainer keywords={'товар'}>
      <div>товар номер {id}</div>
      <Product id={id} layout={'productPage'} />
    </MainContainer>
  );
}
