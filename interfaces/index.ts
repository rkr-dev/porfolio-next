export type ProjectProps = {
  id: number;
  description: string;
  title: string;
  github: string;
  stack: { id: number; title: string }[] | [];
  url: string;
  image: ImageProps;
  featured: Boolean;
  visible: Boolean;
};

export type PostProps = {
  id: string;
  title: string;
  content: string;
  image: ImageProps;
  slug: string;
  category: string;
  desc: string;
  date: string;
};

export type JobProps = {
  id: number;
  company:string;
  position:string;
  location?:string;
  date:string;
  desc:{id:string,name:string}[];
};

export type ImageProps = {
  url: string;
  name?: string;
  alternativeText?: string
};