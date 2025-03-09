type Exploration = {
  id: number;
  name: string;
  description: string;
  tools: string[];
  urls: {
    live: string;
    github: string;
  };
};

const recentProjects = [
  {
    title: "Loyaone",
    url: "https://loyaone.com",
  },
  {
    title: "AutoNation",
    url: "https://autonation.vercel.app",
  },
  {
    title: "APT",
    url: "https://apt-web.vercel.app/",
  },
  {
    title: "Ademola's Portfolio",
    url: "https://theademola.com/",
  },
  {
    title: "XLHomes",
    url: "https://xlhomes.vercel.app/",
  },
  {
    title: "Kunech",
    url: "https://kunech-beta.vercel.app/",
  },
  {
    title: "PalmCity Church",
    url: "https://bible.palmcitychurch.com/",
  },
  {
    title: "Wunder Werkz",
    url: "https://www.iheartwunderwerkz.com/",
  },
];

const explorations: Exploration[] = [
  {
    id: 1,
    name: "Snacks",
    description:
      "Design system and component library containing over 30 reusable components, built with React, Typescript, TailwindCSS, Storybook, Vite & Radix UI.",
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
  {
    id: 2,
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
];

export { explorations, recentProjects, type Exploration };
