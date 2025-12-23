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
  fees: number;
  current_version: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
};

export const cohortsData: Cohort[] = [
  {
    cohort_id: "2",
    partner_id: "None",
    imageSrc: "/Images/forecasting_and_timseries.jpg",
    tag: "Foundational",
    title: "Predicting Agricultural Commodity Prices",
    short_description: "A predictive analytics project that forecasts next week’s commodity prices.", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
    description: "This project leverages daily commodity price data - including wholesale maximum, minimum, and modal prices - to analyze market trends and predict future price movements for key crops using time series forecasting models. By identifying factors that influence price fluctuations and visualizing insights through an interactive, real-time dashboard, the system empowers farmers and stakeholders with data-driven alerts and recommendations, helping them choose the best time and market to sell their produce, thereby minimizing losses due to price volatility",
    startDate: "Dec 24, 2025",
    duration: "8 Weeks",
    goal: [
            "Predict next week modal prices for key crops and send community alerts to help farmers choose sale timing and market, reducing vulnerability to price volatility. The project aims to:",
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
            "Project Kickoff & Dataset Familiarization.;Introduction of the dataset and its sources.;Discuss project goals and AI applications.",
            "Data Cleaning & Preprocessing.;Prepare the dataset for analysis and modeling.",
            "Exploratory Data Analysis (EDA).;Visualize trends and understand patterns.",
            "Model Selection & Baseline.;Choose AI/ML models appropriate for price prediction.",
            "Time Series & Advanced AI Modeling.;Apply time series forecasting and deep learning.",
            "Integration & Visualization.;Create a user-friendly interface to visualize predictions.",
            "Evaluation & Validation.;Validate model accuracy and usability.",
            "Presentation And Sharing Experience Over Community.;Share results with community in form of Blog."
          ],
    deliverables:[
            "Project and Github setup.; Dataset summary report.; Data dictionary with column descriptions.",
            "Cleaned dataset ready for analysis.;Preprocessing pipeline script.",
            "EDA report with charts and insights.",
            "Initial Draft of Data/Process Flow Diagram.;Baseline model with performance metrics.;Github for review.",
            "Time series forecast models.;Performance comparison table.",
            "Interactive dashboard showing forecasts.",
            "Evaluation report.;Updated dashboard with improvements.",
            "Deployment on cloud.;Finish the data flow diagram.;Finish github review.;Documentation & Demo."
          ],
    documents_list: " ",
    key_learnings: "Working with Real-World, Noisy Data, Building Pipeline, visualization, Time Series Analysis & Forecasting, Basic to Advanced AI modeling, Feature Engineering – Derived, seasonal and geographic or market-level features., Model Evaluation",
    social_engagement: "Provide insights to further students on price trends, volatility, decision-making for procurement and sales. Enhance transparency in agricultural markets., Write a blog post on learnings, datasets, and project outcomes.",
    evaluations: "Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), Mean Absolute Percentage Error (MAPE), R-Squared (Coefficient of Determination), Mean Squared Logarithmic Error (MSLE), Evaluate model stability across time windows.",
    skill_tags: ["Python", "Data Cleaning", "Timeseries", "ARIMA", "XGBoost", "LGBM", "LSTM", "Cloud Deployments"],
    fees: 3999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z"
  },
  {
    cohort_id: "1",
    partner_id: "1",
    imageSrc: "/Images/build_rag.jpg",
    tag: "Industry",
    title: "Startup Funding RAG Application",
    short_description: "A RAG-based project that uses LLMs to provide insights on startup fundings information.", // by scraping, processing, and querying real-world data from startup portals.",
    description: "This project aims to develop a Retrieval-Augmented Generation (RAG) application that delivers comprehensive insights into startup funding — including details about investors, funding rounds, sectors, and policies. Students will gain hands-on experience in collecting both structured and unstructured data from startup portals, performing data cleaning and preprocessing, segmenting and embedding the content, storing it efficiently in a vector database, and leveraging Large Language Models (LLMs) to query and generate meaningful insights.",
    startDate: "Coming Soon",
    duration: "8 Weeks",
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
        "Project Kickoff & Data Source Finalization.; 1-2 Session on Transformer Architecture.",
        "Web Scraping & Initial Dataset.; Clean and convert data into markdown.; 1 Session on Transformer Architecture continue.",
        "Exploring chunking mechanisms.; Design Milvus schema and Indexing.",
        "Chunk, embed and store data into Milvus DB.; Define Flow Diagram.",
        "RAG Pipeline (Backend).",
        "Prepare custom test set.; Evaluate generated answers.",
        "Discuss all the observations after evaluations.;API & Streamlit Frontend.;Run the whole functionality on local machine.",
        "Deployment of App on cloud infrastructure.; Finish the data flow diagram.; Documentation & Demo."
    ],
    deliverables:[
        "Project and Github setup.; Finalized list of data sources.; Scraper prototype.",
        "Working code for scraper logic.; Cleaned dataset (.md files).",
        "Code for creating Milvus schema and indexes.",
        "Code for chunking, embedding and storing data in MilvusDB.; Prepare a data flow and design diagram.",
        "Retrieval + LLM query answering pipeline.",
        "Code for evaluating answers for different metrices using deepeval framework for custom test set.",
        "Document containing all evaluation observations.; API endpoint, basic Streamlit UI for queries.; Application running from local machine.",
        "App deployed over cloud.; Project documents, submit cleaned and structured github code for review, demo, publish blog."
    ],
    documents_list: " ",
    key_learnings: "Core AI (RAG); Data engineering (scraping, cleaning); Handling Vector DB; Preparing data flow diagrams.; Evaluating RAG systems; MLOps (deployment); Product thinking (frontend + social impact)",
    social_engagement: "Share startup funding insights with students & industry people., Write a blog post on learnings, datasets, and project outcomes.",
    evaluations: "Retrieval quality (Precision@k, Recall).; Faithfulness and contexual Matrices.; Latency of queries and API performance.",
    skill_tags: ["Python", "Data Cleaning", "Lang chain/Llama Index Frameworks", "Transformer Architecture", "Chunking & Embedding", "RAG Architecture", "Cloud Deployments"],
    fees: 4499,
    current_version: "v1.0",
    is_approved: false,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z"
  },
  {
    cohort_id: "3",
    partner_id: "3",
    imageSrc: "/Images/ai_agent.jpg",
    tag: "Industry",
    title: "Multi-Agent Pipeline for Healthcare Claims - Industry Collaboration with Sarvatra.ai",
    short_description: "A project to build an AI-driven agent system that automates medical insurance workflows.",
    description: "In this project, students will design an AI agent system tailored for the medical insurance domain. The system will intelligently read and analyze reports, identify missing or inconsistent information, assign tasks to relevant departments, and reprocess updated data while ensuring compliance with insurer-specific rules. By working with synthetic insurance claims, students will simulate a real-world workflow automation pipeline safely and efficiently, gaining hands-on experience in AI-driven document processing, rule-based validation, and healthcare process automation.",
    startDate: "Dec 27, 2025",
    duration: "12 Weeks",
    goal: [
            "Build multi-agent AI pipeline for insurance claim processing.",
            "Automate missing information detection and routing.",
            "Personalize validation for each insurance company’s requirements.",
            "Save time and reduce costs for hospitals and insurance companies.",
            "Train students on AI agents + healthcare NLP + workflow orchestration."
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
                  "Project Kickoff, dataset familiarization",
                  "NLP basics & preprocessing.",
                  "Agent 1 Extractor.",
                  "Agent 2 Validator.",
                  "Agent 3 Task Assignor (rule-based).",
                  "Agent 4 Quality Check.",
                  "Agent 5 Generic compliance.",
                  "Agent 6 Insurer-specific compliance.",
                  "Multi-agent orchestration (basic integration).",
                  "Advanced ML - ICP code prediction.",
                  "Error analysis & feedback loop.;Prototype dashboard/API.",
                  "Peer reviews, documentation, final demo."
                ],
    deliverables:[
                  "Insurance company rules mock/real dataset.;Introduction to the FHIR Claim resource.",
                  "Data contract, data cleaning and entity extraction setup.",
                  "Generator setup by defining the JSON.;Delivering FHIR aligned JSON output",
                  "Implementing FHIR structural checks and essential ICD 10 CM coding rules to flag missing or invalid diagnosis data.",
                  "Mappings from shortages to departments and a queue schema keyed by Claim identifiers.",
                  "Reprocessing loop, and first draft of the “Claim Readiness Report” mapped to Claim.;Validation of corrected documents.",
                  "Enforce ICD 10 CM documentation and coding conventions that affect denials and specificity.",
                  "Supporting info and use codes, including a Coverage Eligibility Request gate for pre-auth where applicable.",
                  "Pipeline: shortage → task → validate.;Load tests on synthetic batches.",
                  "Fine-tuned model for ICP prediction.",
                  "Ablation studies, pipeline refinements.;User interface for claim workflow.",
                  "Cross discussions about the learning and review of code.;Demo of end to end working of the multi agent health insurance claim."
                ],
    documents_list: "",
    key_learnings: "Learn multi-agent AI architecture for real-world workflows. Apply NLP in healthcare for diagnosis & code prediction. Understand workflow automation with AI + rules. Gain skills in error handling, iterative validation, compliance checking. Experience deployment in health-tech context. Build team collaboration & project documentation skills.",
    social_engagement: "Encourages learners to follow AI ethics guidelines, Builds awareness of how automation can improve efficiency while maintaining trust, safety, and human oversight in sensitive domains like healthcare and insurance. Supports inclusive innovation by preparing learners to design systems that benefit both industry stakeholders and end consumers responsibly. Write a blog post on learnings, datasets, and project outcomes. Share with future cohorts students.",
    evaluations: "Ground-Truth Based Evaluation, Process-Oriented Evaluation, Human-in-the-Loop Evaluation, Simulation-Based Testing",
    skill_tags: ["Multi-Agent Systems", "RAG", "GenAI", "NLP", "Workflow Automation", "Document Intelligence", "Python", "Model Evaluation and Monitoring"],
    fees: 9999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z"
  },
  {
    cohort_id: "4",
    partner_id: "None",
    imageSrc: "/Images/oral_cancer_project_picture.png",
    tag: "Foundational",
    title: "Oral Lesion Screening",
    short_description: "Build AI models for dental screening and anomaly detection.",
    description: "The SMART Intraoral Images Dataset comprises annotated mouth images collected to advance AI-driven dental screening and diagnosis. In this project, students will develop and train computer vision models to detect oral abnormalities, classify conditions, and explain their predictions through interpretable AI techniques. The cohort focuses on research-based development, encouraging students to benchmark their results against published studies, collaborate through peer review, and build deployable prototypes that demonstrate real-world applicability in dental healthcare.",
    startDate: "Jan 02, 2026",
    duration: "12 Weeks",
    goal: [
            "Build strong classification/segmentation models on intraoral images.",
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
                  "Project Kickoff and dataset exploration.",
                  "EDA & visualizations.",
                  "Preprocessing & augmentation.;EDA & Visualizations.",
                  "Baseline CNN models.",
                  "Transfer learning.",
                  "Transfer learning continue.",
                  "Experiment with Advanced architecture models.",
                  "Experiment with Advanced architecture models continue.",
                  "Explainability (Grad-CAM, saliency maps).",
                  "Error analysis & evaluations.",
                  "Prototype app (Streamlit/FastAPI).",
                  "Peer review, Final demo"
                ],
    deliverables:[
                    "Project and Github setup.;Basic statistical reports.",
                    "EDA report, cluster plots.",
                    "Clean dataset, augmentation scripts.;Updated EDA reports.",
                    "First accuracy benchmarks.",
                    "Fine-tuned models.",
                    "Results.",
                    "Experiments results reports.",
                    "Finalised results reports.",
                    "Heatmap visualizations.",
                    "Report on what works/doesn’t.",
                    "Working demo UI.",
                    "Cross-team feedback, refine pipeline.;Presentation, report, blogs.;Discussion on further research topics."
                ],
    documents_list: " ",
    key_learnings: "Experience real-world medical image AI workflows - from noisy data to deployable applications. Understand challenges in medical imaging - class imbalance, variable image quality. Learn transfer learning & advanced CNN pipelines. Gain hands-on experience in model explainability (Grad-CAM, saliency) and how that fosters trust in AI. Learn deployment basics — serving models via APIs.",
    social_engagement: "Create awareness materials (infographics, pamphlets) on the value of AI in oral health. Publish a blog with project summaries, visuals, insights, code. Conduct peer-learning sessions",
    evaluations: "Model performance: Accuracy, Precision, Recall, F1, ROC-AUC. Explainability quality: Do Grad-CAM heatmaps highlight relevant mouth regions consistently?.",
    skill_tags: ["Deep Learning", "Convolutional Neural Networks (CNNs)", "Medical Image Analysis", "Data Preprocessing and Augmentation", "Model Evaluation and Benchmarking", "Python", "TensorFlow / PyTorch", "Transfer Learning"],
    fees: 6999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z"
  },
  {
    cohort_id: "5",
    partner_id: "None",
    imageSrc: "/Images/data_science_streams.png",
    tag: "Webinar",
    title: "Data Science Streams",
    short_description: "Exploring the diverse streams of Data Science, the essential skills required for each, and the career opportunities they open up.",
    description: "Free webinar to gain a clear understanding of the different streams within Data Science - including Data Analytics, Machine Learning, Artificial Intelligence, Data Engineering, and Business Intelligence. Learn about the core skill sets, tools, and technologies needed in each stream, along with insights into typical job roles, growth trajectories, and real-world applications. This session is ideal for students and professionals looking to identify their ideal career path in the rapidly evolving world of Data Science.",
    startDate: "Coming Soon",
    duration: "2 hours",
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
    key_learnings: "Understand the major streams of Data Science — Data Analytics, Machine Learning, AI, Data Engineering, and Business Intelligence., Identify the core skills, tools, and technologies required for each stream., Learn how to build a personalized learning roadmap for your desired career path., Explore real-world applications and use cases driving demand in each domain., Discover how to transition or upskill effectively to stay relevant in the data-driven economy.",
    social_engagement: "Live Q&A session with Data Science mentors and industry experts., Networking opportunity with like-minded learners and professionals., Community group access for continued discussions, learning resources, and project collaborations.",
    evaluations: "",
    skill_tags: ["Data Science"],
    fees: 0.00,
    current_version: "v1.0",
    is_approved: false,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z"
  },
];
