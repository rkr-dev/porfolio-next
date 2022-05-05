import cx from 'classnames';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Layout, PostPage } from '../../components';
import { PostProps } from '../../interfaces';
import { posts } from '../../utils/data';

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
  // Get the paths we want to pre-render based on users
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    const post = posts.find((data) => data.slug === slug);

    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { post } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
