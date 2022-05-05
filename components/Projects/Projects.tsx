import cx from 'classNames';
import Link from 'next/link';
import { Project, Title } from '../../components';
import { ProjectProps } from '../../interfaces';
import styles from './Projects.module.css';

export const Projects = ({
  projects,
  title,
  showLink,
}: {
  projects: ProjectProps[] | [];
  title: String;
  showLink?: Boolean;
}) => {
  return (
    <section className='section'>
      <Title title={title} />
      <div className={cx('sectionCenter', styles.ProjectsCenter)}>
        {projects.map((node) => (
          <Project key={node.id} {...node} />
        ))}
      </div>
      {showLink && (
        <Link href='/projects'>
          <a className={cx('btn', 'centerBtn')}> projects</a>
        </Link>
      )}
    </section>
  );
};
