import type { ReactElement } from 'react';
import { Layout } from '../components/Layout/Layout';

export default function Home() {
  return (
      <div>
        <h2>hello</h2>
      </div>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>
    {home}
  </Layout>
} 