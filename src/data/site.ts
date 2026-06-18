/**
 * Edit this file to update the website's content.
 * Page components should rarely need to change.
 */

export const profile = {
  name: "Yuan Li",
  shortName: "YL",
  email: "liyuan@keio.jp",
  location: "Tokyo, Japan → Aarhus, Denmark",
  portrait: "/images/yuan-li.jpg",
  disciplines: ["Human–Computer Interaction", "Extended Reality", "Perception"],
  headline: "Designing extended realities through the lens of human perception.",
  introduction:
    "I explore how immersive technologies shape the way people perceive, understand, and interact with digital and physical worlds.",
  currentRole: {
    title: "Technical Assistant",
    institution: "The University of Tokyo",
    url: "https://www.u-tokyo.ac.jp/en/",
  },
  nextRole: {
    title: "PhD Student",
    institution: "Aarhus University",
    date: "August 2026",
    supervisor: "Tobias Langlotz",
    institutionUrl: "https://international.au.dk/",
  },
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yuanli3284" },
    { label: "Email", url: "mailto:liyuan@keio.jp" },
  ],
};

export const navigation = [
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type ResearchProject = {
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  year: string;
  tags: string[];
  links: { label: string; url: string }[];
  reversed?: boolean;
};

export const researchProjects: ResearchProject[] = [
  {
    number: "01",
    title: "Perception Across Realities",
    eyebrow: "XR perception study",
    summary:
      "A placeholder for research investigating how visual cues, spatial context, and embodiment influence perception across physical and extended realities.",
    image: "/images/project-perception.svg",
    imageAlt: "Abstract layered fields representing perception across realities",
    year: "2026",
    tags: ["Perception", "XR", "Experiment"],
    links: [
      { label: "Project details", url: "#" },
      { label: "Paper", url: "#" },
    ],
  },
  {
    number: "02",
    title: "Situated Immersive Interaction",
    eyebrow: "Interactive XR system",
    summary:
      "A placeholder for an immersive system that explores how people act, make decisions, and collaborate when digital information is situated in the world around them.",
    image: "/images/project-interaction.svg",
    imageAlt: "Abstract portals and paths representing situated interaction",
    year: "2026",
    tags: ["HCI", "Interaction", "Prototype"],
    links: [
      { label: "Project details", url: "#" },
      { label: "Video", url: "#" },
    ],
    reversed: true,
  },
  {
    number: "03",
    title: "Measuring Human Experience",
    eyebrow: "Human perception experiment",
    summary:
      "A placeholder for empirical work combining behavioral measures and participant experience to understand perception in emerging interactive systems.",
    image: "/images/project-experience.svg",
    imageAlt: "Abstract points and waves representing measured human experience",
    year: "2025",
    tags: ["User Study", "Behavior", "Methods"],
    links: [
      { label: "Project details", url: "#" },
      { label: "Materials", url: "#" },
    ],
  },
];

export const education = [
  {
    period: "Aug. 2026 —",
    title: "PhD in Computer Science",
    institution: "Aarhus University",
    detail: "Incoming PhD student · Supervisor: Tobias Langlotz",
    upcoming: true,
  },
  {
    period: "2023 — 2025",
    title: "Master of Media and Governance",
    institution: "Keio University",
    detail: "Graduate School of Media and Governance · Sociable Robots Lab",
  },
  {
    period: "2023 — 2024",
    title: "Special Auditor Student",
    institution: "The University of Tokyo",
    detail: "Graduate School of Frontier Sciences · Human & Environment Informatics Lab",
  },
  {
    period: "2018 — 2022",
    title: "Bachelor of Engineering",
    institution: "Jiangsu University of Science and Technology",
    detail: "Computer Science · GPA 3.29",
  },
];

export const experience = [
  {
    period: "Dec. 2024 — present",
    title: "Technical Assistant",
    institution: "The University of Tokyo",
    detail: "Graduate School of Information Science and Technology · Igarashi Group · eHMI Project",
  },
  {
    period: "Sep. 2023 — Aug. 2024",
    title: "Research Collaborator",
    institution: "The University of Tokyo, RIISE",
    detail: "Co-creation Space Design, Social Collaboration Research Division",
  },
  {
    period: "Apr. — Jun. 2024",
    title: "Robotic Assembly Intern",
    institution: "Telexistence",
    detail: "",
  },
  {
    period: "Oct. — Nov. 2021",
    title: "AI Research Intern",
    institution: "Neusoft",
    detail: "",
  },
];

export const recognition = [
  { year: "2024", title: "Mori Taikichiro Memorial Research Fund", institution: "Keio University", type: "Funding" },
  { year: "2024", title: "SFC Academic Society Research Grant", institution: "Keio University", type: "Funding" },
  { year: "2024", title: "Yamaoka Kenichi Memorial Scholarship", institution: "Keio University", type: "Scholarship" },
  { year: "2024", title: "Keio University Graduate School Scholarship", institution: "Keio University", type: "Scholarship" },
  { year: "2023", title: "Monbukagakusho Honors Scholarship", institution: "JASSO", type: "Scholarship" },
  { year: "2019", title: "Chinese People's Scholarship", institution: "Jiangsu University of Science and Technology", type: "Scholarship" },
];

export const service = [
  {
    year: "2024",
    title: "Student Volunteer",
    institution: "SIGGRAPH Asia 2024 · Tokyo, Japan",
  },
];
