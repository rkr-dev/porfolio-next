import cx from 'classnames';
import { FaTimes } from 'react-icons/fa';
import { Links } from '../Links/Links';
import { Socials } from '../Socials/Socials';
import styles from './Sidebar.module.css';

export const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: Boolean;
  toggleSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <aside className={cx(styles.Sidebar, isOpen ? styles.ShowSidebar : '')}>
      <button className={styles.CloseBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className={styles.SideContainer ? styles.SideContainer : ''}>
        <Links styleClass={`${isOpen ? 'sidebarLinks' : ''}`} toggleSidebar={ toggleSidebar}/>
        <Socials styleClass={`${isOpen ? 'sidebarIcons' : ''}`} />
      </div>
    </aside>
  );
};
