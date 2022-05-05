export type ProjectProps = {
  id: number;
  description: string;
  title: string;
  github: string;
  stack: { id: number; title: string }[] | [];
  url: string;
  image: string;
  featured: Boolean;
  visible: Boolean;
} ;

export type PostProps = {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  category: string;
  desc: string;
  date: string;
  featured: Boolean;
};