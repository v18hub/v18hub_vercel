// src/data/workshops.ts
import type { ProgramBase } from "./program_base";
 
export type Workshop = ProgramBase & {
  workshop_id: string;
  partner_id: string;
};
 
// ─── Security note ───────────────────────────────────────────────────────────
// This file is static client-side data — no secrets, no user input.
// All user-supplied data (registrations, enrollments) must flow through
// authenticated API endpoints, never be stored here.
 
// ─── Data integrity ──────────────────────────────────────────────────────────
// Only items with is_approved === true are rendered in listing pages.
// Duplicates (same workshop_id) are guarded against in the listing component.
 

export const workshopData: Workshop[] = [
  {
    workshop_id: "ai_data_literacy",
    partner_id: "None",
    imageSrc: "/Images/ai_data_literacy.png",
    program_type: "Workshop",
    title: "AI & Data Literacy Kickstart",
    short_description: "Demystify AI. Build curiosity and vocabulary before tools. ",
    description: "This workshop introduces students to the fundamentals of Artificial Intelligence, data, and real-world AI applications. Through interactive discussions, datasets, demos, and collaborative activities, students develop AI awareness, critical thinking, and foundational AI vocabulary before entering technical ML/DL/GenAI programs.",
    startDate: "June 08, 2026",
    duration: "1 Week",
    level: "Beginners",
    goal: [
            "Understand how AI and data shape the modern world around us",
            "Learn the core ideas behind machine learning, datasets, and intelligent systems",
            "Explore real-world AI tools, ethical challenges, and decision-making processes",
            "Build confidence and critical thinking without requiring coding experience",
            "Create a strong foundation for future AI, ML, and GenAI learning journeys"
        ],
    prerequisites: ["Curiosity for Data"],
    dataset: " ",
    milestones: {
            "AI Fundamentals": ["Understand AI fundamentals and identify AI in daily life."],
            "Types of Machine Learning": ["Differentiate types of machine learning through examples."],
            "Data Quality": ["Analyze data quality, bias, and dataset limitations."],
            "AI Tools": ["Evaluate practical AI tools and systems critically."],
            "AI Driven Ideas": ["Present AI-driven ideas with ethical and societal awareness."]
    },
    deliverables:{
            "AI Fundamentals": ["Reflection note: AI I use without knowing it."],
            "Types of Machine Learning": ["Concept map of ML types using Miro/chart paper."],
            "Data Quality": ["Data audit worksheet on a public dataset."],
            "AI Tools": ["Group critique report of an AI product/application."],
            "AI Driven Ideas": ["3-minute 'AI for India' innovation pitch."]
    },
    documents_list: [
      "Workshop handbook/slides",
      "AI terminology cheat sheet",
      "Public dataset worksheets",
      "AI ethics discussion template",
      "Reflection journal template",
      "Group activity sheets",
      "AI tools exploration guide",
      "Evaluation rubrics",
      "Final presentation template"
    ],
    key_learnings: [
      "Understanding what AI is and is not.",
      "Identifying AI applications in everyday life.",
      "Fundamentals of machine learning categories.",
      "Importance of data quality and bias.",
      "Awareness of ethical AI and responsible usage.",
      "Critical evaluation of AI-powered products.",
      "Communication and collaborative thinking in AI contexts."
    ],
    social_engagement: "Group discussions and collaborative activities.,\
                        Peer presentations and critique sessions.,\
                        AI product debate and analysis.,\
                        Team-based “AI for India” innovation pitch.,\
                        Reflection sharing and classroom interaction.,\
                        Community-focused AI problem brainstorming.",
    program_evaluation_criteria: [
      "Participation & Discussions",
      "Reflection Activities",
      "Dataset Audit Activites",
      "Group AI Product Critique",
      "Final AI Pitch Presentation",
    ],
    skill_tags: [ "AI Awareness",
                  "Data Literacy",
                  "AI Ethics",
                  "Critical Thinking",
                  "Problem Solving",
                  "Presentation Skills",
                  "Communication Skills",
                  "Responsible AI",
                  "Concept Mapping"],
    program_card_skill_tags: ["Data Literacy", "Concept Mapping", "Responsible AI"],
    fees: 799,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-05-09T00:00:00Z",
    updated_at: "2026-05-09T00:00:00Z",
  },
  {
    workshop_id: "python_ml_basics",
    partner_id: "None",
    imageSrc: "/Images/python_fundamentals.png",
    program_type: "Workshop",
    title: "Python Foundations: From Zero to Writing Real Programs",
    short_description: "Python workshop focused on logic building, problem solving and writing clean, readable code from scratch",
    description: "This workshop helps students build strong Python fundamentals through \
        hands-on coding practice, debugging exercises, and real-world logic problems.  \
        Instead of memorising syntax, students learn how to think through problems, \
        structure code clearly, and write programs independently with confidence.",
    startDate: "June 08, 2026",
    duration: "3 Weeks",
    level: "Beginners",
    goal: [
            "Build strong Python fundamentals",
            "Improve logical thinking and problem-solving skills",
            "Work confidently with Python data structures",
            "Debug and trace code effectively",
            "Write reusable and structured programs"
        ],
    prerequisites: [
      "No prior programming experience required",
      "Willingness to practice coding consistently during the workshop"
    ],
    dataset: " ",
    milestones: {
      "week1-Python Fundamentals and Problem Solving": [
        "Introduction to Python",
        "Variables, data types, operators, and expressions",
        "Input/output and string operations",
        "Conditional statements and loops",
        "Functions and reusable code",
        "Basic logic-building exercises",
      ],
      "week2-Data Structures and Working with Data": [
        "Lists, tuples, and dictionaries",
        "String manipulation and looping through collections",
        "Introduction to NumPy and Pandas",
        "Working with arrays and DataFrames",
        "Loading, filtering, and exploring data",
        "Basic data visualization",
      ],
      "week3-Debugging and Practical Python": [
        "Problem-solving with Python",
        "Debugging basics and code tracing",
        "File handling and working with CSV files",
        "Writing structured and reusable programs",
        "Combining concepts through coding exercises",
        "Notebook documentation and GitHub basics",
      ]
    },
    deliverables: {
    "week1-Python Fundamentals and Problem Solving":
      [
        "Python practice notebook",
        "Logic-building coding exercises",
        "Function-based mini programs",
        "Documented notebook submission"
      ],
    "week2-Data Structures and Working with Data":
      [
        "Programs using lists and dictionaries",
        "Basic Pandas and NumPy exercises",
        "Data handling practice notebook",
        "Visualization and analysis tasks"
      ],
    "week3-Debugging and Practical Python":
      [
        "Debugging exercise submission",
        "File handling programs",
        "Structured Python coding assignments",
        "GitHub repository with workshop notebooks"
      ]
    },
    documents_list:
    [
      "Coding Practice Notebook",
      "Problem-Solving Assignments",
      "Python Utility Programs",
      "Debugging Exercise Submissions",
      "GitHub Repository",
    ],
    key_learnings: [
      "Build strong Python fundamentals",
      "Improve logical thinking and problem-solving",
      "Write clean and reusable Python code",
      "Work confidently with core Python data structures",
      "Debug and trace programs effectively",
      "Develop coding confidence through hands-on practice"
    ],
    social_engagement: "Students are encouraged to share one coding milestone or learning \
      experience each week on LinkedIn using the hashtag v18hub. \
      At the end of the workshop, students can publish their GitHub \
      repository containing workshop notebooks and practice programs. \
      Selected student submissions may be featured on v18hub social platforms \
      with student permission to encourage public learning and portfolio building.",
    program_evaluation_criteria: [
      "Code correctness and execution",
      "Problem-solving approach",
      "Use of functions and reusable code",
      "Understanding of Python fundamentals",
      "Assignment and notebook completion",
      "Consistency throughout the workshop",
      "Code quality, error handling and GitHub organization",
    ],
    skill_tags: [
      "Python",
      "Problem Solving",
      "Functions",
      "Loops And Conditionals",
      "Data Structures",
      "Error Handling",
      "File Handling",
      "GitHub"
    ],
    program_card_skill_tags:["Python Fundamentals", "Data Structures", "Error Handling"],
    fees: 1299,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2026-05-09T00:00:00Z",
    updated_at: "2026-05-09T00:00:00Z",
  },
];

// ─── De-duplicated, approved-only export ─────────────────────────────────────
// Components should consume this instead of workshopData directly.
const seenIds = new Set<string>();
export const approvedWorkshops: Workshop[] = workshopData.filter((w) => {
  if (!w.is_approved || seenIds.has(w.workshop_id)) return false;
  seenIds.add(w.workshop_id);
  return true;
});
