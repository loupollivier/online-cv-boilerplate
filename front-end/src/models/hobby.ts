export interface Hobby {
  id: number;
  imageUrl: string;
  details: HobbyDetails[];
}

export interface HobbyDetails {
  id: number;
  name: string;
  description: string;
  language: string;
}