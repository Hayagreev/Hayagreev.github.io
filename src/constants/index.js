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
  git,
  bash,
  c_lang,
  firebase,
  java,
  kubernetes,
  python,
  sql,
  docker,
  cisco,
  shoreline,
  flutter_club,
  launchcoders,
  birdclassifier,
  image_edit_app,
  sortingvisualizer,
  threejs,
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
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "c_lang",
    icon: c_lang,
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
    name: "firebase",
    icon: firebase,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Incoming Software Engineering Intern",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#383E56",
    date: "May 2024 – Aug 2024",
    points: [
      "Added default, standardized location tag to all field programmable device (FPD) traces to automate of tasks",
      "Exported traces to Splunk, created apps to analyze FPD traces (focusing on latency and memory analysis) saving several hours of manual work per release. Configured streaming of syslogs to Splunk in real time",
      "Created website to document step-by-step process of analyzing traces with Splunk; shared knowledge through demos",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Shoreline.io",
    icon: shoreline,
    iconBg: "#142044",
    date: "May 2023 – July 2023",
    points: [
      "Added 30+ metrics to monitor Shoreline backend, making it easier for customers  to identify & debug problems",
      "Implemented Open Telemetry standards. Configured Grafana Cloud, and Shoreline Notebooks for visualizing trends",
      "Deployed my code to production in \$1M+ contracts with customers like Confluent",
      "Worked with Go, Elixir, Python, Kubernetes (daemonsets, statefulsets, configmaps, service accounts), & Docker",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Flutter Development Club @ Purdue University",
    icon: flutter_club,
    iconBg: "#383E56",
    date: "May 2022 – Dec 2022",
    points: [
      "Created an app to take and edit photos, and save those edited photos to the photo gallery",
      "Features: adding emojis, changing contrast/hue/colorization of images, cropping, rotating, adding/formating text",
    ],
  },
  {
    title: "Curriculum Director",
    company_name: "LaunchCoders",
    icon: launchcoders,
    iconBg: "#E6DEDD",
    date: "Aug 2020 – Nov 2021",
    points: [
      "Managed a team of high schoolers to develop Python/Scratch courses with code snippets for beginners",
      "Led students through Scratch projects, and taught fundamental programming concepts prior to managing the curriculum",
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
    name: "Bird Classifier",
    description:
      "iOS app to allow users to upload images of birds, and obtained detailed information regarding that bird (such as bird species, diet, etc.)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: birdclassifier,
    source_code_link: "https://github.com/Hayagreev/BirdClassifier",
  },
  {
    name: "Image Editting App",
    description:
      "iOS app where users can edit pictures, and save those editted images to their gallery.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
    ],
    image: image_edit_app,
    source_code_link: "https://github.com/purdueflutter/image_editing_app",
  },
  {
    name: "Sorting Alg. Visualizer",
    description:
      "Web application where users can generate random arrays of different sizes, and visualize various sorting algorithms on these arrays",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      }
    ],
    image: sortingvisualizer,
    source_code_link: "https://github.com/Hayagreev/Sorting-Algorithm-Visualizer",
  },
];

export { services, technologies, experiences, testimonials, projects };
