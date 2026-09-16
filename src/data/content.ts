export interface NavLink {
  label: string;
  href: string;
}

export interface Role {
  dates: string;
  location?: string;
  company: string;
  logo: 'meta' | 'cisco' | 'tcs';
  title: string;
  bullets: string[];
}

export interface Project {
  no: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  heading: string;
  skills: string[];
}

export interface EducationItem {
  mark: string;
  kicker: string;
  degree: string;
  school: string;
  location: string;
  dates: string;
  dateTime: string;
}

export const profile = {
  name: 'Pranav Shivkumar',
  firstName: 'Pranav',
  lastName: 'Shivkumar',
  title: 'Software Engineer',
  location: 'Fremont, CA',
  email: 'pranavshivkumar3@gmail.com',
  github: 'https://github.com/pranavshivk97',
  linkedin: 'https://linkedin.com/in/pranav-shivkumar',
  heroCopy:
    'I turn ambiguous product ideas into shipped experiences—shaping the technical approach, building across mobile and backend systems, and driving the work through launch, measurement, and iteration.',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Track Record', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const focusAreas: string[] = [
  'Product Development',
  'AI-Native Products',
  'Mobile & Android',
  'Backend & Distributed Systems',
  'Full-Stack Engineering',
  'Platform & Production Systems',
];

export const marqueeItems: string[] = [
  'Product Engineering',
  'AI-Native Development',
  'Android',
  'Backend Systems',
  'Full Stack',
  'Experimentation',
  'Production Reliability',
  'Platform Integration',
];

export const aboutCopy: string[] = [
  'I’m a product-minded software engineer who works across the stack to move ideas from <strong>problem definition to real-world impact</strong>.',
  'At Meta, that has meant building AI-powered creator experiences, scaling cross-app media systems, leading Android execution, and now helping shape a 0→1 social discovery product. Earlier at Cisco, I built the backend and cloud foundations behind IoT onboarding and management.',
  'My edge is range with ownership: I can investigate what’s feasible, make the architecture and product tradeoffs, build the system, align the people around it, and stay with the work through launch and iteration.',
];

export const signalCard: { label: string; value: string }[] = [
  { label: 'Focus', value: 'AI-powered consumer and creator products' },
  { label: 'Range', value: 'Mobile, backend, full stack, and platform systems' },
  { label: 'Strength', value: 'Taking ambiguous ideas from architecture to launch' },
  { label: 'Location', value: 'Fremont, California' },
];

export const roles: Role[] = [
  {
    dates: 'Jun 2025 – Present',
    location: 'Menlo Park, CA',
    company: 'Meta',
    logo: 'meta',
    title: 'Software Engineer',
    bullets: [
      'Helped build and scale Instagram-to-Facebook AI voice translation and dubbing experiences, contributing to growth from roughly 25K to 100K dubbed videos per day.',
      'Led Android engineering for AI-assisted creator publishing in Reels, including generated captions and thumbnail or frame recommendations.',
      'Shipped across persistent translation preferences, language expansion, creator insights, experimentation, and production reliability.',
    ],
  },
  {
    dates: 'Jun 2022 – May 2025',
    location: 'Morrisville, NC',
    company: 'Cisco Systems',
    logo: 'cisco',
    title: 'Software Engineer',
    bullets: [
      'Built cloud services and infrastructure for an IoT onboarding and device-management platform across backend APIs, automation, and production operations.',
      'Developed with Python, Go, PostgreSQL, and Redis; deployed containerized services with Docker, Kubernetes, GCP, Helm, Kustomize, and ArgoCD.',
      'Improved deployment and reliability workflows through Terraform, CI/CD, secret management, production debugging, and security-focused platform engineering.',
    ],
  },
  {
    dates: 'Jun 2021 – May 2022',
    location: 'Edison, NJ',
    company: 'Tata Consultancy Services',
    logo: 'tcs',
    title: 'Software Engineer',
    bullets: [
      'Built and supported backend services, APIs, and cloud systems, developing the production engineering foundation that now informs product decisions end to end.',
      'Earlier software engineering internships at Minos Labs and Bettercapital broadened experience across startup execution and applied product development.',
    ],
  },
];

export const projects: Project[] = [
  {
    no: '01 / SCALE',
    title: 'Cross-platform AI dubbing pipeline',
    description:
      'Helped evolve Instagram-to-Facebook dubbing from an emerging capability into a scaled product surface—working across language support, persistent preferences, measurement, experimentation, and reliability.',
    tags: ['AI Product', 'Cross-App Systems', '~100K videos/day'],
  },
  {
    no: '02 / MOBILE LEADERSHIP',
    title: 'Facebook Creator AI Tool Suite',
    description:
      'Led Android engineering for creator tools that bring generated captions and thumbnail or frame recommendations directly into the publishing flow. This work formed the foundation for the launch of Creator Studio.',
    tags: ['Android', 'Generative AI', 'Creator Experience'],
  },
  {
    no: '03 / PLATFORM',
    title: 'Cisco IoT onboarding platform',
    description:
      'Architected the cloud services and deployment foundations for onboarding and managing connected Cisco devices through Cisco Webex — spanning APIs, containers, orchestration, data stores, infrastructure as code, and secure operations.',
    tags: ['Python + Go', 'Kubernetes', 'Terraform'],
  },
  {
    no: '04 / OPERATIONS',
    title: 'AI-assisted incident investigation & auto-fix',
    description:
      'Built AI-assisted tooling at Meta that investigates production incidents and auto-applies fixes — cutting investigation time and reducing on-call toil.',
    tags: ['AI-Assisted Dev', 'Auto-Remediation', 'On-Call'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: 'Product & Experience',
    skills: [
      'Product Engineering',
      'AI-Native Development',
      'Android',
      'Java / Kotlin',
      'React',
      'TypeScript',
      'Experimentation',
      'Creator Experiences',
    ],
  },
  {
    heading: 'Backend & Systems',
    skills: [
      'Python',
      'Go',
      'Django',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'Redis',
      'Distributed Systems',
      'Async Pipelines',
    ],
  },
  {
    heading: 'Cloud & Production',
    skills: [
      'Docker',
      'Kubernetes',
      'GCP',
      'Terraform',
      'Helm',
      'Kustomize',
      'ArgoCD',
      'CI/CD',
      'Reliability',
      'Observability',
      'Cloud Security',
    ],
  },
];

export const education: EducationItem[] = [
  {
    mark: 'MS',
    kicker: 'Graduate degree · Software Engineering major',
    degree: 'M.S. Electrical and Computer Engineering',
    school: 'Rutgers University',
    location: 'New Brunswick, NJ',
    dates: 'Sep 2019 – May 2021',
    dateTime: '2021-05',
  },
  {
    mark: 'BE',
    kicker: 'Undergraduate degree',
    degree: 'B.E. Electronics and Communications Engineering',
    school: 'PES Institute of Technology',
    location: 'Bangalore, India',
    dates: 'Sep 2015 – May 2019',
    dateTime: '2019-05',
  },
];

export const introCopy = {
  command: 'Compiling profile // signal resolving',
  target: 'LOADING',
  note: 'Product development · AI systems · mobile · backend',
};
