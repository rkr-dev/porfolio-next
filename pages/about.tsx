import type { ReactElement } from 'react';
import { Layout, About } from '../components';

const aboutData  = {
  title: 'About Me',
  info: `I am a Full stack web developer with hands-on experience in the latest front end technologies. I am keen to gain more experience in the field and keep up with the current web trends. I am a recent graduate from Udacity's front end developer nano degree. I believe in building apps that are simple, intuitive, and reliable with a human-centered-design approach.`,
  image:'https://res.cloudinary.com/develover/image/upload/v1612689277/Rinil_Kunhiraman_49c17b4435.jpg',
  stack: [{id:1,title:'html'}, {id:2,title:'css'}, {id:3,title:'javascript'}, {id:4,title:'reactjs'}, {id:5,title:'redux'}, {id:6,title:'nodejs'}, {id:7,title:'express'}, {id:8,title:'mongodb'}, {id:9,title:'gatsby'}, {id:10,title:'nextjs'}, {id:11,title:'strapi'}, {id:12,title:'contentful'}, {id:13,title:'cloudinary'}, {id:14,title:'tailwindcss'}, {id:15,title:'styled components'}, {id:16,title:'css modules'}],
  visible:true
}

export default function AboutPage() {
  const {title, info, stack, image} = aboutData

  return <About title={title} info={info} stack={stack} image={image} />;
}

AboutPage.getLayout = function getLayout(aboutPage: ReactElement) {
  return <Layout>{aboutPage}</Layout>;
};
