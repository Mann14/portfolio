export const site = {
  name: "Mann Mittal",
  role: "DevOps Engineer",
  location: "Indore, India",
  phone: "+91 7489715507",
  email: "mannmittal622@gmail.com",
  linkedin: "https://linkedin.com/in/mann-mittal-b11148243",
  github: "https://github.com/Mann14",
  resume: "/portfolio/Mann_Mittal_DevOps.pdf",
  availability: "Open to DevOps & Site-Reliability roles",
  headline:
    "I ship reliable cloud platforms — Terraform, Kubernetes, and GitOps that keep production up while teams move fast.",
  summary:
    "DevOps Engineer with hands-on experience automating cloud infrastructure, CI/CD pipelines, and containerized deployments across AWS and GCP. I work daily with Terraform, Docker, Kubernetes, Ansible, Helm, ArgoCD, Argo Rollouts, GitHub Actions, GitLab CI, Prometheus, and Grafana — from production AI platforms and zero-downtime releases to infrastructure automation, troubleshooting, and migrating containerized workloads toward Kubernetes.",
};

export const stats = [
  { value: "3+", label: "Years shipping infra" },
  { value: "0", label: "Downtime release goal" },
  { value: "2", label: "Clouds: AWS + GCP" },
  { value: "Full", label: "Stack ownership" },
];

export const skillGroups = [
  {
    title: "Cloud",
    items: [
      "AWS: EC2, ECS, EKS, Fargate",
      "AWS: S3, RDS/Aurora, IAM, VPC, CloudWatch",
      "AWS networking: NAT GW, IGW, Route Tables, Security Groups",
      "GCP: GKE, Compute Engine, Cloud Storage",
    ],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Terraform Cloud", "Ansible"],
  },
  {
    title: "Platform & GitOps",
    items: [
      "Kubernetes",
      "Docker / Docker Swarm",
      "Helm",
      "ArgoCD",
      "Argo Rollouts",
      "KEDA",
      "GitOps",
      "Blue-green & canary",
    ],
  },
  {
    title: "CI/CD",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "Pipeline design"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "Datadog", "Alertmanager"],
  },
  {
    title: "Networking & Security",
    items: ["IAM", "Security Groups", "VPC networking", "NAT", "SSL/TLS", "HTTPS", "Istio"],
  },
  {
    title: "Full stack",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Flask"],
  },
  {
    title: "Languages & Tools",
    items: ["Python", "Bash/Shell", "JavaScript", "TypeScript", "C", "C++", "SQL", "Linux", "Git"],
  },
];

export const experience = {
  company: "ReventLabs",
  location: "Indore, India",
  role: "DevOps Engineer",
  period: "Jan 2024 – Present",
  mode: "Full-time",
  bullets: [
    "Manage deployment and operations of a conversational AI platform on AWS across Kubernetes clusters and Docker Swarm workloads running on EC2.",
    "Contributed to the migration from AWS ECS toward Kubernetes to improve cost efficiency and infrastructure portability.",
    "Automate Docker Swarm deployments with Ansible and Kubernetes deployments with ArgoCD canary strategies for zero-downtime releases.",
    "Write and maintain CI/CD pipelines for application delivery, release automation, and deployment workflows across containerized workloads.",
    "Monitor workloads with Prometheus and Grafana and investigate resource-utilization and production issues.",
    "Drive migration from AMD-based Kubernetes nodes toward ARM by identifying incompatible AI/NLU model versions with the NLU team.",
  ],
};

export const earlierRoles = [
  {
    company: "8Bit Warrior",
    location: "Bhopal, Madhya Pradesh",
    role: "Software Engineer",
    period: "Aug 2023 – Dec 2023",
    note: "DevOps & cloud engineering — maintained GitHub Actions CI/CD pipelines, containerized apps with Docker, and automated tasks with Linux, Git, AWS, and Bash.",
  },
  {
    company: "Brand Smashers Pvt. Ltd.",
    location: "Bhopal, Madhya Pradesh",
    role: "Software Developer Intern",
    period: "May 2023 – Jul 2023",
    note: "Software development & AI — shipped Python, C++, JavaScript, React, and Next.js code, documented processes, and worked on AI model training and prompt engineering.",
  },
];

export const caseStudies = [
  {
    id: "conversational-ai",
    kicker: "ReventLabs · Production platform",
    title: "Conversational AI application",
    period: "Jul 2025 – Present",
    outcome: "Kubernetes + Docker Swarm on EC2, with Ansible and ArgoCD canary releases.",
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
      "Deploy and operate the platform on AWS across Kubernetes clusters and Docker Swarm workloads on EC2; worked with ECS in the initial phase before migrating toward Kubernetes for cost and portability.",
      "Ansible automates Swarm releases; ArgoCD drives canary deployments on Kubernetes for zero-downtime delivery.",
      "Own CI/CD pipelines, Docker image management, production troubleshooting, and Prometheus/Grafana monitoring.",
      "Leading the AMD-to-ARM node migration by flagging incompatible AI/NLU model versions with the NLU team.",
    ],
  },
  {
    id: "ai-platform",
    kicker: "ReventLabs · Reliability & cost",
    title: "AI platform enhancement",
    period: "Jan 2024 – Jul 2025",
    outcome: "GitOps + blue-green rollouts, PDBs, and Terraform on GCP.",
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
      "Implemented Kubernetes Pod Disruption Budgets, cost-optimization measures, and infrastructure improvements.",
      "Provisioned and managed GCP infrastructure with Terraform and automated delivery through custom GitHub Actions pipelines.",
      "ArgoCD for GitOps service management and Argo Rollouts blue-green strategy for zero-downtime releases.",
      "Managed Helm-based Kubernetes workloads, application configuration, Docker images, and cross-cluster troubleshooting.",
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
  "AWS Solution Architect - Associate (Nov 2026)",
];

export const achievements = [
  "Published a research paper — IJANA Publications (May 2024)",
];
