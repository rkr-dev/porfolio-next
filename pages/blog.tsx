import type { ReactElement } from 'react';
import { client } from '../graphql/apollo';
import { Layout, Posts } from '../components';
import { GET_ALL_POSTS_BLOG } from '../graphql';


export default function BlogPage({posts}:any) {
  return (
    <section className='blogPage'>
        <Posts posts={posts} title='Blog' />
      </section>
  );
}

BlogPage.getLayout = function getLayout(blogPage: ReactElement) {
  return <Layout>{blogPage}</Layout>;
};


export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_POSTS_BLOG,
  });
  const allBlogs = data.blogs.data.map((post: any) => {
    return {
      id: post.id,
      title: post.attributes.title,
      content: post.attributes.content,
      image: post.attributes.image.data.attributes,
      slug: post.attributes.slug,
      category: post.attributes.category,
      desc: post.attributes.desc,
      date: post.attributes.date,
    };
  });

  return {
    props: {
      posts: allBlogs,
    },
  };
}