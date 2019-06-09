import { Tool } from './tool';

export interface Card {
  image: string;
  additionalInfo?: any;
  title: string;
  subtitle: string;
  tools: Tool[];
}
