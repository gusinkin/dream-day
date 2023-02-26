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

export default function () {
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
