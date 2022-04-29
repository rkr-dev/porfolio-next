import cx from 'classNames';
import Link from 'next/link';
import { FaAlignRight } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { Links } from '../Links/Links';


export const Navbar = ({ toggleSidebar }: { toggleSidebar: (event: React.MouseEvent<HTMLElement>) => void }) => {
  return (
    <nav className={cx(styles.Navbar)}>
      <div className={styles.NavCenter}>
        <div className={styles.NavHeader}>
          <Link href='/'>
            <a>
              <img
                src='/logo.svg'
                alt='logo'
                style={{
                  width: '50px',
                  height: '50px',
                  border: '3px solid hsl(209, 61%, 16%)',
                }}
              />
            </a>
          </Link>
          <button
            type='button'
            className={styles.ToggleBtn}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <Links styleClass='navLinks'></Links>
      </div>
    </nav>
  );
};