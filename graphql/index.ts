import { gql } from '@apollo/client';

export const PROJECTS_BLOG_HOME_PAGE = gql`
  query ProjectsAndBlogs {
    projects(filters: { featured: { eq: true } }) {
      data {
        id
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
                name
                alternativeText
              }
            }
          }
          github
          url
          featured
          visible
          stack {
            id
            title
          }
          updatedAt
          createdAt
        }
      }
    }
    blogs {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          slug
          category
          date
          desc
          createdAt
          updatedAt
        }
      }
    }
  }
`;


export const ABOUT_ABOUT = gql`
  query About {
    about {
      data {
        id
        attributes {
          title
          info
          visible
          image {
            data {
              id
              attributes {
                name
                alternativeText
                url
              }
            }
          }
          createdAt
          updatedAt
          stack {
            id
            title
          }
        }
      }
    }
  }
`;

export const GET_ALL_PROJECTS_PROJECTS = gql`
  query Projects {
    projects {
      data {
        id
        attributes {
          title
          description
          image {
            data {
              attributes {
                url
                name
                alternativeText
              }
            }
          }
          github
          url
          featured
          visible
          stack {
            id
            title
          }
          updatedAt
          createdAt
        }
      }
    }
  }
`;

export const GET_ALL_POSTS_BLOG = gql`
  query Blogs {
    blogs {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          slug
          category
          date
          desc
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export const GET_ALL_PROJECT_ID = gql`
  query Projects {
    projects {
      data {
        id
      }
    }
  }
`; 

export const GET_PROJECT = gql`
        query Projects($_id: ID!)  {
          projects(filters: { id: { eq: $_id } }) {
            data {
              id
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                      name
                      alternativeText
                    }
                  }
                }
                github
                url
                featured
                visible
                stack {
                  id
                  title
                }
                updatedAt
                createdAt
              }
            }
          }
        }
      `

      export const GET_ALL_BLOG_POSTS_SLUG = gql`
        query BlogPosts {
          blogs {
            data {
              attributes {
                slug
              }
            }
          }
        }
      `; 


export const GET_BLOG_POST = gql`
  query Blogs($_slug: String!) {
    blogs(filters: { slug: { eq: $_slug } }) {
      data {
        id
        attributes {
          title
          content
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          slug
          category
          date
          desc
          createdAt
          updatedAt
        }
      }
    }
  }
`;