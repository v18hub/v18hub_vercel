// src/types/cohort.ts
export interface Cohort {
  cohort_id: string;
  partner_id: string;
  imageSrc: string;
  tag: string;
  title: string;
  description: string;
  cohortTitle: string;
  startDate: string;
  duration: string;
  goal: string;
  dataset: string;
  methods: string;
  milestones: string[];
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
}