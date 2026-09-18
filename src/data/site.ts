export const site = {
  name: "Mann Mittal",
  role: "DevOps Engineer",
  location: "Bhopal, Madhya Pradesh",
  phone: "+91 7489715507",
  email: "mannmittal622@gmail.com",
  linkedin: "https://linkedin.com/in/mann-mittal-b11148243",
  github: "https://github.com/Mann14",
  resume: "/Mann_Mittal_Resume.pdf",
  availability: "Open to DevOps & platform engineering roles",
  headline:
    "I ship reliable cloud platforms — Terraform, Kubernetes, and GitOps that keep production up while teams move fast.",
  summary:
    "DevOps engineer with 2 years of hands-on experience automating cloud infrastructure, CI/CD pipelines, and containerized deployments on AWS and GCP. I design zero-downtime releases (blue-green, canary), GitOps workflows with ArgoCD, and observability with Prometheus and Grafana. A full-stack background in React, Next.js, and Node.js means I own delivery from commit to cluster.",
};

export const stats = [
  { value: "2+", label: "Years shipping infra" },
  { value: "0", label: "Downtime release goal" },
  { value: "2", label: "Clouds: AWS + GCP" },
  { value: "Full", label: "Stack ownership" },
];

export const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS (EC2, S3, VPC, IAM, CloudWatch)", "GCP (GKE, Compute Engine, Cloud Storage)"],
  },
  {
    title: "Platform & GitOps",
    items: [
      "Kubernetes",
      "Docker / Docker Swarm",
      "Terraform",
      "Ansible",
      "Helm",
      "ArgoCD",
      "Argo Rollouts",
    ],
  },
  {
    title: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "Jenkins"],
  },
  {
    title: "Observability & Scale",
    items: ["Prometheus", "Grafana", "Datadog", "KEDA"],
  },
  {
    title: "Networking & Security",
    items: ["IAM", "Security Groups", "NAT", "SSL/TLS", "HTTPS", "Istio"],
  },
  {
    title: "Full stack",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Flask"],
  },
  {
    title: "Languages",
    items: ["Python", "JavaScript", "Bash", "C", "C++"],
  },
];

export const experience = {
  company: "ReventLabs",
  location: "Indore, Madhya Pradesh",
  role: "DevOps Engineer",
  period: "Jan 2025 – Present",
  mode: "On-site",
  bullets: [
    "Designed and maintained CI/CD pipelines with GitHub Actions, targeting zero-downtime production releases.",
    "Automated infrastructure on AWS and GCP with Terraform, cutting manual configuration and deployment errors.",
    "Containerized applications with Docker and orchestrated them on Kubernetes for scale and reliability.",
    "Implemented monitoring and alerting with Prometheus and Grafana for cluster health and system performance.",
  ],
};

export const caseStudies = [
  {
    id: "conversational-ai",
    kicker: "Client · Production platform",
    title: "Conversational AI application",
    period: "Mar 2026 – Present",
    outcome: "Leading Swarm → Kubernetes migration with canary GitOps releases.",
    tech: [
      "Terraform",
      "AWS",
      "GitLab",
      "Kubernetes",
      "Docker Swarm",
      "Prometheus",
      "Helm",
      "Ansible",
      "ArgoCD",
    ],
    points: [
      "Own deployment of a conversational AI platform on AWS across Kubernetes clusters and Docker Swarm on EC2.",
      "Leading the migration from Docker Swarm to Kubernetes without pausing delivery.",
      "Ansible for Swarm automation; ArgoCD canary strategy on Kubernetes for zero-downtime releases.",
    ],
  },
  {
    id: "ai-platform",
    kicker: "Client · Reliability & cost",
    title: "AI platform enhancement",
    period: "Jan 2025 – Feb 2026",
    outcome: "GitOps + blue-green rollouts, PDBs, and tighter CI on GCP.",
    tech: [
      "Terraform",
      "GCP",
      "GitHub Actions",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Helm",
      "ArgoCD",
      "Argo Rollouts",
    ],
    points: [
      "Hardened an existing AI platform with Kubernetes Pod Disruption Budgets and cost-optimization work.",
      "Built a custom GitHub Actions workflow to streamline CI/CD.",
      "Integrated ArgoCD for GitOps and Argo Rollouts blue-green for zero-downtime releases.",
    ],
  },
];

export const projects = [
  {
    title: "KhetseOrganics",
    role: "Freelance Full-Stack Developer",
    period: "Aug 2025 – Jan 2026",
    description:
      "E-commerce platform for organic products — responsive storefront, product data layer, and CI-backed hosting.",
    tech: ["React.js", "Next.js", "MongoDB", "Vercel"],
    points: [
      "Built a full-stack storefront with React and Next.js.",
      "Modeled product storage and retrieval in MongoDB.",
      "Shipped on Vercel with continuous integration for seamless updates.",
    ],
  },
];

export const education = {
  school: "Lakshmi Narain College of Technology Excellence, Bhopal",
  degree: "B.Tech in Computer Science Engineering (AI & ML)",
  meta: "CGPA 8.26/10 · 2021 – 2025",
};

export const certifications = [
  "AWS Academy Cloud Foundations — AWS Academy (Apr 2024 – May 2024)",
  "C / C++ / Python Programming — Sharma Coding Academy (Aug 2022 – Apr 2023)",
];

export const achievements = [
  "Published a research paper — IJANA Publications (May 2024)",
];
