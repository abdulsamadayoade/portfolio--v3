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
    name: "Kleva",
    description:
      "AI-powered learning platform using Next.js and Node.js with Express, integrating OpenAI’s API for interactive chat functionality and content generation.",
    tools: [
      "NextJS",
      "TailwindCSS",
      "Redux",
      "NodeJS",
      "Express",
      "MongoDB",
      "Vercel",
      "AWS",
      "Vercel",
      "Railway",
    ],
    urls: {
      live: "",
      github: "",
    },
  },
  {
    id: 2,
    name: "PollUp",
    description:
      "React Native mobile application that allows users to create and participate in polls.",
    tools: [
      "React Native",
      "Expo",
      "Zustand",
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
];

export default projects;
