import Link from 'next/link';
import Image from 'next/image'
import cx from 'classnames';
import {Title} from '../../components'
import styles from './About.module.css';


export const About = ({
  title,
  info,
  stack,
  image,
}: {
  title: String;
  info: String;
  stack: { id: Number; title: String }[] | [];
  image: string;
}) => {
  return (
    <section className={styles.AboutPage}>
      <div className={cx('SectionCenter', styles.AboutCenter)}>
        <div className={styles.AboutImgContainer}>
          <Image
            src={image}
            alt={title}
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
