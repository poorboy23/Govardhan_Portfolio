import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  qualcomm,
  unt,
  wipro,
  java,
  python,
  spring,
  kubernetes

  
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Devops Engineer",
    icon: backend,
  },
  {
    title: "Full stack Developer",
    icon: creator,
  },
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
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
 
 
  
];

const experiences = [
  {
    title: "Graduate Teaching Assistant",
    company_name: "University of North Texas",
    icon: unt,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Present",
    points: [
      "Mentored and instructed 140+ students, conducting 10 office hours per week to assist with course material, increasing assignment submission rates by 20\%",
      "Graded 100+ assignments and projects, providing detailed feedback that improved student performance by 15\% and enhanced understanding of software engineering concepts.",
    
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Qualcomm",
    icon: qualcomm,
    iconBg: "#383E56",
    date: "Dec 2021 - August 2023",
    points: [
      "Developed and deployed the Online Demand Debugging (ODD) Tool using Django, React.js, FastAPI, and AWS EKS, reducing deployment time.",
      "Built and managed RESTful APIs with MongoDB, automated log parsing using Python, and improved Wi-Fi log access efficiency.",
      "Implemented Grafana, Loki, Docker, and Kubernetes for monitoring and orchestration, enhancing scalability and debugging efficiency.",
      "Optimized CI/CD pipelines using Jenkins, monitored cloud-hosted APIs, and conducted knowledge transfer sessions for teams.",
    ],
  },
  
  {
    title: "Project Engineer",
    company_name: "Wipro Technologies",
    icon: wipro,
    iconBg: "#383E56",
    date: "July 2021 - Dec 2021",
    points: [
      "Assigned to a Spring Boot project, where I gained hands-on experience in Java, RESTful API development, and microservices architecture.}",
      "Developed and tested REST APIs using Spring Boot, enhancing system interoperability and scalability.",
      "Utilized AWS S3 for secure product image storage and Dockerized services for scalable deployments.",
      
    ],
  }
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
    name: "Elderly Companion App",
    description:[
      "Developed and deployed the Elderly Companion App using React, Firebase, and AWS (EC2), enhancing accessibility and increasing user engagement by 30\%.",
      "Integrated Firebase for authentication and real-time database management, reducing sign-in issues by 40\% and enhancing data access efficiency.",
      "Designed and implemented key app screens using Figma, enhancing user experience and UI consistency.",],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS(Ec2)",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color:"green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/poorboy23",
  },
  {
    name: "Our Smart Medico",
    description:
      `Developed a platform that enables quick access to patient medical histories via QR codes, leveraging multithreading to handle multiple concurrent data access requests.
      Built the frontend using HTML, CSS, JavaScript, and React, ensuring a responsive and user-friendly interface for seamless interactions and Leveraged Flask for backend development.`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/poorboy23",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
