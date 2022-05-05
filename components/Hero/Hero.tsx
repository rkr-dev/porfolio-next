import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import Typed from 'typed.js';
import { Quotes, Socials } from '../../components';
import styles from './Hero.module.css';

const nameOptions = {
  strings: ['Rinil <span>Kunhiraman</span>'],
  typeSpeed: 200,
  showCursor: false,
};
export const NameTyper = () => {
  const el: any = React.useRef(null);
  const typed: any = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, nameOptions);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div
      aria-label='Rinil Kunhiraman'
      className={styles.TypeWrapOne}
      ref={el}
    ></div>
  );
};

const titleOptions = {
  strings: [
    'WEB DEVELOPER',
    'FREELANCER',
    'WEB3',
    'FRONT END',
    'BACK END',
    'MERN STACK',
  ],
  typeSpeed: 200,
  backSpeed: 125,
  startDelay: 4500,
  showCursor: false,
  smartBackspace: true,
  loop: true,
};
export const TitleTyper = () => {
  const el: any = React.useRef(null);
  const typed: any = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, titleOptions);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div
      aria-label='Web Developer'
      className={styles.TypeWrapTwo}
      ref={el}
    ></div>
  );
};

export const Hero = () => {
  return (
    <header
      className={styles.Hero}
      style={{
        background: `url('/hero-img.png') no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className={cx('sectionCenter', styles.HeroCenter)}>
        <article className={styles.HeroInfo}>
          <div>
            <div className={cx('underline', styles.HeroLeft)}></div>
            <NameTyper />
            <TitleTyper />
            <Link href='/about'>
              <a className={cx('btn', styles.AbtBtn)}>Learn More</a>
            </Link>
          </div>
          <Socials />
          <Quotes />
        </article>
      </div>
    </header>
  );
};
