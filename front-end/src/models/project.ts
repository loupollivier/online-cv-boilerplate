import { Technology } from './technology';
import { Tool } from './tool';

export interface Project {
  id: number;
  client: string;
  startDate: Date;
  endDate: Date;
  teamSize: number;
  title: string;
  description: string;
  position: string;
  language: string;
  technologies: Technology[];
  tools: Tool[];
}