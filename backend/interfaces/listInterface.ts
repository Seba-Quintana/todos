import { CardInterface } from './cardInterface';

export interface ListInterface {
  id: number;
  name: string;
  cards: Array<CardInterface>;
}
