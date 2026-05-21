export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  highlights: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  technologies: string[];
};

export const services: ServiceDetail[] = [
  {
    slug: "it-staffing",
    title: "IT Staffing & Recruitment",
    tagline: "Precision matched IT talent — Contract, Full-Time, C2C and RPO.",
    overview:
      "We help enterprises scale engineering teams with vetted IT professionals across cloud, data, AI, security and product engineering. From rapid contract placements to building full RPO programs, our recruiters combine domain knowledge with deep technical screening so every hire ships value from day one.",
    highlights: [
      { title: "48-hour shortlists", desc: "Pre-vetted talent matched and submitted within two business days for most roles." },
      { title: "Technical screening", desc: "Each candidate is screened by senior engineers in the relevant stack before submission." },
      { title: "Flexible engagement", desc: "W2, 1099, C2C, contract-to-hire and full-time — choose what fits your program." },
      { title: "Compliance built-in", desc: "E-Verify, I-9, background and skills verification handled in-house." },
    ],
    process: [
      { step: "Intake", desc: "Kickoff with your hiring manager to capture role, stack, and culture signals." },
      { step: "Sourcing", desc: "Active outreach to our 250k+ talent pool plus targeted market mapping." },
      { step: "Screening", desc: "Technical + behavioral interviews and reference checks." },
      { step: "Onboarding", desc: "Compliance, paperwork and day-1 enablement handled end-to-end." },
    ],
    technologies: ["W2", "C2C", "1099", "RPO", "Contract-to-Hire", "Direct Placement"],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Generative AI, LLMs, computer vision and MLOps — production-grade.",
    overview:
      "We design and ship AI solutions that move metrics: agentic workflows, retrieval-augmented chat, document intelligence, demand forecasting, and computer vision QA. Every engagement includes evaluation harnesses, guardrails, and an MLOps backbone so your models stay accurate as data drifts.",
    highlights: [
      { title: "Generative AI assistants", desc: "RAG, tool-use and agent frameworks built on OpenAI, Anthropic, Google and open-weights models." },
      { title: "Predictive analytics", desc: "Forecasting, churn, fraud, and recommendation systems with measurable ROI." },
      { title: "Computer vision", desc: "Defect detection, OCR, video analytics and edge inference at scale." },
      { title: "MLOps platforms", desc: "Feature stores, model registries, automated retraining and drift monitoring." },
    ],
    process: [
      { step: "Discovery", desc: "Identify high-ROI use cases and define success metrics." },
      { step: "Prototype", desc: "2–4 week PoC with real data and human evaluation." },
      { step: "Productionize", desc: "Harden pipelines, add guardrails, integrate with your stack." },
      { step: "Operate", desc: "Monitor accuracy, cost, latency and retrain on a cadence." },
    ],
    technologies: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Vertex AI", "SageMaker"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Cloud-native architecture, CI/CD, IaC and platform engineering.",
    overview:
      "We architect and operate cloud platforms on AWS, Azure and GCP — migrating legacy workloads, building Kubernetes-based developer platforms, and embedding security and FinOps from day one. Our engineers ship reproducible infrastructure with Terraform and Pulumi, and golden CI/CD paths your teams will actually use.",
    highlights: [
      { title: "Cloud migration", desc: "Lift-shift-optimize playbooks with measurable cost and reliability wins." },
      { title: "Kubernetes platforms", desc: "EKS/AKS/GKE with GitOps (ArgoCD/Flux), service mesh and policy-as-code." },
      { title: "CI/CD acceleration", desc: "Trunk-based pipelines on GitHub Actions, GitLab CI, CircleCI or Jenkins." },
      { title: "FinOps & SRE", desc: "SLOs, error budgets, cost dashboards and on-call enablement." },
    ],
    process: [
      { step: "Assess", desc: "Workload inventory, cost baseline, security posture review." },
      { step: "Design", desc: "Target architecture, landing zones and migration waves." },
      { step: "Implement", desc: "Automated migrations, IaC, CI/CD and observability." },
      { step: "Optimize", desc: "Continuous cost, reliability and security improvements." },
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "ArgoCD", "Datadog", "Prometheus"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile Development",
    tagline: "Full-stack web, iOS, Android and cross-platform apps users love.",
    overview:
      "We build performant, accessible, beautifully designed web and mobile products with React, Next.js, Flutter and native iOS/Android. From greenfield MVPs to large-scale rewrites, we pair product engineering with design systems and rigorous QA to deliver software that ships and scales.",
    highlights: [
      { title: "Modern web apps", desc: "React, Next.js, TanStack, Remix — typed end-to-end with Tailwind and shadcn." },
      { title: "Cross-platform mobile", desc: "Flutter and React Native apps with native modules where it matters." },
      { title: "Design systems", desc: "Reusable component libraries, accessibility, and tokenized theming." },
      { title: "Performance budgets", desc: "Core Web Vitals tracked from PR to production." },
    ],
    process: [
      { step: "Product discovery", desc: "User research, jobs-to-be-done, lightweight prototypes." },
      { step: "Design", desc: "Wireframes, high-fidelity UI, and a tokenized design system." },
      { step: "Build", desc: "Iterative sprints with weekly demos and continuous deployment." },
      { step: "Launch & iterate", desc: "Analytics, A/B testing and a roadmap for v2." },
    ],
    technologies: ["React", "Next.js", "Flutter", "Swift", "Kotlin", "Node.js", "GraphQL", "tRPC"],
  },
  {
    slug: "data-analytics",
    title: "Data Engineering & Analytics",
    tagline: "Pipelines, warehouses and dashboards that drive decisions.",
    overview:
      "We unify your data across systems with modern ELT (Fivetran, Airbyte), transform it with dbt, and serve it from Snowflake, Databricks or BigQuery. Then we build the dashboards, reverse-ETL flows and self-serve semantic layers your business teams actually use.",
    highlights: [
      { title: "Modern data stack", desc: "Snowflake/Databricks/BigQuery + dbt + Fivetran + Airflow + Looker/Power BI." },
      { title: "Real-time pipelines", desc: "Kafka, Flink and streaming ETL for sub-second analytics." },
      { title: "Self-serve BI", desc: "Semantic layers and governed metrics so everyone reports off the same numbers." },
      { title: "Data governance", desc: "Lineage, quality tests, PII classification and access controls." },
    ],
    process: [
      { step: "Audit", desc: "Source inventory, current cost and gap analysis." },
      { step: "Model", desc: "Conformed dimensions, marts and metrics layer." },
      { step: "Build", desc: "Pipelines, tests, dashboards and reverse-ETL." },
      { step: "Enable", desc: "Training and self-serve enablement for business users." },
    ],
    technologies: ["Snowflake", "Databricks", "dbt", "Airflow", "Fivetran", "Kafka", "Power BI", "Looker"],
  },
  {
    slug: "enterprise-erp",
    title: "Enterprise Software & ERP",
    tagline: "SAP, Salesforce and custom enterprise apps modernized end-to-end.",
    overview:
      "We implement, integrate and extend enterprise platforms — SAP S/4HANA, Salesforce, Oracle, Microsoft Dynamics — and build custom enterprise apps where off-the-shelf falls short. Our consultants blend functional expertise with strong engineering to deliver outcomes, not just tickets.",
    highlights: [
      { title: "ERP implementations", desc: "Greenfield S/4HANA, brownfield migrations and rollouts across geographies." },
      { title: "CRM transformation", desc: "Sales Cloud, Service Cloud, Marketing Cloud and CPQ done right." },
      { title: "Integrations", desc: "MuleSoft, Boomi and event-driven APIs across enterprise systems." },
      { title: "Custom enterprise apps", desc: "Where SaaS ends, we build secure, scalable bespoke applications." },
    ],
    process: [
      { step: "Blueprint", desc: "Process mapping, fit-gap and target operating model." },
      { step: "Build", desc: "Configuration, custom development and integrations." },
      { step: "Test", desc: "UAT, performance and cutover rehearsals." },
      { step: "Hypercare", desc: "Go-live support, training and continuous improvement." },
    ],
    technologies: ["SAP S/4HANA", "Salesforce", "Oracle", "Dynamics 365", "MuleSoft", "Boomi", "ServiceNow"],
  },
];

export type IndustryDetail = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  capabilities: { title: string; desc: string }[];
  outcomes: string[];
};

export const industries: IndustryDetail[] = [
  {
    slug: "banking",
    title: "Banking & Financial Services",
    tagline: "Core modernization, risk analytics and digital banking platforms.",
    overview:
      "We help banks, insurers and fintechs modernize core systems, deploy AI for risk and fraud, and launch new digital products at startup speed. Our engagements span retail and commercial banking, capital markets, wealth and insurance — always with compliance and security as first-class concerns.",
    capabilities: [
      { title: "Core banking modernization", desc: "Re-platform legacy cores to cloud-native, API-first stacks." },
      { title: "Risk, fraud & AML", desc: "ML models for credit, fraud detection and AML transaction monitoring." },
      { title: "Open banking & APIs", desc: "PSD2/FDX-compliant API platforms and developer portals." },
      { title: "Digital onboarding", desc: "KYC, identity verification and frictionless account opening." },
    ],
    outcomes: ["40% faster loan decisions", "60% reduction in false-positive fraud alerts", "30% lower cost-to-serve"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant platforms, EHR integration and clinical AI.",
    overview:
      "We build secure, compliant solutions for providers, payers, pharma and medtech — from telehealth and patient engagement to clinical decision support and real-world evidence platforms. Every solution is engineered for HIPAA, HITRUST and FDA software-as-a-medical-device guidance where applicable.",
    capabilities: [
      { title: "EHR & HL7/FHIR integration", desc: "Epic, Cerner, Athena integrations with FHIR-first APIs." },
      { title: "Telehealth platforms", desc: "Secure video, scheduling, payments and clinician workflows." },
      { title: "Clinical AI", desc: "Imaging, NLP on clinical notes, and decision support." },
      { title: "RWE & analytics", desc: "Real-world evidence pipelines for pharma and payers." },
    ],
    outcomes: ["50% faster claims adjudication", "3x patient engagement", "HIPAA + HITRUST ready"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Engineering",
    tagline: "Smart factories, IIoT and predictive maintenance.",
    overview:
      "We connect plants, lines and assets with IIoT, edge AI and digital twins — delivering predictive maintenance, quality automation and end-to-end supply chain visibility. Our teams bring OT/IT fluency to keep operations resilient and efficient.",
    capabilities: [
      { title: "Industrial IoT", desc: "Edge gateways, OPC-UA, MQTT and time-series platforms." },
      { title: "Predictive maintenance", desc: "ML on sensor data to predict failures and optimize MRO." },
      { title: "Quality vision", desc: "Computer vision for defect detection on the line." },
      { title: "Supply chain", desc: "S&OP, demand planning and inventory optimization." },
    ],
    outcomes: ["25% reduction in unplanned downtime", "15% OEE improvement", "20% inventory reduction"],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    tagline: "Omnichannel commerce, personalization and customer analytics.",
    overview:
      "We help retailers and DTC brands win in an omnichannel world — composable commerce, real-time personalization, order management and unified customer profiles powered by a modern data stack.",
    capabilities: [
      { title: "Composable commerce", desc: "Headless storefronts on Shopify, commercetools, Salesforce Commerce." },
      { title: "Personalization", desc: "Recommendation engines, dynamic pricing, A/B testing at scale." },
      { title: "Order management", desc: "Distributed OMS, in-store fulfillment and BOPIS." },
      { title: "Customer 360", desc: "CDP plus unified analytics across digital and store." },
    ],
    outcomes: ["18% lift in conversion", "12% AOV uplift", "Sub-second page loads"],
  },
  {
    slug: "telecom",
    title: "Telecom & Media",
    tagline: "OSS/BSS transformation, network analytics and content delivery.",
    overview:
      "We modernize OSS/BSS stacks, build network and customer analytics platforms, and power streaming and content delivery for telcos and broadcasters. From 5G monetization to churn prediction, we ship outcomes that move ARPU.",
    capabilities: [
      { title: "OSS/BSS modernization", desc: "Catalog-driven order management, billing and assurance." },
      { title: "Network analytics", desc: "Streaming telemetry, anomaly detection and capacity planning." },
      { title: "Customer experience", desc: "Churn prediction, NBA and care-channel automation." },
      { title: "Streaming & CDN", desc: "Low-latency video, DRM and content personalization." },
    ],
    outcomes: ["20% churn reduction", "30% faster order-to-activation", "Real-time NPS"],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    tagline: "Citizen portals, secure cloud and data governance.",
    overview:
      "We build secure, accessible digital government — citizen portals, case management, data sharing platforms and smart-city infrastructure. Engagements are delivered with FedRAMP, FISMA and StateRAMP alignment, and a focus on equitable, accessible service delivery.",
    capabilities: [
      { title: "Digital service delivery", desc: "Modern, accessible citizen portals and self-service." },
      { title: "Case management", desc: "Configurable workflows for benefits, permits and licensing." },
      { title: "Secure cloud", desc: "FedRAMP/StateRAMP-aligned landing zones and platforms." },
      { title: "Data sharing", desc: "Inter-agency data exchanges with privacy by design." },
    ],
    outcomes: ["70% digital self-service", "Section 508 + WCAG 2.2 AA", "FedRAMP-ready"],
  },
];

export type Job = {
  id: string;
  title: string;
  service: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const jobs: Job[] = [
  {
    id: "senior-react-engineer",
    title: "Senior React Engineer",
    service: "Web & Mobile Development",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Lead front-end development on enterprise web applications using React, TypeScript and Next.js. You will work directly with product designers and back-end engineers to ship polished, accessible experiences.",
    responsibilities: [
      "Architect scalable React/Next.js applications",
      "Mentor mid-level engineers through PR review and pairing",
      "Own performance budgets and Core Web Vitals",
      "Partner with design to evolve our component library",
    ],
    requirements: [
      "5+ years of production React",
      "Strong TypeScript and modern tooling (Vite, Turbopack)",
      "Solid CSS and accessibility fundamentals",
      "Experience with TanStack Query/Router or Next.js",
    ],
    niceToHave: ["Design system contributions", "Open-source involvement", "GraphQL or tRPC"],
  },
  {
    id: "ml-engineer-genai",
    title: "Machine Learning Engineer — GenAI",
    service: "AI & Machine Learning",
    location: "Hybrid · St. Louis, MO",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Build production GenAI features — RAG pipelines, agent frameworks and evaluation harnesses — on top of OpenAI, Anthropic and open-weights models.",
    responsibilities: [
      "Design and ship LLM-powered features end-to-end",
      "Build retrieval pipelines and evaluation suites",
      "Optimize latency, cost and accuracy",
      "Collaborate with data engineers on feature pipelines",
    ],
    requirements: [
      "4+ years ML/AI engineering",
      "Hands-on with LangChain, LlamaIndex or similar",
      "Strong Python and at least one cloud (AWS/GCP/Azure)",
      "Vector DB experience (pgvector, Pinecone, Weaviate)",
    ],
    niceToHave: ["Fine-tuning experience", "MLOps tooling", "Published papers or OSS"],
  },
  {
    id: "aws-devops-engineer",
    title: "Senior AWS DevOps Engineer",
    service: "Cloud & DevOps",
    location: "Remote (US/UK)",
    type: "Contract",
    experience: "6+ years",
    summary:
      "Own AWS landing zones, EKS clusters and CI/CD pipelines for a global financial services client. Drive reliability, security and FinOps.",
    responsibilities: [
      "Design multi-account AWS landing zones",
      "Operate production EKS with GitOps",
      "Improve pipeline DORA metrics",
      "Embed security and cost guardrails",
    ],
    requirements: [
      "Deep AWS + Kubernetes",
      "Terraform at scale",
      "ArgoCD or Flux",
      "Strong scripting (Go or Python)",
    ],
    niceToHave: ["CKA/CKAD", "FinOps Certified Practitioner"],
  },
  {
    id: "data-engineer-snowflake",
    title: "Data Engineer — Snowflake & dbt",
    service: "Data Engineering & Analytics",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Build trusted data products on Snowflake with dbt, Airflow and Fivetran for a retail analytics platform.",
    responsibilities: [
      "Model conformed marts in dbt",
      "Own ELT pipelines and SLAs",
      "Implement testing, lineage and docs",
      "Partner with analytics engineers and BI",
    ],
    requirements: ["Snowflake + dbt in production", "Strong SQL and Python", "Airflow or Dagster", "Data quality mindset"],
    niceToHave: ["Streaming (Kafka/Flink)", "Looker or Power BI semantic modeling"],
  },
  {
    id: "salesforce-developer",
    title: "Salesforce Developer (Sales & Service Cloud)",
    service: "Enterprise Software & ERP",
    location: "Hybrid · London, UK",
    type: "Full-Time",
    experience: "3+ years",
    summary:
      "Build and extend Sales Cloud and Service Cloud orgs with Apex, LWC and Flows for a UK insurance client.",
    responsibilities: [
      "Develop Apex, LWC and Flows",
      "Integrate via MuleSoft and REST APIs",
      "Support release management and CI/CD",
      "Translate business needs into solutions",
    ],
    requirements: ["Apex + LWC", "Sales/Service Cloud certifications", "Strong communication", "Agile delivery"],
    niceToHave: ["CPQ", "MuleSoft", "Marketing Cloud"],
  },
  {
    id: "it-recruiter",
    title: "Senior IT Recruiter",
    service: "IT Staffing & Recruitment",
    location: "St. Louis, MO",
    type: "Full-Time",
    experience: "3+ years",
    summary:
      "Own the full-cycle hiring for cloud, data and AI roles across our enterprise clients. Bring your network and ship offers.",
    responsibilities: [
      "Source via LinkedIn Recruiter, Dice, and our ATS",
      "Technical screen with senior engineers",
      "Negotiate offers and manage onboarding",
      "Maintain pipeline health and SLAs",
    ],
    requirements: ["3+ years US IT staffing", "Strong tech vocabulary", "ATS proficiency", "Excellent client comms"],
    niceToHave: ["RPO program experience", "Visa case management"],
  },
  {
    id: "flutter-engineer",
    title: "Flutter Engineer",
    service: "Web & Mobile Development",
    location: "Remote (Global)",
    type: "Contract",
    experience: "3+ years",
    summary:
      "Ship cross-platform mobile features with Flutter for a healthcare consumer app. Native iOS/Android modules as needed.",
    responsibilities: [
      "Build production Flutter features",
      "Write native bridges when needed",
      "Optimize app performance and size",
      "Collaborate with QA on automation",
    ],
    requirements: ["Flutter + Dart", "Published apps on stores", "iOS or Android native basics", "Strong testing habits"],
    niceToHave: ["Healthcare experience", "Riverpod or Bloc"],
  },
  {
    id: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    service: "AI & Machine Learning",
    location: "On-site · Detroit, MI",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Build CV models for defect detection on automotive assembly lines. Edge deployment on NVIDIA Jetson.",
    responsibilities: [
      "Train CV models on plant data",
      "Optimize for edge inference",
      "Build labeling and active-learning loops",
      "Work closely with controls engineers",
    ],
    requirements: ["PyTorch + OpenCV", "Edge deployment", "Strong Python", "Manufacturing or robotics exposure"],
    niceToHave: ["TensorRT", "ROS2"],
  },
  {
    id: "azure-data-architect",
    title: "Azure Data Architect",
    service: "Data Engineering & Analytics",
    location: "Hybrid · Charlotte, NC",
    type: "Full-Time",
    experience: "8+ years",
    summary:
      "Architect the next-gen Azure data platform for a top-5 US bank — Fabric, Synapse, Purview and Databricks.",
    responsibilities: [
      "Define platform architecture and roadmaps",
      "Govern data with Purview",
      "Coach data engineering pods",
      "Partner with risk and compliance",
    ],
    requirements: ["Deep Azure data stack", "Banking/FS experience", "Strong stakeholder skills", "Enterprise architecture"],
    niceToHave: ["TOGAF", "Databricks certifications"],
  },
  {
    id: "sap-s4-consultant",
    title: "SAP S/4HANA Functional Consultant (FICO)",
    service: "Enterprise Software & ERP",
    location: "Remote (US, travel 25%)",
    type: "Contract",
    experience: "7+ years",
    summary:
      "Lead FICO workstream on an S/4HANA greenfield implementation for a global manufacturer.",
    responsibilities: [
      "Run FICO design workshops",
      "Configure GL, AR, AP, AA, CO",
      "Own data migration and cutover",
      "Coach client power users",
    ],
    requirements: ["2+ full S/4HANA cycles", "Deep FICO", "Manufacturing industry", "Strong English communication"],
    niceToHave: ["Activate methodology", "Group reporting"],
  },
  {
    id: "kubernetes-platform-engineer",
    title: "Kubernetes Platform Engineer",
    service: "Cloud & DevOps",
    location: "Remote (EU)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Build an internal developer platform on EKS for a global retailer — golden paths, self-service, and SLOs.",
    responsibilities: [
      "Design IDP with Backstage",
      "Operate multi-cluster EKS",
      "Implement OPA/Gatekeeper policies",
      "Drive developer experience KPIs",
    ],
    requirements: ["EKS in production", "GitOps + Terraform", "Backstage or similar", "Strong Go or Python"],
    niceToHave: ["Service mesh (Istio/Linkerd)", "OpenTelemetry"],
  },
  {
    id: "ux-designer",
    title: "Senior Product Designer",
    service: "Web & Mobile Development",
    location: "Remote (US/UK)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Design enterprise B2B products end-to-end — research, IA, interaction and high-fidelity UI. Help evolve our design system.",
    responsibilities: [
      "Lead design on multiple workstreams",
      "Run discovery and usability research",
      "Contribute to our shared design system",
      "Partner closely with engineering",
    ],
    requirements: ["Strong portfolio of B2B SaaS", "Figma mastery", "Systems thinking", "Excellent storytelling"],
    niceToHave: ["Front-end fluency", "Motion design"],
  },
  {
    id: "qa-automation-lead",
    title: "QA Automation Lead",
    service: "Web & Mobile Development",
    location: "Hybrid · Toronto, CA",
    type: "Full-Time",
    experience: "6+ years",
    summary:
      "Lead QA automation for a fintech platform — Playwright, k6, contract testing and CI gates.",
    responsibilities: [
      "Define QA strategy across teams",
      "Build and maintain Playwright suites",
      "Performance and contract testing",
      "Coach engineers on quality practices",
    ],
    requirements: ["Playwright or Cypress", "Performance tools (k6/Gatling)", "API testing", "Strong leadership"],
    niceToHave: ["Mobile automation (Appium/Maestro)", "Security testing"],
  },
  {
    id: "cybersecurity-engineer",
    title: "Cloud Security Engineer",
    service: "Cloud & DevOps",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Embed security into our AWS platforms — IAM, KMS, GuardDuty, Wiz, and secure-by-default landing zones.",
    responsibilities: [
      "Threat model and review architectures",
      "Automate detection and response",
      "Run vulnerability and pen-test programs",
      "Coach engineers on secure SDLC",
    ],
    requirements: ["AWS security depth", "IaC and Kubernetes", "SIEM/EDR tooling", "Risk-based mindset"],
    niceToHave: ["CISSP", "OSCP"],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    service: "AI & Machine Learning",
    location: "Hybrid · New York, NY",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Own the roadmap for our enterprise AI assistant — discovery, prioritization, GTM and impact measurement.",
    responsibilities: [
      "Define and prioritize the AI product roadmap",
      "Partner with ML, design and GTM",
      "Run discovery with enterprise customers",
      "Define success metrics and measure impact",
    ],
    requirements: ["Shipped AI/ML products", "Strong technical fluency", "Excellent communication", "Enterprise B2B"],
    niceToHave: ["Evaluation harness design", "Prior engineering background"],
  },
  {
    id: "business-analyst-bfsi",
    title: "Business Analyst — Banking",
    service: "Enterprise Software & ERP",
    location: "On-site · Charlotte, NC",
    type: "Contract",
    experience: "4+ years",
    summary:
      "Bridge business and engineering on a core-banking modernization program — write stories, run UAT, drive adoption.",
    responsibilities: [
      "Elicit requirements from business",
      "Write user stories and acceptance criteria",
      "Coordinate UAT and training",
      "Track value realization",
    ],
    requirements: ["BFSI domain", "JIRA + Confluence", "SQL fluency", "Strong written communication"],
    niceToHave: ["CBAP", "Agile certifications"],
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-bank-genai-assistant",
    client: "Top-10 US Bank",
    title: "GenAI assistant cuts wealth advisor research time by 62%",
    industry: "Banking & Financial Services",
    summary:
      "We built a retrieval-augmented AI assistant grounded in 1.2M internal research documents, deployed to 4,500 advisors in 6 months.",
    challenge:
      "Advisors spent 40% of their day searching policy, product and market research across siloed systems, slowing client response and degrading experience.",
    solution:
      "We designed a secure RAG architecture on Azure OpenAI with hybrid retrieval, fine-grained access controls and a human-in-the-loop evaluation harness. Tight integration with the CRM put answers next to the client conversation.",
    results: [
      "62% reduction in research time",
      "4,500 advisors onboarded in 6 months",
      "92% answer-acceptance rate in evals",
      "$18M annualized productivity gain",
    ],
  },
  {
    slug: "global-retailer-composable-commerce",
    client: "Global Specialty Retailer",
    title: "Composable commerce replatform lifts conversion 18%",
    industry: "Retail & E-Commerce",
    summary:
      "We re-platformed a legacy monolith to a composable storefront with headless commerce, personalization and a unified OMS.",
    challenge:
      "Slow site speed and rigid checkout limited conversion, and store fulfillment was disconnected from digital inventory.",
    solution:
      "Headless Next.js storefront on Vercel, commercetools backend, distributed OMS with BOPIS/SFS, and a personalization engine tied to a CDP.",
    results: [
      "18% conversion lift",
      "12% AOV increase",
      "Sub-1s LCP on 90th percentile",
      "40% faster release cadence",
    ],
  },
  {
    slug: "manufacturer-predictive-maintenance",
    client: "Tier-1 Automotive Supplier",
    title: "Predictive maintenance avoids $7M in downtime",
    industry: "Manufacturing & Engineering",
    summary:
      "IIoT + ML platform monitoring 12 plants and 3,200 machines, predicting failures up to 14 days in advance.",
    challenge:
      "Unplanned downtime cost the client $14M annually and obscured the true health of critical equipment.",
    solution:
      "Edge gateways, time-series ingestion on Azure, anomaly and remaining-useful-life models, and integrated work-order automation in SAP PM.",
    results: [
      "$7M downtime avoided in year 1",
      "25% reduction in unplanned stops",
      "14-day failure prediction window",
      "15% OEE improvement",
    ],
  },
  {
    slug: "healthcare-telehealth-platform",
    client: "National Health System",
    title: "Telehealth platform scales to 1.4M visits in 12 months",
    industry: "Healthcare & Life Sciences",
    summary:
      "We built a HIPAA-compliant telehealth platform integrating with Epic, supporting video, scheduling, payments and clinician workflows.",
    challenge:
      "Existing telehealth was fragmented across 4 vendors, hurting clinician adoption and patient experience.",
    solution:
      "Unified React + Flutter clients, FHIR integration with Epic, end-to-end encryption, and clinician-first workflows co-designed with care teams.",
    results: [
      "1.4M visits in year 1",
      "4.8/5 patient CSAT",
      "Clinician charting time down 22%",
      "HIPAA + HITRUST certified",
    ],
  },
  {
    slug: "fintech-fraud-platform",
    client: "Digital Bank (Series D Fintech)",
    title: "Real-time fraud platform reduces false positives 60%",
    industry: "Banking & Financial Services",
    summary:
      "Streaming ML platform scoring every transaction in under 80ms across 12M customers.",
    challenge:
      "Legacy rules engine drove a 7% false-positive rate, causing customer friction and operations overload.",
    solution:
      "Kafka + Flink streaming pipelines, gradient-boosted models with explainability, and a case-management UI built for fraud ops.",
    results: [
      "60% reduction in false positives",
      "Sub-80ms decisioning at p99",
      "$22M fraud loss avoided",
      "30% lower ops cost",
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "rag-in-the-enterprise",
    title: "RAG in the enterprise: lessons from 30+ deployments",
    category: "AI & Machine Learning",
    date: "May 12, 2026",
    readingTime: "8 min read",
    excerpt:
      "Retrieval-augmented generation is the default pattern for enterprise GenAI. Here's what actually moves the needle in production.",
    body: [
      "Most enterprises start their GenAI journey with a basic RAG prototype on top of a single document store. It works in the demo and falls over in production. After 30+ deployments, the same handful of decisions separate the assistants that drive adoption from the ones that quietly get turned off.",
      "Retrieval is the bottleneck, not the model. Hybrid retrieval (BM25 + dense vectors), aggressive metadata filtering and reranking with a cross-encoder beat fancier model choices nine times out of ten.",
      "Evaluation is a product feature. Ship a labeling UI on day one. Track answer acceptance, citation accuracy and refusal rate by use case, and gate every release on these metrics.",
      "Governance is non-negotiable. Row-level security on the index, prompt logging, PII redaction and clear human override paths build the trust that drives adoption.",
    ],
  },
  {
    slug: "modern-data-stack-2026",
    title: "The modern data stack in 2026: what we recommend today",
    category: "Data Engineering",
    date: "April 28, 2026",
    readingTime: "10 min read",
    excerpt:
      "The vendors have changed but the architecture has stabilized. Here's the reference stack we recommend to most clients.",
    body: [
      "For 80% of enterprises, the right answer in 2026 is still Snowflake or Databricks at the core, dbt for transformations, and a managed ELT tool like Fivetran or Airbyte. Where things have shifted is the surrounding layer.",
      "Semantic layers are mandatory. Cube or dbt's semantic layer + a governed metrics store kills the 'three numbers, one KPI' problem.",
      "Reverse ETL is the activation layer. Hightouch and Census are how we get data back into the SaaS tools that run the business.",
      "Observability is the new monitoring. Monte Carlo and Bigeye catch the silent pipeline breaks that used to surface in dashboards three days later.",
    ],
  },
  {
    slug: "platform-engineering-vs-devops",
    title: "Platform engineering vs DevOps: the practical difference",
    category: "Cloud & DevOps",
    date: "April 15, 2026",
    readingTime: "6 min read",
    excerpt:
      "Platform engineering is not DevOps with a Backstage portal. Here is what really changes when you do it well.",
    body: [
      "DevOps is a culture. Platform engineering is a product team. The difference matters because it changes how you fund the work, how you measure it, and who actually uses what you build.",
      "Treat your internal developer platform as a product with users, a roadmap and KPIs.",
      "Golden paths beat documentation. The fastest path to do the right thing should also be the default.",
      "Measure developer experience. DORA + SPACE metrics tell you whether the platform is paying off.",
    ],
  },
  {
    slug: "hiring-cloud-talent-in-2026",
    title: "Hiring cloud talent in 2026: what hiring managers get wrong",
    category: "IT Staffing",
    date: "March 30, 2026",
    readingTime: "5 min read",
    excerpt:
      "The supply of senior cloud engineers is tighter than ever. Here's how the best teams are still closing offers.",
    body: [
      "Senior AWS/Kubernetes engineers field 3-5 active conversations at any given moment. To win them, your hiring process needs to feel like a product.",
      "Speed wins. Shortlist to offer in under 10 business days or assume you lose.",
      "Show the work. Sharing the actual architecture diagrams and roadmap in screening converts at 2x the rate of generic pitches.",
      "Compensate for the market, not the band. Adjust quickly when your offer-acceptance rate dips.",
    ],
  },
  {
    slug: "ux-of-internal-tools",
    title: "The UX of internal tools: why it finally matters",
    category: "Web & Mobile",
    date: "March 10, 2026",
    readingTime: "7 min read",
    excerpt:
      "Internal apps are the next frontier for design investment. Here's why the ROI is bigger than most leaders think.",
    body: [
      "Most internal tools were built once, generations ago, and never re-touched. The cost shows up everywhere: training time, error rates, attrition.",
      "Run quick UX audits on your top 5 internal tools — the impact is almost always larger than a new external feature.",
      "Invest in a real internal design system. Consistency compounds.",
      "Measure task completion time, not satisfaction surveys.",
    ],
  },
  {
    slug: "fhir-integration-playbook",
    title: "A practical FHIR integration playbook for product teams",
    category: "Healthcare",
    date: "February 22, 2026",
    readingTime: "9 min read",
    excerpt:
      "FHIR is finally usable. Here's the playbook we follow when integrating with Epic, Cerner and Athena.",
    body: [
      "FHIR R4 is now the lingua franca of healthcare integration, but every EHR speaks a slightly different dialect. The playbook below saves months.",
      "Start with SMART on FHIR for auth — it's worth the learning curve.",
      "Normalize to a canonical FHIR profile internally; map per-EHR at the edge.",
      "Test with synthetic patient data (Synthea) long before you touch a real org.",
    ],
  },
];