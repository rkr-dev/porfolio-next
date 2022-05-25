import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
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
        src={image.url}
        width={`100%`}
        height={`40%`}
        layout='responsive'
        alt={image.alternativeText}
      />
      <div className={cx('sectionCenter')}>
        <article className={styles.PostContent}>
          <h1>{title}</h1>
          <div className={styles.PostDetails}>
            <span>{category}</span>
            <span>{format(new Date(date), 'd.M.yyyy HH:mm:ss')}</span>
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
