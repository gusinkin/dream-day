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

// import { GetStaticProps } from 'next'

// type Post = {
//   author: string
//   content: string
// }

export default function () {
  const { query } = useRouter();
  const id: number = Number(query.id);
  return (
    <MainContainer keywords={'товар'}>
      <div>товар номер {id}</div>
      <Product id={id} layout={'productPage'} />
    </MainContainer>
  );
}
// export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
//   context
// ) => {
//   const res = await fetch('https://.../posts')
//   const posts: Post[] = await res.json()

//   return {
//     props: {
//       posts,
//     },
//   }
// }
