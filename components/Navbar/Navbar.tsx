import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image'
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
              <Image
                src='/icon.png'
                alt='logo'
                width={50}
                height={50}
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