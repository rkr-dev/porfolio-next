import type { ReactElement } from 'react';
import { Layout, Posts } from '../components';
import { posts } from '../utils/data';


export default function BlogPage() {
  return (
      <section className='blogPage'>
        <Posts posts={posts} title='Blog' />
      </section>
  );
}

BlogPage.getLayout = function getLayout(blogPage: ReactElement) {
  return <Layout>{blogPage}</Layout>;
};