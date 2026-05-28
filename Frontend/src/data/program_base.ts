// src/data/program_base.ts
// ─── Shared base type for ALL program types ─────────────────────────────────

export type ProgramBase = {
  imageSrc: string;
  program_type: string;
  title: string;
  short_description: string;
  description: string;
  startDate: string;
  duration: string;
  level: string;
  goal: string[];
  prerequisites: string[];
  dataset: string;
  milestones: Record<string, string[]>;
  deliverables: Record<string, string[]>;
  documents_list: string[];
  key_learnings: string[];
  social_engagement: string;
  program_evaluation_criteria: string[];
  skill_tags: string[];
  program_card_skill_tags: string[];
  fees: number;
  current_version: string;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
};
