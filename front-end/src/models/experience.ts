export interface Experience {
  id: number;
  startDate: Date;
  endDate: Date;
  details: ExperienceDetails[];
}

export interface ExperienceDetails {
  title: string;
  description: string;
  language: string;
}