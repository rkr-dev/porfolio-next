import Link from 'next/link';
import type { ReactElement } from 'react';
import { Layout } from '../components';

const container = {
  width: '100%',
  height: '100vh',
};


export default function ErrorPage() {
  return (
    <main style={container}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{fontWeight:'bold',marginBottom:'1rem'}}>Oops its a dead end</h1>
        <Link href='/'>
          <a className='btn'>Go Back to Home</a>
        </Link>
      </div>
    </main>
  );
}

ErrorPage.getLayout = function getLayout(errorPage: ReactElement) {
  return <Layout>{errorPage}</Layout>;
};
