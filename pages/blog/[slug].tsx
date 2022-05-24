import { client } from '../../graphql/apollo';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout, PostPage } from '../../components';
import { PostProps } from '../../interfaces';
import { GET_ALL_BLOG_POSTS_SLUG, GET_BLOG_POST } from '../../graphql';

type Props = {
  post?: PostProps;
};

const PostDetails = ({ post }: Props) => {
  return (
    <Layout>
      {post ? <PostPage post={post} />: null}
    </Layout>
  );
};

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {

  const { data } = await client.query({
    query: GET_ALL_BLOG_POSTS_SLUG,
  });

  // Get the paths we want to pre-render based on users
  const paths = data.blogs.data.map((post:any) => ({
    params: { slug: post.attributes.slug },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    // const slug = params?.slug;
    
    const { data } = await client.query({
      query: GET_BLOG_POST,
      variables: {
        _slug: params?.slug,
      },
    });

    const post = {
      id: data.blogs.data[0].id,
      title: data.blogs.data[0].attributes.title,
      content: data.blogs.data[0].attributes.content,
      image: data.blogs.data[0].attributes.image.data.attributes,
      slug: data.blogs.data[0].attributes.slug,
      category: data.blogs.data[0].attributes.category,
      desc: data.blogs.data[0].attributes.desc,
      date: data.blogs.data[0].attributes.date,
    };

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { post } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
