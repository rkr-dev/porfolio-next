import { useState } from 'react';
import cx from 'classnames';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Link from 'next/link'
import { Title } from '..';
import styles from './Experience.module.css';
import { jobs } from '../../utils/data';



export const Experience = () => {
  const [value, setValue] = useState(0);
  const { company, position, location, date, desc } = jobs[value];
  return (
    <section
      className={cx('section')}
      style={{
        background: `url('jobs-img.png') no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
        width: '100%',
      }}
    >
      <Title title='experience' />
      <div className={styles.jobsCenter}>
        <div className={styles.btnContainer}>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={cx(
                styles.jobBtn,
                `${index === value && styles.activeBtn}`
              )}
            >
              {item.company}
            </button>
          ))}
        </div>

        <article className={styles.jobInfo}>
          <h2>{position}</h2>
          <h4>{company}</h4>
          <h6>{location}</h6>
          <p className={styles.jobDate}>{date}</p>
          {desc?.map((item:any) => (
            <div key={item.id} className={styles.jobDesc}>
              <FaAngleDoubleRight
                className={styles.jobIcon}
              ></FaAngleDoubleRight>  
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link href='/about'>
        <a className={cx('btn', 'centerBtn')}>more info</a>
      </Link>
    </section>
  );
}