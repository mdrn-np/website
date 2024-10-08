
import analytics from './images/analytics.png'
import openSource from './images/open-source.png'
import working from './images/networking.png'
import wallet from './images/wallet.png'
import tea from './images/cup-of-drink.png'


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];


export const project = [
  {
    image: "https://picsum.photos/",
    name: "Name",
    tags: ["tag1", "tag2"],
    description:
      "A biggggg description of the project. This project aids your comunity with every little possible things.",
    link: "https://google.com",
  },
  {
    image: "https://picsum.photos/",
    name: "Name",
    tags: ["tag1", "tag2"],
    description: "Cool project",
    link: "https://google.com",
  },
];

export const data = [
  {
    id: 1,
    title: "Research Papers",
    text: "Our club members actively engage in writing and publishing research papers in various scientific journals.",
    image: analytics,
  },
  {
    id: 2,
    title: "Open Source Development",
    text: "We contribute to open-source projects, helping to build and improve software that benefits the community.",
    image: openSource,
  },
  {
    id: 3,
    title: "Voluntary Work",
    text: "Our members participate in voluntary work, organizing events and activities that promote science and education.",
    image: working,
  },
];

export const sponsers = [
  {
    id: 1,
    image: wallet,
    desc: "Your logo will be displayed on our website and promotional materials.",
  },
  {
    id: 2,
    image: tea ,
    desc: "You will have the opportunity to sponsor and participate in our events.",
  },
  {
    id: 3,
    image: wallet ,
    desc: "You will have access to our network of professionals and students.",
  },
  {
    id: 4,
    image: tea ,
    desc: "You will be able to promote your products and services to our members.",
  },

]