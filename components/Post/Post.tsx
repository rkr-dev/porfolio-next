import Image from 'next/image';
import Link from 'next/link';
import { PostProps } from '../../interfaces';
import styles from './Post.module.css';

export const Post = ({
  id,
  title,
  content,
  image,
  date,
  category,
  slug,
  desc,
}: PostProps) => {
  return (
    <Link href={`/blog/[slug]`} as={`/blog/${slug}`} key={id}>
      <a>
        <article className={styles.blog}>
          <div className={styles.BlogImg}>
            {image && (
              <Image
                src={image.url}
                alt={image.alternativeText}
                width={`100%`}
                height={`100%`}
                layout='responsive'
                style={{
                  borderTopLeftRadius: '0.25rem',
                  borderTopRightRadius: '0.25rem',
                }}
              />
            )}
          </div>
          <div className={styles.blogCard}>
            <h4>{title}</h4>
            <p className={styles.blogDescription}>
              {desc.length > 125
                ? `${desc.substr(0, 125)} ...`
                : desc}
            </p>
            <div className={styles.blogFooter}>
              <p>{category}</p>
              <p>{date}</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};
