// src/data/bootcamps.ts
import type { ProgramBase } from "./program_base";

export type Bootcamp = ProgramBase & {
  bootcamp_id: string;
  partner_id: string;
};

export const bootcampData: Bootcamp[] = [
  {
    bootcamp_id: "ml_basics_bootcamp",
    partner_id: "None",
    imageSrc: "/Images/machine_learning_fundamentals.png",
    program_type: "bootcamp",
    title: "Machine Learning With CIBIL Score Data",
    short_description: "Learn machine learning fundamentals by building real-world project with mentor guidance and industry-style workflows.",
    description: "This intensive bootcamp introduces learners to core machine learning concepts \
        through practical implementation. Students learn how to prepare data, train models, evaluate performance, \
        and build end-to-end ML projects while understanding the reasoning \
        behind each step. They learn, collaborate, experiment and present using storytelling skills.",
    startDate: "Aug 11, 2026",
    duration: "4 Week",
    level: "Beginners",
    goal:
    [
      "Build strong foundations in Machine Learning concepts and workflows",
      "Understand how models learn patterns from data",
      "Learn data preprocessing, feature engineering, and optimization techniques",
      "Work with regression, classification, clustering, and ensemble models",
      "Develop model evaluation",
      "Build confidence in solving real-world ML problems using industry-style workflows"
    ],
    prerequisites: 
    [
      "Basic Python programming knowledge",
      "Understanding of functions, loops, and data structures",
      "Familiarity with Pandas and NumPy basics",
      "Willingness to experiment, document observations, and learn through hands-on workflows"
    ],
    dataset: "https://www.kaggle.com/datasets/deepak915/bank-customer-payment-behavior",
    milestones:
    {
      "week1-ML Fundamentals and Core Concepts":
      [
        "Introduction to Machine Learning",
        "Supervised vs Unsupervised Learning",
        "Linear and Logistic Regression",
        "Neural Networks and activation intuition",
        "Loss functions and model learning",
        "Basic ML workflow and predictions"
      ],
      "week2-Data Preparation and Feature Engineering":
      [
        "Exploratory Data Analysis (EDA)",
        "Data visualization and preprocessing",
        "Handling missing values and outliers",
        "Feature engineering and lag features",
        "Encoding, scaling, and dimensionality reduction",
        "Optimization basics and gradient intuition"
      ],
      "week3-Classical ML Models and Clustering":
      [
        "Multiple Linear Regression",
        "Decision Tree and Random Forest",
        "Introduction to XGBoost",
        "Clustering fundamentals and K-Means",
        "Model training and prediction workflows",
        "Understanding overfitting and underfitting"
      ],
      "week4-Model Evaluation and End-to-End Pipelines": [
        "Building complete ML pipelines",
        "Evaluating model performance",
        "Correlation analysis and feature importance",
        "Datacentric performance improvement",
        "Model interpretation and business insights",
        "Project documentation and GitHub publishing"
      ] 
    },
    deliverables: 
    {
      "week1-ML Fundamentals and Core Concepts":
      [
        "ML concepts practice notebook",
        "Linear and Logistic Regression exercises",
        "Neural network and loss visualization tasks",
        "Documented notebook submission"
      ],
      "week2-Data Preparation and Feature Engineering":
      [
        "EDA and preprocessing notebook",
        "Feature engineering exercises",
        "Encoding, scaling, and PCA implementation",
        "Data cleaning and analysis report"
      ],
      "week3-Classical ML Models and Clustering":
      [
        "Multiple Regression implementation",
        "Decision Tree and Random Forest models",
        "Clustering and XGBoost experimentation",
        "Model comparison report"
      ],
      "week4-Model Evaluation and End-to-End Pipelines":
      [
        "Complete ML pipeline notebook",
        "Performance evaluation report",
        "Feature importance and error analysis",
        "Final GitHub repository submission"
      ]
    },
    documents_list: 
    [
      "Problem framing document",
      "ML Practice Notebooks",
      "Data Preprocessing Notebook",
      "EDA Notebook",
      "Optimization Notebook",
      "Feature engineering guide",
      "Model Pipeline Notebook",
      "Model Evaluation Reports",
      "GitHub Repository Link",
    ],
    key_learnings:
    [
      "Understand the complete Machine Learning workflow from data to prediction",
      "Learn how different ML algorithms work and where to use them",
      "Build intuition for feature engineering and model optimization",
      "Understand overfitting, underfitting, and performance evaluation",
      "Develop practical experience with real-world ML pipelines",
      "Build strong foundations for advanced Machine Learning cohorts"
    ],
    social_engagement: "Students are encouraged to share project milestones, visualizations,\
        and learning reflections on LinkedIn using the hashtag v18hub.\
        Final projects can be published on GitHub and shared as portfolio work.\
        Selected student projects may be featured on v18hub social platforms \
        with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of ML fundamentals",
      "Correct implementation of models",
      "Data preprocessing and handling skills",
      "Model evaluation and reasoning",
      "Problem-solving and experimentation",
      "Consistency throughout the bootcamp",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "Machine Learning",
      "Regression",
      "Optimization",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Model Evaluation",
      "Classification",
      "Problem Solving",
      "Technical Presentation",
      "Experiment Tracking",
    ],
    program_card_skill_tags: ["Machine Learning", "Model Evaluation", "Optimization"],
    fees: 4499,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-05-09T00:00:00Z",
    updated_at: "2026-05-09T00:00:00Z",
  },
  {
    bootcamp_id: "dl_basics_bootcamp",
    partner_id: "None",
    imageSrc: "/Images/deep_learning_fundamentals.png",
    program_type: "bootcamp",
    title: "Deep Learning Foundations: Neural Networks to Computer Vision",
    short_description: "Learn deep learning fundamentals by building neural network projects with mentor guidance and industry-style workflows.",
    description: "This 4-week bootcamp introduces students to deep learning concepts \
        through hands-on implementation using TensorFlow and PyTorch. \
        Students learn neural networks, training workflows, CNNs, and model evaluation \
        while building practical deep learning mini-projects.",
    startDate: "Aug 11, 2026",
    duration: "4 Week",
    level: "Beginners",
    goal: [
      "Understand deep learning fundamentals and neural networks",
      "Build and train neural network models",
      "Learn forward propagation and backpropagation concepts",
      "Work with TensorFlow and PyTorch basics",
      "Understand CNNs and computer vision workflows",
      "Evaluate and improve deep learning models",
      ],
    prerequisites: 
    [
      "Basic Python programming knowledge",
      "Understanding of machine learning basics",
      "Familiarity with NumPy and Pandas",
      "Willingness to experiment, document observations, and learn through hands-on workflows"
    ],
    dataset: "",
    milestones: 
    {
      "week1-Neural Networks Fundamentals":
      [
        "Introduction to Deep Learning and Neural Networks",
        "Perceptrons, layers, and activations",
        "Forward propagation and loss functions",
        "Backpropagation and gradient descent",
        "Understanding training workflows and predictions"
      ],
      "week2-CNN and Computer Vision Basics":
      [
        "Introduction to Computer Vision",
        "Convolution and pooling operations",
        "CNN architectures and feature extraction",
        "Image preprocessing and augmentation basics",
        "Transfer learning fundamentals"
      ],
      "week3-Text Deep Learning and Sequence Models":
      [
        "Introduction to NLP and text preprocessing",
        "Embeddings and sequence understanding",
        "RNN and LSTM intuition",
        "Text classification workflows",
      ],
      "week4-Training, Evaluation and DL Workflows":
      [
        "Model evaluation and error analysis",
        "Overfitting, regularization, and tuning",
        "Training optimization and debugging",
        "End-to-end deep learning workflow",
        "Project documentation and GitHub publishing"
      ]
    },
    deliverables:
    {
      "week1-Neural Networks Fundamentals":
      [
        "Neural network practice notebook",
        "Activation and loss function exercises",
        "Training workflow experiments",
      ],
      "week2-CNN and Computer Vision Basics":
      [
        "CNN implementation exercises",
        "Image preprocessing notebook",
        "Model prediction visualizations"
      ],
      "week3-Text Deep Learning and Sequence Models":
      [
        "Text preprocessing exercises",
        "Sequence modeling practice notebook",
        "Text classification implementation",
      ],
      "week4-Training, Evaluation and DL Workflows":
      [
        "Model evaluation report",
        "Training experiments",
        "Final workflow notebook",
        "GitHub repository submission"
      ]
    },
    documents_list: 
    [
      "Deep Learning Practice Notebooks",
      "CNN and NLP Exercise Submissions",
      "Training and Evaluation Reports",
      "Workflow Documentation Notebook",
      "GitHub Repository Link",
      "Project README File",
      "Workshop Completion Certificate"
    ],
    key_learnings:
    [
      "Understand neural networks and deep learning workflows",
      "Build and train deep learning models confidently",
      "Work with CNNs for image-based tasks",
      "Understand optimization and model improvement techniques",
      "Develop practical deep learning problem-solving skills",
    ],
    social_engagement: "Students are encouraged to share model outputs, learning milestones, \
        and project updates on LinkedIn using the hashtag v18hub. \
        Final deep learning projects can be published on GitHub as portfolio work. \
        Selected student projects may be featured on v18hub social platforms \
        with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of deep learning fundamentals",
      "Correct implementation of neural networks",
      "Model training and tuning skills",
      "Problem-solving and experimentation",
      "Understanding of CNN workflows",
      "Understanding of sequence models",
      "Consistency throughout the bootcamp",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "CNN",
      "Sequence_models",
      "Backpropagation",
      "Gradient Descent",
      "Model Evaluation",
      "Transfer Learning",
    ],
    program_card_skill_tags: ["Neural Networks", "CNN", "Sequence_Models"],
    fees: 4499,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-05-09T00:00:00Z",
    updated_at: "2026-05-09T00:00:00Z",
  },
  {
    bootcamp_id: "genai_basics_bootcamp",
    partner_id: "None",
    imageSrc: "/Images/gen_ai_fundamental.png",
    program_type: "bootcamp",
    title: "Generative AI Foundations Bootcamp",
    short_description: "Learn the fundamentals of Generative AI, LLMs, RAG, and AI Agents through hands-on workflows and modern GenAI tools.",
    description: "A 4-week beginner-friendly bootcamp designed to help students \
                  understand how modern Generative AI systems work. Students learn \
                  LLM fundamentals, prompting, RAG, AI agents, and multimodal AI \
                  through practical experimentation and industry-style workflows.",
    startDate: "Aug 11, 2026",
    duration: "4 Week",
    level: "Beginners",
    goal: [
      "Understand the fundamentals of Generative AI and Large Language Models",
      "Learn prompting, embeddings, vector databases, and RAG workflows",
      "Build intuition for AI agents, multimodal AI, and modern GenAI systems",
      "Work with industry-standard GenAI tools and frameworks",
      "Build strong foundations for advanced GenAI and Agentic AI learning"
      ],
    prerequisites: 
    [
      "Basic understanding of Python programming",
      "Familiarity with basic Machine Learning concepts",
      "Curiosity about how modern AI systems like ChatGPT and AI agents work",
      "Willingness to experiment, document observations, and learn through hands-on workflows"
    ],
    dataset: "",
    milestones: 
    {
      "week1-Generative AI and LLM Foundations":
      [
        "Introduction to Generative AI and LLMs",
        "How transformers and tokenization work",
        "Prompt engineering fundamentals",
      ],
      "week2-Retrieval and Context Aware AI": [
          "Introduction to Retrieval-Augmented Generation (RAG)",
          "Document processing and chunking basics",
          "Vector databases",
          "Embeddings and semantic search intuition",
          "Understanding hallucinations and grounding"
      ],
      "week3-AI Workflows and Agents":
      [
        "Introduction to AI agents",
        "Tool calling and workflow orchestration",
        "Multimodal AI fundamentals",
        "Reasoning and task decomposition",
      ],
      "week4-Evaluating GenAI Applications":
      [
        "Evaluating GenAI responses",
        "Prompt optimization techniques",
        "Responsible AI and safety fundamentals",
        "End-to-end GenAI workflow understanding",
        "Documentation and GitHub publishing"
      ],
    },
    "deliverables": 
    {
      "week1-Generative AI and LLM Foundations":
      [
        "Prompt engineering practice notebook",
        "LLM experimentation exercises",
        "Embedding and semantic search tasks",
        "Documented notebook submission"
      ],
      "week2-Retrieval and Context Aware AI": 
      [
        "Semantic search workflow exercises",                         
        "Document retrieval experiments",
        "RAG evaluation notebook"
      ],
      "week3-AI Workflows and Agents":
      [
        "AI agent workflow implementation",
        "Tool-calling experimentation tasks",
        "Agent workflow documentation"
      ],
      "week4-Evaluating GenAI Applications":
      [
        "Complete GenAI workflow notebook",
        "RAG evaluation notebook",
        "Prompt optimization report",
        "Final GitHub repository submission",
      ]
    },

    documents_list: 
    [
      "Prompt Engineering Practice Notebooks",
      "RAG Workflow Submission",
      "AI Agent Experiment Notebook",
      "GenAI Project Documentation",
      "GitHub Repository Link",
    ],
    key_learnings:
    [
      "Understand how modern LLMs and GenAI systems work",
      "Learn practical RAG and AI agent workflows",
      "Build foundations in prompt engineering and embeddings",
      "Understand multimodal and agentic AI concepts",
      "Develop practical experience with GenAI tools and APIs",
      "Build strong foundations for advanced GenAI cohorts"
    ],
    social_engagement: "Students are encouraged to share \
      RAG workflows. Final repositories and \
      workflow notebooks can be published on GitHub as \
      portfolio projects. Selected student submissions may \
      be featured on v18hub social platforms with student permission.",
    program_evaluation_criteria:
    [
      "Understanding of GenAI and LLM fundamentals",
      "Correct implementation of RAG workflows",
      "Prompt engineering and reasoning quality",
      "AI agent workflow understanding",
      "Experimentation and problem-solving approach",
      "Consistency throughout the bootcamp",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags:
    [
      "Generative AI",
      "Transformers",
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
      "Vector Databases",
      "Embeddings",
    ],
    program_card_skill_tags: ["GenAI", "Transformers", "AI Agents"],
    fees: 4999,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-05-09T00:00:00Z",
    updated_at: "2026-05-09T00:00:00Z",
  }
];

const seenIds = new Set<string>();
export const approvedBootcamps: Bootcamp[] = bootcampData.filter((b) => {
  if (!b.is_approved || seenIds.has(b.bootcamp_id)) return false;
  seenIds.add(b.bootcamp_id);
  return true;
});
