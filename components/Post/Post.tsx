import Image from 'next/image';
import Link from 'next/link';
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
}: {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  category: string;
  desc: string;
  date: string;
}) => {
  return (
    <Link href={`/blog/[slug]`} as={`/blog/${slug}`} key={id}>
      <a>
        <article className={styles.blog}>
          <div className={styles.BlogImg}>
            {image && (
              <Image
                src={image}
                alt={title}
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
            <p className={styles.blogDescription}>{desc}</p>
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
