import { useRouter } from 'next/router';
import Shop from '@/pages/shop';
import { GetStaticProps, GetStaticPaths } from 'next';
import { filteredRoutes } from '@/dataBase/filteredRoutes';
import { tagObjects } from '@/dataBase/tags';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = filteredRoutes
    .map((route) => route.link)
    .concat(tagObjects.map((obj) => `/shop/filter/${obj.route}`));

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
