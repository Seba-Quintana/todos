import { Injectable } from '@angular/core';
import { ListInterface } from '../interfaces/listInterface';
import { CardComponent } from '../home/list/card/card.component';
import { CardInterface } from '../interfaces/cardInterface';

@Injectable({
  providedIn: 'root',
})
export class todoService {
  url = 'http://localhost:3000/lists';

  async login(username: string, password: string) {
    const user = {
      username: username,
      password: password,
    };

    return await fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async getAllList(): Promise<ListInterface[]> {
    return (await (await fetch(`${this.url}/list/getLists/1/1`)).json()) ?? [];
  }
  async getListByID(id: number): Promise<ListInterface> {
    return (await (await fetch(`${this.url}/${id}`)).json()) ?? {};
  }

  async postCard(list: ListInterface, card: CardInterface) {
    return await fetch(`${this.url}/${list.id}`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async deleteCard(card: CardInterface): Promise<boolean> {
    return await (
      await fetch(`${this.url}/${card.id}`, {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteData(list: ListInterface, card: CardInterface) {
    await fetch(`&{this.url}/${list.id}/${card.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updateListText(text: string, list: ListInterface) {
    await fetch(`${this.url}/${list.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  }
}
