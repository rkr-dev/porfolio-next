import type { ReactElement } from 'react';
import { About, Layout } from '../components';
import { ABOUT_ABOUT } from '../graphql';
import { client } from '../graphql/apollo';

export default function AboutPage({ about }: any) {
  const { title, info, stack, image } = about;
  return <About title={title} info={info} stack={stack} image={image} />;
}

AboutPage.getLayout = function getLayout(aboutPage: ReactElement) {
  return <Layout>{aboutPage}</Layout>;
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: ABOUT_ABOUT,
  });

  const allAbout = {
    id: data.about.data.id,
    title: data.about.data.attributes.title,
    info: data.about.data.attributes.info,
    visible: data.about.data.attributes.visible,
    image: data.about.data.attributes.image.data.attributes,
    stack: data.about.data.attributes.stack,
  };

  return {
    props: {
      about: allAbout,
    },
  };
}
