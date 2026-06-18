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
  { label: "News", href: "#news" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const news = [
  {
    year: "2026",
    text: "I will join Aarhus University as a PhD student in August 2026.",
  },
  {
    year: "2024",
    text: "Joined the Igarashi Group at the University of Tokyo as a Technical Assistant.",
  },
  {
    year: "2024",
    text: "Served as a Student Volunteer at SIGGRAPH Asia 2024 in Tokyo.",
  },
];

export type Publication = {
  title: string;
  authors: { name: string; self?: boolean; equal?: boolean }[];
  venue: string;
  summary: string;
  image: string;
  imageAlt: string;
  year: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "TailCue: Exploring Animal-inspired Robotic Tail for Automated Vehicles Interaction",
    authors: [
      { name: "Yuan Li", self: true, equal: true },
      { name: "Xinyue Gui", equal: true },
      { name: "Ding Xia" },
      { name: "Mark Colley" },
      { name: "Takeo Igarashi" },
    ],
    venue: "13th International Conference on Human-Agent Interaction (HAI ’25)",
    summary:
      "An exploration of an animal-inspired robotic tail as an external human–machine interface for communicating emotion and intent from automated vehicles.",
    image: "/images/tailcue.svg",
    imageAlt: "Illustration of TailCue, a robotic tail interface for an automated vehicle",
    year: "2025",
    links: [
      { label: "Project", url: "https://theliyuan.com/TailCue/" },
      { label: "Paper", url: "https://arxiv.org/pdf/2511.14242.pdf" },
      { label: "arXiv", url: "https://arxiv.org/abs/2511.14242" },
      { label: "DOI", url: "https://doi.org/10.1145/3765766.3765767" },
      {
        label: "Supplementary",
        url: "https://github.com/Kulipajun/HAI-2025---Tail-Project",
      },
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
