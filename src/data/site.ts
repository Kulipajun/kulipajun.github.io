/**
 * Edit this file to update the website's content.
 * Page components should rarely need to change.
 */

export const profile = {
  name: "Yuan Li",
  shortName: "YL",
  email: "liyuan@keio.jp",
  location: "Aarhus, Denmark",
  portrait: "/images/yuan-li.jpg",
  disciplines: ["Human-Computer Interaction", "Extended Reality", "Perception"],
  headline: "I study how people perceive and interact with intelligent systems across physical and extended realities.",
  introduction:
    [
    'I am a PhD student at <strong>Aarhus University</strong>, advised by <a href="https://cs.au.dk/~langlotz/"><strong>Tobias Langlotz</strong></a>. My research focuses on Human-Computer Interaction, Extended Reality, and perception-driven interfaces.',
    'Before joining Aarhus, I worked as a Technical Assistant with <a href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/index-j.html"><strong>Takeo Igarashi</strong></a> at <strong>The University of Tokyo (UTokyo)</strong>, where I collaborated with <a href="https://m-colley.github.io/"><strong>Mark Colley</strong></a> on external human-machine interfaces (eHMIs) and human-vehicle interaction.',
    'I received my Master&apos;s degree from <strong>Keio University</strong>, supervised by <a href="https://www.keio.ac.jp/en/faculty/k_100012605/"><strong>Kazunori Takashio</strong></a>, with additional supervision from <a href="https://yukib.github.io/"><strong>Yuki Ban</strong></a> at <strong>UTokyo</strong>. My Master&apos;s research explored how VR interfaces influence human perception and user experience.',
    ],
  currentRole: {
    title: "PhD Student",
    institution: "Aarhus University",
    url: "https://cs.au.dk/",
  },
  nextRole: {
    title: "PhD Student",
    institution: "Aarhus University",
    date: "Since August 2026",
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
  { label: "News", href: "/#news" },
  { label: "Research", href: "/#research" },
  { label: "Publications", href: "/publications/" },
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experience" },
  { label: "Awards", href: "/#awards" },
];

export const news = [
  {
    year: "August 2026",
    text: "I joined Aarhus University as a PhD student.",
  },
  {
    year: "June 2026",
    text: "One first-author paper and one co-authored paper were accepted with minor revision by IMWUT, and one co-authored UIST paper was conditionally accepted.",
  },
  {
    year: "March 2026",
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
  status?: string;
  links: { label: string; url: string }[];
};

export type PublicationListItem = Pick<
  Publication,
  "title" | "authors" | "venue" | "year" | "award" | "status" | "links"
>;

export const publications: Publication[] = [
  {
    title:
      "BlurDriving: Investigating How Personalized Blur Techniques Impact Drivers’ Performance in Virtual Reality",
    authors: [
      { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
      { name: "Mark Colley", url: "https://m-colley.github.io/" },
      { name: "Xinyue Gui", url: "https://xinyuegui.github.io/" },
      { name: "Cristian Rendon-Cardona", url: "https://www.rendon-cristian.com/" },
      { name: "Pascal Jansen", url: "https://pascal-jansen.github.io/" },
      { name: "Christian Sandor", url: "https://drsandor.net/" },
      {
        name: "Takeo Igarashi",
        url: "https://www-ui.is.s.u-tokyo.ac.jp/~takeo/",
      },
    ],
    venue:
      "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT / UbiComp 2026) · Journal article",
    summary:
      "We investigate how personalized blur techniques in VR driving affect drivers’ performance and visual attention across road users and scene elements.",
    image: "/images/blurdriving.webp",
    imageAlt: "BlurDriving VR driving scene with personalized blur targets highlighted",
    year: "2026",
    links: [
      { label: "Project", url: "https://theliyuan.com/BlurDriving/" },
      { label: "DOI", url: "https://doi.org/10.1145/3831646" },
    ],
  },
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
    venue: "Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)",
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
    venue: "Proceedings of the 13th International Conference on Human-Agent Interaction (HAI '25)",
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
      "2024 IEEE International Symposium on Mixed and Augmented Reality (ISMAR '24)",
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

export const allPublications: {
  fullPapers: PublicationListItem[];
  posters: PublicationListItem[];
} = {
  fullPapers: [
    {
      title:
        "Tap2Stop: Pedestrian-Activated Emergency Stop for Autonomous Vehicles",
      authors: [
        { name: "Xinyue Gui", url: "https://xinyuegui.github.io/" },
        { name: "Ding Xia", url: "https://apisxia.github.io/" },
        { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
        { name: "Mark Colley", url: "https://m-colley.github.io/" },
        { name: "Chia-Ming Chang", url: "https://chiamingchang.com/" },
        { name: "Stela Hanbyeol Seo", url: "https://stelaseo.ca/" },
        {
          name: "Manabu Tsukada",
          url: "https://tlab.hongo.wide.ad.jp/People/manabu-tsukada/",
        },
        {
          name: "Takeo Igarashi",
          url: "https://www-ui.is.s.u-tokyo.ac.jp/~takeo/",
        },
      ],
      venue:
        "Proceedings of the 39th Annual ACM Symposium on User Interface Software and Technology (UIST '26)",
      year: "2026",
      status: "Conditionally accepted",
      links: [],
    },
    publications[0],
    {
      title:
        "Comparing Preferences Between Japan and Germany for External Communication of Automated Vehicles Using Bayesian Optimization",
      authors: [
        { name: "Mark Colley", url: "https://m-colley.github.io/" },
        { name: "Pascal Jansen", url: "https://pascal-jansen.github.io/" },
        { name: "Xinyue Gui", url: "https://xinyuegui.github.io/" },
        { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
        { name: "Ding Xia", url: "https://apisxia.github.io/" },
        { name: "Enrico Rukzio" },
        {
          name: "Takeo Igarashi",
          url: "https://www-ui.is.s.u-tokyo.ac.jp/~takeo/",
        },
      ],
      venue:
        "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT / UbiComp 2026) · Journal article",
      year: "2026",
      status: "Accepted with minor revision, to appear",
      links: [],
    },
    ...publications.slice(1),
  ],
  posters: [
    {
      title: "Shooting-based Technique: Highly Interactive Virtual Reality Locomotion",
      authors: [
        { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
        {
          name: "Kazunori Takashio",
          url: "https://www.k-ris.keio.ac.jp/html/100012605_en.html",
        },
      ],
      venue:
        "Proceedings of the 2023 ACM Symposium on Spatial User Interaction (SUI '23)",
      year: "2023",
      links: [
        { label: "DOI", url: "https://doi.org/10.1145/3607822.3618010" },
      ],
    },
    {
      title: "Enhance Flight Experience Through Wind-based Cross-modal Effect",
      authors: [
        { name: "Yuan Li", url: "https://theliyuan.com/", self: true },
        { name: "Jiayi Hu" },
        { name: "Du Jin" },
        { name: "Juro Hosoi" },
        { name: "Rui Zhang" },
        { name: "Yuki Ban", url: "https://yukib.github.io/" },
        { name: "Shin'Ichi Warisawa" },
        {
          name: "Kazunori Takashio",
          url: "https://www.k-ris.keio.ac.jp/html/100012605_en.html",
        },
      ],
      venue:
        "2024 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR 2024)",
      year: "2024",
      links: [
        {
          label: "DOI",
          url: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00181",
        },
      ],
    },
  ],
};

export const education = [
  {
    period: "Aug. 2026 -",
    title: "PhD in Computer Science",
    institution: 'Aarhus University · <a href="https://cs.au.dk/">Department of Computer Science</a>',
    detail: '<a href="https://cs.au.dk/research/section-on-human-centered-computing/section-members">Section on Human-Centered Computing</a>',
    details: [
      'Supervisor: <a href="https://cs.au.dk/~langlotz/">Tobias Langlotz</a>',
    ],
  },
  {
    period: "2023 - 2025",
    title: "Master of Media and Governance",
    institution: "Keio University · The University of Tokyo Joint Graduate Program",
    detail: 'Graduate School of Media and Governance, Keio · Supervisor: <a href="https://www.k-ris.keio.ac.jp/html/100012605_en.html">Kazunori Takashio</a>',
    details: [
      'Graduate School of Frontier Sciences, UTokyo · Supervisor: <a href="https://yukib.github.io/">Yuki Ban</a>',
    ],
  },
  {
    period: "2018 - 2022",
    title: "Bachelor of Engineering",
    institution: "Jiangsu University of Science and Technology",
    detail: "School of Computer Science",
  },
];

export const experience = [
  {
    period: "Aug. 2026 -",
    title: "PhD Fellow",
    institution: 'Aarhus University · <a href="https://cs.au.dk/">Department of Computer Science</a>',
    detail: '<a href="https://cs.au.dk/research/section-on-human-centered-computing/section-members">Section on Human-Centered Computing</a> · Supervisor: <a href="https://cs.au.dk/~langlotz/">Tobias Langlotz</a>',
  },
  {
    period: "Dec. 2024 - Jul. 2026",
    title: "Technical Assistant",
    institution: "The University of Tokyo",
    detail: 'Graduate School of Information Science and Technology · Supervisor: <a href="https://www-ui.is.s.u-tokyo.ac.jp/~takeo/index-j.html">Takeo Igarashi</a>',
    collaborators: [
      { name: "Mark Colley", url: "https://m-colley.github.io/" },
      { name: "Xinyue Gui", url: "https://xinyuegui.github.io/" },
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
    year: "2026",
    title: "CHI 2026 Honorable Mention Award",
    institution: "ACM",
    type: "Award",
  },
  {
    year: "2025",
    title: "JST Spring GX Program of Innovation for Intelligent World",
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




























