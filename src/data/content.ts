export interface NavLink {
  label: string;
  href: string;
}

export interface Role {
  dates: string;
  location?: string;
  company: string;
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
  degree: string;
  school: string;
  location: string;
  dates: string;
}

export const profile = {
  name: 'Pranav Shivkumar',
  firstName: 'Pranav',
  lastName: 'Shivkumar',
  title: 'Software Engineer',
  location: 'Fremont, California',
  email: 'pranavshivkumar3@gmail.com',
  github: 'https://github.com/pranavshivk97',
  linkedin: 'https://linkedin.com/in/pranav-shivkumar',
  heroLede:
    'I\u2019m a software engineer in the Bay Area. At Meta I do product engineering \u2014 I helped scale Instagram-to-Facebook AI dubbing from 25K to 100K videos a day, and led the Android work behind AI-assisted creator tools in Reels. Before that, I spent three years at Cisco building the backend and cloud infrastructure behind IoT device onboarding.',
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Selected work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const aboutCopy: string[] = [
  'I like owning the whole arc of a product: figuring out what\u2019s actually worth building, designing the system, writing most of it, and staying through launch and the unglamorous iteration after.',
  'Most of my career has been backend and platform work \u2014 Python, Go, Kubernetes, Postgres, the usual suspects. The last couple of years pulled me toward the product surface: Android, creator tools, AI features that real people touch every day.',
];

export const facts: { label: string; value: string }[] = [
  { label: 'Now', value: 'Software Engineer at Meta' },
  { label: 'Before', value: 'Cisco Systems \u00b7 TCS' },
  { label: 'School', value: 'Rutgers \u2014 M.S., Electrical & Computer Engineering' },
  { label: 'Based in', value: 'Fremont, California' },
];

export const roles: Role[] = [
  {
    dates: 'Jun 2025 \u2013 Present',
    location: 'Menlo Park, CA',
    company: 'Meta',
    title: 'Software Engineer',
    bullets: [
      'Helped scale Instagram-to-Facebook AI voice dubbing from roughly 25K to 100K videos per day \u2014 language support, persistent preferences, measurement, and keeping it reliable.',
      'Led Android engineering for AI-assisted creator publishing in Reels: generated captions, thumbnail and frame recommendations.',
      'Shipped translation preferences, language expansion, creator insights, and experimentation infrastructure.',
    ],
  },
  {
    dates: 'Jun 2022 \u2013 May 2025',
    location: 'Morrisville, NC',
    company: 'Cisco Systems',
    title: 'Software Engineer',
    bullets: [
      'Built backend services and cloud infrastructure for an IoT onboarding and device-management platform.',
      'Python and Go services on Kubernetes (GKE) with Postgres and Redis; deployments via ArgoCD, Helm, and Kustomize.',
      'Owned Terraform automation, CI/CD, secrets management, and production debugging across the platform.',
    ],
  },
  {
    dates: 'Jun 2021 \u2013 May 2022',
    location: 'Edison, NJ',
    company: 'Tata Consultancy Services',
    title: 'Software Engineer',
    bullets: [
      'Built and supported backend services and APIs \u2014 the production fundamentals I still rely on.',
      'Earlier software engineering internships at Minos Labs and Bettercapital.',
    ],
  },
];

export const projects: Project[] = [
  {
    no: '01',
    title: 'Instagram \u2192 Facebook AI dubbing',
    description:
      'Took dubbing from an early capability to a scaled product surface: roughly 25K to 100K videos a day, across language support, persistent preferences, measurement, experimentation, and reliability.',
    tags: ['AI product', 'Cross-app systems'],
  },
  {
    no: '02',
    title: 'Creator AI tools for Reels',
    description:
      'Led Android engineering for generated captions and thumbnail/frame recommendations inside the publishing flow \u2014 work that became the foundation for the Creator Studio launch.',
    tags: ['Android', 'Generative AI'],
  },
  {
    no: '03',
    title: 'Cisco IoT onboarding platform',
    description:
      'Designed the cloud services and deployment foundations for onboarding and managing connected devices \u2014 APIs, containers, orchestration, data stores, infrastructure as code, secure operations.',
    tags: ['Python', 'Go', 'Kubernetes', 'Terraform'],
  },
  {
    no: '04',
    title: 'Incident investigation tooling',
    description:
      'Built AI-assisted tooling at Meta that investigates production incidents and drafts fixes \u2014 less time digging through logs, less on-call toil.',
    tags: ['AI-assisted dev', 'Reliability'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: 'Product & experience',
    skills: [
      'Product engineering',
      'AI-native development',
      'Android',
      'Java / Kotlin',
      'React',
      'TypeScript',
      'Experimentation',
    ],
  },
  {
    heading: 'Backend & systems',
    skills: [
      'Python',
      'Go',
      'Django',
      'FastAPI',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'Redis',
      'Distributed systems',
      'Async pipelines',
    ],
  },
  {
    heading: 'Cloud & production',
    skills: [
      'Docker',
      'Kubernetes',
      'GCP',
      'Terraform',
      'Helm',
      'Kustomize',
      'ArgoCD',
      'CI/CD',
      'Observability',
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'M.S., Electrical and Computer Engineering',
    school: 'Rutgers University',
    location: 'New Brunswick, NJ',
    dates: '2019 \u2013 2021',
  },
  {
    degree: 'B.E., Electronics and Communications Engineering',
    school: 'PES Institute of Technology',
    location: 'Bangalore, India',
    dates: '2015 \u2013 2019',
  },
];
