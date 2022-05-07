import type { ReactElement } from 'react';
import { Hero, Layout, Posts, Projects } from '../components';
import { posts as postItems, projects as items } from '../utils/data';

export default function Home() {
  const projects = items.filter((project) => project.featured === true);
  const posts = postItems.filter((post) => post.featured === true);
  return (
    <div>
      <Hero />
      <Projects projects={projects} title='featured projects' showLink={true} />
      <Posts posts={posts} title='latest Articles' showLink />
      {/* <Experience /> */}
    </div>
  );
}

Home.getLayout = function getLayout(home: ReactElement) {
  return <Layout>{home}</Layout>;
};
