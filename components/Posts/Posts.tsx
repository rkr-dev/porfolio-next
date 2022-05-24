import cx from 'classnames';
import Link from 'next/link';
import { Post, Title } from '../../components';
import { PostProps } from '../../interfaces';
import styles from './Posts.module.css';

export const Posts = ({
  posts,
  title,
  showLink
}: {
  posts: PostProps[] | [];
  title: string;
  showLink?: boolean;
}) => {
  return (
    <section className='section'>
      <Title title={title} />
      <div className={cx('sectionCenter', styles.blogsCenter)}>
        {posts.map((node: PostProps) => (
          <Post key={node.id} {...node} />
        ))}
      </div>
      {showLink && (
        <Link href='/blog'>
          <a className={cx('btn', 'centerBtn')}>blog</a>
        </Link>
      )}
    </section>
  );
};
