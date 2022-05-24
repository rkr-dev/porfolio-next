import Link from 'next/link';
import Image from 'next/image'
import cx from 'classnames';
import {Title} from '../../components'
import styles from './About.module.css';
import { ImageProps } from '../../interfaces';


export const About = ({
  title,
  info,
  stack,
  image,
}: {
  title: string;
  info: string;
  stack: { id: number; title: string }[] | [];
  image: ImageProps;
}) => {
  return (
    <section className={styles.AboutPage}>
      <div className={cx('SectionCenter', styles.AboutCenter)}>
        <div className={styles.AboutImgContainer}>
          <Image
            src={image.url}
            alt={image.alternativeText}
            layout='fixed'
            width={250}
            height={250}
            style={{ borderRadius: '50%', margin: '0' }}
          />
        </div>
        <article className={styles.AboutText}>
          <Title title={title} styleClass='about' />
          <p>{info}</p>
          <div className={styles.AboutStack}>
            {stack.map((item: any) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </article>
      </div>
      <Link href='/projects'>
        <a className={cx('btn', 'centerBtn')}>Projects</a>
      </Link>
    </section>
  );
};
