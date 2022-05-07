import type { ReactElement } from 'react';
import { Layout, Contact } from '../components';


export default function ContactPage() {

  return <Contact  />;
}

ContactPage.getLayout = function getLayout(contactPage: ReactElement) {
  return <Layout>{contactPage}</Layout>;
};