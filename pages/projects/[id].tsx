import { client } from '../../graphql/apollo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout, ProjectPage } from '../../components';
import { ProjectProps } from '../../interfaces';
import { GET_ALL_PROJECT_ID, GET_PROJECT } from '../../graphql';

type Props = {
  project: ProjectProps;
};

const ProjectDetails = ({ project }: Props) => {
  return <Layout>{project ? <ProjectPage project={project} /> : null}</Layout>;
};

export default ProjectDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_PROJECT_ID,
  });
  const projects = data.projects.data;
  const paths = projects.map((project: any) => ({
    params: { id: project.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await client.query({
      query: GET_PROJECT,
      variables: {
        _id: params?.id,
      },
    });
    const project = {
      id: data.projects.data[0].id,
      title: data.projects.data[0].attributes.title,
      description: data.projects.data[0].attributes.description,
      image: data.projects.data[0].attributes.image.data.attributes,
      github: data.projects.data[0].attributes.github,
      url: data.projects.data[0].attributes.url,
      featured: data.projects.data[0].attributes.featured,
      stack: data.projects.data[0].attributes.stack,
      visible: data.projects.data[0].attributes.visible,
    };
    return { props: { project } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
