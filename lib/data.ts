import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import restooImg from "@/public/restoo.png";
import forumImg from "@/public/forum.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Gadjah Mada University",
    location: "Yogyakarta, Indonesia",
    description:
      "I graduated as Associate Degree after 3 years of studying in Computer and Information Systems",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2021",
  },
  {
    title: "Software Developer",
    location: "PT. Bixbox Teknologi Perkasa",
    description:
      "I worked as a software developer and build some mobile applications project with several tech stack includes React Native, Flutter and Swift.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "PT Activa Digital Indonesia",
    description:
      "I worked as a front-end developer and build multiplatform applications project with several tech stack includes React, React Native, NextJS and ElectronJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Forum App",
    description:
      "Forum application for sharing and discussion. It has features like authentication, filtering, comment and leaderboards.",
    tags: ["React", "JavaScript", "Tailwind", "Redux", "Cypress"],
    imageUrl: forumImg,
    link: "https://dicoding-forum-app-iota.vercel.app/",
  },
  {
    title: "Restauran App",
    description:
      "The webpage of a restaurant application displays lists of restaurants and their menus.",
    tags: ["JavaScript", "SCSS", "Webpack", "PWA", "CodeceptJS"],
    imageUrl: restooImg,
    link: "https://restaurant-apuri.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Electron.js",
  "Tailwind",
  "Redux",
  "Flutter",
  "GraphQL",
  "RESTful APIs",
  "Firebase",
  "Jest",
  "Cypress",
  "Git",
] as const;
