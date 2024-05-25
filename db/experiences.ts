export type Experience = {
  id: number;
  company: string;
  duration: {
    from: number;
    to?: string | number;
  };
  description: string;
  projects?: {
    name: string;
    url: string;
  }[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "Reeddi",
    duration: {
      from: 2022,
      to: "present",
    },
    description:
      "Building scalable B2B and B2C web apps while also working on the company's internal tools and products.",
    projects: [
      {
        name: "Reeddi Website",
        url: "https://reeddi.com",
      },
      {
        name: "Reeddi Tracker",
        url: "",
      },
      {
        name: "Tempown",
        url: "",
      },
      {
        name: "Tempown Enterprise",
        url: "",
      },
      {
        name: "Tempown Admin",
        url: "",
      },
      {
        name: "Carry Africa",
        url: "",
      },
      {
        name: "Carry Africa Enterprise",
        url: "",
      },
      {
        name: "Carry Africa Admin",
        url: "",
      },
      {
        name: "LoyaOne",
        url: "",
      },
      {
        name: "LoyaOne Admin",
        url: "",
      },
      {
        name: "Wheels Admin",
        url: "",
      },
    ],
  },
  {
    id: 2,
    company: "WunderWerkz",
    duration: {
      from: 2022,
    },
    description:
      "Collaborated with a senior developer on various client projects as a frontend developer, contributing to the design and implementation.",
  },
  {
    id: 3,
    company: "BPTech",
    duration: {
      from: 2021,
      to: 2022,
    },
    description:
      "As a frontend developer, I was responsible for building and maintaning some of the company's products such as the company's website, the internal admin dashboard and the company's fintech web app.",
  },
];

export default experiences;
