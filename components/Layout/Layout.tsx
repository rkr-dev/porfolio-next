import Head from 'next/head';
import { useState } from 'react';
import { Footer, Navbar, Sidebar } from '../../components';
import StrapiApolloProvider from '../../graphql/apollo';
import styles from './Layout.module.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((open) => !open);
  };

  return (
    <StrapiApolloProvider>
    <div className={styles.Layout}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <Footer />
      </div>
    </StrapiApolloProvider>
  );
};
