import cx from 'classnames';
import Link from 'next/link';
import { Post, Title } from '../../components';
import styles from './Posts.module.css';

export const Posts = ({
  posts,
  title,
  showLink,
}: {
  posts:
    | {
        id: string;
        title: string;
        content: string;
        image: string;
        slug: string;
        category: string;
        desc: string;
        date: string;
      }[]
    | [],
  title: string,
  showLink?: Boolean
}) => {
  return (
    <section className='section'>
      <Title title={title} />
      <div className={cx('sectionCenter', styles.blogsCenter)}>
        {posts.map((node) => (
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
