export type Project = {
  id: number;
  name: string;
  description: string;
  tools: string[];
  urls: {
    live: string;
    github: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    name: "PollUp",
    description:
      "A full-stack web application that allows users to create and participate in polls.",
    tools: [
      "NextJS",
      "TailwindCSS",
      "Redux",
      "NodeJS",
      "Express",
      "MongoDB",
      "Vercel",
      "AWS",
    ],
    urls: {
      live: "",
      github: "",
    },
  },
  {
    id: 2,
    name: "Houda",
    description:
      "Mobile app that helps users to improve their knowledge of islam by providing sermons and preachings from different scholars.",
    tools: [
      "React Native",
      "Expo",
      "Zustand",
      "NestJS",
      "Postgres",
      "Vercel",
      "Railway",
    ],
    urls: {
      live: "",
      github: "",
    },
  },
  {
    id: 3,
    name: "Yahaya Muhammad",
    description: "Portfolio website for a product designer.",
    tools: ["NextJS", "CSS Modules", "GSAP", "Cloudinary"],
    urls: {
      live: "",
      github: "",
    },
  },
];

export default projects;
