// src/data/webinars.ts
import type { ProgramBase } from "./program_base";

export type Webinar = ProgramBase & {
  webinar_id: string;
  partner_id: string;
};

export const webinarData: Webinar[] = [
  {
    webinar_id: "data-science-streams", //5
    partner_id: "None",
    imageSrc: "/Images/data_science_streams.png",
    program_type: "Webinar",
    title: "Data Science Streams",
    short_description: "Exploring the diverse streams of Data Science, the essential skills required for each, and the career opportunities they open up.",
    description: "Free webinar to gain a clear understanding of the different streams within Data Science - including Data Analytics, Machine Learning, Artificial Intelligence, Data Engineering, and Business Intelligence. Learn about the core skill sets, tools, and technologies needed in each stream, along with insights into typical job roles, growth trajectories, and real-world applications. This session is ideal for students and professionals looking to identify their ideal career path in the rapidly evolving world of Data Science.",
    startDate: "To Be Announced After Registrations",
    duration: "2 hours",
    level: "Beginners / Intermediate",
    goal:
    [
      "To introduce participants to the various streams within Data Science and their unique focus areas.",
      "To explain the key technical and analytical skills required for each stream.",
      "To explain the roles and growth trajectory of each stream."
    ],
    prerequisites: ["Curiosity and willingness to explore emerging technologies"],
    dataset: " ",
    milestones: {},
    deliverables: {},
    documents_list: [],
    key_learnings:
    [
      "Understand the major streams of Data Science - Data Analytics, Machine Learning, AI, Data Engineering, and Business Intelligence",
      "Identify the core skills, tools, and technologies required for each stream",
      "Learn how to build a personalized learning roadmap for your desired career path",
      "Explore real-world applications and use cases driving demand in each domain",
      "Discover how to transition or upskill effectively to stay relevant in the data-driven economy."
    ],
    social_engagement: "Live Q&A session with Data Science mentors and industry experts., Networking opportunity with like-minded learners and professionals., Community group access for continued discussions, learning resources, and project collaborations.",
    program_evaluation_criteria: [],
    skill_tags: ["Data Science Streams"],
    program_card_skill_tags: ["Data Science Streams"],
    fees: 0.00,
    current_version: "v1.0",
    is_approved: true,
    created_at: "2025-10-14T00:00:00Z",
    updated_at: "2025-10-14T00:00:00Z",
  },
];

const seenIds = new Set<string>();
export const approvedWebinars: Webinar[] = webinarData.filter((w) => {
  if (!w.is_approved || seenIds.has(w.webinar_id)) return false;
  seenIds.add(w.webinar_id);
  return true;
});
