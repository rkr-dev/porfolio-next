import cx from 'classnames';
import { GetStaticProps,GetStaticPaths } from 'next';
import { Layout, ProjectPage } from '../../components';
import { ProjectProps } from '../../interfaces';
import { projects } from '../../utils/data';

type Props = {
  project: ProjectProps;
};

const ProjectDetails = ({project}:Props) => {
  return <Layout>
    {project ? <ProjectPage project={ project}/>:null }
  </Layout>
}

export default ProjectDetails

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    const project = projects.find((data) => data.id === Number(id))
    console.log(id, project);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { project } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}