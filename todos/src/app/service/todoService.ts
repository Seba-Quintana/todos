import { Injectable } from '@angular/core';
import { ListInterface } from '../interfaces/listInterface';
import { CardComponent } from '../home/list/card/card.component';
import { CardInterface } from '../interfaces/cardInterface';

@Injectable({
  providedIn: 'root',
})
export class todoService {
  url = 'http://localhost:3000/lists';


  async getAllList(): Promise<ListInterface[]> {
    return (await (await fetch(this.url)).json()) ?? [];
  }
  async getListByID(id: number): Promise<ListInterface> {
    return (await (await fetch(`${this.url}/${id}`)).json()) ?? {};
  }
  async postCard(card: CardInterface) {
	return (await (await fetch(this.url, {
		method: 'POST',
		body: JSON.stringify(card),
		headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
	})).json());
  }
  async deleteCard(card: CardInterface): Promise<boolean> {
	return (await (await fetch(this.url, {
		method: 'DELETE',
		headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
	})).json());
  }
}
