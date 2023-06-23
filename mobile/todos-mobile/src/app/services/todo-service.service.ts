import { Injectable } from '@angular/core';
import { CardInterface } from '../interfaces/CardInterface';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url = 'http://localhost:3000';

  constructor() { }

  async postCard(card: CardInterface) {
    return ((await fetch(`${this.url}/card/putCard/${card.id}`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })));
  }
  
  async deleteCard(card: CardInterface): Promise<boolean> {
    return (await (await fetch(`${this.url}/${card.id}`, {
      method: 'POST',
      body:JSON.stringify(card),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })).json());
  }



  async getAllCards(): Promise<CardInterface[]> {
    return (await (await fetch(`${this.url}/card/getCards`)).json()) ?? [];
  }
}

