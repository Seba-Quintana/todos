import { CardInterface } from './cardInterface';

export interface ListInterface {
  id: number;
  userId: string;
  name: string;
  cards: CardInterface[];
}
