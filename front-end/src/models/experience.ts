export interface Experience {
  id: number;
  startDate: Date;
  endDate: Date;
  detials: ExperienceDetails[];
}

export interface ExperienceDetails {
  title: string;
  description: string;
  language: string;
}