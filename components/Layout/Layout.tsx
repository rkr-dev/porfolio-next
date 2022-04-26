import Head from 'next/head';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};
