import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  graphql,
  threejs,
  qviple,
  techdock,
  emart,
  realtalk,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "GraphQl",
  //   icon: graphql,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Qviple",
    icon: qviple,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jan 2024",
    points: [
      "Worked on the development of Qviple web application using React.js resulting in an increase in user engagement and improvement in page load times.",
      "Implemented state management using Redux, effectively managing the application’s state and improving data flow.",
      "Led the design and development of landing page to promote product features incorporating SEO best practices to enhance online visibility.",
      "Developed a user-friendly and responsive documentation platform that effectively communicated technical concepts and provided clear instructions for developers and end-users.",
    ],
  },
  {
    title: "ReactJS Developer",
    company_name: "Techdock Labs",
    icon: techdock,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      " Collaborated with senior developers to build and maintain web applications using React.js, ensuring optimal user experiences.",
      "Worked closely with the design team to implement responsive and visually appealing UI components.",
      "Gained hands-on experience with state management using tools like Redux, debugging of React components and application efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EMart",
    description:
      "A eCommerce platform  offering a seamless shopping experience for users with intuitive navigation and robust functionality to meet the needs of both buyers and sellers.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: emart,
    source_code_link: "https://github.com/birdhar/ecommercenext",
  },
  {
    name: "RealTalk",
    description:
      "A real-time communication application built using WebRTC for audio and video communication and Agora RTM (Real-Time Messaging) for instant messaging.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "webrtc",
        color: "pink-text-gradient",
      },
    ],
    image: realtalk,
    source_code_link: "https://github.com/birdhar/RealTalk",
  },
];

export { services, technologies, experiences, testimonials, projects };
