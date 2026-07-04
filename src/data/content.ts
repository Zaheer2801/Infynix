export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  highlights: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  technologies: string[];
  category?: string;
  extraSections?: {
    sectionTitle: string;
    sectionSubtitle?: string;
    sectionDesc?: string;
    items: { title: string; desc: string }[];
  }[];
};

export const services: ServiceDetail[] = [
  {
    slug: "it-staffing",
    title: "IT Staffing & Recruitment",
    tagline: "Accelerating technical capacity with pre-screened, elite IT engineering talent across contract, RPO, and direct models.",
    overview:
      "We empower enterprise technology departments to scale smoothly by matching them with pre-screened IT specialists. From rapidly deploying agile software developers and Cloud Architects to designing custom, end-to-end Recruitment Process Outsourcing (RPO) frameworks, we combine technical screening with deep market mapping to ensure your team starts shipping high-quality code from day one.",
    highlights: [
      { title: "Elite 48-Hour Shortlists", desc: "Rigorous technical matching and background reviews completed to deliver top candidate options within two business days." },
      { title: "Deep Peer-to-Peer Screening", desc: "Every technologist undergoes structured evaluations conducted by senior subject-matter experts before presentation." },
      { title: "Agile Engagement Models", desc: "Frictionless options spanning W2, 1099, C2C, Contract-to-Hire, and Direct Placements to suit your operational needs." },
      { title: "Comprehensive Compliance", desc: "In-house management of E-Verify, background checks, drug screenings, and security clearance validations." },
    ],
    process: [
      { step: "Intake & Alignment", desc: "Collaborate with engineering leadership to capture technical requirements, team culture, and business objectives." },
      { step: "Active Sourcing", desc: "Leverage our proprietary database of over 500k tech candidates alongside precise market mapping pipelines." },
      { step: "Technical Assessment", desc: "Administer rigorous programming tests and peer-to-peer technical deep-dives to guarantee competence." },
      { step: "Seamless Onboarding", desc: "Handle all legal compliance, administrative paperwork, and day-one setup tasks for a smooth transition." },
    ],
    technologies: ["W2", "C2C", "1099", "RPO", "Contract-to-Hire", "Direct Placement"],
  },
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Production-ready Generative AI systems, intelligent agentic workflows, and robust MLOps infrastructure.",
    overview:
      "We architect, build, and deploy production-grade Artificial Intelligence and Machine Learning systems that move core business metrics. Our experience covers secure enterprise Retrieval-Augmented Generation (RAG), autonomous multi-agent task execution, custom document processing pipelines, and high-frequency edge computer vision models. Every engagement is integrated with strict compliance guardrails, drift monitoring, and an optimized MLOps platform to ensure stability over time.",
    highlights: [
      { title: "Production-Grade Generative AI", desc: "RAG, agentic tools, and fine-tuning using proprietary and open-weights models (OpenAI, Claude, Llama)." },
      { title: "Advanced Computer Vision", desc: "High-speed defect detection, OCR engines, and real-time streaming video analytics for industrial applications." },
      { title: "Predictive Operations", desc: "ML models for high-impact forecasting, churn mitigation, automated fraud analysis, and customer recommendation engines." },
      { title: "Robust MLOps Pipelines", desc: "Automated retraining, model registries, drift detection, and secure execution sandboxes." },
    ],
    process: [
      { step: "ROI Analysis", desc: "Deconstruct your processes to identify high-value AI candidates and establish measurable performance KPIs." },
      { step: "Prototype & Evaluation", desc: "Design a 2-4 week Proof of Concept with real datasets and human-in-the-loop validation frameworks." },
      { step: "Industrialization", desc: "Hardening models, integrating backend services, and optimizing latency and cost parameters." },
      { step: "Continuous Operations", desc: "Incorporate drift monitoring, automated training loops, and safety guardrails to ensure accuracy." },
    ],
    technologies: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Vertex AI", "SageMaker"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Scale with confidence using secure cloud-native architecture, robust GitOps pipelines, and modern developer platforms.",
    overview:
      "We build, optimize, and manage highly resilient cloud platforms on AWS, Google Cloud, and Microsoft Azure. By automating infrastructure via Terraform and Pulumi, implementing GitOps-driven deployment processes, and establishing modern platform engineering standards, we eliminate delivery friction. Our cloud operations integrate FinOps strategies and robust Site Reliability Engineering (SRE) principles to keep your platforms performant, cost-efficient, and secure.",
    highlights: [
      { title: "Enterprise Cloud Migration", desc: "Risk-mitigated migration frameworks focused on modernization, cost-efficiency, and minimal downtime." },
      { title: "Production Kubernetes", desc: "Highly scalable container environments using EKS, GKE, or AKS managed via GitOps (ArgoCD, Flux)." },
      { title: "Automated CI/CD Engines", desc: "Standardized deployment pipelines leveraging GitHub Actions, GitLab CI, and automated security testing." },
      { title: "FinOps & Observability", desc: "Continuous cost-optimization strategies, comprehensive logging (Datadog, OpenTelemetry), and active SRE playbooks." },
    ],
    process: [
      { step: "Inventory & Assessment", desc: "Audit cloud resource utilization, detect security vulnerabilities, and map technical dependencies." },
      { step: "Architecture Design", desc: "Formulate multi-account cloud landing zones, network security boundaries, and high-availability topologies." },
      { step: "Automated Provisioning", desc: "Construct declarative Infrastructure as Code (IaC) and deploy unified CI/CD pipelines." },
      { step: "Continuous Optimization", desc: "Monitor cost anomalies, adjust scaling properties, and execute proactive reliability drills." },
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "ArgoCD", "Datadog", "Prometheus"],
  },
  {
    slug: "web-mobile",
    title: "Web & Mobile Development",
    tagline: "Deliver premium digital experiences with performant web, native, and cross-platform mobile products.",
    overview:
      "We design and build high-performance web and mobile products utilizing React, Next.js, Flutter, Swift, and Kotlin. Our approach unifies modern product engineering practices with accessible, pixel-perfect user interfaces and robust security architectures. From launching initial corporate MVPs to orchestrating complex, multi-tenant system migrations, we deliver scalable digital experiences that users love.",
    highlights: [
      { title: "Premium Web Applications", desc: "Highly optimized single-page and server-side rendered applications typed end-to-end in TypeScript." },
      { title: "Cross-Platform Mobile", desc: "High-fidelity Flutter and React Native architectures integrated with custom native bridges." },
      { title: "Unified Design Systems", desc: "Component libraries structured for web accessibility (WCAG 2.2 AA) and brand consistency." },
      { title: "Performance Budgets", desc: "Vigilant optimization of Core Web Vitals, API latency, and application bundles." },
    ],
    process: [
      { step: "Product Discovery", desc: "Engage in user journey mapping, design workshops, and low-fidelity interactive prototyping." },
      { step: "UI/UX Engineering", desc: "Establish robust interface wireframes, interactive user flows, and unified design token architectures." },
      { step: "Agile Development", desc: "Conduct iterative engineering sprints backed by continuous automated quality gates and weekly reviews." },
      { step: "Launch & Analytics", desc: "Deploy production packages, integrate deep analytics systems, and establish continuous testing loops." },
    ],
    technologies: ["React", "Next.js", "Flutter", "Swift", "Kotlin", "Node.js", "GraphQL", "tRPC"],
  },
  {
    slug: "data-analytics",
    title: "Data Engineering & Analytics",
    tagline: "Unlock decision-ready insights with secure data pipelines, high-scale warehouses, and governed metrics.",
    overview:
      "We help enterprises build modern data platforms that turn raw information into business actions. Our teams construct secure ELT/ETL pipelines using Fivetran and Airbyte, write modular, testable SQL with dbt, and architect high-performance warehouses in Snowflake, Databricks, and BigQuery. We establish clean semantic layers, robust data lineage, and governed metric stores to ensure consistent reporting across your organization.",
    highlights: [
      { title: "Modern Data Pipelines", desc: "Scalable, automated data ingestion architectures built for security, high volume, and low latency." },
      { title: "Real-Time Streaming Analytics", desc: "Streaming analytics engines using Kafka and Apache Flink for sub-second processing and insights." },
      { title: "Governed Semantic Layers", desc: "Unified business metric definitions that eliminate reporting discrepancies across different departments." },
      { title: "Data Lineage & Compliance", desc: "End-to-end data audit trails, custom quality testing suites, and strict PII protection controls." },
    ],
    process: [
      { step: "Data Infrastructure Audit", desc: "Evaluate current database schemas, query performance bottlenecks, and resource consumption costs." },
      { step: "Relational Modeling", desc: "Develop optimized data warehouse schemas, dimensional marts, and metric definitions." },
      { step: "Pipeline Engineering", desc: "Implement reliable, self-healing ELT workflows, data validation checks, and reverse-ETL processes." },
      { step: "Business Enablement", desc: "Conduct user training and deploy self-service business intelligence models to empower analytical teams." },
    ],
    technologies: ["Snowflake", "Databricks", "dbt", "Airflow", "Fivetran", "Kafka", "Power BI", "Looker"],
  },
  {
    slug: "enterprise-erp",
    category: "Consulting Services",
    title: "Enterprise Application",
    tagline: "Enterprise Application Services: Optimize operations, reduce costs, and accelerate business transformation with enterprise-grade solutions.",
    overview:
      "In today’s competitive global landscape, manufacturing companies across sectors such as automotive, aerospace, hi-tech, and industrial industries face the challenge of managing increasingly complex operations. With businesses expanding across continents, the need to optimize operations, reduce costs, and enhance product quality has never been more crucial. To stay competitive, manufacturers are adopting advanced IT solutions that improve supply-chain efficiency, enhance collaboration, and streamline business processes. At Infynix Tech Solutions, we specialize in helping manufacturers navigate these challenges, enabling them to achieve greater operational efficiency and a competitive edge. Our Enterprise Application Services are designed to empower your business, enabling you to achieve the following goals:",
    highlights: [
      { title: "Reduce Operational Costs & Improve Efficiency", desc: "We help streamline your processes and optimize resources, reducing costs while improving the overall efficiency of your operations." },
      { title: "Maximize ROI from Existing IT Landscape", desc: "Leverage your current technology investments to drive more value and extract maximum benefit from your existing IT systems." },
      { title: "Accelerate Revenue Growth & Portfolio Management", desc: "Enhance your revenue growth through better portfolio management, strategic initiatives, and faster time-to-market for new products and services." },
      { title: "Enhance Customer Satisfaction & Retention", desc: "By improving operational performance and product quality, we help you deliver superior customer experiences that drive loyalty and long-term relationships." },
      { title: "Reduce Time & Cost to Market", desc: "With a structured new services introduction process, we ensure your product launches are faster and more cost-effective, enabling you to meet market demands with agility." },
      { title: "Build Self-Sustaining Business Models", desc: "We work with you to implement systems and processes that ensure sustainable growth and operational independence, making your business more resilient to market changes." },
    ],
    process: [
      { step: "Implementation Services", desc: "Transform your business with a tailored SAP S/4HANA implementation. Our team follows a structured methodology to ensure that the solution meets your operational goals and delivers value from day one." },
      { step: "Migration Services", desc: "Transitioning to SAP S/4HANA requires careful planning to ensure data integrity, minimize disruption, and maximize the value of your new ERP system. Infynix Tech Solutions makes your migration seamless and secure." },
      { step: "Upgrade Services", desc: "Keep your business running at peak performance with our SAP S/4HANA upgrade services. We help you adopt the latest features and functionalities, ensuring your system remains modern, efficient, and scalable." },
      { step: "Remediation Services", desc: "Address and resolve critical system issues with our remediation services. We ensure your SAP S/4HANA environment remains stable, secure, and reliable, even after implementation." },
    ],
    technologies: ["SAP S/4HANA", "Salesforce", "Oracle", "Dynamics 365", "MuleSoft", "Boomi", "ServiceNow"],
    extraSections: [
      {
        sectionTitle: "Unlock Business Transformation with SAP S/4HANA",
        sectionSubtitle: "Why Choose SAP S/4HANA?",
        sectionDesc: "SAP S/4HANA is a next-generation enterprise resource planning (ERP) suite built for businesses that need to thrive in a data-driven, digital-first world. It integrates transactional, analytical, and predictive data into one unified system, delivering real-time insights and driving greater efficiency across your organization. Here’s why businesses choose SAP S/4HANA:",
        items: [
          { title: "Comprehensive Integration", desc: "SAP S/4HANA provides end-to-end integration, unifying your business processes across finance, supply chain, sales, and more—enhancing operational efficiency." },
          { title: "Cloud & On-Premise Flexibility", desc: "With SAP S/4HANA, you can choose between cloud-based or on-premise deployment based on your specific business needs and IT landscape." },
          { title: "Scalability for Growth", desc: "Whether you are a small business or a global enterprise, SAP S/4HANA scales with your growth, ensuring your IT environment evolves alongside your business." }
        ]
      },
      {
        sectionTitle: "Why Partner with Infynix Tech Solutions?",
        sectionDesc: "At Infynix Tech Solutions, we are more than just an implementation partner. We are a trusted advisor that understands the full potential of SAP S/4HANA and how to tailor it to the specific needs of your business. Here's why clients choose us:",
        items: [
          { title: "Expertise & Experience", desc: "Our team brings deep expertise in SAP S/4HANA and a proven track record of successful deployments across industries." },
          { title: "End-to-End Support", desc: "We offer a comprehensive range of services to support you through every stage of your SAP S/4HANA journey—from initial planning to post-implementation support." },
          { title: "Tailored Solutions", desc: "We don’t offer one-size-fits-all solutions. Our services are customized to ensure that your SAP S/4HANA implementation or migration meets the exact needs of your business." },
          { title: "Commitment to Innovation", desc: "We continuously explore new ways to leverage SAP S/4HANA’s capabilities to help your business stay ahead of the competition." }
        ]
      }
    ]
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
    tagline: "Core banking modernization, cloud-native digital platforms, and real-time ML risk intelligence.",
    overview:
      "We help commercial banks, digital lenders, insurance carriers, and fintech enterprises build resilient, modern financial systems. Our engagements cover transitioning legacy core systems to cloud-native microservices, deploying sub-second AI pipelines for fraud prevention and credit scoring, and launching secure digital banking suites. We implement strict banking-grade compliance parameters (PCI-DSS, SOC 2, ISO 27001) at every stage.",
    capabilities: [
      { title: "Core System Re-platforming", desc: "Deconstruct monolithic banking frameworks and migrate to secure, API-driven architectures." },
      { title: "AI Fraud & Risk Intelligence", desc: "Deploy streaming machine learning models to identify fraudulent transactions and automate credit assessments." },
      { title: "Regulatory & Compliance API Platforms", desc: "Construct developer interfaces and compliance portals aligned with PSD2, open banking, and KYC standards." },
      { title: "Frictionless Onboarding Pipelines", desc: "Build secure identity verification (KYC/AML) systems that decrease client acquisition drop-offs." },
    ],
    outcomes: ["40% Faster Credit Decisions", "60% Fraud Alert False-Positive Reduction", "30% Operational Cost Reduction"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    tagline: "Secure HIPAA-compliant platforms, EHR integration frameworks, and clinical AI systems.",
    overview:
      "We design and build secure, compliant applications for healthcare providers, insurance payers, pharmaceutical companies, and medical device organizations. Our work spans custom telehealth platforms, complex EHR integrations via HL7 and FHIR protocols, and intelligent clinical decision support systems. Every solution is built from the ground up to satisfy HIPAA security rules, HITRUST standards, and FDA Software as a Medical Device (SaMD) requirements.",
    capabilities: [
      { title: "FHIR-First Interoperability", desc: "Implement robust data integrations connecting clinical systems with Epic, Cerner, and AthenaHealth." },
      { title: "Secure Patient Portals", desc: "Develop intuitive patient applications containing video consultations, scheduling, and billing." },
      { title: "Clinical Intelligence & NLP", desc: "Deploy machine learning pipelines for medical image segmentation and clinical text indexing." },
      { title: "Real-World Evidence Engines", desc: "Construct compliant analytical warehouses to process clinical datasets for research and drug discovery." },
    ],
    outcomes: ["50% Claims Processing Acceleration", "3x Patient Digital Engagement Boost", "100% HIPAA & HITRUST Audit Readiness"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Engineering",
    tagline: "Connect industrial facilities, deploy Edge AI, and implement predictive maintenance.",
    overview:
      "We help manufacturers automate operations by connecting assembly lines, plants, and supply chain networks using Industrial IoT (IIoT), Edge AI models, and real-time digital twins. Our teams combine IT and Operational Technology (OT) experience to deploy predictive maintenance models that minimize equipment failures, automate visual inspection checks, and provide clear supply chain visibility.",
    capabilities: [
      { title: "Industrial IoT Architectures", desc: "Configure secure edge gateways, sensor streaming pipelines, and unified time-series databases." },
      { title: "Edge AI Quality Control", desc: "Deploy high-speed computer vision systems to inspect products on the production line in real-time." },
      { title: "Predictive Equipment Analytics", desc: "Utilize machine learning to analyze mechanical sensor data and schedule proactive maintenance." },
      { title: "Supply Chain Optimization", desc: "Build integrated demand planning models, inventory tracking systems, and logistics interfaces." },
    ],
    outcomes: ["25% Downtime Reduction via Predictives", "15% Overall Equipment Effectiveness Gain", "20% Logistics & Inventory Cost Reduction"],
  },
  {
    slug: "retail",
    title: "Retail & E-Commerce",
    tagline: "Scale composable commerce storefronts, customer data platforms, and real-time recommendations.",
    overview:
      "We help global retail brands and direct-to-consumer (DTC) businesses win digital customers through headless, composable commerce architectures. By building rapid web storefronts, deploying real-time personalization algorithms, and integrating unified inventory systems (CDPs and OMS), we ensure your digital operations deliver fast page loads and drive conversions.",
    capabilities: [
      { title: "Composable Headless Commerce", desc: "Implement high-speed storefronts on Vercel backed by commercetools, Shopify, or custom backends." },
      { title: "Real-Time Personalization Engines", desc: "Deploy recommendation algorithms and dynamic pricing models powered by customer data platforms." },
      { title: "Omnichannel Order Management", desc: "Integrate distributed inventory systems, store-fulfillment pipelines, and flexible checkout flows." },
      { title: "Unified Customer Data Platforms", desc: "Assemble 360-degree customer records to deliver consistent experiences across web and retail storefronts." },
    ],
    outcomes: ["18% Conversion Optimization Lift", "12% Average Order Value (AOV) Increase", "Sub-1s Largest Contentful Paint (LCP)"],
  },
  {
    slug: "telecom",
    title: "Telecom & Media",
    tagline: "Modernize OSS/BSS operations, stream network analytics, and power low-latency delivery.",
    overview:
      "We help telecommunications operators and media companies modernize core back-office systems, stream massive network datasets, and construct reliable content delivery pipelines. From optimizing real-time network workloads to deploying churn-prediction dashboards, we build solutions that optimize network assets and customer lifetime value.",
    capabilities: [
      { title: "OSS/BSS Modernization", desc: "Implement API-driven billing networks, digital catalogs, and automated order fulfillment systems." },
      { title: "High-Volume Network Analytics", desc: "Deploy real-time stream processing systems to track network performance and anticipate outages." },
      { title: "Predictive Churn Mitigation", desc: "Build machine learning models to identify high-risk customer segments and trigger retention campaigns." },
      { title: "Low-Latency Media Streaming", desc: "Optimize media encoding, digital rights management (DRM), and content delivery networks (CDNs)." },
    ],
    outcomes: ["20% Customer Churn Reduction", "30% Activation Process Acceleration", "Sub-Second Network Telemetry Ingestion"],
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    tagline: "Deliver secure, accessible public services with FedRAMP-aligned cloud networks.",
    overview:
      "We build secure, highly accessible digital experiences for municipal, state, and federal agencies. From accessible citizen portals and automated case management systems to secure cloud landing zones, our team delivers software that prioritizes citizen trust, complies with WCAG accessibility laws, and meets strict security standards (FedRAMP, StateRAMP, FISMA).",
    capabilities: [
      { title: "Accessible Public Portals", desc: "Develop citizen applications optimized for Section 508 and WCAG 2.2 AA accessibility guidelines." },
      { title: "Case & Workflow Automation", desc: "Design secure workflow systems to expedite licensing, benefit applications, and public permits." },
      { title: "FedRAMP Cloud Infrastructure", desc: "Build secure landing zones, IAM structures, and automated security monitoring systems." },
      { title: "Inter-Agency Data Integration", desc: "Construct secure API platforms and data sharing hubs built on modern zero-trust principles." },
    ],
    outcomes: ["70% Digital Self-Service Adoption", "100% WCAG 2.2 AA Compliance", "FedRAMP & StateRAMP Audit Preparedness"],
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
      "Lead frontend engineering initiatives across high-visibility React/Next.js platforms. You will partner with design leaders to maintain design systems, optimize core application performance, and mentor mid-level engineering peers.",
    responsibilities: [
      "Architect and scale highly performant, type-safe React and Next.js applications.",
      "Champion web accessibility standards (WCAG 2.2 AA) and semantic HTML layouts.",
      "Establish strict web performance budgets, optimizing Core Web Vitals across production environments.",
      "Conduct thorough code reviews and facilitate technical mentorship sessions within frontend pods."
    ],
    requirements: [
      "5+ years of experience engineering high-scale, production-ready React applications.",
      "Expert-level command of TypeScript, state management, and modern bundling systems.",
      "In-depth familiarity with TanStack Query, TanStack Router, and server-side rendering patterns.",
      "Strong understanding of CSS systems (TailwindCSS, CSS modules) and browser rendering behavior."
    ],
    niceToHave: ["Active contributions to open-source systems", "Experience designing enterprise-grade npm packages", "Familiarity with GraphQL and schema-driven development"]
  },
  {
    id: "ml-engineer-genai",
    title: "Machine Learning Engineer — GenAI",
    service: "AI & Machine Learning",
    location: "Hybrid · St. Petersburg, FL",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Develop and deploy advanced Generative AI and Large Language Model architectures into high-scale production. You will build intelligent RAG pipelines, fine-tune models, and implement production-grade safety guardrails.",
    responsibilities: [
      "Design and deploy production LLM applications, autonomous agents, and tool-use pipelines.",
      "Construct hybrid vector retrieval architectures and comprehensive validation frameworks.",
      "Optimize model execution processes to manage application latency, token limits, and cloud costs.",
      "Collaborate with data engineers to construct efficient vector indexing and training pipelines."
    ],
    requirements: [
      "4+ years of dedicated experience engineering machine learning and artificial intelligence systems.",
      "Hands-on expertise utilizing LangChain, LlamaIndex, or competitive agent frameworks.",
      "Advanced proficiency in Python, containerization, and AWS, GCP, or Azure ML services.",
      "Proven experience utilizing vector databases (pgvector, Pinecone, Milvus, Weaviate)."
    ],
    niceToHave: ["Proven track record of fine-tuning open-weights models", "Contributions to major ML libraries", "Active ML credentials or academic research publications"]
  },
  {
    id: "aws-devops-engineer",
    title: "Senior AWS DevOps Engineer",
    service: "Cloud & DevOps",
    location: "Remote (US)",
    type: "Contract",
    experience: "6+ years",
    summary:
      "Establish secure, automated multi-account AWS architectures and manage high-scale container networks for an enterprise financial client. You will lead cloud orchestration, CI/CD pipelines, and SRE protocols.",
    responsibilities: [
      "Design and deploy secure multi-account AWS landing zones utilizing Terraform and AWS Organizations.",
      "Maintain enterprise Kubernetes networks (EKS) managed via continuous GitOps pipelines.",
      "Formulate standardized developer paths to improve deployment speeds and reliability markers.",
      "Embed automatic cloud security, IAM boundaries, and cost management compliance controls."
    ],
    requirements: [
      "6+ years of dedicated DevOps and AWS cloud platform engineering experience.",
      "Expertise building Infrastructure as Code (IaC) utilizing declarative Terraform or Pulumi.",
      "Comprehensive knowledge of Kubernetes network administration and GitOps tools (ArgoCD, Flux).",
      "Advanced scripting proficiency utilizing Go, Python, or bash environments."
    ],
    niceToHave: ["Certified Kubernetes Administrator (CKA)", "AWS Solutions Architect Professional certification"]
  },
  {
    id: "data-engineer-snowflake",
    title: "Data Engineer — Snowflake & dbt",
    service: "Data Engineering & Analytics",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Build scalable analytical data platforms utilizing Snowflake, dbt, and Apache Airflow. You will design optimal relational models, manage high-volume pipelines, and enforce strict data quality controls.",
    responsibilities: [
      "Architect modular data models, conformed marts, and semantic layers using Snowflake and dbt.",
      "Manage automated, transactional, and streaming ingest pipelines ensuring data availability SLAs.",
      "Implement comprehensive data testing, audit trails, and automatic technical documentation systems.",
      "Partner with analytics engineers and business intelligence analysts to unify reporting definitions."
    ],
    requirements: [
      "4+ years of production experience building high-scale pipelines in Snowflake and dbt.",
      "Advanced command of SQL modeling practices and object-oriented Python scripting.",
      "Experience managing workflows utilizing orchestrators like Apache Airflow, Prefect, or Dagster.",
      "Strong understanding of data security principles, role-based access controls, and data privacy."
    ],
    niceToHave: ["Experience with real-time systems (Kafka, Flink)", "Familiarity with reverse-ETL operations (Hightouch, Census)"]
  },
  {
    id: "salesforce-developer",
    title: "Salesforce Developer (Sales & Service Cloud)",
    service: "Enterprise Software & ERP",
    location: "Hybrid · St. Petersburg, FL",
    type: "Full-Time",
    experience: "3+ years",
    summary:
      "Implement and extend enterprise CRM platforms, building custom Apex, Lightning Web Components (LWC), and integrations. You will deliver robust CRM environments for a prominent financial services firm.",
    responsibilities: [
      "Develop secure custom integrations, Apex classes, and modern Lightning Web Components.",
      "Establish enterprise CRM integrations utilizing MuleSoft, REST services, and streaming event layers.",
      "Oversee metadata deployment operations, version control protocols, and sandbox strategies.",
      "Partner with product managers and business stakeholders to translate operational needs into features."
    ],
    requirements: [
      "3+ years of experience developing enterprise architectures in Salesforce.",
      "Advanced command of Apex, Visualforce, and Lightning Web Components (LWC).",
      "Salesforce Platform Developer II or relevant system administration certifications.",
      "Clear, professional communication skills and experience delivering within agile frameworks."
    ],
    niceToHave: ["Experience configuring Salesforce CPQ", "Familiarity with Salesforce Marketing Cloud APIs"]
  },
  {
    id: "it-recruiter",
    title: "Senior IT Recruiter",
    service: "IT Staffing & Recruitment",
    location: "St. Petersburg, FL",
    type: "Full-Time",
    experience: "3+ years",
    summary:
      "Manage end-to-end recruitment pipelines for senior technical engineering roles. You will leverage modern sourcing tools, coordinate peer technical screenings, and secure placements with enterprise clients.",
    responsibilities: [
      "Manage full-cycle recruiting processes for cloud, AI, and enterprise software roles.",
      "Leverage targeted sourcing models, candidate databases, and developer community platforms.",
      "Coordinate candidate evaluation processes with our internal technical screening specialists.",
      "Administer job offer presentations, compensation benchmarking, and legal onboarding compliance."
    ],
    requirements: [
      "3+ years of successful technical recruitment experience within the US IT market.",
      "Strong technical vocabulary, understanding of modern software roles, and sourcing protocols.",
      "Proficiency utilizing Applicant Tracking Systems (ATS) and modern recruiting tools.",
      "Excellent interpersonal, negotiation, and professional communication skills."
    ],
    niceToHave: ["Experience administering technical RPO programs", "Familiarity with immigration and work visa procedures"]
  },
  {
    id: "flutter-engineer",
    title: "Flutter Engineer",
    service: "Web & Mobile Development",
    location: "Remote (Global)",
    type: "Contract",
    experience: "3+ years",
    summary:
      "Engineers cross-platform mobile apps for a high-traffic healthcare application. You will build high-fidelity interfaces, write native platform bridges, and ensure HIPAA compliance.",
    responsibilities: [
      "Develop performant cross-platform mobile features using Flutter and Dart.",
      "Write custom native plugins and bridges to interface with iOS and Android libraries.",
      "Diagnose mobile performance barriers, optimizing app bundle size and frame rates.",
      "Work closely with quality assurance analysts to orchestrate automated mobile testing pipelines."
    ],
    requirements: [
      "3+ years of dedicated production experience developing applications in Flutter and Dart.",
      "Portfolio of successfully shipped mobile applications available on Google Play and Apple App Store.",
      "Solid understanding of native Swift, Kotlin, or Java development practices.",
      "Experience executing robust testing patterns (unit, widget, integration testing)."
    ],
    niceToHave: ["Familiarity with healthcare regulations (HIPAA)", "Mastery of advanced state managers (Riverpod, Bloc)"]
  },
  {
    id: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    service: "AI & Machine Learning",
    location: "On-site · Detroit, MI",
    type: "Full-Time",
    experience: "4+ years",
    summary:
      "Deploy real-time computer vision models for automated visual quality inspections on manufacturing lines. You will optimize inference models to run efficiently on edge hardware.",
    responsibilities: [
      "Develop and train custom computer vision models to detect defects in assembly environments.",
      "Optimize models for real-time edge execution on hardware like NVIDIA Jetson.",
      "Build automated data pipelines for active learning and model improvement.",
      "Collaborate with manufacturing and systems engineers to integrate model outputs."
    ],
    requirements: [
      "4+ years of dedicated machine learning experience focusing on computer vision.",
      "Expert-level command of PyTorch, OpenCV, and deep learning algorithms.",
      "Proven experience deploying deep learning models to resource-constrained edge hardware.",
      "Advanced programming skills in Python and C++ environments."
    ],
    niceToHave: ["Experience utilizing NVIDIA TensorRT for model acceleration", "Familiarity with robotic systems (ROS2)"]
  },
  {
    id: "azure-data-architect",
    title: "Azure Data Architect",
    service: "Data Engineering & Analytics",
    location: "Hybrid · Charlotte, NC",
    type: "Full-Time",
    experience: "8+ years",
    summary:
      "Define architectural blueprints and design secure enterprise data platforms on Azure for a top-5 financial client. You will govern data systems using Azure Fabric, Synapse, and Databricks.",
    responsibilities: [
      "Design target architectures, security boundaries, and technical roadmaps for Azure data platforms.",
      "Govern large data assets using Microsoft Purview, enforcing strict security compliance.",
      "Provide technical leadership, coaching data engineering pods on best practices.",
      "Collaborate with security and risk teams to satisfy regulatory financial standards."
    ],
    requirements: [
      "8+ years of experience engineering data platforms, with focus on the Azure database ecosystem.",
      "Expert-level familiarity with Azure Fabric, Synapse Analytics, Databricks, and Data Factory.",
      "Proven track record delivering large-scale data platforms inside banking or financial services.",
      "Superb architectural planning, stakeholder management, and technical communication skills."
    ],
    niceToHave: ["TOGAF enterprise architecture credentials", "Azure Data Engineer Associate certification"]
  },
  {
    id: "sap-s4-consultant",
    title: "SAP S/4HANA Functional Consultant (FICO)",
    service: "Enterprise Software & ERP",
    location: "Remote (US, travel 25%)",
    type: "Contract",
    experience: "7+ years",
    summary:
      "Lead FICO configuration and data migration streams for a greenfield SAP S/4HANA implementation. You will guide key business partners and optimize financial processes.",
    responsibilities: [
      "Lead client discovery and design workshops to capture key financial processes.",
      "Configure SAP FICO modules including General Ledger, Accounts Payable, and Controlling.",
      "Oversee financial data migration and reconcile cutover processes.",
      "Train client teams and write clear user documentation."
    ],
    requirements: [
      "7+ years of experience configuring functional models in SAP FICO systems.",
      "Participated in at least two complete greenfield SAP S/4HANA implementation lifecycles.",
      "Strong functional knowledge of manufacturing cost-accounting and global financial structures.",
      "Excellent communication skills and experience presenting to corporate stakeholders."
    ],
    niceToHave: ["Familiarity with SAP Activate methodology", "Experience with SAP Group Reporting tools"]
  },
  {
    id: "kubernetes-platform-engineer",
    title: "Kubernetes Platform Engineer",
    service: "Cloud & DevOps",
    location: "Remote (EU)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Design and build internal developer platforms on AWS and EKS for a prominent global retailer. You will automate delivery paths, build self-service portals, and implement service meshes.",
    responsibilities: [
      "Build and maintain a developer platform using Spotify Backstage.",
      "Manage multi-cluster EKS container environments inside AWS networks.",
      "Enforce compliance and security using tools like OPA Gatekeeper or Kyverno.",
      "Establish developer-experience metrics to continuously improve team velocity."
    ],
    requirements: [
      "5+ years of experience with platform engineering, Kubernetes, and AWS systems.",
      "Advanced command of GitOps practices, Terraform configuration, and Helm charting.",
      "In-depth experience constructing internal developer portals (Backstage, Port).",
      "Advanced scripting or development experience using Go, Python, or node.js."
    ],
    niceToHave: ["Hands-on experience with service meshes (Istio, Linkerd)", "Expertise configuring OpenTelemetry analytics"]
  },
  {
    id: "ux-designer",
    title: "Senior Product Designer",
    service: "Web & Mobile Development",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Design premium B2B enterprise software products. You will lead user research initiatives, design high-fidelity interfaces, and evolve our client design systems.",
    responsibilities: [
      "Own product design cycles for complex B2B applications from research to layout.",
      "Plan and conduct user research sessions and usability test cycles.",
      "Evolve design token systems, interactive components, and unified layout patterns.",
      "Collaborate closely with frontend developers to ensure design integrity during engineering."
    ],
    requirements: [
      "5+ years of experience designing interfaces for high-scale B2B SaaS products.",
      "Superb interactive portfolio demonstrating systems-thinking and responsive UI mastery.",
      "Expert-level control of Figma, component properties, and layout architectures.",
      "Deep understanding of web accessibility laws (WCAG 2.2 AA) and responsive patterns."
    ],
    niceToHave: ["Basic frontend development skills (HTML, CSS, React)", "Experience designing micro-interactions and motion paths"]
  },
  {
    id: "qa-automation-lead",
    title: "QA Automation Lead",
    service: "Web & Mobile Development",
    location: "Hybrid · Toronto, CA",
    type: "Full-Time",
    experience: "6+ years",
    summary:
      "Lead the testing strategy and build automated QA pipelines for a high-traffic fintech platform. You will design robust Playwright suites and write performance scripts.",
    responsibilities: [
      "Formulate automated quality assurance strategies across several development teams.",
      "Develop and scale end-to-end testing suites using Playwright and TypeScript.",
      "Build automated load testing scripts using k6 or Gatling.",
      "Integrate automated quality gates directly into CI/CD deployment pipelines."
    ],
    requirements: [
      "6+ years of dedicated quality engineering experience, focusing on automation.",
      "Mastery of modern automation frameworks (Playwright, Cypress, WebdriverIO).",
      "Proven experience configuring load and load-stress testing scripts using k6.",
      "Advanced programming proficiency using TypeScript, JavaScript, or Python."
    ],
    niceToHave: ["Experience executing mobile test runs (Appium, Maestro)", "Familiarity with API contract testing practices"]
  },
  {
    id: "cybersecurity-engineer",
    title: "Cloud Security Engineer",
    service: "Cloud & DevOps",
    location: "Remote (US)",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Incorporate robust security practices across multi-account AWS environments. You will audit cloud resources, mitigate security anomalies, and champion secure SDLC methodologies.",
    responsibilities: [
      "Run thorough threat-modeling sessions and audit cloud system architectures.",
      "Automate real-time threat detection and incident response workflows.",
      "Oversee vulnerability scans, penetration testing, and compliance remediation.",
      "Educate developers on secure coding practices and security compliance."
    ],
    requirements: [
      "5+ years of experience in cybersecurity, with a focus on cloud-native systems.",
      "Deep expertise securing AWS resources, IAM permissions, and KMS systems.",
      "Proven familiarity securing Kubernetes networks and infrastructure-as-code scripts.",
      "Experience utilizing security audit scanners (Wiz, Prisma Cloud, AWS GuardDuty)."
    ],
    niceToHave: ["Certified Information Systems Security Professional (CISSP)", "Offensive Security Certified Professional (OSCP)"]
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager",
    service: "AI & Machine Learning",
    location: "Hybrid · New York, NY",
    type: "Full-Time",
    experience: "5+ years",
    summary:
      "Own the product vision, roadmap, and GTM strategy for an enterprise Generative AI suite. You will collaborate with engineering, design, and commercial teams.",
    responsibilities: [
      "Formulate, prioritize, and drive the product roadmap for a suite of AI tools.",
      "Partner with machine learning researchers, designers, and commercial teams.",
      "Gather operational feedback and user requirements from enterprise clients.",
      "Define clear evaluation criteria to validate model accuracy, cost, and safety."
    ],
    requirements: [
      "5+ years of software product management experience, with focus on AI/ML tools.",
      "Strong technical understanding of generative AI, model training, and data processes.",
      "Superb analytical skills and experience managing commercial enterprise platforms.",
      "Outstanding communication, presentation, and team coordination skills."
    ],
    niceToHave: ["Experience designing evaluation harnesses for LLM engines", "Academic or practical background in software engineering"]
  },
  {
    id: "business-analyst-bfsi",
    title: "Business Analyst — Banking",
    service: "Enterprise Software & ERP",
    location: "On-site · Charlotte, NC",
    type: "Contract",
    experience: "4+ years",
    summary:
      "Bridge operational requirements and system architecture for a core banking modernization initiative. You will write detailed user stories and oversee user testing.",
    responsibilities: [
      "Gather operational requirements and document workflows with banking partners.",
      "Write precise Jira user stories, acceptance criteria, and technical maps.",
      "Coordinate User Acceptance Testing (UAT) and system training materials.",
      "Track system implementation results against core business metrics."
    ],
    requirements: [
      "4+ years of business analysis experience within financial services.",
      "Advanced command of Agile tools, project trackers, and technical documentation.",
      "Proficiency writing complex SQL queries and mapping data structures.",
      "Outstanding technical writing, communication, and process charting skills."
    ],
    niceToHave: ["Certified Business Analysis Professional (CBAP) credential", "Scrum Master or competitive agile delivery credentials"]
  }
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
    title: "Enterprise Generative AI platform cuts wealth advisor research times by 62%",
    industry: "Banking & Financial Services",
    summary:
      "We engineered and deployed a secure, Retrieval-Augmented Generation (RAG) assistant grounded in 1.2M research documents to 4,500 wealth advisors within six months.",
    challenge:
      "Financial advisors were losing up to 40% of their workday searching through siloed folders for banking policies, dynamic market data, and investment research, which delayed responses to clients and reduced operational efficiency.",
    solution:
      "We built a secure enterprise RAG system on Microsoft Azure OpenAI utilizing hybrid keyword and vector retrieval, intelligent metadata filtering, and real-time reranking. We implemented role-based access controls and custom data protection filters, and integrated the system directly with the client's CRM.",
    results: [
      "62% Reduction in Research Times",
      "4,500 Wealth Advisors Onboarded",
      "92% Acceptance Rate on AI Responses",
      "$18M Annualized Productivity Gains"
    ],
  },
  {
    slug: "global-retailer-composable-commerce",
    client: "Global Specialty Retailer",
    title: "Headless composable commerce migration drives an 18% lift in digital conversions",
    industry: "Retail & E-Commerce",
    summary:
      "We modernised a legacy monolithic e-commerce system by migrating to a headless composable architecture with personalized storefronts and unified order systems.",
    challenge:
      "Slow database loads and a rigid monolithic backend restricted mobile conversions, while siloed brick-and-mortar inventories prevented efficient customer services like Buy Online, Pick Up In Store (BOPIS).",
    solution:
      "We built a fast headless storefront using Next.js on Vercel backed by a headless commercetools database, integrated a modern Order Management System (OMS) for real-time inventory tracking, and deployed a personalization engine.",
    results: [
      "18% Lift in Digital Conversions",
      "12% Average Order Value (AOV) Increase",
      "Sub-1s Largest Contentful Paint (LCP)",
      "40% Faster Feature Release Cycle"
    ],
  },
  {
    slug: "manufacturer-predictive-maintenance",
    client: "Tier-1 Automotive Supplier",
    title: "Predictive maintenance IoT platform avoids $7M in annual downtime costs",
    industry: "Manufacturing & Engineering",
    summary:
      "We deployed a high-scale IIoT and machine learning platform to monitor 3,200 mechanical assets across 12 manufacturing facilities in real-time.",
    challenge:
      "Unplanned mechanical failures on critical assembly lines were costing the client over $14M in lost production time and repairs annually, and limited insight into asset health made scheduled maintenance highly inefficient.",
    solution:
      "We installed edge gateways to collect vibration, temperature, and current metrics, routed data to an Azure cloud pipeline, deployed predictive remaining-useful-life models, and integrated alerts with SAP Plant Maintenance.",
    results: [
      "$7M in Downtime Costs Avoided",
      "25% Reduction in Unplanned Stops",
      "14-Day Proactive Warning Window",
      "15% Overall Equipment Effectiveness Gain"
    ],
  },
  {
    slug: "healthcare-telehealth-platform",
    client: "National Health System",
    title: "HIPAA-compliant telehealth platform scales to 1.4M annual patient consultations",
    industry: "Healthcare & Life Sciences",
    summary:
      "We designed and built a highly secure, HIPAA-compliant telehealth platform integrated with Epic EHR, supporting secure video, scheduling, and payments.",
    challenge:
      "The client's clinical consultations were fragmented across four separate software applications, creating security risks, increasing administrative workloads, and frustrating patients.",
    solution:
      "We engineered a unified Web and Mobile platform utilizing React and Flutter with end-to-end encryption, built direct integrations with Epic EHR using FHIR APIs, and designed a streamlined portal for clinicians.",
    results: [
      "1.4M Consultations in Year One",
      "4.8 / 5.0 Patient Satisfaction Score",
      "22% Reduction in Clinician Charting Times",
      "100% HIPAA and HITRUST Compliance"
    ],
  },
  {
    slug: "fintech-fraud-platform",
    client: "Digital Bank (Series D Fintech)",
    title: "Sub-80ms streaming ML fraud detection platform reduces false positives by 60%",
    industry: "Banking & Financial Services",
    summary:
      "We engineered a high-volume streaming analytics system to evaluate transaction risks in under 80 milliseconds across 12 million active customers.",
    challenge:
      "A legacy rule-based fraud detection engine generated a high 7% false-positive rate, blocking valid customer transactions and overloading the operational fraud review team.",
    solution:
      "We built real-time streaming data pipelines using Apache Kafka and Apache Flink, trained gradient-boosted ML models, and engineered an intuitive review interface for fraud operations teams.",
    results: [
      "60% Reduction in False-Positives",
      "Sub-80ms Decision Processing at p99",
      "$22M in Annual Fraud Losses Avoided",
      "30% Operational Overhead Reduction"
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
    title: "Retrieval-Augmented Generation (RAG) in the enterprise: practical lessons from 30+ production deployments",
    category: "AI & Machine Learning",
    date: "May 12, 2026",
    readingTime: "8 min read",
    excerpt:
      "While building simple RAG prototypes is easy, deploying stable, accurate, and secure systems at enterprise scale requires careful optimization. Here is our engineering playbook.",
    body: [
      "Most enterprise Generative AI initiatives begin with a basic RAG prototype built using simple orchestration libraries. While these models perform well in demonstrations, they frequently fail when introduced to real-world datasets, user inquiries, and enterprise security requirements.",
      "Through deploying over 30 production RAG platforms, we have consistently found that retrieval mechanisms are the primary performance bottleneck, rather than model choice. Relying solely on vector searches is rarely sufficient. Enterprises must implement hybrid search architectures that combine dense vector representations with traditional BM25 keyword matching, apply aggressive metadata filters, and use cross-encoder reranking models to guarantee that context blocks are highly relevant.",
      "Additionally, evaluation processes must be integrated as core features of the software platform from day one. You should implement custom feedback components to capture user ratings and correction data, measure model metrics like response faithfulness and context retrieval recall, and establish automated validation checks to prevent regression issues.",
      "Finally, enterprise-grade data security is absolutely vital. You must enforce row-level security on the database index, implement comprehensive audit logging, redact sensitive personally identifiable information (PII) before model routing, and construct clear human-override paths to ensure user trust and compliance."
    ],
  },
  {
    slug: "modern-data-stack-2026",
    title: "The modern data stack in 2026: stabilized architecture and production reference guides",
    category: "Data Engineering",
    date: "April 28, 2026",
    readingTime: "10 min read",
    excerpt:
      "Data engineering tools have matured and architectures have stabilized around robust standards. Here is our recommended reference stack.",
    body: [
      "In 2026, the core of the enterprise data ecosystem has stabilized around high-performance cloud warehouses like Snowflake and Databricks, with dbt handling modular data transformations, and managed ingestion tools like Fivetran or Airbyte managing data pipelines. The major changes have occurred in the surrounding orchestration and security layers.",
      "First, establishing clean semantic layers is now an essential practice. By using tools like Cube or dbt's native semantic modeling, businesses can define their core business metrics in a single location, resolving reporting inconsistencies across different business tools.",
      "Second, reverse-ETL platforms like Hightouch and Census have become vital tools. They sync transformed data from the central warehouse back into the active SaaS products that run daily business operations, converting historical data warehouses into operational engines.",
      "Finally, automated data quality tracking is no longer optional. Modern data observability platforms like Monte Carlo monitor systems for unexpected table changes, volume drops, or pipeline failures, alerting teams to anomalies before they disrupt downstream business dashboards."
    ],
  },
  {
    slug: "platform-engineering-vs-devops",
    title: "Platform engineering vs DevOps: the practical difference in team velocity",
    category: "Cloud & DevOps",
    date: "April 15, 2026",
    readingTime: "6 min read",
    excerpt:
      "Platform engineering is not simply DevOps with a new portal; it represents a fundamental shift in developer support. Here is why the difference matters.",
    body: [
      "While DevOps represents a shared collaborative culture, platform engineering acts as a dedicated product team. Understanding this difference is essential for funding platforms, measuring outcomes, and improving developer productivity.",
      "An Internal Developer Platform (IDP) must be managed like a commercial product. The platform team must gather developer feedback, maintain a structured roadmap, and optimize metrics like time-to-first-commit and deployment frequency.",
      "Establishing clear, standardized development paths is far more effective than maintaining static wikis. By providing pre-configured templates and self-service deployment interfaces, platform teams enable developers to launch secure, compliant microservices with minimal administrative friction.",
      "Ultimately, success should be measured through comprehensive developer velocity metrics. Tracking DORA and SPACE metrics enables engineering organizations to validate platform adoption and ensure developer investments are yielding clear productivity gains."
    ],
  },
  {
    slug: "hiring-cloud-talent-in-2026",
    title: "Hiring cloud talent in 2026: what engineering managers consistently get wrong",
    category: "IT Staffing",
    date: "March 30, 2026",
    readingTime: "5 min read",
    excerpt:
      "Demand for senior cloud and platform engineers remains exceptionally high. Here is how leading teams are successfully closing offers.",
    body: [
      "Highly skilled cloud and platform engineers typically manage multiple active opportunities simultaneously. To attract top engineering talent, hiring managers must treat the recruiting process like a refined product experience.",
      "Recruiting speed is a critical competitive advantage. Organizations must streamline interviews, aim to complete the process from initial screen to formal offer within ten business days, and avoid unnecessary testing rounds that increase candidate drop-off.",
      "Transparency also drives conversions. Sharing concrete architectural blueprints, current operational challenges, and clear technology roadmaps during early interviews engages candidates much more effectively than generic job descriptions.",
      "Finally, companies must align compensation packages with dynamic market rates rather than static internal bands, updating compensation targets immediately if offer-acceptance rates decline."
    ],
  },
  {
    slug: "ux-of-internal-tools",
    title: "The UX of internal tools: why enterprise software usability is the next operational frontier",
    category: "Web & Mobile",
    date: "March 10, 2026",
    readingTime: "7 min read",
    excerpt:
      "Improving the design and usability of internal business tools yields massive operational returns. Here is how to measure the business value of internal UX.",
    body: [
      "Many internal business tools were built years ago and rarely updated. This outdated software results in high employee training costs, elevated data entry error rates, and reduced operational efficiency.",
      "Performing usability audits on your most critical internal workflows frequently reveals significant optimization opportunities. Redesigning confusing forms or complex query tools can yield higher productivity gains than building new customer features.",
      "Investing in a unified internal design system is also highly beneficial. Maintaining a consistent component library across internal apps reduces development costs, speeds up prototyping, and lowers training times.",
      "Finally, teams should track practical operational metrics like task completion times and workflow error rates to demonstrate the concrete business value of user-experience improvements."
    ],
  },
  {
    slug: "fhir-integration-playbook",
    title: "A practical FHIR integration playbook for digital health product teams",
    category: "Healthcare",
    date: "February 22, 2026",
    readingTime: "9 min read",
    excerpt:
      "FHIR integrations have matured and are highly reliable. Here is our engineering guide to building secure integrations with major EHR platforms.",
    body: [
      "The FHIR R4 standard has become the primary data framework for modern healthcare integrations. However, since major EHR vendors often implement slightly different variations, digital health teams must follow structured playbooks to minimize integration timelines.",
      "First, using SMART on FHIR protocols is highly recommended. While implementing these security profiles requires initial effort, they provide standard authentication mechanisms that simplify EHR integrations.",
      "Second, health applications should normalize patient data to a consistent internal schema, managing EHR-specific differences at the boundary layer. This isolates core application logic from external data variations.",
      "Finally, developers should use open patient datasets (such as Synthea) to test integrations extensively, ensuring systems perform reliably before connecting to live clinical environments."
    ],
  },
];

export type JobExtra = {
  jobCode: string;
  salary: string;
  yourRole: string;
  whatWeExpect: string[];
};

export const jobExtras: Record<string, JobExtra> = {
  "senior-react-engineer": {
    jobCode: "INX-2026-WM01",
    salary: "$140K – $175K / yr",
    yourRole:
      "You will be the technical anchor of a cross-functional product pod, owning the architecture and quality of a high-traffic React application used by hundreds of thousands of enterprise users. Day-to-day you will pair with designers on component APIs, drive performance sprints, and unblock junior engineers through code review and mentoring. Your decisions on patterns and tooling will set the standard for the entire frontend organization.",
    whatWeExpect: [
      "You take full ownership of outcomes — proactively flagging risks before they become incidents.",
      "You communicate architectural trade-offs clearly to both engineers and non-technical stakeholders.",
      "You raise the quality bar through peer reviews, RFC proposals, and knowledge-sharing sessions.",
      "You iterate fast, value shipping over perfection, and back decisions with data.",
    ],
  },
  "ml-engineer-genai": {
    jobCode: "INX-2026-AI01",
    salary: "$160K – $200K / yr",
    yourRole:
      "You will design and operate production LLM systems that directly power enterprise client products — from real-time RAG pipelines serving thousands of daily queries to autonomous agents that execute multi-step business workflows. You will work at the intersection of model research and systems engineering, owning the full lifecycle from prototype to monitored production.",
    whatWeExpect: [
      "You stay ahead of the fast-moving GenAI landscape and bring relevant advances into production, not just slides.",
      "You treat model evaluation and safety guardrails as first-class engineering concerns, not afterthoughts.",
      "You have strong intuition for latency/cost trade-offs and make disciplined decisions about when to fine-tune versus prompt.",
      "You collaborate closely with product and business teams to ensure AI capabilities solve real user problems.",
    ],
  },
  "aws-devops-engineer": {
    jobCode: "INX-2026-CD01",
    salary: "$85 – $110 / hr",
    yourRole:
      "Embedded within a financial services client team, you will own the AWS cloud platform across multiple accounts — designing the landing zone architecture, hardening security posture, and ensuring every team ships through automated GitOps pipelines. You'll be the go-to expert that engineering pods call when deployments fail, cost spikes, or security alerts fire.",
    whatWeExpect: [
      "You treat infrastructure as product: readable, tested, and documented Terraform that others can maintain.",
      "You drive a security-first mindset — every IAM boundary, network rule, and secret rotation is intentional.",
      "You are comfortable presenting architecture decisions to client CTOs and security review boards.",
      "You work autonomously under pressure, triaging production incidents with calm and speed.",
    ],
  },
  "data-engineer-snowflake": {
    jobCode: "INX-2026-DE01",
    salary: "$130K – $160K / yr",
    yourRole:
      "You will build the data foundations that analysts, scientists, and executives depend on every morning. Working inside a modern Snowflake + dbt stack, you will design dimensional models, manage orchestrated pipelines in Airflow, and establish the data quality contracts that keep reporting trustworthy.",
    whatWeExpect: [
      "You think in data contracts — schemas, SLAs, and quality expectations are defined upfront, not after the data breaks.",
      "You document models, lineage, and pipelines as thoroughly as you test them.",
      "You collaborate naturally with analytics engineers to ensure semantic layers are business-correct.",
      "You are comfortable triaging silent data bugs and presenting findings to business stakeholders.",
    ],
  },
  "salesforce-developer": {
    jobCode: "INX-2026-ERP01",
    salary: "$110K – $140K / yr",
    yourRole:
      "You will serve as a core technical contributor inside a multi-year Salesforce transformation program for a top-10 financial services firm. You will build custom Apex services, LWC components, and integration layers that connect Salesforce to core banking and risk systems. Your work will be used by over 2,000 advisors daily.",
    whatWeExpect: [
      "You are meticulous about governor limits, test coverage, and security review because you care about production stability.",
      "You partner proactively with business analysts to challenge requirements and improve solutions before development.",
      "You communicate technical constraints clearly to non-technical stakeholders and project managers.",
      "You stay current on Salesforce platform releases and advocate for new capabilities where they reduce custom code.",
    ],
  },
  "it-recruiter": {
    jobCode: "INX-2026-TS01",
    salary: "$75K – $100K / yr + commission",
    yourRole:
      "You will own full-cycle recruiting pipelines for senior cloud, AI, and platform engineering roles across multiple enterprise client accounts. Working closely with account managers and technical leaders, you'll source from niche developer communities, conduct structured pre-screens, and negotiate offers for hard-to-fill technical positions.",
    whatWeExpect: [
      "You are relentlessly resourceful — when LinkedIn runs dry, you find developers in GitHub discussions and Discord communities.",
      "You hold yourself accountable to pipeline metrics: submission-to-interview rates, time-to-fill, and offer acceptance rates.",
      "You earn candidate trust through honest, transparent communication — including when a role isn't the right fit.",
      "You develop a genuine technical vocabulary to earn credibility with engineering hiring managers.",
    ],
  },
  "flutter-engineer": {
    jobCode: "INX-2026-WM02",
    salary: "$90 – $115 / hr",
    yourRole:
      "You will be the lead Flutter engineer on a health-tech platform with over 500K active patients. You'll build new care-management features, write native platform plugins for iOS and Android health sensors, and work alongside a QA team to ensure HIPAA compliance across every release.",
    whatWeExpect: [
      "You sweat the performance details: frame drops, excessive rebuilds, and memory spikes are unacceptable in healthcare.",
      "You read and write platform channel code confidently, bridging Flutter to native SDKs without hesitation.",
      "You document data-handling decisions carefully given the HIPAA-regulated nature of the product.",
      "You proactively raise UX concerns during sprint planning rather than waiting until QA cycle.",
    ],
  },
  "computer-vision-engineer": {
    jobCode: "INX-2026-AI02",
    salary: "$145K – $185K / yr",
    yourRole:
      "You will deploy real-time visual inspection models on manufacturing lines running 24/7 in a Detroit automotive plant. From collecting defect annotation datasets with line operators to optimizing PyTorch models for NVIDIA Jetson edge hardware, you own the full model lifecycle: data, training, optimization, deployment, and monitoring.",
    whatWeExpect: [
      "You are hands-on with hardware — comfortable connecting to edge devices over SSH and debugging live inference.",
      "You bring rigor to dataset quality, knowing that weak annotations lead to expensive false rejections on the factory floor.",
      "You communicate model performance in business terms (precision, recall, cost-per-defect-missed).",
      "You work comfortably in an industrial environment alongside mechanical and systems engineers.",
    ],
  },
  "azure-data-architect": {
    jobCode: "INX-2026-DE02",
    salary: "$165K – $210K / yr",
    yourRole:
      "You will lead data architecture for a large-scale Azure Fabric migration at a top-5 US bank, defining the target state for petabyte-scale financial data from ingestion zones through governed semantic layers. You'll mentor a team of data engineers and interface directly with the client's CTO and Chief Data Officer on monthly steering committees.",
    whatWeExpect: [
      "You translate complex architectural decisions into clear business impact narratives for executive audiences.",
      "You treat data governance, lineage, and access control as architectural pillars, not compliance checklists.",
      "You mentor and coach effectively — your goal is to make the client team self-sufficient, not dependent.",
      "You stay current on Azure Fabric and Databricks and proactively bring capabilities to client roadmaps.",
    ],
  },
  "sap-s4-consultant": {
    jobCode: "INX-2026-ERP02",
    salary: "$95 – $120 / hr",
    yourRole:
      "You will be the functional lead for FICO on a greenfield SAP S/4HANA go-live targeting a Fortune 500 manufacturing company. This means running configuration workshops with CFOs and controllers, resolving cutover reconciliation issues under tight deadlines, and training the client's finance team on the new system.",
    whatWeExpect: [
      "You are accountable for functional design quality — every configuration decision is documented and traceable to a business requirement.",
      "You stay calm under the pressure of cutover weekends and financial close cycles.",
      "You build trusted advisor relationships with senior client stakeholders, not just project managers.",
      "You proactively identify scope risks early and communicate them before they become budget issues.",
    ],
  },
  "kubernetes-platform-engineer": {
    jobCode: "INX-2026-CD02",
    salary: "$140K – $180K / yr",
    yourRole:
      "You will build the internal developer platform that hundreds of engineers at a global retail client will use to ship software. Using Backstage, Kubernetes, and ArgoCD, you'll create golden paths — service templates, self-service environments, and deployment workflows — that make shipping fast, safe, and observable.",
    whatWeExpect: [
      "You think from the developer's perspective: every platform feature should reduce friction, not add it.",
      "You instrument everything — meaningful metrics, dashboards, and SLOs for the platform itself.",
      "You actively gather developer feedback and treat developer satisfaction as a product KPI.",
      "You document architecture decisions thoroughly so the platform outlasts any individual contributor.",
    ],
  },
  "ux-designer": {
    jobCode: "INX-2026-WM03",
    salary: "$120K – $155K / yr",
    yourRole:
      "You will own the end-to-end design experience for two enterprise B2B SaaS products used by finance and operations teams at Fortune 1000 companies. From conducting user research sessions with CFOs to delivering production-ready Figma specs, you are the sole voice of user experience in a fast-moving product pod.",
    whatWeExpect: [
      "You design with constraints in mind — accessibility, localization, and dense data tables are features, not exceptions.",
      "You defend your design rationale with user research evidence, not personal preference.",
      "You collaborate tightly with frontend engineers to ensure implementation fidelity without becoming a blocker.",
      "You proactively identify workflow problems that aren't yet on the product roadmap.",
    ],
  },
  "qa-automation-lead": {
    jobCode: "INX-2026-WM04",
    salary: "$120K – $150K / yr",
    yourRole:
      "You will build and lead the quality engineering function for a high-traffic fintech platform processing millions of transactions per day. That means designing the automation strategy, building Playwright test suites for critical user flows, embedding quality gates into CI/CD pipelines, and coaching developers to own quality — not just catch bugs.",
    whatWeExpect: [
      "You champion a shift-left mindset — quality belongs to the entire team, and you're the catalyst for that culture.",
      "You write test code with the same standards as feature code: readable, maintainable, and version-controlled.",
      "You communicate coverage and risk gaps clearly to engineering leads and product managers.",
      "You are pragmatic about automation ROI — knowing which tests to automate first versus which to defer.",
    ],
  },
  "cybersecurity-engineer": {
    jobCode: "INX-2026-CD03",
    salary: "$135K – $170K / yr",
    yourRole:
      "You will be the cloud security lead for a multi-account AWS environment supporting a healthcare data platform. You'll run threat modeling sessions, automate compliance controls using Wiz and AWS Security Hub, and serve as the incident commander when security alerts escalate. Your work protects patient data for millions of users.",
    whatWeExpect: [
      "You treat security as an enabler of engineering velocity, not a gate that slows teams down.",
      "You can explain complex attack vectors in plain language to both developers and executive leadership.",
      "You stay ahead of emerging cloud threats and translate threat intelligence into actionable controls.",
      "You approach incidents with methodical clarity, prioritizing containment and post-mortems.",
    ],
  },
  "ai-product-manager": {
    jobCode: "INX-2026-AI03",
    salary: "$155K – $195K / yr",
    yourRole:
      "You will own the full product lifecycle of an enterprise Generative AI suite used by 50+ Fortune 500 clients. From writing detailed PRDs with ML researchers to presenting quarterly roadmaps to a C-suite customer advisory board, you are accountable for product-market fit, adoption metrics, and revenue impact.",
    whatWeExpect: [
      "You ground roadmap decisions in user and revenue evidence, not technology trends alone.",
      "You have enough AI/ML fluency to challenge model design decisions and spot evaluation gaps.",
      "You operate with a founder's accountability — shipping on time, measuring outcomes, and owning misses.",
      "You build strong relationships with enterprise customers, turning feedback into shipped capabilities quickly.",
    ],
  },
  "business-analyst-bfsi": {
    jobCode: "INX-2026-ERP03",
    salary: "$80 – $100 / hr",
    yourRole:
      "Embedded within a core banking modernization program, you'll bridge the gap between business operations teams and engineering squads across payment processing and account servicing modules. You will run discovery workshops with C-level stakeholders, write precise user stories, coordinate UAT cycles, and track delivery against business KPIs.",
    whatWeExpect: [
      "You produce user stories and acceptance criteria that engineering teams can build from without follow-up questions.",
      "You are comfortable challenging requirements when they conflict with technical feasibility or regulatory standards.",
      "You take ownership of UAT coordination — managing test scripts, tracking defects, and communicating sign-off readiness.",
      "You build trusted working relationships with both business stakeholders and technical delivery teams.",
    ],
  },
};

export type DigitalProductAudience = "Businesses" | "Students" | "Job Seekers";

export type DigitalProduct = {
  slug: string;
  title: string;
  audience: DigitalProductAudience;
  category: string;
  tagline: string;
  overview: string;
  format: string;
  priceLabel: string;
  features: string[];
  idealFor: string[];
};

export const digitalProducts: DigitalProduct[] = [
  {
    slug: "saas-starter-kit",
    title: "SaaS Starter Kit",
    audience: "Businesses",
    category: "Templates & Starter Kits",
    tagline: "Production-ready SaaS boilerplate with auth, billing, and an admin dashboard baked in.",
    overview:
      "Skip months of undifferentiated setup work. Our SaaS Starter Kit gives your team a fully typed, production-grade foundation — authentication, subscription billing, role-based access, and an admin dashboard — so engineering time goes straight into your actual product.",
    format: "Downloadable source code + setup docs",
    priceLabel: "From $799",
    features: [
      "Prebuilt auth (email, OAuth, magic links) and role-based access control",
      "Stripe subscription billing wired end-to-end, including webhooks",
      "Admin dashboard for users, plans, and usage metrics",
      "TypeScript, modern React, and CI-ready deployment config",
    ],
    idealFor: ["Startups launching an MVP", "Internal tools teams", "Agencies spinning up client SaaS products"],
  },
  {
    slug: "cloud-landing-zone-template",
    title: "Cloud Landing Zone Templates",
    audience: "Businesses",
    category: "Templates & Starter Kits",
    tagline: "Terraform-based AWS/Azure/GCP landing zones following our enterprise security baselines.",
    overview:
      "Get the same multi-account cloud foundation we build for enterprise clients — as a reusable Terraform package. Includes network segmentation, IAM guardrails, logging, and cost-control defaults so your cloud footprint starts secure and compliant, not retrofitted later.",
    format: "Terraform modules + architecture docs",
    priceLabel: "From $1,200",
    features: [
      "Multi-account landing zone for AWS, Azure, or GCP",
      "Pre-configured IAM boundaries, logging, and guardrails",
      "Cost-control tagging and budget alert defaults",
      "Documented reference architecture diagrams",
    ],
    idealFor: ["Startups moving to the cloud", "Teams without a dedicated DevOps hire", "Companies preparing for a security audit"],
  },
  {
    slug: "rag-chatbot-kit",
    title: "AI Knowledge Assistant Kit",
    audience: "Businesses",
    category: "AI Products",
    tagline: "A RAG-powered chatbot template you can point at your own documents and deploy internally.",
    overview:
      "A self-hosted retrieval-augmented generation (RAG) chatbot template pre-wired for internal knowledge bases — HR policies, support docs, engineering wikis. Bring your own documents and API key, and have a working assistant running in days, not months.",
    format: "Source code + deployment guide",
    priceLabel: "From $999",
    features: [
      "Document ingestion pipeline (PDF, Markdown, Notion export)",
      "Hybrid vector + keyword retrieval configured out of the box",
      "Simple chat UI, easily themeable to your brand",
      "Guardrails for source citation and hallucination reduction",
    ],
    idealFor: ["HR & internal support teams", "Companies with large document libraries", "Teams exploring AI without a big upfront build"],
  },
  {
    slug: "ecommerce-storefront-template",
    title: "E-Commerce Storefront Template",
    audience: "Businesses",
    category: "Templates & Starter Kits",
    tagline: "Headless storefront template with cart, checkout, and CMS-driven product pages.",
    overview:
      "A fast, SEO-friendly storefront template built on modern headless commerce patterns. Comes with cart, checkout, and CMS-managed product pages so non-technical teams can update content without touching code.",
    format: "Downloadable source code + CMS setup guide",
    priceLabel: "From $699",
    features: [
      "Headless storefront with sub-1s page loads",
      "Cart, checkout, and payment provider integration",
      "CMS-managed product and content pages",
      "Mobile-first, accessible UI components",
    ],
    idealFor: ["DTC and retail brands", "Businesses replatforming off legacy commerce systems"],
  },
  {
    slug: "power-bi-dashboard-pack",
    title: "Analytics Dashboard Starter Pack",
    audience: "Businesses",
    category: "Templates & Starter Kits",
    tagline: "Prebuilt Power BI / Tableau dashboards for sales, ops, and finance reporting.",
    overview:
      "A set of prebuilt, easily-connected dashboard templates covering the most common reporting needs — sales pipeline, operational KPIs, and finance close. Connect your data source and have executive-ready dashboards live the same week.",
    format: "Dashboard template files (Power BI / Tableau)",
    priceLabel: "From $349",
    features: [
      "Sales, operations, and finance dashboard templates",
      "Documented data model and connection guide",
      "Reusable design system for consistent reporting",
    ],
    idealFor: ["Finance and ops teams without dedicated BI staff", "Companies standardizing reporting across departments"],
  },
  {
    slug: "fullstack-project-bootcamp",
    title: "Full-Stack Project Bootcamp",
    audience: "Students",
    category: "Learning & Certification",
    tagline: "Build a complete full-stack app from scratch with guided source code and video walkthroughs.",
    overview:
      "A project-based learning kit that walks you through building a real full-stack application — frontend, backend, database, and deployment — with guided videos, annotated source code, and checkpoints to test your understanding along the way.",
    format: "Video course + source code + guided docs",
    priceLabel: "From $79",
    features: [
      "8–10 hours of guided video instruction",
      "Full annotated source code for a real-world app",
      "Deployment walkthrough (Cloudflare/Vercel)",
      "Portfolio-ready final project",
    ],
    idealFor: ["CS students", "Bootcamp grads building a portfolio", "Career switchers learning to code"],
  },
  {
    slug: "cloud-cert-prep-bundle",
    title: "Cloud Certification Prep Bundle",
    audience: "Students",
    category: "Learning & Certification",
    tagline: "Structured prep bundle for AWS, Azure, and GCP associate-level certifications.",
    overview:
      "Everything you need to pass your first cloud certification: structured study guides, hands-on lab exercises, and full-length practice exams modeled on the real test format — built by engineers who use these platforms daily.",
    format: "Study guide + practice exams + labs",
    priceLabel: "From $59",
    features: [
      "Domain-by-domain study guides aligned to exam blueprints",
      "Hands-on lab exercises using free-tier cloud accounts",
      "Full-length timed practice exams with explanations",
    ],
    idealFor: ["Students targeting cloud certifications", "Job seekers upskilling for cloud roles"],
  },
  {
    slug: "tech-resume-portfolio-kit",
    title: "Tech Resume & Portfolio Kit",
    audience: "Students",
    category: "Career Readiness",
    tagline: "ATS-friendly resume templates and portfolio site templates built specifically for tech roles.",
    overview:
      "A kit built specifically for students entering tech: resume templates tuned to pass applicant tracking systems, plus a ready-to-deploy portfolio site template to showcase your projects to recruiters and hiring managers.",
    format: "Templates (resume + portfolio site source code)",
    priceLabel: "From $39",
    features: [
      "ATS-optimized resume templates for SWE, data, and design roles",
      "Deployable portfolio site template",
      "Guide to writing project descriptions recruiters actually read",
    ],
    idealFor: ["Students applying for internships", "New grads building their first portfolio"],
  },
  {
    slug: "internship-readiness-track",
    title: "Internship Readiness Track",
    audience: "Students",
    category: "Career Readiness",
    tagline: "A short, structured track covering Git workflows, code review etiquette, and workplace tools.",
    overview:
      "Technical skill isn't the only gap between students and a great internship. This track covers the practical, workplace-specific skills — Git/GitHub workflows, code review etiquette, ticketing systems, and standups — that most classes skip.",
    format: "Self-paced video modules + checklists",
    priceLabel: "From $29",
    features: [
      "Git & GitHub workflow fundamentals for team environments",
      "How to give and receive code review feedback",
      "Working with Jira/Linear, standups, and sprint cycles",
    ],
    idealFor: ["Students about to start an internship", "First-time interns and new hires"],
  },
  {
    slug: "mock-interview-package",
    title: "Technical Mock Interview Package",
    audience: "Job Seekers",
    category: "Interview Prep",
    tagline: "Recorded mock interviews with real engineers, covering technical and behavioral rounds.",
    overview:
      "Practice with real engineers, not just an algorithm. This package includes recorded mock interview sessions covering coding rounds, system design, and behavioral questions, with structured written feedback after each session.",
    format: "1:1 recorded video sessions + written feedback",
    priceLabel: "From $129 per session",
    features: [
      "Live mock interview with an experienced engineer",
      "Coding, system design, or behavioral round — your choice",
      "Recorded session plus a written feedback report",
    ],
    idealFor: ["Job seekers with interviews scheduled", "Candidates targeting senior/staff roles"],
  },
  {
    slug: "resume-linkedin-optimization",
    title: "Resume & LinkedIn Optimization",
    audience: "Job Seekers",
    category: "Career Services",
    tagline: "1:1 resume and LinkedIn profile rewrite tuned for tech recruiter search and ATS systems.",
    overview:
      "A hands-on rewrite of your resume and LinkedIn profile, optimized for both applicant tracking systems and how technical recruiters actually search and skim. Delivered with a call to walk through the changes and why they matter.",
    format: "1:1 review call + document deliverables",
    priceLabel: "From $149",
    features: [
      "Full resume rewrite tuned for ATS parsing and recruiter skimming",
      "LinkedIn profile optimization for recruiter search visibility",
      "30-minute review call to walk through changes",
    ],
    idealFor: ["Active job seekers", "Professionals not getting callbacks despite relevant experience"],
  },
  {
    slug: "job-search-toolkit",
    title: "Job Search Automation Toolkit",
    audience: "Job Seekers",
    category: "Career Services",
    tagline: "Application tracker, outreach templates, and cover letter generator to run a structured search.",
    overview:
      "A structured system for running your job search like a project: an application tracker, proven outreach message templates for recruiters and hiring managers, and a cover letter generator template you can customize per role in minutes.",
    format: "Notion/spreadsheet template + document templates",
    priceLabel: "From $35",
    features: [
      "Application tracker with stage, follow-up, and offer fields",
      "Cold outreach templates for recruiters and hiring managers",
      "Cover letter generator template with role-specific prompts",
    ],
    idealFor: ["Job seekers applying at scale", "Career switchers managing a long search"],
  },
  {
    slug: "visa-relocation-guidance",
    title: "Visa & Relocation Guidance Kit",
    audience: "Job Seekers",
    category: "Career Services",
    tagline: "Practical guidance on H-1B, work visas, and relocation logistics for IT roles in the US.",
    overview:
      "Drawing on our IT staffing experience placing international talent, this kit walks through the practical realities of H-1B and other work visa processes, employer sponsorship conversations, and relocation logistics for tech roles in the US.",
    format: "Guide (PDF) + 1:1 Q&A session",
    priceLabel: "From $99",
    features: [
      "Plain-language walkthrough of common visa pathways for tech roles",
      "How to raise sponsorship in interviews without hurting your candidacy",
      "30-minute Q&A session for your specific situation",
    ],
    idealFor: ["International students and job seekers", "Candidates needing employer sponsorship"],
  },
  {
    slug: "complete-career-guidance-program",
    title: "Complete Career Guidance Program",
    audience: "Job Seekers",
    category: "1:1 Coaching",
    tagline: "End-to-end personal training, mentorship, and mock interviews — with us until you land the job.",
    overview:
      "Our most comprehensive career service: a dedicated 1:1 coach works with you from day one through your offer letter. That means personalized skill training, resume and LinkedIn optimization, unlimited mock interviews, and ongoing application strategy — all bundled into a single engagement that doesn't end until you're placed.",
    format: "Ongoing 1:1 coaching & mentorship, until you're hired",
    priceLabel: "$2,000 flat — until you're hired",
    features: [
      "Personalized skill-gap assessment and a structured training plan",
      "Unlimited 1:1 mentorship sessions with a dedicated career coach",
      "Resume and LinkedIn optimization included",
      "Unlimited mock interviews — technical, system design, and behavioral",
      "Ongoing job search and application strategy coaching",
      "Continued support through offer negotiation, until you're placed",
    ],
    idealFor: ["Job seekers who want hands-on, ongoing support", "Career switchers needing comprehensive guidance", "Candidates who've struggled with a self-directed search"],
  },
];