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
  { value: 6, suffix: '+', label: 'Systems Built' },
  { value: 2, suffix: ' yrs', label: 'Industry Experience' },
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
    skills: ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph', 'scikit-learn'],
    desc: 'From ML research pipelines to multi-agent LLM orchestration. 35% latency reduction on inter-agent inference.',
    projects: ['Multi-Agent LLM Framework', 'MMAUC URL Classifier'],
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
    image: '/images/project1.jpg',
    impact: '3,000 req/s with 100% success across 60k requests',
    type: 'Distributed Systems',
    duration: 'Feb 2026',
    tags: ['Go', 'gRPC', 'Redis', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/MKR-24',
    live: 'https://github.com/MKR-24',
    accent: '#64FFDA',
    featured: true,
  },
  {
    id: 2,
    title: 'Self-Healing AI Training Cluster',
    subtitle: 'Fault-tolerant distributed ML training',
    desc: 'Docker-based master-worker system with gRPC heartbeats. Auto-detects node failures and reassigns tasks. Checkpoint-driven recovery and All-Reduce gradient synchronization maintain training correctness.',
    image: '/images/project2.jpg',
    impact: 'Zero manual intervention on node failure',
    type: 'Distributed Systems · MLOps',
    duration: 'Ongoing',
    tags: ['Python', 'gRPC', 'FastAPI', 'Docker', 'PyTorch'],
    github: 'https://github.com/MKR-24',
    live: 'https://github.com/MKR-24',
    accent: '#A3DAFF',
    featured: false,
  },
  {
    id: 3,
    title: 'VulnGraph',
    subtitle: 'LLM-Assisted Security Platform',
    desc: 'Open-source ASPM platform integrating Gitleaks, Trivy, and Bandit. Stores findings in Neo4j as attack graphs. Uses phi3 via Ollama for plain-English vulnerability explanations. CI/CD scanning on every PR.',
    image: '/images/project3.jpg',
    impact: 'Full attack graph visualization + LLM remediation',
    type: 'Security · AI',
    duration: 'Ongoing',
    tags: ['Python', 'Neo4j', 'Streamlit', 'Docker', 'LLM'],
    github: 'https://github.com/MKR-24',
    live: 'https://github.com/MKR-24',
    accent: '#E26EE5',
    featured: false,
  },
  {
    id: 4,
    title: 'Multi-Agent LLM Framework',
    subtitle: '35% latency reduction on multi-query inference',
    desc: 'Cooperative LLM agents with explicit task routing and shared state for data synthesis and summarization. Optimized inter-agent communication pipeline cutting inference latency by 35%.',
    image: '/images/project4.jpg',
    impact: '35% reduction in multi-query inference latency',
    type: 'AI / LLM Engineering',
    duration: 'Oct 2025',
    tags: ['Python', 'LangChain', 'LangGraph'],
    github: 'https://github.com/MKR-24',
    live: 'https://github.com/MKR-24',
    accent: '#FCD34D',
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
  currentlyReading: [
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      cover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
      progress: 65,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'David Thomas & Andrew Hunt',
      cover: 'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
      progress: 40,
    },
  ],
  completed: [
    {
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
      rating: 5,
      takeaway: 'Systems beat goals every time.',
    },
    {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      cover: 'https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg',
      rating: 5,
      takeaway: 'Code is read far more than written.',
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      cover: 'https://covers.openlibrary.org/b/isbn/9780804139021-L.jpg',
      rating: 4,
      takeaway: "Build what doesn't exist yet.",
    },
    {
      title: 'The Lean Startup',
      author: 'Eric Ries',
      cover: 'https://covers.openlibrary.org/b/isbn/9780307887894-L.jpg',
      rating: 4,
      takeaway: 'Build, measure, learn — repeat.',
    },
  ],
}