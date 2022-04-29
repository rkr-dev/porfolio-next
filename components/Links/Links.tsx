import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { links } from '../../constants/links';
import styles from './Links.module.css';

const tempLinks = links.map(({ id, text, url }) => (
  <li key={id}>
    <Link href={url}>
      <a>{text}</a>
    </Link>
  </li>
));

export const Links = ({
  styleClass,
  toggleSidebar,
}: {
  styleClass: String;
  toggleSidebar?: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { NavLinks, SidebarLinks } = styles;
  return (
    <ul
      className={cx(styleClass === 'navLinks' ? NavLinks : SidebarLinks)}
      onClick={toggleSidebar}
    >
      {tempLinks}
    </ul>
  );
};
