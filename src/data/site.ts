/**
 * Edit this file to update the website's content.
 * Page components should rarely need to change.
 */

export const profile = {
  name: "Yuan Li",
  shortName: "YL",
  email: "liyuan@keio.jp",
  location: "Tokyo, Japan",
  portrait: "/images/yuan-li.jpg",
  disciplines: ["Human-Computer Interaction", "Extended Reality", "Perception"],
  headline: "Designing extended realities through the lens of human perception.",
  introduction:
    [
    'Hi! I am a Human-Computer Interaction researcher currently working as a Technical Assistant under the supervision of <a href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/index-j.html"><strong>Takeo Igarashi</strong></a> at <strong>The University of Tokyo (UTokyo)</strong>, where I work on external human-machine interfaces (eHMIs) and human-vehicle interaction.',
    'Before that, I received my Master&apos;s degree from <strong>Keio University</strong>, where I was supervised by <a href="https://www.keio.ac.jp/en/faculty/k_100012605/"><strong>Kazunori Takashio</strong></a>, with additional supervision from <a href="https://yukib.github.io/"><strong>Yuki Ban</strong></a> at <strong>UTokyo</strong>. My Master&apos;s research explored how VR interfaces influence human perception and user experience.',
    'Starting in <strong>August 2026</strong>, I will join <strong>Aarhus University</strong> as a PhD student under the supervision of <a href="https://cs.au.dk/~langlotz/"><strong>Tobias Langlotz</strong></a>. Building on my interests in perception and interaction design, my doctoral research will focus on calm technology and perception-driven XR interfaces.',
    ],
  currentRole: {
    title: "Technical Assistant",
    institution: "The University of Tokyo",
    url: "https://www-ui.is.s.u-tokyo.ac.jp/",
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
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=zUBrOJgAAAAJ&hl=en"}
  ],
};

export const navigation = [
  { label: "News", href: "#news" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
];

export const news = [
  {
    year: "2026",
    text: "I will join Aarhus University as a PhD student in August 2026.",
  },
];

export type Publication = {
  title: string;
  authors: { name: string; url?: string; self?: boolean; equal?: boolean }[];
  venue: string;
  summary: string;
  image: string;
  imageAlt: string;
  year: string;
  award?: string;
  links: { label: string; url: string }[];
};

export const publications: Publication[] = [
  {
    title:
      "Peeking Ahead of the Field Study: Exploring VLM Personas as Support Tools for Embodied Studies in HCI",
    authors: [
      { name: "Xinyue Gui", url: "https://xinyuegui.github.io/" },
      { name: "Ding Xia", url: "https://apisxia.github.io/" },
      { name: "Mark Colley", url: "https://profiles.ucl.ac.uk/102233-mark-colley" },
      { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
      { name: "Vishal Chauhan" },
      { name: "Anubhav Anubhav" },
      { name: "Zhongyi Zhou", url: "https://zhongyizhou.net/" },
      {
        name: "Ehsan Javanmardi",
        url: "https://tlab.hongo.wide.ad.jp/People/ehsan-javanmardi/",
      },
      { name: "Stela Hanbyeol Seo", url: "https://stelaseo.ca/" },
      { name: "Chia-Ming Chang", url: "https://chiamingchang.com/" },
      {
        name: "Manabu Tsukada",
        url: "https://tlab.hongo.wide.ad.jp/People/manabu-tsukada/",
      },
      {
        name: "Takeo Igarashi",
        url: "https://www-ui.is.s.u-tokyo.ac.jp/~takeo/",
      },
    ],
    venue: "ACM CHI Conference on Human Factors in Computing Systems (CHI '26)",
    summary:
      "We investigate Vision-Language Model personas as low-cost proxy participants for previewing embodied field studies before running them with real people.",
    image: "/images/peeking-ahead.webp",
    imageAlt: "Peeking Ahead research team with an experimental automated vehicle",
    year: "2026",
    award: "Honorable Mention Award",
    links: [
      { label: "Project", url: "https://apisxia.github.io/PersonaVLM/" },
      { label: "DOI", url: "https://doi.org/10.1145/3772318.3790537" },
    ],
  },
  {
    title:
      "TailCue: Exploring Animal-inspired Robotic Tail for Automated Vehicles Interaction",
    authors: [
      { name: "Yuan Li", url: "https://theliyuan.com/", self: true, equal: true },
      { name: "Xinyue Gui", url: "https://xinyuegui.github.io/", equal: true },
      { name: "Ding Xia", url: "https://apisxia.github.io/" },
      { name: "Mark Colley", url: "https://m-colley.github.io/" },
      {
        name: "Takeo Igarashi",
        url: "https://www-ui.is.s.u-tokyo.ac.jp/~takeo/index.html",
      },
    ],
    venue: "13th International Conference on Human-Agent Interaction (HAI '25)",
    summary:
      "An exploration of an animal-inspired robotic tail as an external human-machine interface for communicating emotion and intent from automated vehicles.",
    image: "/images/tailcue.webp",
    imageAlt: "TailCue robotic tail mounted on an automated vehicle",
    year: "2025",
    links: [
      { label: "Project", url: "https://theliyuan.com/TailCue/" },
      { label: "DOI", url: "https://doi.org/10.1145/3765766.3765767" },
    ],
  },
  {
    title:
      "Mitigating Latency Effects on Subjective Experience in Robot Teleoperation Using a VR-Enabled Virtual Spring",
    authors: [
      { name: "Du Jin" },
      { name: "Rui Zhang" },
      { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
      { name: "Yuki Ban", url: "https://yukib.github.io/" },
      { name: "Shin'Ichi Warisawa" },
    ],
    venue:
      "IEEE International Symposium on Mixed and Augmented Reality (ISMAR '24)",
    summary:
      "A VR teleoperation technique that represents latency-induced position discrepancy as the dynamics of a virtual spring, improving user comfort and sense of presence.",
    image: "/images/virtual-spring.webp",
    imageAlt: "A virtual spring connecting a VR controller to a teleoperated robot",
    year: "2024",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/ISMAR62088.2024.00144" },
    ],
  },
];

export const education = [
  {
    period: "Aug. 2026 -",
    title: "PhD in Computer Science",
    institution: "Aarhus University",
    detail: "Incoming PhD student · Supervisor: Tobias Langlotz",
    upcoming: true,
  },
  {
    period: "2023 - 2025",
    title: "Master of Media and Governance",
    institution: "Keio University",
    detail: "Graduate School of Media and Governance · Sociable Robots Lab · Supervisor: Kazunori Takashio",
  },
  {
    period: "2023 - 2024",
    title: "Special Auditor Student",
    institution: "The University of Tokyo",
    detail: "Graduate School of Frontier Sciences · Human & Environment Informatics Lab · Supervisor: Yuki Ban",
  },
  {
    period: "2018 - 2022",
    title: "Bachelor of Engineering",
    institution: "Jiangsu University of Science and Technology",
    detail: "Computer Science",
  },
];

export const experience = [
  {
    period: "Dec. 2024 - present",
    title: "Technical Assistant",
    institution: "The University of Tokyo",
    detail: "Graduate School of Information Science and Technology · Supervisor: Takeo Igarashi",
    collaborators: [
      { name: "Prof. Mark Colley", url: "https://m-colley.github.io/" },
      { name: "Dr. Xinyue Gui", url: "https://xinyuegui.github.io/" },
      { name: "Ding Xia", url: "https://apisxia.github.io/" },
    ],
  },
  {
    period: "Sep. 2023 - Aug. 2024",
    title: "Research Collaborator",
    institution: "The University of Tokyo, RIISE",
    detail: "Co-creation Space Design, Social Collaboration Research Division",
  },
  {
    period: "Apr. - Jun. 2024",
    title: "Robotic Assembly Intern",
    institution: "Telexistence",
    detail: "",
  },
  {
    period: "Oct. - Nov. 2021",
    title: "AI Research Intern",
    institution: "Neusoft",
    detail: "",
  },
];

export const recognition = [
  {
    year: "2025",
    title: "Spring GX Program of Innovation for Intelligent World",
    institution: "The University of Tokyo",
    type: "Funding",
  },
  { year: "2024", title: "Mori Taikichiro Memorial Research Fund", institution: "Keio University", type: "Funding" },
  { year: "2024", title: "SFC Academic Society Research Grant", institution: "Keio University", type: "Funding" },
  { year: "2024", title: "Yamaoka Kenichi Memorial Scholarship", institution: "Keio University", type: "Scholarship" },
  { year: "2024", title: "Keio University Graduate School Scholarship", institution: "Keio University", type: "Scholarship" },
  { year: "2023", title: "Monbukagakusho Honors Scholarship", institution: "JASSO", type: "Scholarship" },
  { year: "2019", title: "Chinese People's Scholarship", institution: "Jiangsu University of Science and Technology", type: "Scholarship" },
];

export const service = [
  {
    year: "2026",
    title: "Reviewer",
    institution: "ACM CHI 2026",
  },
  {
    year: "2026",
    title: "Reviewer",
    institution: "International Journal of Human-Computer Studies (IJHCS)",
  },
  {
    year: "2024",
    title: "Student Volunteer",
    institution: "SIGGRAPH Asia 2024",
  },
];









