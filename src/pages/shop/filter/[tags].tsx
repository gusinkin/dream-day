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
  const stringWithTags = query.tags;
  let tagRoutes: string[];

  if (typeof stringWithTags === 'string') {
    if (stringWithTags.includes('+')) {
      tagRoutes = stringWithTags.split('+');
    } else {
      tagRoutes = [stringWithTags];
    }
  } else tagRoutes = [];

  const tagNames = tagRoutes.flatMap((tagRoute) => {
    const obj = tagObjects.find((tagObject) => tagObject.route === tagRoute);
    return obj ? obj.name : [];
  });

  return <Shop defaultTags={tagNames} />;
}
