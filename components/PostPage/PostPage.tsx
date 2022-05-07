import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { PostProps } from '../../interfaces';
import styles from './PostPage.module.css';

type PostPageProps = {
  post: PostProps;
};

export const PostPage = ({
  post: { id, title, content, image, slug, category, desc, date },
}: PostPageProps) => {
  return (
    <section className={styles.PostPage}>
      <Image
        src={image}
        width={`100%`}
        height={`40%`}
        layout='responsive'
        alt={title}
      />
      <div className={cx('sectionCenter')}>
        <article className={styles.PostContent}>
          <h1>{title}</h1>
          <div className={styles.PostDetails}>
            <span>{category}</span>
            <span>{date}</span>
          </div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
        <Link href='/blog'>
          <a className={cx('btn', 'centerBtn')}> blog</a>
        </Link>
      </div>
    </section>
  );
};
