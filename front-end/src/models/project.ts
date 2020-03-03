import { Technology } from './technology';
import { Tool } from './tool';

export interface Project {
  id: number;
  title: string;
  description: string;
  client: string;
  startDate: Date;
  endDate: Date;
  teamSize: number;
  position: string;
  technologies: Technology[];
  tools: Tool[];
}