import Image from 'next/image';
import Link from 'next/Link';
import {ProjectProps} from '../../interfaces'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import styles from './Project.module.css';

export const Project = ({
  id,
  description,
  title,
  github,
  stack,
  url,
  image,
  featured,
  visible,
}: ProjectProps) => {
  return (
    <Link href={`/projects/[id]`} as={`/projects/${id}`}>
      <a>
        <article className={styles.Project}>
          <div className={styles.ImageContainer}>
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

          <div className={styles.ProjectCard}>
            <h4>{title}</h4>
            <p>
              {description.length > 100
                ? `${description.substr(0, 100)} ...`
                : description}
            </p>
            <div className={styles.ProjectStack}>
              <div className={styles.ProjectStackItems}>
                {stack.map((item: any) => (
                  <span key={item.id}>{item.title}</span>
                ))}
              </div>
              <div className={styles.ProjectFooter}>
                {github && (
                  <FaGithubSquare
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(github, `_blank`);
                    }}
                    style={{
                      height: '1.7rem',
                      width: '1.7rem',
                      backgroundColor: '#333',
                      cursor: 'pointer',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '2px',
                    }}
                  ></FaGithubSquare>
                )}
                <FaShareSquare
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(url, `_blank`);
                  }}
                  style={{
                    height: '1.7rem',
                    width: '1.7rem',
                    backgroundColor: '#000',
                    cursor: 'pointer',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    marginRight: '2px',
                  }}
                ></FaShareSquare>
              </div>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
};
