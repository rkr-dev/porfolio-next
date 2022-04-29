import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';

export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about', url: '/about' },
  { id: 3, text: 'projects', url: '/projects' },
  { id: 4, text: 'blog', url: '/blog' },
  { id: 5, text: 'contact', url: '/contact' },
];

export const socials = [
  {
    id: 1,
    icon: (
      <FaFacebook
        style={{
          color: '#fff',
          backgroundColor: '#1877f2',
        }}
      ></FaFacebook>
    ),
    url: 'https://www.facebook.com/rinilkunhiramanfb',
    name: 'Facebook',
  },
  {
    id: 2,
    icon: (
      <FaLinkedin
        style={{ color: '#fff', backgroundColor: '#0077b5' }}
      ></FaLinkedin>
    ),
    url: 'https://www.linkedin.com/in/reactjsdev/',
    name: 'LinkedIn',
  },
  {
    id: 3,
    icon: (
      <FaInstagram
        style={{ color: '#fff', backgroundColor: '#c13584' }}
      ></FaInstagram>
    ),
    url: 'https://www.instagram.com/rinilkunhiraman',
    name: 'Instagram',
  },
  {
    id: 4,
    icon: (
      <FaStackOverflow
        style={{ color: '#fff', backgroundColor: '#f48024' }}
      ></FaStackOverflow>
    ),
    url: 'https://stackoverflow.com/users/13587536/rkr-dev',
    name: 'StackOverflow',
  },
  {
    id: 5,
    icon: (
      <FaTwitter
        style={{ color: '#1da1f2', backgroundColor: '#fff' }}
      ></FaTwitter>
    ),
    url: 'https://www.twitter.com/rinilkunhiraman',
    name: 'Twitter',
  },
];
