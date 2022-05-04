export type Project = {
  id: Number;
  description: String;
  title: String;
  github: string;
  stack: { id: Number; title: String }[] | [];
  url: string;
  image: String;
  featured: Boolean;
  visible: Boolean;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image: string;
  slug: string;
  category: string;
  desc: string;
  date: string;
};