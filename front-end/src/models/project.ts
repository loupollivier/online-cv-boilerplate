import { Technology } from './technology';
import { Tool } from './tool';

export interface Project {
  id: number;
  client: string;
  startDate: Date;
  endDate: Date;
  teamSize: number;
  technologies: Technology[];
  tools: Tool[];
  details: ProjectDetails[];
}

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  position: string;
  language: string;
}