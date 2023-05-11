import { Injectable } from '@angular/core';
import { ListInterface } from '../interfaces/listInterface';

@Injectable({
  providedIn: 'root',
})
export class todoService {
  url = 'http://localhost:3000/lists';

  constructor() {}

  async getAllList(): Promise<ListInterface[]> {
    return (await (await fetch(this.url)).json()) ?? [];
  }

  async getListByID(id: number): Promise<ListInterface> {
    return (await (await fetch(`${this.url}/${id}`)).json()) ?? {};
  }
}
