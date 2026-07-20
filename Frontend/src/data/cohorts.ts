// src/data/cohorts.ts
import type { ProgramBase } from "./program_base";

export type Cohort = ProgramBase & {
  cohort_id: string;
  partner_id: string;
};

export const cohortsData: Cohort[] = [
  // {
  //   cohort_id: "predict-agri-commodity-prices", //2
  //   partner_id: "None",
  //   imageSrc: "/Images/forecasting_and_timeseries.jpg",
  //   tag: "Applied",
  //   title: "Predict CIBIL Score - Fintech",
  //   short_description: "Build timeseries predictive system that forecasts next week’s agricultural commodity prices.", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
  //   description: "This project leverages daily commodity price data - including wholesale maximum, minimum, and modal prices - to analyze market trends and predict future price movements for key crops using time series forecasting models. By identifying factors that influence price fluctuations and visualizing insights through an interactive, real-time dashboard, the system empowers farmers and stakeholders with data-driven alerts and recommendations, helping them choose the best time and market to sell their produce, thereby minimizing losses due to price volatility",
  //   startDate: "",
  //   duration: "10 Weeks",
  //   level: "Beginners / Intermediate",
  //   goal: [
  //           "Predict future commodity prices using time series forecasting models.",
  //           "Identify factors influencing price fluctuations.",
  //           "Develop a user-friendly dashboard for real-time price monitoring."
  //       ],
  //   dataset: "https://aikosh.indiaai.gov.in/home/datasets/details/variety_wise_daily_market_prices_of_commodity.html",
  //   methods: [
  //               "Data Preprocessing",
  //               "Exploratory Data Analysis (EDA)",
  //               "Modeling - Timeseries Modelling, Machine Learning and Deep Learning Models",
  //               "Evaluation Metrics"
  //           ],
  //   milestones: [
  //           "Project Kickoff & Dataset Familiarization; Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
  //           "Data Cleaning & Preprocessing;Statistical Analysis",
  //           "Exploratory Data Analysis (EDA);Visualize trends, seasonality, and market patterns",
  //           "Feature Engineering & Baseline Mode;Establish naive baseline and choose ML models for price prediction.",
  //           "Time Series Modeling with XGBoost & LGBM;Train and compare XGBoost and LightGBM on the engineered features;Record performance metrics.",
  //           "LSTM as a Comparison Model.;Run LSTM on the same dataset and features.;Compare LSTM results against XGBoost and LGBM to understand when deep learning helps and when it doesn't.",
  //           "Integration & Visualization.;Build an interactive dashboard to visualize model predictions and price trends.",
  //           "Evaluation & Validation.;Validate all models using MAE, RMSE, MAPE.;Analyse where each model fails and why.;Update dashboard with final improvements.",
  //           "Deployment & Community Sharing.;Deploy application on cloud.;Finalise data flow diagram and GitHub review.;Documentation, Demo & Write blog;Discussion on further research topics"
  //         ],
  //   deliverables:[
  //           "Project and Github setup;",
  //           "Scripts for data cleaning and preprocessing;Statistical Analysis notebook",
  //           "EDA report;Data Flow Diagram and Observations - First Review",
  //           "Engineered feature set;Naive baseline with recorded metrics",
  //           "Trained XGBoost and LGBM models.;Performance comparison report",
  //           "LSTM model trained on the same dataset;Comparison report on model performance;Data Flow Diagram and Observations - Second Review",
  //           "Interactive dashboard showing forecasts from the best-performing model",
  //           "Final evaluation report across all models;Analysis of failure cases and model behaviour;Updated dashboard with improvements",
  //           "App deployed on cloud;Data Flow Diagram and Observations - Final Version;GitHub reviewed and cleaned;Documentation, Demo recording & Blog published"
  //         ],
  //   documents_list: " ",
  //   key_learnings: "Working with real-world, noisy agricultural data - cleaning, preprocessing and building pipelines.;Exploratory Data Analysis and visualisation of time series trends and seasonality.;Feature Engineering.;Time Series Forecasting with ARIMA.;Training and comparing XGBoost and LGBM on the same dataset.;Using LSTM as a comparison model to understand when deep learning adds value over ML models.;Model Evaluation using MAE, RMSE, and MAPE - and understanding why models fail.;Building an interactive dashboard and deploying to cloud.",
  //   social_engagement: "Provide insights to further students on price trends, volatility, decision-making for procurement and sales. Enhance transparency in agricultural markets., Write a blog post on learnings, datasets, and project outcomes.",
  //   evaluations: "Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), Mean Absolute Percentage Error (MAPE), R-Squared (Coefficient of Determination), Mean Squared Logarithmic Error (MSLE), Evaluate model stability across time windows.",
  //   skill_tags: ["Data Cleaning", "EDA & Visualisation", "Feature Engineering", "Timeseries Forecasting", "ARIMA", "XGBoost", "LGBM", "LSTM (comparison)", "Interactive Dashboard", "Cloud Deployment"],
  //   cohort_card_skill_tags: ["Feature Engineering", "Timeseries Forecasting", "Cloud Deployment"],
  //   fees: 3999,
  //   current_version: "v1.0",
  //   is_approved: true,
  //   created_at: "2025-10-14T00:00:00Z",
  //   updated_at: "2025-10-14T00:00:00Z",
  //   top_content: [
  //                 "Build a real, end-to-end project from Day 1, not toy exercises",
  //                 "GitHub-documented work that goes straight on your resume",
  //                 "Mentored by industry experts throughout",
  //                 "Continuous learning loop, each cohort ends with open research topics",
  //                 "Outcome-certified based on what you actually deliver"
  //               ]
  // },
  {
    cohort_id: "startup-funding-rag", //1
    partner_id: "1",
    imageSrc: "/Images/build_rag.jpg",
    program_type: "Industry",
    title: "Startup Funding Intelligence using RAG Systems",
    short_description: "Build a production-style RAG application for startup funding intelligence using modern GenAI workflows, evaluation systems, and deployment practices.",
    description: "A 12-week industry-focused cohort designed to help students build \
    strong foundations in Retrieval-Augmented Generation (RAG), vector databases, \
    evaluation workflows, and modern GenAI system design. Students work on a \
    real-world startup funding intelligence application while learning scalable \
    AI engineering and research-oriented workflows.",
    startDate: "July 28, 2026",
    duration: "12 Weeks",
    level: "Beginners / Intermediate",
    goal:
    [
      "Understand end-to-end RAG system architecture and workflows",
      "Learn document processing, embeddings, retrieval, and vector databases",
      "Build practical experience with hybrid search and reranking systems",
      "Understand hallucination analysis, evaluation, and observability workflows",
      "Develop skills in backend APIs and basic deployment",
      "Learn industry-style experimentation, debugging, and optimization practices"
    ],
    prerequisites:
    [
      "Basic understanding of Generative AI",
      "Familiarity with Python programming fundamentals",
      "Awareness of APIs, JSON, and notebook-based development",
      "Willingness to experiment, debug, and document observations"
    ],
    dataset: "Websites like Startup India, Seedfunds, Meity, VC firm sites, news articles, policy PDFs.",
    milestones:
    {
      "week1-Project Foundations and Problem Understanding":
      [
        "Introduction to Generative AI and RAG systems",
        "Understanding transformers and attention intuition",
        "How LLMs process tokens and context",
        "Startup funding intelligence problem understanding",
        "GitHub setup, understand observation template and workflow"
      ],
      "week2-Data Collection and Document Processing":
      [
        "Web scraping fundamentals and ethical considerations",
        "Document preprocessing and Markdown conversion",
        "Preparing documents for retrieval systems",
        "Automating data collection workflows"
      ],
      "week3-Chunking strategies and Embedding":
      [
        "Metadata handling",
        "Chunking strategies and token limitations",
        "Semantic and recursive chunking approaches",
        "Introduction to retrieval workflows"
      ],
      "week4-Embeddings and Vector Databases":
      [
        "Milvus schema design and indexing",
        "Dense retrieval fundamentals",
        "Metadata filtering and retrieval optimization",
        "Vector storage workflows"
      ],
      "week5-Hybrid Search and Retrieval Optimization": 
      [
        "Hybrid search using dense and keyword retrieval",
        "BM25 and semantic retrieval basics",
        "Multi-query retrieval workflows",
        "Reranking and retrieval quality improvement",
        "Retrieval experimentation and observations"
      ],
      "week6-Building the Core RAG Pipeline":
      [
        "Retriever and generator architecture",
        "Connecting vector databases with LLMs",
        "Prompt engineering for RAG systems",
        "Context-aware response generation",
        "Citation-aware response workflows"
      ],
      "week7-Advanced RAG and Context Optimization":
      [
        "Context compression techniques",
        "Reducing hallucinations in RAG systems",
        "Grounded generation workflows",
        "Query expansion and retrieval refinement",
        "Introduction to agentic RAG concepts"
      ],
      "week8-Evaluation, Observability and Tracing":
      [
        "Introduction to GenAI evaluation frameworks",
        "DeepEval and response evaluation workflows",
        "Faithfulness and relevancy evaluation",
        "Tracing and observability basics",
        "Hallucination analysis and debugging"
      ],
      "week9-Backend APIs and Workflow Integration":
      [
        "FastAPI backend development",
        "API integration for RAG systems",
        "Managing query workflows and sessions",
        "Response handling and optimization",
        "Backend testing and debugging"
      ],
      "week10-Frontend and User Experience":
      [
        "Streamlit frontend development",
        "Interactive query and search interfaces",
        "Displaying citations and retrieved sources",
        "Frontend-backend integration",
        "Improving user experience workflows"
      ],
      "week11-Deployment and Production Optimization":
      [
        "Cloud deployment fundamentals",
        "Deploying scalable RAG applications",
        "Cost and latency optimization strategies",
        "Caching and retrieval optimization",
        "Monitoring and production debugging"
      ],
      "week12-Documentation, Demo and Research Directions":
      [
        "Final system optimization and review",
        "GitHub cleanup and documentation",
        "Demo preparation and walkthrough",
        "Technical blog writing and reporting",
        "Discussion on future GenAI and agentic AI trends"
      ]
    },
    deliverables:
    {
      "week1-Project Foundations and Problem Understanding":
      [
        "Project setup and GitHub repository",
        "Finalized startup funding data sources",
        "Initial architecture and data flow diagram",
        "Transformers Architecture observation notes"
      ],
      "week2-Data Collection and Document Processing":
      [
          "Working scraper prototype",
          "Raw scraped dataset",
          "Markdown conversion workflow"
      ],
      "week3-Chunking strategies and Embedding":
      [
          "Cleaned Markdown dataset",
          "Chunking experimentation notebook",
          "Document preprocessing scripts"
      ],
      "week4-Embeddings and Vector Databases":
      [
          "Milvus schema and indexing implementation",
          "Embedding and retrieval workflows",
          "Vector database experimentation notebook"
      ],
      "week5-Hybrid Search and Retrieval Optimization":
      [
          "Hybrid retrieval implementation",
          "Reranking experimentation notebook",
          "Retrieval optimization observations"
      ],
      "week6-Building the Core RAG Pipeline":
      [
          "Working RAG pipeline",
          "Citation-aware response workflow",
          "Prompt experimentation notebook"
      ],
      "week7-Advanced RAG and Context Optimization":
      [
          "Context compression experiments",
          "Hallucination reduction observations",
          "Advanced retrieval workflow notes"
      ],
      "week8-Evaluation, Observability and Tracing":
      [
          "Custom evaluation test set",
          "DeepEval evaluation report",
          "Tracing and observability report"
      ],
      "week9-Backend APIs and Workflow Integration":
      [
          "FastAPI backend implementation",
          "Integrated API endpoints",
          "Backend testing report"
      ],
      "week10-Frontend and User Experience":
      [
          "Working Streamlit frontend",
          "Frontend-backend integrated system",
          "UI workflow improvements"
      ],
      "week11-Deployment and Production Optimization":
      [
          "Cloud-deployed RAG application",
          "Latency and cost optimization report",
          "Monitoring and deployment documentation"
      ],
      "week12-Documentation, Demo and Research Directions":
      [
          "Final GitHub submission",
          "Updated architecture and workflow diagrams",
          "Demo recording",
          "Technical blog/report publication"
      ]
    },
    documents_list:
    [
      "Architecture and Data Flow Diagrams",
      "Observation File",
      "Chunking and Retrieval Experiment Reports",
      "DeepEval Evaluation Report",
      "Hallucination and Error Analysis Report",
      "Deployment Documentation",
      "Obervation Document",
      "Technical Blog/Project Report",
      "GitHub Repository Link",
      "Demo Video Recording"
    ],
    key_learnings:
    [
      "Understand how production-grade RAG systems are built",
      "Learn modern retrieval, reranking, and hybrid search workflows",
      "Build intuition for hallucination reduction and grounded generation",
      "Understand evaluation, tracing, and observability in GenAI systems",
      "Develop practical experience with scalable AI application workflows",
      "Build strong foundations for advanced GenAI and agentic AI systems",
      "Product first thinking"
    ],
    social_engagement: "Students are encouraged to share architecture diagrams, retrieval experiments, \
    evaluation observations, and deployment demos. Final GitHub repositories, technical blogs, and demo videos can be \
    published as portfolio projects. Selected cohort projects may be featured \
    on v18hub platforms with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of RAG architecture and retrieval workflows",
      "Quality of scraping, preprocessing, and document handling",
      "Correct implementation of embeddings and vector retrieval",
      "Hybrid search and reranking experimentation quality",
      "Evaluation and hallucination analysis understanding",
      "Deployment and system integration completeness",
      "Consistency of observations and research-oriented thinking",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "RAG",
      "LLMs",
      "LangChain / LlamaIndex",
      "Vector Databases - Milvus",
      "Hybrid Search",
      "Reranking",
      "Embeddings",
      "Prompt Engineering",
      "Evaluation",
      "Hallucination Analysis",
      "Tracing & Observability",
      "FastAPI",
      "Streamlit",
      "Deployment Basics",
    ],
    program_card_skill_tags:
    [
      "RAG",
      "LLMs"
    ],
    fees: 7499,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
  },
  {
    cohort_id: "automate-healthcare-claims", //3
    partner_id: "3",
    imageSrc: "/Images/ai_agent.jpg",
    program_type: "Industry",
    title: "AI Agents for Medical Insurance Claims Automation - Industry Collaboration with Sarvatra.ai",
    short_description: "Build multi-agent AI systems for automating medical insurance claim workflows and compliance validation.",
    description: "A 16-week industry-oriented cohort focused on building AI agent workflows \
    for medical insurance claim automation. Students learn healthcare NLP, \
    document intelligence, agent orchestration, compliance validation, and \
    workflow automation using synthetic healthcare datasets and real-world AI system design practices.",
    startDate: "Aug 06, 2026",
    duration: "16 Weeks",
    level: "Beginners/Intermediate",
    goal:
    [
      "Understand multi-agent AI system design and orchestration",
      "Learn healthcare document processing and information extraction",
      "Build AI-driven validation and compliance workflows",
      "Develop practical experience with healthcare NLP and ICD coding workflows",
      "Learn workflow automation, evaluations, and deployment pipelines",
    ],
    prerequisites:
    [
      "Basic understanding of Machine Learning and Generative AI concepts",
      "Familiarity with Python programming and APIs",
      "Basic understanding of NLP and LLM workflows",
      "Comfort with notebook-based development and GitHub",
      "Willingness to work on research-oriented healthcare AI workflows"
    ],
    dataset: "Use Synthea for creating patients, MIMIC-III / MIMIC-IV datasets, ICP/ICD code datasets",
    milestones:
    {
      "week1-Project Foundations and Healthcare AI Basics":
      [
        "Introduction to healthcare AI and insurance workflows",
        "FHIR Claim resource and insurance pipeline understanding",
        "Understanding problem and workflow overview",
        "GitHub setup and collaboration workflows"
      ],
      "week2-Data Processing and NLP Foundations":
      [
        "Healthcare document preprocessing",
        "Medical NLP and entity extraction basics",
        "Understanding ICD and ICP coding systems",
        "Structured outputs and JSON workflows",
        "Preparing synthetic insurance datasets"
      ],
      "week3-Information Extraction and Structured Workflows":
      [
        "Building extraction pipelines for healthcare documents",
        "FHIR-aligned structured output generation",
        "Claim field identification and parsing",
        "Missing information detection workflows",
        "Observation documentation and reviews"
      ],
      "week4-Validation Workflows":
      [
        "Rule-based validation systems",
        "FHIR structural validation",
        "ICD validation and coding checks",
        "Missing field and inconsistency detection"
      ],
      "week5-Generic Compliance Systems":
      [
        "Healthcare compliance checking basics",
        "Insurer-specific rule understanding",
        "Compliance validation workflows",
      ],
      "week6-Workflow Automation and Task Routing":
      [
        "Task routing logic and department mapping",
        "Queue and workflow orchestration basics",
        "Shortage identification and handling",
        "Reprocessing workflows",
        "Claim readiness reporting concepts"
      ],
      "week7-Insurer-Specific Compliance":
      [
        "Insurance-specific rule systems",
        "Custom compliance workflows",
        "Denial-risk detection",
        "Compliance workflow observations"
      ],
      "week8-Multi-Agent Integration and Orchestration":
      [
        "Integrating intelligent workflow components",
        "Agent communication and orchestration",
        "Pipeline tracing and debugging basics",
        "Synthetic batch testing",
        "Workflow optimization observations"
      ],
      "week9-Advanced Validation and Quality Checks":
      [
        "Iterative validation and correction workflows",
        "Error handling and fallback systems",
        "Quality assurance pipelines",
        "Healthcare workflow monitoring",
        "Observability and logging basics"
      ],
      "week10-Model Adaptation and ICP Prediction":
      [
        "Understanding ICP prediction workflows",
        "Training data preparation",
        "Model adaptation and experimentation",
        "Prediction workflow evaluation",
        "Ablation study intuition"
      ],
      "week11-Evaluation and Error Analysis":
      [
        "Ground-truth based evaluation",
        "Human-in-the-loop evaluation",
        "Workflow tracing and observability",
        "Hallucination and failure analysis",
        "Feedback loop integration"
      ],
      "week12-Backend APIs and Dashboard Development":
      [
        "FastAPI backend integration",
        "Workflow APIs and query handling",
        "Prototype dashboard development",
        "Frontend-backend integration",
        "Workflow interaction systems"
      ],
      "week13-End-to-End Integration and Testing":
      [
        "End-to-end workflow integration",
        "Testing and debugging",
        "Performance optimization basics",
        "Pipeline stability improvements"
      ],
      "week14-Deployment and Monitoring":
      [
        "Cloud deployment fundamentals",
        "Deployment workflows and debugging",
        "Monitoring and logging systems",
        "Workflow optimization discussions",
        "Production-style deployment practices"
      ],
      "week15-System Optimization and Improvements":
      [
        "Improving workflow efficiency",
        "Latency and cost optimization basics",
        "Refining validation and routing logic",
        "Observability improvements",
        "Pipeline refinement discussions"
      ],
      "week16-Documentation, Final Integration and Demo":
      [
        "GitHub cleanup and project structuring",
        "Final architecture and workflow documentation",
        "Technical reporting and documentation",
        "Technical blog writing",
        "Research discussion and future directions",
        "Final Demo"
      ],
    },
    deliverables: 
    {
      "week1-Project Foundations and Healthcare AI Basics":
      [
        "Project setup and GitHub repository",
        "Insurance workflow understanding notes",
        "Initial architecture and data flow diagram",
      ],
      "week2-Data Processing and NLP Foundations":
      [
        "Cleaned synthetic healthcare dataset",
        "Medical NLP experimentation notebook",
        "Structured JSON workflow setup"
      ],
      "week3-Information Extraction and Structured Workflows":
      [
        "Healthcare document extraction pipeline",
        "FHIR-aligned structured outputs",
        "Missing information detection workflows"
      ],
      "week4-Validation Workflows":
      [
        "Validation workflow implementation",
        "ICD rule-checking workflows",
      ],
      "week5-Generic Compliance Systems":
      [
        "Healthcare rule implementation",
        "Healthcare compliance checking workflows"
      ],
      "week6-Workflow Automation and Task Routing":
      [
        "Task routing and orchestration workflows",
        "Queue management implementation",
        "Claim readiness workflow report"
      ],
      "week7-Insurer-Specific Compliance":
      [
        "Insurance-specific validation workflows",
        "Denial-risk detection experiments",
        "Compliance observations report"
      ],
      "week8-Multi-Agent Integration and Orchestration":
      [
        "Integrated workflow pipeline",
        "Tracing and debugging observations",
        "Synthetic batch testing report"
      ],
      "week9-Advanced Validation and Quality Checks":
      [
        "Quality assurance workflows",
        "Error handling implementation",
        "Workflow monitoring observations"
      ],
      "week10-Model Adaptation and ICP Prediction":
      [
        "ICP prediction experimentation notebook",
        "Training and evaluation workflows",
        "Model adaptation observations"
      ],
      "week11-Evaluation and Error Analysis":
      [
        "Evaluation and error analysis report",
        "Feedback loop implementation",
        "Workflow observability report"
      ],
      "week12-Backend APIs and Dashboard Development":
      [
        "Working API endpoints",
        "Prototype workflow dashboard",
        "Integrated backend workflows"
      ],
      "week13-End-to-End Integration and Testing":
      [
        "Integrated end-to-end workflow system",
        "Load testing observations",
        "Pipeline optimization report"
      ],
      "week14-Deployment and Monitoring":
      [
        "Cloud-deployed application",
        "Monitoring and logging setup",
        "Deployment documentation"
      ],
      "week15-System Optimization and Improvements":
      [
        "Workflow optimization report",
        "Latency and efficiency observations",
        "Improved orchestration workflows"
      ],
      "week16-Documentation, Final Integration and Demo":
      [
        "Finalized GitHub repository",
        "Architecture and workflow diagrams",
        "Technical documentation",
        "Demo recording",
      ],
    },
    documents_list:
    [
      "Architecture and Workflow Diagrams",
      "Research Paper Observation Notes",
      "FHIR and Validation Workflow Reports",
      "Evaluation and Error Analysis Report",
      "Observability and Monitoring Report",
      "Deployment Documentation",
      "Obervation Document",
      "Technical Blog/Project Report",
      "GitHub Repository Link",
      "Demo Video Recording"
    ],
    key_learnings: 
    [
      "Understand real-world AI agent orchestration workflows",
      "Learn healthcare NLP and document intelligence systems",
      "Build practical experience in workflow automation and compliance validation",
      "Understand evaluation, monitoring, and tracing in AI systems",
      "Develop industry-style AI engineering and deployment skills",
      "Build strong foundations for advanced healthcare AI systems"
    ],
    social_engagement: "Students are encouraged to publish technical blogs, workflow diagrams, \
    and healthcare AI observations on LinkedIn using the hashtag v18hub. \
    Final GitHub repositories and demo videos can be shared as portfolio projects. \
    Selected cohort projects may be featured on v18hub platforms with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of healthcare AI workflows and FHIR concepts",
      "Quality of agent orchestration and workflow integration",
      "Correct implementation of validation and compliance systems",
      "Error handling and evaluation workflow understanding",
      "Deployment and system integration completeness",
      "Research-oriented observations and experimentation quality",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "AI Agents",
      "Healthcare NLP",
      "Workflow Automation",
      "Agent Orchestration",
      "LLMs",
      "FastAPI",
      "Model Evaluation",
      "Fine-Tuning",
      "Cloud Deployment Basics",
    ],
    program_card_skill_tags: ["AI Agents", "Agent Orchestration"],
    fees: 9499,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
  },
  {
    cohort_id: "intraoral-lesion", //4
    partner_id: "None",
    imageSrc: "/Images/intraoral_lesion.png",
    program_type: "Applied",
    title: "Medical Imaging AI - Intraoral Lesion Detection and Analysis",
    short_description: "Build modern AI pipelines for medical image segmentation, classification, explainability, and deployment.",
    description: "A 14-week hands-on cohort focused on modern deep learning workflows \
    for medical imaging. Students learn segmentation, classification, \
    Vision Transformers, explainability, evaluation, and deployment \
    through practical experimentation on healthcare imaging datasets.",
    startDate: "Aug 06, 2026",
    duration: "14 Weeks",
    level: "Begineers/Intermediate",
    goal:
    [
      "Understand modern medical imaging AI workflows",
      "Learn segmentation and classification pipelines for healthcare data",
      "Build practical experience with Segment Anything and Vision Transformers",
      "Understand model evaluation, explainability, and error analysis",
      "Develop skills in experimentation, debugging, and deployment workflows"
    ],
    prerequisites:
    [
      "Basic understanding of Python and Deep Learning concepts",
      "Familiarity with CNN fundamentals and image processing basics",
      "Basic understanding of PyTorch or TensorFlow workflows",
      "Willingness to document observations and iterative experiments",
    ],
    dataset: "https://aikosh.indiaai.gov.in/home/datasets/details/smart_intraoral_images_dataset_1.html",
    milestones:
    {
      "week1-Project Foundations and Dataset Understanding":
      [
        "Introduction to medical imaging AI workflows",
        "GitHub setup and undrstanding workflows",
        "Dataset understanding and exploration",
      ],
      "week2-Data Processing and Exploratory Analysis":
      [
        "Medical image preprocessing basics",
        "Exploratory Data Analysis (EDA)",
        "Understanding class imbalance and dataset quality",
        "Visualization and annotation understanding",
        "Data pipeline preparation"
      ],
      "week3-Augmentation and Data Preparation":
      [
        "Image augmentation strategies",
        "Metadata generation for augmented images",
        "Annotation and JSON workflow handling",
        "Improving data diversity",
        "Workflow observations and reviews"
      ],
      "week4-Segmentation Foundations":
      [
        "Introduction to medical image segmentation",
        "Segmentation workflows and masks",
        "Understanding UNet architecture",
        "Training segmentation pipelines",
        "Segmentation evaluation basics"
      ],
      "week5-Advanced Segmentation with Segment Anything":
      [
        "Introduction to Segment Anything Model (SAM)",
        "Promptable segmentation workflows",
        "Experimenting with SAM for medical imaging",
        "Comparing segmentation approaches",
        "Segmentation optimization observations"
      ],
      "week6-Classification Foundations and Baseline Models":
      [
        "Medical image classification basics",
        "CNN workflow understanding",
        "Training baseline classification models",
        "Evaluation metrics and benchmarking",
        "Overfitting and underfitting intuition"
      ],
      "week7-Transfer Learning for Medical Imaging":
      [
        "Transfer learning fundamentals",
        "Fine-tuning pretrained image models",
        "Feature extraction workflows",
        "Improving classification performance",
        "Model comparison observations"
      ],
      "week8-Vision Transformers for Medical Imaging":
      [
        "Introduction to Vision Transformers (ViT)",
        "Understanding patch embeddings and attention",
        "Training transformer-based image models",
        "Fine-tuning and optimization workflows",
        "CNN vs ViT comparison and observations"
      ],
      "week9-Vision Transformer Experimentation and Refinement":
      [
        "Continuing ViT experimentation workflows",
        "Hyperparameter tuning and regularization",
        "Performance improvement and debugging",
        "Evaluation and benchmarking workflows",
        "Final transformer observations and refinements"
      ],
      "week10-Explainability and Model Understanding":
      [
        "Introduction to explainable AI in healthcare",
        "Grad-CAM and saliency maps",
        "Visualizing model attention",
        "Understanding prediction reasoning",
        "Model trust and interpretability"
      ],
      "week11-Evaluation and Error Analysis":
      [
        "Segmentation and classification evaluation",
        "Error analysis workflows",
        "Understanding failure cases",
        "Comparing model behaviors",
        "Improving model robustness"
      ],
      "week12-Prototype App Development":
      [
        "FastAPI and Streamlit basics",
        "Building medical imaging demo workflows",
        "Model integration into applications",
        "Frontend-backend interaction",
        "User workflow design"
      ],
      "week13-Deployment and Optimization":
      [
        "Deploying medical imaging applications",
        "Inference optimization basics",
        "Model monitoring and debugging",
        "Pipeline optimization workflows",
        "Deployment observations"
      ],
      "week14-Final Demo and Research Directions":
      [
        "Final system demonstration",
        "Peer review and feedback discussions",
        "Technical blog writing",
        "Research discussions and future directions",
      ]
    },
    deliverables:
    {
      "week1-Project Foundations and Dataset Understanding":
      [
        "Project setup and GitHub repository",
        "Basic dataset analysis report",
        "Initial architecture and workflow diagram",
      ],
      "week2-Data Processing and Exploratory Analysis":
      [
        "Preprocessing scripts",
        "EDA report and visualizations",
        "Dataset quality observations"
      ],
      "week3-Augmentation and Data Preparation":
      [
        "Augmentation scripts",
        "Metadata and annotation workflows",
        "Updated dataset observations report"
      ],
      "week4-Segmentation Foundations":
      [
        "UNet segmentation implementation",
        "Segmentation training workflows",
        "Initial segmentation evaluation report"
      ],
      "week5-Advanced Segmentation with Segment Anything":
      [
        "Segment Anything experimentation notebook",
        "Segmentation comparison report",
        "Optimization observations"
      ],
      "week6-Classification Foundations and Baseline Models":
      [
        "Baseline CNN classification models",
        "Initial benchmarking report",
        "Classification evaluation workflows"
      ],
      "week7-Transfer Learning for Medical Imaging":
      [
        "Fine-tuned transfer learning models",
        "Transfer learning evaluation report",
        "Performance comparison observations"
      ],
      "week8-Vision Transformers for Medical Imaging":
      [
        "Vision Transformer implementation",
        "Transformer training experiments",
        "CNN vs ViT comparison report"
      ],
      "week9-Vision Transformer Experimentation and Refinement":
      [
        "ViT optimization and tuning report",
        "Evaluation and benchmarking observations",
        "Final transformer experimentation report"
      ],
      "week10-Explainability and Model Understanding":
      [
        "Grad-CAM and saliency visualizations",
        "Explainability report",
        "Model interpretation observations"
      ],
      "week11-Evaluation and Error Analysis":
      [
        "Error analysis report",
        "Model comparison report",
        "Robustness improvement observations"
      ],
      "week12-Prototype App Development":
      [
        "Working Streamlit/FastAPI prototype",
        "Integrated model workflows",
        "Demo application screenshots"
      ],
      "week13-Deployment and Optimization":
      [
        "Cloud-deployed prototype",
        "Deployment documentation",
        "Inference optimization observations"
      ],
      "week14-Final Demo and Research Directions":
      [
        "Final demo recording",
        "Technical blog/report publication",
        "Final presentation and portfolio submission"
      ]
    },
    documents_list:
    [
      "Architecture and Workflow Diagrams",
      "EDA and Dataset Analysis Report",
      "Segmentation Evaluation Report",
      "Classification Benchmark Report",
      "Explainability and Error Analysis Report",
      "Deployment Documentation",
      "Obervation Document",
      "Technical Blog/Project Report",
      "GitHub Repository Link",
      "Demo Video Recording"
    ],
    key_learnings:
    [
      "Understand modern medical imaging AI workflows",
      "Learn segmentation and transformer-based classification systems",
      "Build practical experience with Segment Anything and Vision Transformers",
      "Understand explainability and evaluation in healthcare AI",
      "Develop experimentation, debugging, and deployment skills",
      "Build strong foundations for advanced medical imaging research"
    ],
    social_engagement: "Students are encouraged to share segmentation outputs, explainability visualizations, \
    model comparisons, and deployment demos on LinkedIn using the hashtag v18hub. \
    Final GitHub repositories, technical blogs, and demo videos can be published as \
    portfolio projects. Selected cohort projects may be featured on v18hub platforms \
    with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of medical imaging workflows",
      "Quality of preprocessing and augmentation pipelines",
      "Correct implementation of segmentation and classification models",
      "Experimentation quality with Vision Transformers and SAM",
      "Understanding of explainability and evaluation workflows",
      "Deployment and prototype completeness",
      "Research-oriented observations and iterative improvements",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "Medical Imaging",
      "Deep Learning",
      "UNet",
      "Segment Anything",
      "Vision Transformers",
      "Transfer Learning",
      "Grad-CAM",
      "Explainable AI",
      "PyTorch",
      "Image Segmentation",
      "Image Classification",
      "FastAPI",
      "Streamlit",
      "Model Evaluation",
      "Error Analysis",
      "Cloud Deployment",
    ],
    program_card_skill_tags: ["Medical Imaging", "Deep Learning"],
    fees: 9499,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
  }
];

const seenIds = new Set<string>();
export const approvedCohorts: Cohort[] = cohortsData.filter((c) => {
  if (!c.is_approved || seenIds.has(c.cohort_id)) return false;
  seenIds.add(c.cohort_id);
  return true;
});
