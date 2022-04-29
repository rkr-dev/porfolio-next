import { Socials } from '../../components';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div>
        <Socials styleClass='footerLinks'></Socials>
        <h4>
          Copyright &copy; {new Date().getFullYear()}
          <span>RK</span> All rights reserved
        </h4>
      </div>
    </footer>
  );
};
