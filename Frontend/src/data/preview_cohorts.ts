// src/data/preview_cohorts.ts
import type { ProgramBase } from "./program_base";

export type PreviewCohort = ProgramBase & {
  preview_cohort_id: string;
  partner_id: string;
};

export const previewCohortData: PreviewCohort[] = [
  {
    preview_cohort_id: "process-rag-data",
    partner_id: "None",
    imageSrc: "/Images/collect_process_data.png",
    program_type: "Preview-Cohort",
    title: "Process Data for RAG Systems",
    short_description: "Learn how to chunk and embed data for modern RAG systems",
    description: (
      "A 3-week preview cohort focused on the data engineering layer of modern RAG systems. \
      Students learn chunking strategies, embeddings, through hands-on implementation and experimentation."
    ),
    startDate: "July 15, 2026",
    duration: "3 Weeks",
    level: "Beginners / Intermediate",
    goal:
    [
      "Understand the complete data ingestion workflow for RAG systems",
      "Experiment with chunking and embedding strategies",
      "Understand how advanced RAG and GenAI cohorts are executed"
    ],
    prerequisites:
    [
      "Basic understanding of Generative AI",
      "Familiarity with Python programming fundamentals",
      "Willingness to experiment, debug, and document observations"
    ],
    dataset: "Websites like Startup India, Seedfunds, Meity, VC firm sites, news articles, policy PDFs",
    milestones:
    {
      "week-1 RAG Frameworks":
      [
        "Problem understanding",
        "Github Setup",
        "Understand data",
        "Understand Llama-index and Langchain frameworks",
      ],
      "week2 - Chunking Strategies":
      [
        "Understand concepts of chunking",
        "Chunking strategies - Fixed, semantic, and recursive chunking",
      ],
      "week3 - Embedding Workflow":
      [
        "Embedding models and vector representations",
        "Comparing chunking and embedding outputs",
        "Data Flow Diagram"
      ],
    },
    deliverables:
    {
      "week-1 RAG Frameworks":
      [
        "Setup Document",
        "Notebook for accessing data"
      ],
      "week2 - Chunking Strategies":
      [
        "Chunking experimentation notebook",
      ],
      "week3 - Embedding Workflow":
      [
        "Embedding workflow implementation",
        "Chunk comparison observations report",
        "Data flow diagram"
      ]    
    },
    documents_list:
    [
      "Workflow and Data Flow Diagrams",
      "Chunking and Embedding Observation Report",
      "GitHub Repository Link",
    ],
    key_learnings:
    [
      "Understand how data pipelines power modern RAG systems",
      "Build chunking and embeddings pipeline",
      "Understand advanced RAG and AI engineering"
    ],
    social_engagement: "Students are encouraged to share chunking experiments, retrieval visualizations, \
    workflow learnings, and GitHub progress. Selected projects and observations may be featured on \
    v18hub platforms with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of chunking and embedding strategies",
      "Ability to experiment and document observations",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "RAG",
      "Chunking",
      "Embeddings",
      "Llamaindex/langchain"
    ],
    program_card_skill_tags:
    [
      "RAG",
      "Chunking",
      "Embeddings"
    ],
    fees: 299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-01-10T00:00:00Z",
  },
  {
    preview_cohort_id: "explore-vision-dataset",
    partner_id: "None",
    imageSrc: "/Images/explore_vision_dataset.png",
    program_type: "Preview-Cohort",
    title: "Explore Vision Datasets for Medical AI",
    short_description: "Learn how to analyse, augment, and prepare medical image datasets for AI workflows.",
    description: "A 3-week preview cohort focused on the engineering and understanding of medical image datasets. \
    Students learn dataset analysis, visual EDA, augmentation workflows through hands-on development.",
    startDate: "July 15, 2026",
    duration: "3 Weeks",
    level: "Beginners/Intermediate",
    goal:
    [
      "Understand how medical image datasets are analysed and prepared",
      "Learn exploratory data analysis for vision datasets",
      "Build augmentation pipelines and metadata workflows",
      "Understand how Healthcare AI cohorts are executed"
    ],
    prerequisites:
    [
      "Basic understanding of Python and Deep Learning concepts",
      "Familiarity with image processing basics",
      "Basic understanding of PyTorch or TensorFlow workflows",
      "Willingness to document observations and iterative experiments"
    ],
    dataset: "Smart II and Smart OM Datasets",
    milestones:
    {
      "week1-Dataset Exploration and Foundations": 
      [
        "Introduction to medical imaging datasets",
        "Project setup and GitHub workflows",
        "Understanding dataset structure and annotations",
        "Statistical analysis and dataset observations"
      ],
      "week2-Visual Exploratory Data Analysis":
      [
        "Exploratory Data Analysis (EDA) for images",
        "Class distribution and imbalance analysis",
        "Visual pattern understanding",
        "Heatmaps and dataset visualizations"
      ],
      "week3-Augmentation and Data Preparation":
      [
        "Medical image augmentation workflows",
        "Challenges in augmenting healthcare images",
        "Generating metadata and JSON annotations",
        "Before vs after augmentation comparisons",
        "Experimentation with augmentation"
      ]
    },
    deliverables:
    {
      "week1-Dataset Exploration and Foundations":
      [
        "Project setup and GitHub repository",
        "Dataset statistical analysis notebook",
        "Initial workflow and data flow diagram",
      ],
      "week2-Visual Exploratory Data Analysis": [
        "Visual EDA notebook",
        "Class distribution and visualization report",
        "Heatmaps and image analysis plots",
      ],
      "week3-Augmentation":
      [
        "Image augmentation pipeline",
        "Metadata and JSON generation scripts",
        "Before and after augmentation visualizations",
      ],
    },
    documents_list:
    [
      "Dataset Analysis Report",
      "Visual EDA Report",
      "Augmentation Observation Report",
      "Workflow and Data Flow Diagrams",
      "GitHub Repository Link"
    ],
    key_learnings:
    [
      "Understand how real-world medical image datasets are prepared",
      "Learn visual EDA and dataset quality analysis workflows",
      "Build augmentation and metadata generation pipelines",
      "Understand preprocessing challenges in healthcare imaging",
    ],
    social_engagement:"Students are encouraged to share dataset visualizations, augmentation comparisons, \
    EDA findings, and workflow learnings. Selected visualizations and reports may be featured on v18hub platforms \
    with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of medical imaging datasets",
      "Quality of statistical and visual analysis",
      "Correct implementation of augmentation workflows",
      "Understanding of metadata and JSON generation",
      "Documentation quality and workflow observations",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "Medical Imaging",
      "Image Processing",
      "Visual EDA",
      "Image Augmentation"
    ],
    program_card_skill_tags:
    [
      "Medical Imaging",
      "Visual EDA",
      "Image Augmentation"
    ],
    fees: 299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-01-10T00:00:00Z",
    updated_at: "2026-01-10T00:00:00Z",
  },
//   {
//     preview_cohort_id: "timeseries-forcasting",
//     partner_id: "None",
//     imageSrc: "/Images/timeseries_prediction.png",
//     tag: "Preview-Cohort",
//     title: "Timeseries: Predicting Agricultural prices with ML",
//     short_description: "Analyse timeseries data, feature engineering and predicting prices using basic ML models", // and provides farmers with timely alerts to optimize their market decisions and reduce risks from price volatility.",
//     description: "This cohort teaches how real forecasting systems are engineered step by step. Students begin with understanding how time series works, splitting past vs future correctly, and establishing a naive baseline. They then move to feature engineering with lag features and train models like Linear Regression and Random Forest. The focus is on real evaluation, calculating RMSE/MAE, plotting Actual vs Predicted curves, and understanding why models behave the way they do using real Indian commodity price data.",
//     startDate: "May 15, 2026",
//     duration: "4 Weeks",
//     level: "Beginners",
//     goal: [
//             "Help students practically understand how forecasting works in the real world.",
//             "Build ML-based time series models, evaluate predictions correctly.", 
//             "Develop intuition about when and why models fail."
//         ],
//     dataset: "Wise Daily Market Prices of Agricultural Commodities https://aikosh.indiaai.gov.in/home/datasets/details/variety_wise_daily_market_prices_of_commodity.html",
//     methods: [],
//     milestones: [
//             "Project Kickoff; Statistical models;Activities across the cohort:;Associated research papers discussion;Document Obervations; Data Flow Diagram",
//             "Baseline model; Lag features",
//             "Predictions using Linear Regression and Random Forest.",
//             "Evaluation."
//           ],
//     deliverables:[
//             "Project and Github setup; Code for statistical models",
//             "Code for naive baseline model and lag features; Baseline metric recorded;Flow Diagram and Observations - First Review",
//             "Code for linear regression from scratch and random forest training; Record metrics",
//             "Code checked in github;Flow Diagram and Observations - Final Version"
//           ],
//     documents_list: " ",
//     key_learnings: "Understand time series structure.;Build a baseline “naive” model.;Engineer Lag Features.;Train Linear Regression/Random Forest forecasting models.;Evaluate model performance.",
//     social_engagement: " ",
//     evaluations: "Model Engineering Quality: Pipeline correctness, implementation quality., Evaluation Depth: Metrics + meaningful reasoning., Visualization & Storytelling: Clear charts + interpretation., Documentation: Clear README, documentation, reproducibility.",
//     skill_tags: ["Data Cleaning", "Feature Enineering", "Model Training", "Evaluation"],
//     cohort_card_skill_tags: ["Feature Enineering", "Model Training", "Evaluation"],
//     fees: 299,
//     current_version: "v1.0",
//     is_approved: true,
//     created_at: "2026-01-10T00:00:00Z",
//     updated_at: "2026-01-10T00:00:00Z",
//     top_content: [
//                   "Build a structured component of the full cohort while experiencing how cohort-based learning works",
//                   "GitHub-documented work",
//                   "Mentored by industry experts throughout",
//                   "Progress into the full cohort to design and implement a complete end-to-end system",
//                 ]
//   },
];

const seenIds = new Set<string>();
export const approvedPreviewCohorts: PreviewCohort[] = previewCohortData.filter((p) => {
  if (!p.is_approved || seenIds.has(p.preview_cohort_id)) return false;
  seenIds.add(p.preview_cohort_id);
  return true;
});
