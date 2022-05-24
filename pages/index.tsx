import type { ReactElement } from 'react';
import { Hero, Layout, Posts, Projects } from '../components';
import { PROJECTS_BLOG_HOME_PAGE } from '../graphql';
import { client } from '../graphql/apollo';

export default function Home({ projects, posts }:any) {

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

export async function getStaticProps() {
  const { data } = await client.query({
    query: PROJECTS_BLOG_HOME_PAGE,
  });
  
  const projectsData = data.projects.data.map((project: any) => {
    return {
      id: project.id,
      title: project.attributes.title,
      description: project.attributes.description,
      image: project.attributes.image.data.attributes,
      github: project.attributes.github,
      url: project.attributes.url,
      featured: project.attributes.featured,
      stack: project.attributes.stack,
      visible: project.attributes.visible,
    };
  });

  const blogPostsData = data.blogs.data.map((post: any) => {
    return {
      id: post.id,
      title: post.attributes.title,
      content: post.attributes.content,
      image: post.attributes.image.data.attributes,
      slug: post.attributes.slug,
      category: post.attributes.category,
      desc: post.attributes.desc,
      date: post.attributes.date,
    };
  });


  return {
    props: {
      projects:projectsData,
      posts:blogPostsData,
    },
  };
}

