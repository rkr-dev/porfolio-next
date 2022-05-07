import { ProjectProps,PostProps,JobProps } from '../interfaces';

export const projects:ProjectProps[] = [
  {
    id: 1,
    title: 'Amazon-Web3',
    description: `Amazon clone built using React and Moralis. The user can select the products from the buy using MATIC tokens`,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1646157097/Screen_Shot_2022_03_01_at_9_45_18_AM_aa3bfb66ad.png',
    github: 'https://github.com/rkr-dev/amazon-web3-moralis',
    url: 'https://amazonweb3.netlify.app/',
    featured: true,
    stack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Moralis' },
      { id: 3, title: 'antd' },
    ],
    visible: true,
  },
  {
    id: 2,
    title: 'Devvy',
    description: `Created as a part of an agile team project for the Chingu voyage. The web app is built using Sveltekit, GraphQL, ImageKit, and FaunaDB. `,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1637589203/devvvy_fd120a7645.png',
    github: 'https://github.com/chingu-voyages/v34-bears-team-08',
    url: 'https://devvy.netlify.app/',
    featured: true,
    stack: [
      { id: 1, title: 'Sveltekit' },
      { id: 2, title: 'Imagekit' },
      { id: 3, title: 'GraphQL' },
      { id: 4, title: 'FaunaDB' },
      { id: 5, title: 'Serverless' },
    ],
    visible: true,
  },
  {
    id: 3,
    title: 'InstaApp',
    description: `Web app  is built using MERN stack and Redux for the state management, you can upload photos  like Instagram  and  view posts from other users. You can also like and comment on posts. Users can  create an account and start using just like social media.`,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1637589018/Insta_App_bfbd3a9e1f.png',
    github: 'https://github.com/rkr-dev/instaapp-client',
    url: 'https://instaaapp.netlify.app',
    featured: true,
    stack: [
      { id: 1, title: 'MongoDB' },
      { id: 2, title: 'Express' },
      { id: 3, title: 'React' },
      { id: 4, title: 'NodeJS' },
      { id: 5, title: 'Cloudinary' },
      { id: 6, title: 'Redux' },
    ],
    visible: true,
  },
  {
    id: 4,
    title: 'TorontoJS',
    description: `Website built using Gatsby, Graphql and Contentful. Inspired by the Torontojs website but not the official website.`,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1636103507/torontojs_aa89789faa.png',
    github: 'https://github.com/rkr-dev/torontojs',
    url: 'https://torontojs.netlify.app/',
    featured: false,
    stack: [
      { id: 1, title: 'React' },
      { id: 2, title: 'Gatsby' },
      { id: 3, title: 'Graphql' },
      { id: 4, title: 'Contentful' },
      { id: 5, title: 'CSS Modules' },
    ],
    visible: true,
  },
  {
    id: 5,
    title: 'Own Employed',
    description: `Responsible for building the UI using ReactJS from the design. Collaborated with the design team and the team of developers remotely.`,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1612707920/ownemployed_cb47c644bb.png',
    github: 'https://github.com/Ownemployed-Team',
    url: 'https://ownemployed.com/',
    featured: false,
    stack: [
      { id: 1, title: 'NextJS' },
      { id: 2, title: 'TypeScript' },
      { id: 3, title: 'ApolloJS' },
      { id: 4, title: 'GraphQL' },
      { id: 5, title: 'NodeJS' },
      { id: 6, title: 'Cloudinary' },
    ],
    visible: true,
  },
  {
    id: 6,
    title: 'RecallGraph',
    description: `Developed a website for  Recall Graph, a company that deals with time-graph based data store. Gatsby, ReactJS and Material UI were used to build the UI.`,
    image:
      'https://res.cloudinary.com/develover/image/upload/v1612695054/recallgraph_7da5169c04.png',
    github: 'https://github.com/RecallGraph/website',
    url: 'https://github.com/RecallGraph/website',
    featured: false,
    stack: [
      { id: 1, title: 'ReactJS' },
      { id: 2, title: 'Gatsby' },
      { id: 3, title: 'GraphQL' },
      { id: 4, title: 'MaterialUI' },
    ],
    visible: true,
  },
];

export const posts: PostProps[] = [
  {
    id: '1',
    title: '13 JavaScript One-Liners That’ll Make You Look Like a Pro',
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. `,
    image: `https://res.cloudinary.com/develover/image/upload/v1612708591/1_0ws_JJ_6_XGS_g_Hjm_Ue_PUZ_qk_Ow_df00cb11db.jpg`,
    slug: `13-java-script-one-liners-that-ll-make-you-look-like-a-pro`,
    category: `javascript`,
    desc: `JavaScript can do a lot of amazing things!
From complex frameworks to handling API’s, there is just SO much to learn.
`,
    date: `01/01/2021`,
    featured: true,
  },
  {
    id: '2',
    title: 'Design Patterns Are Here To Make Our Lives Easier',
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
    image: `https://res.cloudinary.com/develover/image/upload/v1612708767/0_Hbmp4_Wo_Bhb_Bx_Fmn_W_b2ba413675.jpg`,
    slug: `design-patterns-are-here-to-make-our-lives-easier`,
    category: `javascript`,
    desc: `Design patterns are a set of general and reusable solutions that can be applied to different problems in sw development`,
    date: `01/15/2021`,
    featured: true,
  },
  {
    id: '3',
    title: 'How To Create A Polyfill',
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
    image: `https://res.cloudinary.com/develover/image/upload/v1612708984/0_c_P7gz_Ae_W1_VKOK_jk_N_801dd49990.jpg`,
    slug: `how-to-create-a-polyfill`,
    category: `javascript`,
    desc: `A polyfill is a piece of code that implements the features that you expect the browser to support natively.`,
    date: `02/01/2021`,
    featured: true,
  },
];

export const jobs: JobProps[] = [
  {
    id: 1,
    company: 'Hamara Chess Academy',
    position: 'Customer Relations',
    location: 'India',
    date: 'Jun 2017 - Dec 2021',
    desc: [
      {
        id: 1,
        name: 'Managed customer on-boarding processes, ensuring that their expectations are met.',
      },
      {
        id: 2,
        name: 'Collaborated with the internal departments and ensured customer satisfaction.',
      },
    ],
  },
  {
    id: 2,
    company: 'eClinicalWorks',
    position: 'Customer Relations',
    location: 'India',
    date: 'Dec 2011 - June 2016',
    desc: [
      {
        id: 1,
        name: 'Responsible for building and managing client relationships, client business assessment, client satisfaction and ensuring that the versions of the healthcare information technology platform, products, and their underlying technologies are current and up to date.',
      },
      {
        id: 2,
        name: 'Collaborated with the internal stake holders and ensured customer satisfaction.',
      },
      {
        id: 3,
        name: 'Developed a knowledge sharing website using WordPress for our department.',
      },
    ],
  },
  {
    id: 3,
    company: 'Tata Consultancy Services',
    position: 'Customer Relations',
    location: 'India',
    date: 'Apr 2009 - Dec 2011',
    desc: [
      {
        id: 1,
        name: 'Responsible for setting up the payment arrangements for the Citibank NA credit card customers.',
      },
      {
        id: 2,
        name: 'Maintain the daily report of pending and processed financial accounts of credit card customers.',
      },
    ],
  },
];