import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import { ProjectProps } from '../../interfaces';
import styles from './ProjectPage.module.css';

type ProjectPageProps = {
  project: ProjectProps;
};

export const ProjectPage = ({
  project: { title, description, stack, image, github, url },
}: ProjectPageProps) => {
  return (
    <section className={styles.ProjectTemplate}>
      <div className={cx('sectionCenter')}>
        <Image
          src={image}
          width={`100%`}
          height={`100%`}
          layout='responsive'
          alt={title}
          style={{
            borderTopLeftRadius: '0.25rem',
            borderTopRightRadius: '0.25rem',
          }}
        />
        <div className={styles.ProjectDetails}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.ProjectStack}>
            {stack.map((item: any) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
          <div className={styles.ProjectLinks}>
            <a href={github} rel='noopener noreferrer' target='_blank'>
              <FaGithubSquare className={styles.ProjectIcon}></FaGithubSquare>
            </a>
            <a href={url} rel='noopener noreferrer' target='_blank'>
              <FaShareSquare className={styles.ProjectIcon}></FaShareSquare>
            </a>
          </div>
        </div>
        <Link href='/projects'>
          <a className={cx('btn', 'centerBtn')}>projects</a>
        </Link>
      </div>
    </section>
  );
};
