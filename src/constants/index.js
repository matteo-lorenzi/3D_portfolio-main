import { meta, shopify, starbucks, tesla, iut } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "GAMEJAM",
    company_name: "IUT2 - INFORMATIQUE",
    icon: iut,
    iconBg: "#accbe1",
    date: "2023 -  2024",
    points: [
      "Production intégrale d’un jeu vidéo, dans un temps impartis (4j), avec un nouveau langage de programation python et les librairies pygames et pytmx ainsi que le logiciel Tiled",
    ],
  },
  {
    title: "Développement d'application évènementielle",
    company_name: "IUT2 - INFORMATIQUE",
    icon: iut,
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: [
      "Mise en place d'un projet et création d'un dossier de conception suivi de la conception et développement d'une application “Fish’Event”.",
    ],
  },
  {
    title: "Développement d'un {Serious Game}",
    company_name: "IUT2 - INFORMATIQUE",
    icon: iut,
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: ["En cour d'écriture"],
  },
  {
    title: "Comparaison d’approches algorithmiques ",
    company_name: "IUT2 - INFORMATIQUE",
    icon: iut,
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: ["En cour d'écriture"],
  },
  {
    title: "RESTAURATION",
    company_name: "Lyon",
    icon: iut,
    iconBg: "#accbe1",
    date: "Eté 2023",
    points: [
      "Cuisinier dans un centre aéré, apprentissage rapide, sous tutelle, multi-tâches ",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
