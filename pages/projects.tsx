import type { ReactElement } from 'react';
import { Layout, Projects } from '../components';
import { GET_ALL_PROJECTS_PROJECTS } from '../graphql';
import { client } from '../graphql/apollo';

export default function ProjectsPage({ projects}:any) {

  return (
    <section>
      <Projects projects={projects} title='All projects' />
    </section>
  );
}

ProjectsPage.getLayout = function getLayout(projectsPage: ReactElement) {
  return <Layout>{projectsPage}</Layout>;
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_PROJECTS_PROJECTS,
  });
  const allProjects = data.projects.data.map((project: any) => {
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

  return {
    props: {
      projects: allProjects,
    },
  };
}