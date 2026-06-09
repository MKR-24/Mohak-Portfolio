export const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#domains' },
  { name: 'Books', href: '#books' },
  { name: 'Contact', href: '#contact' },
]

export const heroMarqueeItems = [
  'Distributed Systems', 'AI / ML', 'LLM Engineering', 'Cybersecurity',
  'Cloud Native', 'Backend Engineering', 'Research', 'Open Source',
  'Distributed Systems', 'AI / ML', 'LLM Engineering', 'Cybersecurity',
  'Cloud Native', 'Backend Engineering', 'Research', 'Open Source',
]

export const counterItems = [
  { value: 4, suffix: '.0', label: 'GPA at ASU' },
  { value: 3, suffix: '', label: 'Research Papers' },
  { value: 20, suffix: '+', label: 'GitHub Repos' },
  { value: 2, suffix: '', label: 'SOC Internships' },
]

export const domainCards = [
  {
    id: 'systems',
    title: 'Distributed Systems',
    icon: '⚙️',
    skills: ['Go', 'gRPC', 'Protobuf', 'Redis', 'Kubernetes', 'Docker', 'RabbitMQ'],
    desc: 'Building fault-tolerant, high-throughput systems. Rate limiters at 3000 req/s, self-healing clusters, checkpoint-driven recovery.',
    projects: ['Distributed Rate Limiter', 'Self-Healing AI Training Cluster'],
  },
  {
  id: 'ai',
  title: 'AI / ML Engineering',
  icon: '🧠',
  skills: ['Python', 'PyTorch', 'LangChain', 'LangGraph', 'FastAPI', 'MediaPipe', 'Claude API', 'MQTT'],
  desc: 'Multi-agent LLM orchestration, contactless biometrics via rPPG, industrial AI incident response. 35% latency reduction on inter-agent inference.',
  projects: ['Sentinel AI', 'RecoveryIQ', 'Multi-Agent LLM Framework'],
},
  {
    id: 'security',
    title: 'Security Engineering',
    icon: '🛡️',
    skills: ['Neo4j', 'SAST', 'Gitleaks', 'Trivy', 'Bandit', 'Blockchain', 'IPFS'],
    desc: 'Open-source ASPM platform, SOC analyst experience, blockchain-based voting and file sharing systems.',
    projects: ['VulnGraph', 'Votix', 'Decentralized File Sharing'],
  },
  {
    id: 'backend',
    title: 'Backend & Cloud',
    icon: '☁️',
    skills: ['FastAPI', 'Flask', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'PostgreSQL'],
    desc: 'Production-grade APIs, observability with Prometheus/Grafana, auto-scaling on Kubernetes.',
    projects: ['Rate Limiter Service', 'VulnGraph CI/CD'],
  },
  {
    id: 'research',
    title: 'Research',
    icon: '📄',
    skills: ['ML Pipelines', 'GAN Augmentation', 'Ensemble Methods', 'Blockchain', 'Smart Contracts'],
    desc: '3 papers — malicious URL detection (93% accuracy), decentralized file sharing (published), blockchain voting (in publication).',
    projects: ['MMAUC', 'Blockchain File Sharing', 'Votix'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Distributed Rate Limiter',
    subtitle: '3,000 req/s · 1.57ms avg latency',
    desc: 'Token-bucket rate limiter in Go + gRPC. Coordinates per-client state across instances via Redis. p99 latency under 12ms at peak load. Deployed on Kubernetes with Prometheus/Grafana auto-scaling.',
    image: '/images/project1.png',
    impact: '3,000 req/s with 100% success across 60k requests',
    type: 'Distributed Systems',
    duration: 'Feb 2026',
    tags: ['Go', 'gRPC', 'Redis', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/MKR-24/Distributed-rate-Limiter',
    accent: '#64FFDA',
    featured: true,
  },
  {
  id: 2,
  title: 'Sentinel AI',
  subtitle: '4 hours → 90 seconds incident response',
  desc: 'Multi-agent industrial incident response system. Scans 3M sensor readings, cross-references 84 maintenance records, generates work orders with root cause analysis. Built at HackAZona 2026 in 24hrs.',
  image: '/images/project2.png',
  impact: '4hrs → 90s response time',
  type: 'AI / Multi-Agent Systems',
  duration: 'HackAZona 2026 · 24hrs',
  tags: ['Python', 'FastAPI', 'LangChain', 'Phi-3', 'React'],
  github: 'https://github.com/vishnu2007dev/hackAZona',
  accent: '#10B981',
  featured: false,
},
  {
    id: 3,
    title: 'VulnGraph',
    subtitle: 'LLM-Assisted Security Platform',
    desc: 'Open-source ASPM platform integrating Gitleaks, Trivy, and Bandit. Stores findings in Neo4j as attack graphs. Uses phi3 via Ollama for plain-English vulnerability explanations. CI/CD scanning on every PR.',
    image: '/images/project3.png',
    impact: 'Full attack graph visualization + LLM remediation',
    type: 'Security · AI',
    duration: 'Ongoing',
    tags: ['Python', 'Neo4j', 'Streamlit', 'Docker', 'LLM'],
    github: 'https://github.com/MKR-24/VulnGraph',
    live: 'https://huggingface.co/spaces/MKR-24/VulnGraph',
    accent: '#E26EE5',
    featured: false,
  },
 {
  id: 4,
  title: 'RecoveryIQ',
  subtitle: 'AI intelligence layer for thermal recovery hardware',
  desc: 'Closed-loop recovery system using rPPG for contactless biometrics, Claude for AI session planning, MQTT to fire real Hydrawav3 hardware. Built ASL sign language support from scratch in 30 mins at GlobeHack 2026.',
  image: '/images/project4.png',
  impact: 'Real hardware + zero-dependency ASL',
  type: 'AI / Healthcare Tech',
  duration: 'GlobeHack 2026 · 24hrs',
  tags: ['React', 'FastAPI', 'MediaPipe', 'Claude', 'MQTT'],
  github: 'https://github.com/kaushhatrivedi1/RecoveryIQ',
  accent: '#F59E0B',
  featured: false,
},
]

export const research = [
  {
    title: 'Strengthening AI-Powered URL Classification using MMAUC',
    status: 'In Review',
    period: 'Aug 2024 – May 2025',
    desc: 'Ensemble ML pipeline for malicious URL detection. 93% accuracy, 18% fewer false positives, 22% better class balance via GAN augmentation.',
    tags: ['ML', 'Ensemble Methods', 'GAN', 'Cybersecurity'],
    doi: null,
  },
  {
    title: 'Blockchain-Powered Decentralized File Sharing',
    status: 'Published',
    period: 'Aug 2023 – Dec 2024',
    desc: 'Decentralized file-sharing using IPFS, AES encryption, and blockchain for tamper-evident distribution.',
    tags: ['Blockchain', 'IPFS', 'Cryptography'],
    doi: 'https://doi.org/10.53555/AJBR.v27i6S.5138',
  },
  {
    title: 'Votix — Blockchain-Based Secure Voting System',
    status: 'In Publication',
    period: 'Aug 2022 – May 2024',
    desc: 'Decentralized voting with smart contracts and facial recognition for voter auth. Tamper-proof, auditable, trustless.',
    tags: ['Blockchain', 'Smart Contracts', 'Computer Vision'],
    doi: null,
  },
]

export const books = {
  completed: [
    {
      title: 'Ikigai',
      author: 'Héctor García & Francesc Miralles',
      cover: 'https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg',
      rating: 5,
      takeaway: 'Purpose is found at the intersection of what you love, what you are good at, what the world needs, and what you can be paid for.',
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      cover: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg',
      rating: 5,
      takeaway: 'Wealth is what you don\'t spend. Financial success is more about behavior than intelligence.',
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      cover: 'https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg',
      rating: 5,
      takeaway: 'When you want something, all the universe conspires in helping you to achieve it.',
    },
    {
    title: 'Cloud Computing: A Bottom-Up Approach',
    author: 'Dr. Ming Zhao',
    cover: '/images/books/cloud-computing.jpeg',

    link: null,
    },
  ],
  reading: [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      cover: 'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
      progress: 15,
    },
    {
      title: 'AI Engineering',
      author: 'Chip Huyen',
      cover: 'https://covers.openlibrary.org/b/isbn/9781098166304-L.jpg',
      progress: 10,
    },
    {
    title: 'Hands-On Large Language Models',
    author: 'Jay Alammar & Maarten Grootendorst',
    cover: 'https://covers.openlibrary.org/b/isbn/9781098150969-L.jpg',
    link: 'https://learning-oreilly-com.ezproxy1.lib.asu.edu/library/view/-/9798341621480/',
    },
    {
      title: 'Software Architecture Patterns',
      author: 'Mark Richards',
      cover: '/images/books/software.jpg',
      progress: 10,
    },
  ],
  willRead: [
    {
      title: 'Hands-On LLM Serving and Optimization',
      author: "Chi Wang",
      cover: '/images/books/llm.jpeg',
      link: 'https://learning-oreilly-com.ezproxy1.lib.asu.edu/library/view/-/9798341621480/',
    },
    {
      title: 'Team of Rivals',
      author: 'Doris Kearns Goodwin',
      cover: 'https://covers.openlibrary.org/b/isbn/9780743270755-L.jpg',
      link: null,
    },
    {
      title: 'The Curious Incident of the Dog in the Night-Time',
      author: 'Mark Haddon',
      cover: 'https://covers.openlibrary.org/b/isbn/9781400032716-L.jpg',
      link: null,
    },
  ],
}
export const techStackIcons = [
  { name: 'Go', icon: 'SiGo' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'React', icon: 'SiReact' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'Kubernetes', icon: 'SiKubernetes' },
  { name: 'Redis', icon: 'SiRedis' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'GitHub', icon: 'SiGithub' },
  { name: 'GraphQL', icon: 'SiGraphql' },
  { name: 'PyTorch', icon: 'SiPytorch' },
]