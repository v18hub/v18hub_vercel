export type Cohort = {
  cohort_id: string;
  partner_id: string;
  imageSrc: string;
  tag: string;
  title: string;
  short_description: string,
  description: string;
  startDate: string; // "Nov 1, 2025"
  duration: string;
  level: string;
  goal: string[];
  dataset: string;
  methods: string[];
  milestones: string[];
  deliverables: string[];
  documents_list: string;
  key_learnings: string;
  social_engagement: string;
  evaluations: string;
  skill_tags: string[];
  cohort_card_skill_tags: string[];
  fees: number;
  current_version: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
  top_content: string[];
};

export const cohortsData: Cohort[] = [
  {
    cohort_id: "predict-agri-commodity-prices", //2
    partner_id: "None",
    imageSrc: "/Images/forecasting_and_timeseries.jpg",
    tag: "Applied",
    title: "Predicting Agricultural Commodity Prices",
    short_description: "A predictive analytics project that forecasts next week’s commodity prices.", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
    description: "This project leverages daily commodity price data - including wholesale maximum, minimum, and modal prices - to analyze market trends and predict future price movements for key crops using time series forecasting models. By identifying factors that influence price fluctuations and visualizing insights through an interactive, real-time dashboard, the system empowers farmers and stakeholders with data-driven alerts and recommendations, helping them choose the best time and market to sell their produce, thereby minimizing losses due to price volatility",
    startDate: "Mar 28, 2026",
    duration: "9 Weeks",
    level: "Beginners / Intermediate",
    goal: [
            "Predict future commodity prices using time series forecasting models.",
            "Identify factors influencing price fluctuations.",
            "Develop a user-friendly dashboard for real-time price monitoring."
        ],
    dataset: "https://aikosh.indiaai.gov.in/home/datasets/details/variety_wise_daily_market_prices_of_commodity.html",
    methods: [
                "Data Preprocessing",
                "Exploratory Data Analysis (EDA)",
                "Modeling - Timeseries Modelling, Machine Learning and Deep Learning Models",
                "Evaluation Metrics"
            ],
    milestones: [
            "Project Kickoff & Dataset Familiarization; Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
            "Data Cleaning & Preprocessing;Statistical Analysis",
            "Exploratory Data Analysis (EDA);Visualize trends, seasonality, and market patterns",
            "Feature Engineering & Baseline Mode;Establish naive baseline and choose ML models for price prediction.",
            "Time Series Modeling with XGBoost & LGBM;Train and compare XGBoost and LightGBM on the engineered features;Record performance metrics.",
            "LSTM as a Comparison Model.;Run LSTM on the same dataset and features.;Compare LSTM results against XGBoost and LGBM to understand when deep learning helps and when it doesn't.",
            "Integration & Visualization.;Build an interactive dashboard to visualize model predictions and price trends.",
            "Evaluation & Validation.;Validate all models using MAE, RMSE, MAPE.;Analyse where each model fails and why.;Update dashboard with final improvements.",
            "Deployment & Community Sharing.;Deploy application on cloud.;Finalise data flow diagram and GitHub review.;Documentation, Demo & Write blog;Discussion on further research topics"
          ],
    deliverables:[
            "Project and Github setup;",
            "Scripts for data cleaning and preprocessing;Statistical Analysis notebook",
            "EDA report;Data Flow Diagram and Observations - First Review",
            "Engineered feature set;Naive baseline with recorded metrics",
            "Trained XGBoost and LGBM models.;Performance comparison report",
            "LSTM model trained on the same dataset;Comparison report on model performance;Data Flow Diagram and Observations - Second Review",
            "Interactive dashboard showing forecasts from the best-performing model",
            "Final evaluation report across all models;Analysis of failure cases and model behaviour;Updated dashboard with improvements",
            "App deployed on cloud;Data Flow Diagram and Observations - Final Version;GitHub reviewed and cleaned;Documentation, Demo recording & Blog published"
          ],
    documents_list: " ",
    key_learnings: "Working with real-world, noisy agricultural data - cleaning, preprocessing and building pipelines.;Exploratory Data Analysis and visualisation of time series trends and seasonality.;Feature Engineering.;Time Series Forecasting with ARIMA.;Training and comparing XGBoost and LGBM on the same dataset.;Using LSTM as a comparison model to understand when deep learning adds value over ML models.;Model Evaluation using MAE, RMSE, and MAPE - and understanding why models fail.;Building an interactive dashboard and deploying to cloud.",
    social_engagement: "Provide insights to further students on price trends, volatility, decision-making for procurement and sales. Enhance transparency in agricultural markets., Write a blog post on learnings, datasets, and project outcomes.",
    evaluations: "Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), Mean Absolute Percentage Error (MAPE), R-Squared (Coefficient of Determination), Mean Squared Logarithmic Error (MSLE), Evaluate model stability across time windows.",
    skill_tags: ["Data Cleaning", "EDA & Visualisation", "Feature Engineering", "Timeseries Forecasting", "ARIMA", "XGBoost", "LGBM", "LSTM (comparison)", "Interactive Dashboard", "Cloud Deployment"],
    cohort_card_skill_tags: ["Feature Engineering", "Timeseries Forecasting", "Cloud Deployment"],
    fees: 3999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
    top_content: [
                  "Build a real, end-to-end project from Day 1, not toy exercises",
                  "GitHub-documented work that goes straight on your resume",
                  "Mentored by industry experts throughout",
                  "Continuous learning loop, each cohort ends with open research topics",
                  "Outcome-certified based on what you actually deliver"
                ]
  },
  {
    cohort_id: "startup-funding-rag", //1
    partner_id: "1",
    imageSrc: "/Images/build_rag.jpg",
    tag: "Industry",
    title: "Startup Funding RAG Application",
    short_description: "A RAG-based project that uses LLMs to provide insights on startup fundings information.", // by scraping, processing, and querying real-world data from startup portals.",
    description: "This project aims to develop a Retrieval-Augmented Generation (RAG) application that delivers comprehensive insights into startup funding - including details about investors, funding rounds, sectors, and policies. Learners will gain hands-on experience in collecting both structured and unstructured data from startup portals, performing data cleaning and preprocessing, chunking and embedding the content, storing it efficiently in a vector database, and leveraging Large Language Models (LLMs) to query and generate meaningful insights evaluated with relevant metrices.",
    startDate: "Mar 21, 2026",
    duration: "8 Weeks",
    level: "Beginners / Intermediate",
    goal: ["Train students to build RAG pipelines on real-world startup data.",
        "Create a Q&A application that answers questions about startup funding.",
        "Introduce evaluation methods, API deployment, and frontend integration.",
        "Encourage product thinking by making the tool useful to startup founders and mentors."
        ],
    dataset: "Websites like Startup India, Seedfunds, Meity, VC firm sites, news articles, policy PDFs.",
    methods: ["Web Scraping",
        "Data Cleaning & Preprocessing","Chunking",
        "Embedding", "Vector DB Design and CRUD operations",
        "RAG Pipeline", "Preparing Custom Test Data", "Evaluation"],
    milestones: [
        "Project Kickoff & Data Source Finalization; Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
        "Web Scraping & Initial Dataset;Clean and convert scraped data into structured Markdown",
        "Exploring chunking mechanisms;Design Milvus schema and Indexing strategy",
        "Chunk, embed and store data into Milvus DB",
        "RAG Pipeline (Backend) - retrieval to LLM query answering",
        "RAG Answer Quality Evaluation;Prepare custom test set;Evaluate generated answers using the DeepEval framework - assessing faithfulness, context relevance, answer correctness and custom evaluations",
        "API & Streamlit Frontend;Discuss evaluation observations and incorporate fixes.;Run the complete application on local machine",
        "Deployment of App on cloud infrastructure;Finalise data flow diagram;Documentation, GitHub review & Demo;Write blog;Discussion on further research topics"
    ],
    deliverables:[
        "Project and Github setup;Finalized list of data sources;Scraper prototype",
        "Working scraper code;Cleaned dataset (.md files)",
        "Code for Milvus schema creation and indexes;Data Flow Diagram and Observations - First Review",
        "Code for chunking, embedding and storing data in MilvusDB",
        "Retrieval + LLM query answering pipeline;Data Flow Diagram and Observations - Second Review",
        "Custom test set;DeepEval evaluation report covering faithfulness, context relevance, answer correctness and custom evaluations",
        "Evaluation observations document with fixes applied;API endpoint;Basic Streamlit UI for queries;Application running from local machine",
        "App deployed on cloud;Data Flow Diagram and Observations - Final Version;Cleaned and structured GitHub code submitted for review;Demo recording;Blog published"
    ],
    documents_list: " ",
    key_learnings: "Data engineering (scraping, cleaning).;Handling Vector DB;Preparing data flow diagrams.;RAG Architecture.;Evaluating RAG systems.;Cloud Deployment.;Product thinking.",
    social_engagement: "Share startup funding insights with peer learners & industry people., Write a blog post on learnings, datasets, and project outcomes.",
    evaluations: "Retrieval quality (Precision@k, Recall).; Faithfulness and contexual Matrices.; Latency of queries and API performance.",
    skill_tags: ["Web Scraping", "Data Cleaning", "Chunking & Embedding", "Vector Database (Milvus)", "LangChain / LlamaIndex", "RAG Architecture", "RAG Evaluation (DeepEval)", "Cloud Deployment"],
    cohort_card_skill_tags:["RAG Architecture", "RAG Evaluation", "Cloud Deployment"],
    fees: 3999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
    top_content: [
                  "Build a real, end-to-end project from Day 1, not toy exercises",
                  "GitHub-documented work that goes straight on your resume",
                  "Mentored by industry experts throughout",
                  "Continuous learning loop, each cohort ends with open research topics",
                  "Outcome-certified based on what you actually deliver"
                ]
  },
  {
    cohort_id: "automate-healthcare-claims", //3
    partner_id: "3",
    imageSrc: "/Images/ai_agent.jpg",
    tag: "Industry",
    title: "Automating Medical Insurance Claims Using AI Agents - Industry Collaboration with Sarvatra.ai",
    short_description: "A project to build an AI-driven agent system that automates medical insurance workflows.",
    description: "In this project, learners will design an AI agent system tailored for the medical insurance domain. The system will intelligently read and analyze reports, identify missing or inconsistent information, assign tasks to relevant departments, and reprocess updated data while ensuring compliance with insurer-specific rules. By working with synthetic insurance claims, learners will simulate a real-world workflow automation pipeline safely and efficiently, gaining hands-on experience in AI-driven document processing, rule-based validation, and healthcare process automation.",
    startDate: "Mar 06, 2026",
    duration: "15 Weeks",
    level: "Intermediate",
    goal: [
            "Build multi-agent AI pipeline for medical insurance claim processing.",
            "Automate missing information detection and routing.",
            "Personalize validation for each insurance company’s requirements.",
            "Save time and reduce costs for hospitals and insurance companies.",
            "Train students on AI agents, healthcare NLP, workflow orchestration and evaluations."
        ],
    dataset: "Use Synthea for creating patients, MIMIC-III / MIMIC-IV datasets, ICP/ICD code datasets",
    methods: [
                "NLP Models for report understanding",
                "Information Extraction",
                "Agent Frameworks",
                "Task Routing Logic",
                "Validation",
                "Evaluation",
                "Deployment"
            ],
    milestones: [
                  "Project Kickoff, dataset familiarization;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
                  "NLP basics & preprocessing",
                  "Agent 1 - Extractor",
                  "Agent 2 - Validator",
                  "Agent 3 - Task Assignor (rule-based)",
                  "Agent 4 - Quality Check",
                  "Agent 5 - Generic compliance",
                  "Agent 6 - Insurer-specific compliance",
                  "Multi-agent orchestration (basic integration);Load testing on synthetic batches",
                  "Advanced ML - Understanding ICP code prediction;Setup fine-tuning pipeline and training data preparation",
                  "Fine-tune and evaluate the ICP prediction model;Ablation studies and pipeline refinements",
                  "Error analysis & feedback loop across all agents",
                  "Prototype dashboard / API for claim workflow",
                  "End-to-end integration testing;User acceptance checks;Documentation and GitHub review",
                  "Peer reviews;Cross-team discussions on learnings;Final demo of the complete multi-agent system;Write Blog;Discussion on further research topics"
                ],
    deliverables:[
                  "Insurance company rules mock/real dataset;Introduction to the FHIR Claim resource",
                  "Data contract, data cleaning and entity extraction setup",
                  "Generator setup by defining the JSON;FHIR-aligned JSON output;Data Flow Diagram and Observations - First Review",
                  "FHIR structural checks implemented;ICD-10 CM coding rules applied to flag missing or invalid diagnosis data",
                  "Mappings from shortages to departments;Queue schema keyed by Claim identifiers",
                  "Reprocessing loop implemented;First draft of the Claim Readiness Report;Validation of corrected documents;Data Flow Diagram and Observations - Second Review",
                  "ICD-10 CM documentation and coding conventions enforced;Denial-affecting specificity rules applied",
                  "Supporting info and use codes implemented;Coverage Eligibility Request gate for pre-auth where applicable",
                  "Integrated multi-agent pipeline: shortage → task → validate;Load test results on synthetic batches;Data Flow Diagram and Observations - Third Review",
                  "Training data prepared;Fine-tuning pipeline set up;Initial training run completed",
                  "Fine-tuned ICP prediction model;Ablation study report;Refined pipeline with improvements applied",
                  "Error analysis report;Feedback loop mechanism integrated across agents;Data Flow Diagram and Observations - Fourth Review",
                  "Working prototype dashboard / API for claim workflow",
                  "End-to-end integration test results;Cleaned and reviewed GitHub codebase",
                  "Peer review feedback incorporated;Data Flow Diagram and Observations - Final Version;Final demo recording of the complete multi-agent system;Blog published"
                ],
    documents_list: "",
    key_learnings: "Learn multi-agent AI architecture for real-world workflows.;Apply NLP in healthcare for diagnosis & code prediction.;Understand workflow automation with AI + rules. Agent Orchestration;Gain skills in error handling, iterative validation, compliance checking.;Experience deployment in health-tech context.;Build team collaboration & project documentation skills.",
    social_engagement: "Encourages learners to follow AI ethics guidelines, Builds awareness of how automation can improve efficiency while maintaining trust, safety, and human oversight in sensitive domains like healthcare and insurance. Supports inclusive innovation by preparing learners to design systems that benefit both industry stakeholders and end consumers responsibly. Write a blog post on learnings, datasets, and project outcomes. Share with future cohorts students.",
    evaluations: "Ground-Truth Based Evaluation, Process-Oriented Evaluation, Human-in-the-Loop Evaluation, Simulation-Based Testing",
    skill_tags: ["Multi-Agent Systems", "NLP", "FHIR / Healthcare Standards", "ICD-10 / Medical Coding", "Workflow Automation", "Agent Orchestration", "Rule-Based Validation", "Model Fine-Tuning", "Model Evaluation and Monitoring"],
    cohort_card_skill_tags: ["Multi-Agent Systems", "Agent Orchestration", "Evaluation"],
    fees: 7999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
    top_content: [
                  "Build a real, end-to-end project from Day 1, not toy exercises",
                  "GitHub-documented work that goes straight on your resume",
                  "Mentored by industry experts throughout",
                  "Continuous learning loop, each cohort ends with open research topics",
                  "Outcome-certified based on what you actually deliver"
                ]
  },
  {
    cohort_id: "intraoral-lesion", //4
    partner_id: "None",
    imageSrc: "/Images/intraoral_lesion.png",
    tag: "Applied",
    title: "Intraoral Lesion Detection & Analysis",
    short_description: "Build AI models for dental screening and anomaly detection.",
    description: "The SMART Intraoral Images Dataset comprises annotated mouth images collected to advance AI-driven dental screening and diagnosis. In this project, learners will develop and train computer vision models to detect oral abnormalities, classify conditions, and explain their predictions through interpretable AI techniques. The cohort focuses on research-based development, encouraging students to benchmark their results against published studies, collaborate through peer review, and build deployable prototypes that demonstrate real-world applicability in dental healthcare.",
    startDate: "Mar 06, 2026",
    duration: "12 Weeks",
    level: "Intermediate",
    goal: [
            "Build strong classification and segmentation models on intraoral images.",
            "Apply AI explainability (Grad-CAM, saliency maps) to interpret results.",
            "Compare models against published benchmarks.",
	    "Create a demo app for predictions."
        ],
    dataset: "https://aikosh.indiaai.gov.in/home/datasets/details/smart_intraoral_images_dataset_1.html",
    methods: [
                "Data Preprocessing",
                "Data Augmentation",
                "Feature Extraction / Baseline Models",
                "Deep Learning Models",
                "Advanced Methods like segmentation, localization",
                "Explainability / Interpretability",
                "Deployment / Integration"
            ],
    milestones: [
                  "Project Kickoff and dataset exploration;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
                  "Process data and EDA",
                  "Augmentation; Metadata for augmented images; JSON for augmented images",
                  "Baseline CNN models; Evaluations",
                  "Transfer learning",
                  "Transfer learning continue",
                  "Experiment with Advanced architecture models",
                  "Experiment with Advanced architecture models continue",
                  "Explainability (Grad-CAM, saliency maps)",
                  "Error analysis & evaluations",
                  "Prototype app (Streamlit/FastAPI)",
                  "Peer review, Final demo;Write blog;Discussion on further research topics"
                ],
    deliverables:[
                    "Project and Github setup; Basic statistical reports",
                    "Processing script; EDA report",
                    "Augmentation scripts; Updated EDA reports if any;Data Flow Diagram and Observations - First Review",
                    "First accuracy benchmarks; Evaluations report",
                    "Fine-tuned models",
                    "Results on model performance;Data Flow Diagram and Observations - Second Review",
                    "Experiment result",
                    "Finalised result and observations reports",
                    "Heatmap visualizations;Data Flow Diagram and Observations - Third Review",
                    "Report on what works/doesn’t",
                    "Working demo UI; Final observations report and Data Flow Diagram",
                    "Cross-team feedback, refine pipeline.; Data Flow Diagram and Observations - Final Version;Presentation, reports, blogs"
                ],
    documents_list: " ",
    key_learnings: "Experience real-world medical image AI workflows - from noisy data to deployable applications.;Understand challenges in medical imaging - class imbalance, variable image quality, augmentation.;Segmentation to Extract Region of Interest.;Learn transfer learning & advanced CNN pipelines.;Gain hands-on experience in model explainability (Grad-CAM, saliency) and how that fosters trust in AI.;Learn deployment basics - serving models via APIs.",
    social_engagement: "Create awareness materials (infographics, pamphlets) on the value of AI in oral health. Publish a blog with project summaries, visuals, insights, code. Conduct peer-learning sessions",
    evaluations: "Model performance: Accuracy, Precision, Recall, F1, ROC-AUC. Explainability quality: Do Grad-CAM heatmaps highlight relevant mouth regions consistently?.",
    skill_tags: ["Deep Learning", "Convolutional Neural Networks (CNNs)", "Medical Image Analysis", "Augmentation", "Model Evaluation and Benchmarking", "Transfer Learning"],
    cohort_card_skill_tags: ["Deep Learning", "Model Evaluation", "Transfer Learning"],
    fees: 5599,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
    top_content: [
                  "Build a real, end-to-end project from Day 1, not toy exercises",
                  "GitHub-documented work that goes straight on your resume",
                  "Mentored by industry experts throughout",
                  "Continuous learning loop, each cohort ends with open research topics",
                  "Outcome-certified based on what you actually deliver"
                ]
  },
  {
    cohort_id: "data-science-streams", //5
    partner_id: "None",
    imageSrc: "/Images/data_science_streams.png",
    tag: "Webinar",
    title: "Data Science Streams",
    short_description: "Exploring the diverse streams of Data Science, the essential skills required for each, and the career opportunities they open up.",
    description: "Free webinar to gain a clear understanding of the different streams within Data Science - including Data Analytics, Machine Learning, Artificial Intelligence, Data Engineering, and Business Intelligence. Learn about the core skill sets, tools, and technologies needed in each stream, along with insights into typical job roles, growth trajectories, and real-world applications. This session is ideal for students and professionals looking to identify their ideal career path in the rapidly evolving world of Data Science.",
    startDate: "Mar 15, 2026",
    duration: "2 hours",
    level: "Beginners / Intermediate",
    goal: [
            "To introduce participants to the various streams within Data Science and their unique focus areas.",
            "To explain the key technical and analytical skills required for each stream.",
            "To explain the roles and growth trajectory of each stream."
        ],
    dataset: " ",
    methods: [],
    milestones: [],
    deliverables:[],
    documents_list: " ",
    key_learnings: "Understand the major streams of Data Science — Data Analytics, Machine Learning, AI, Data Engineering, and Business Intelligence.;Identify the core skills, tools, and technologies required for each stream.;Learn how to build a personalized learning roadmap for your desired career path.;Explore real-world applications and use cases driving demand in each domain.;Discover how to transition or upskill effectively to stay relevant in the data-driven economy.",
    social_engagement: "Live Q&A session with Data Science mentors and industry experts., Networking opportunity with like-minded learners and professionals., Community group access for continued discussions, learning resources, and project collaborations.",
    evaluations: "",
    skill_tags: ["Data Science Streams"],
    cohort_card_skill_tags: ["Data Science Streams"],
    fees: 0.00,
    current_version: "v1.0",
    is_approved: false,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
    top_content: []
  },
  {
    cohort_id: "collect-process-rag-data",
    partner_id: "None",
    imageSrc: "/Images/collect_process_data.png",
    tag: "Foundational",
    title: "Collect and Process Data for RAG Systems",
    short_description: "Data pipeline for GenAI: Scraping, cleaning, chunking, embedding and storing data", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
    description: "Data preparation for AI systems is the most critical part of AI systems. Real GenAI doesn’t work on magic prompts, it runs on clean knowledge bases, smart chunking, strong embeddings, and reliable retrieval pipelines. In this 3-week cohort, students will build a complete ingestion pipeline from scratch: scraping structured documentation, cleaning messy HTML into usable Markdown, experimenting with advanced chunking strategies, embedding data using modern models, and storing everything in Milvus.",
    startDate: "Mar 16, 2026",
    duration: "3 Weeks",
    level: "Beginners",
    goal: [
            "Train students in the core engineering layer of GenAI systems.",
            "A professional engineering understanding of web → clean text → chunks → embeddings → vector DB pipeline"
        ],
    dataset: "Websites like Startup India, Seedfunds, Meity, VC firm sites, news articles, policy PDFs",
    methods: [],
    milestones: [
            "Project Kickoff, converting web documents into markdown;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
            "Chunking & Embedding strategies + visual comparisons",
            "Store data into pre designed milvus vector storage; Search queries"
          ],
    deliverables:[
            "Project and Github setup; Code for collecting data and converting it into markdown.",
            "Code for different chunking mechanisms;Data Flow Diagram and Observations - First Review",
            "Chunks retrieved for various questions; Code checked in GitHub;Data Flow Diagram and Observations - Final Version",
          ],
    documents_list: " ",
    key_learnings: "Build recursive web scrapers for documentation and knowledge portals.;Convert messy web HTML to structured Markdown reliably.;Understand real differences between chunking types.;Choose optimal chunk sizes, overlaps, and strategies.;Store and retrieve data into Milvus schema.",
    social_engagement: " ",
    evaluations: "Engineering Quality: Clean code, error handling, modular structure, scalability., Retrieval Relevance: Do semantic queries return meaningful and useful chunks?, System Thinking & Justification: Can the student explain their choices?, Documentation: Clear README, architecture explanation, pipeline clarity, reproducibility.",
    skill_tags: ["Data Cleaning", "Chunking", "Embedding", "Vector Database"],
    cohort_card_skill_tags: ["Data Cleaning", "Chunking/Embedding", "Vector Database"],
    fees: 299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-01-10T00:00:00Z",
    top_content: [
                  "Build a structured component of the full cohort while experiencing how cohort-based learning works",
                  "GitHub-documented work",
                  "Mentored by industry experts throughout",
                  "Progress into the full cohort to design and implement a complete end-to-end system",
                ]
  },
  {
    cohort_id: "explore-vision-dataset",
    partner_id: "None",
    imageSrc: "/Images/explore_vision_dataset.png",
    tag: "Foundational",
    title: "Explore Vision Dataset",
    short_description: "Build image dataset through EDA, augmentation, and introduce segmentation to extract region of interest.", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
    description: "This cohort focuses on the real engineering of image datasets. Collecting and cleaning images, to performing deep visual EDA, designing augmentations, and understand basics of segmentation. Learners will work hands-on with intraoral medical image datasets, ensuring real-world relevance. By the end, they'll convert raw images into a structured, validated dataset with documentation and visual insights.",
    startDate: "Mar 18, 2026",
    duration: "4 Weeks",
    level: "Beginners",
    goal: [
            "Train students on how to load and analyse medical data.",
            "Augment medical images and understand the challenges of augmenting medical images and generating respective metadata.",
            "Segmentation introduction"
        ],
    dataset: "~1850 intraoral images from 235 patients aikosh.indiaai.gov.in",
    methods: [],
    milestones: [
            "Project Kickoff, explore data; GitHub setup; Statistical Analysis of data;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
            "Exploratory Data Analysis",
            "Augmentation",
            "Introducing Segmentation"
          ],
    deliverables:[
            "GitHub setup; Statistical anlaysis notebook with univariate and bivariate analysis",
            "Visual EDA Notebook;Plots for class distributions, heat maps;Flow Diagram and Observations - First Review",
            "Augmentation pipeline, before and after visualization; Code for augmentation, metadata and json file generation",
            "Segmentation notebook; Code checked in GitHub; Flow Diagram and Observations - Final Version"
          ],
    documents_list: "",
    key_learnings: "Perform Statistical analysis of data.;Exploratory data analysis.;Augmentation & figure out the challenges of Augmenting Medical Images.;Understand basics of segmentations to extract region of interest.",
    social_engagement: "",
    evaluations: "Dataset Quality: Clean, consistent, structured, medically usable. Visual EDA Depth: Meaningful insights + clarity of analysis. Engineering Skill: Loader performance, augmentation design, coding practices",
    skill_tags: ["Statistical Analysis", "EDA", "Augmentation"],
    cohort_card_skill_tags: ["Statistical Analysis", "EDA", "Augmentation"],
    fees: 299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-01-10T00:00:00Z",
    top_content: [
                  "Build a structured component of the full cohort while experiencing how cohort-based learning works",
                  "GitHub-documented work",
                  "Mentored by industry experts throughout",
                  "Progress into the full cohort to design and implement a complete end-to-end system",
                ]
  },
  {
    cohort_id: "timeseries-forcasting",
    partner_id: "None",
    imageSrc: "/Images/timeseries_prediction.png",
    tag: "Foundational",
    title: "Timeseries: Predicting Agricultural prices with ML",
    short_description: "Forecast future prices using real-world time series techniques, feature engineering, and meaningful evaluation", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
    description: "This cohort teaches how real forecasting systems are engineered step by step. Students begin with understanding how time series works, splitting past vs future correctly, and establishing a naive baseline. They then move to feature engineering with lag features and train models like Linear Regression and Random Forest. The focus is on real evaluation, calculating RMSE/MAE, plotting Actual vs Predicted curves, and understanding why models behave the way they do using real Indian commodity price data.",
    startDate: "Mar 20, 2026",
    duration: "4 Weeks",
    level: "Beginners",
    goal: [
            "Help students practically understand how forecasting works in the real world.",
            "Build ML-based time series models, evaluate predictions correctly.", 
            "Develop intuition about when and why models fail."
        ],
    dataset: "Wise Daily Market Prices of Agricultural Commodities https://aikosh.indiaai.gov.in/home/datasets/details/variety_wise_daily_market_prices_of_commodity.html",
    methods: [],
    milestones: [
            "Project Kickoff; Statistical models;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
            "Baseline model; Lag features",
            "Predictions using Linear Regression and Random Forest.",
            "Evaluation."
          ],
    deliverables:[
            "Project and Github setup; Code for statistical models",
            "Code for naive baseline model and lag features; Baseline metric recorded;Flow Diagram and Observations - First Review",
            "Code for linear regression from scratch and random forest training; Record metrics",
            "Code checked in github;Flow Diagram and Observations - Final Version"
          ],
    documents_list: " ",
    key_learnings: "Understand time series structure.;Build a baseline “naive” model.;Engineer Lag Features.;Train Linear Regression/Random Forest forecasting models.;Evaluate model performance.",
    social_engagement: " ",
    evaluations: "Model Engineering Quality: Pipeline correctness, implementation quality., Evaluation Depth: Metrics + meaningful reasoning., Visualization & Storytelling: Clear charts + interpretation., Documentation: Clear README, documentation, reproducibility.",
    skill_tags: ["Data Cleaning", "Feature Enineering", "Model Training", "Evaluation"],
    cohort_card_skill_tags: ["Feature Enineering", "Model Training", "Evaluation"],
    fees: 299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-01-10T00:00:00Z",
    top_content: [
                  "Build a structured component of the full cohort while experiencing how cohort-based learning works",
                  "GitHub-documented work",
                  "Mentored by industry experts throughout",
                  "Progress into the full cohort to design and implement a complete end-to-end system",
                ]
  },
];


// Collect and Process Data For RAG Systems - https://forms.gle/MSju23hBmYpBEzjF7
// Collect and Explore Medical Data - https://forms.gle/j8rq9ZZKg9ixQSGw9
// Exploring Vision Datasets - https://forms.gle/BL3f3ubZFDac7ED47
// Timeseries: Predicting Agricultural prices with ML - https://forms.gle/UYvMhqoZkLaDKohj7