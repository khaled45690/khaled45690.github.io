import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  backend,
  flutter,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  atadel,
  airdefence,
  hwaya,
  Bot,

  Face_Auth,


  kafey_rep,
  Atadel,
  apple,
  playstore,
  Ingaz,
  digi
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Senior Flutter Developer",
    icon: flutter,
  },
  {
    title: "Junior ReactJS Developer",
    icon: web,
  },
  {
    title: "Junior Golang Developer",
    icon: backend,
  },
  
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "apple",
    icon: apple,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "playstore",
    icon: playstore,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Senior FLutter Developer",
    companyName: "DIGI",
    icon: digi,
    iconBg: "#FFFFFF",
    date: "February 2025 - April 2025",
    points: [
      "Designed and implemented a modern mobile banking architecture using Flutter framework",
      "Implemented separation of concerns with organized project structure and secure authentication flows",
      "Utilized clean architecture principles for maintainable and scalable code structure",
      "Developed intuitive form components with custom validation and error handling with organized project structure",
      "Utilized extension methods for enhanced functionality",
      "Followed Flutter/Dart coding standards and conventions",
    ],
  },
  {
    title: "Mid FLutter Developer",
    companyName: "INGAZ",
    icon: Ingaz,
    iconBg: "#FFFFFF",
    date: "April 2024 - February 2025",
    points: [
      "Working on improving and enhancing legacy full HR system app in flutter with the required migrations to work on latest flutter and android version",
      "Got a chance to collaborate with proficient team and have a deep understanding of bloc to maximize code readability and screen control using bloc states and events",
      "have a deep understanding of most of state managements and their pros and cons with actual project experience",
      "the ability to work on any project , refactor it and add more features without disrupting coding standards",

    ],
  },
  {
    title: "FreeLance Developer",
    companyName: "BOT",
    icon: Bot,
    iconBg: "#383E56",
    date: "March 2023 – April 2024",
    points: [
      "added of In app purchase , Store functionality include handling purchases, most of Groups functionality, fixing bugs and performance issues (main role) and integrated UI designs in an entertainment FootBall App",
      "Participated in developing ERP mobile application for Transfering money, which I was responsible for receiving, filtering and delivering the data for both Frontend Team and Backend team as the application has local storage 	and update the server when there is connection available",
      "Participated in facial recognition app and enhanced the system to detect fake user by adding a liveness AI detector",
    ],
  },
  {
    title: "Flutter Developer",
    companyName: "Atadel",
    icon: atadel,
    iconBg: "#000000",
    date: "July 2022 – April 2024",
    points: [
      "Fixed memory leaks and performance issues in the app, resulting in a 30% increase in app speed and a 20% decrease in memory usage.",
      "Successfully identified and resolved critical bugs in a production app, resulting in improved user experience.",
      "Implemented UI/UX design changes to enhance the user interface and increase user engagement and satisfaction.",
      "Collaborated with cross-functional teams to ensure the timely resolution of issues and deployment of updates.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Air defence college",
    icon: airdefence,
    iconBg: "#383E56",
    date: "June 2021 - June 2022",
    points: [
      "Developed AI push-up counter program in Python to detect and count correct push-ups with trained data.",
      "Utilized multithreading to show images in real-time while processing the images in the background, increasing frame rate by 500%.",
      "Optimized program by converting the model into TensorFlow-light to work on raspberrypi.",
      "Worked as a Teacher assistance in Air Defence College (Main role)",
    ],
  },
  {
    title: "Flutter Developer",
    companyName: "Hwaya",
    icon: hwaya,
    iconBg: "#D8BA71",
    date: "Aug 2020 - May 2021",
    points: [
      "Developed a Flutter website, with the Collaborated directly with the company CEO El Khyma, for Ramadan month in 3 weeks",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed an e-learning platform app called Pixel Academia with 10k+ downloads, using Flutter and Firebase",
      "I was one of the early adaptors to flutter web as i used the beta version to develop a website for the company",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
 
  {
    name: "Kafey Rep",
    description:
      "Managing external sites and the presence of the fingerprint device is difficult Monitor employees, \n\n kafeyrep application to register attendance for visits",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: kafey_rep,
    sourceCodeLink: "https://github.com/",
    AppleStore: "https://apps.apple.com/us/app/fel-league/id6464472764",
    PlayStore: "https://play.google.com/store/apps/details?id=com.felapp.sports.football_appnew&hl=en",
  },
  {
    name: "Atadel",
    description:
      "Atadel is a technological platform that connects you with over 41,000 products and brands from your favorite major & local retailers. \n Grocery shopping is essential, but we also know how stressful it is. Atadel's solution will ensure that you can make a quick & seamless trip to the store without leaving your home.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: Atadel,
    sourceCodeLink: "https://github.com/",
    AppleStore: "https://apps.apple.com/ca/app/atadel-grocery-delivery/id1575892325",
    PlayStore: "https://play.google.com/store/apps/details?id=com.atadel.consumer",
  },
  {
    name: "face authentication",
    description:
      "Managing external sites and the presence of the fingerprint device is difficult \n\n"
      +"Monitor employees throughout the day and determine their presence during working hours, because attendance registration is by face and location \n\n"
      +"Detailed and accurate reports on everything related to attendance and departure daily-week-monthly",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: Face_Auth,
    sourceCodeLink: "https://github.com/",
    AppleStore: "",
    PlayStore: "https://play.google.com/store/apps/details?id=com.atadel.consumer",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://github.com/",
  // },
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
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
