import type { ReactElement } from 'react';
import { Hero,Layout } from '../components';


export default function Home() {
  return (
      <div>
        <Hero/>
      </div>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>
    {home}
  </Layout>
} 