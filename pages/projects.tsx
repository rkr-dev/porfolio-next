import type { ReactElement } from 'react';
import { Layout, Projects } from '../components';
import {projects } from '../utils/data'

export default function ProjectsPage() {
  
  return (
    <section>
      <Projects projects={projects} title='All projects'/>
    </section>
  );
}

ProjectsPage.getLayout = function getLayout(projectsPage: ReactElement) {
  return <Layout>{projectsPage}</Layout>;
};
