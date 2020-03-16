export interface Hobby {
  id: number;
  imageUrl: string;
  details: HobbyDetails[];
}

export interface HobbyDetails {
  name: string;
  description: string;
  language: string;
}