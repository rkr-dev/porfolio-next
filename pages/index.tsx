import type { ReactElement } from 'react';
import { Hero,Layout,Projects,Posts } from '../components';
import {projects as items, posts as postItems }  from '../utils/data'

export default function Home() {
  const projects = items.filter(project => project.featured === true)
  const posts = postItems.filter((post) => post.featured === true);
  return (
    <div>
      <Hero />
      <Projects projects={projects} title='featured projects' showLink={true} />
      <Posts posts={posts} title='latest Articles' showLink />
    </div>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>
    {home}
  </Layout>
} 