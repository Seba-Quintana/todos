import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { todoService } from '../service/todoService';
import { ListInterface } from '../interfaces/listInterface';
import { CardInterface } from '../interfaces/cardInterface';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div id="home-component">
      <section id="lists">
        <app-list id="list-component" class="app-lists" *ngFor="let listsData of todoLists" [list]="listsData">
        </app-list>
		<input id="add-list" type="button" value="+ new list"  (click)="createList()"/>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ListComponent],
})
export class HomeComponent {
  todoService: todoService = inject(todoService);
  todoLists!: ListInterface[];
  cardsList: CardInterface[] = [];

  constructor() {
    this.todoService.getAllList().then((data: ListInterface[]) => {
      this.todoLists = data;
    });
  }



  createList() {
    const newList: ListInterface = { id: 1, name: "List Title", cards: [] };
    this.todoLists.push(newList);


  }
}
