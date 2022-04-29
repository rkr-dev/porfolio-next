import cx from 'classnames';
import { socials } from '../../constants/links';
import styles from './Socials.module.css';

const links = socials.map(({ id, icon, url }) => {
  return (
    <li key={id}>
      <a
        href={url}
        className={cx(styles.SocialLink)}
        rel='noopener noreferrer'
        target='_blank'
      >
        {icon}
      </a>
    </li>
  );
});

export const Socials = ({ styleClass }:{styleClass :String}) => {
  const { FooterLinks, SidebarIcons } = styles;

  return (
    <ul
      className={cx(
        styles.SocialLinks,
        styleClass === 'footerLinks' ? FooterLinks : SidebarIcons
      )}
    >
      {links}
    </ul>
  );
};
