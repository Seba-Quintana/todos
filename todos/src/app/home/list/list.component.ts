import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListInterface } from 'src/app/interfaces/listInterface';
import { CardInterface } from 'src/app/interfaces/cardInterface';
import { todoService } from 'src/app/service/todoService';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <div id="list-component">
      <h1>TITLE</h1>
	  <div id="card">
        <app-card *ngFor="let cardData of list.cards" [card]="cardData"></app-card>
	  </div>
      <footer>
    	<input id="add-card" type="button" value="+ new card" (click)="postCard()" />
      </footer>
    </div>
  `,
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, CardComponent],
})
export class ListComponent {
  @Input() list!: ListInterface;
  service: todoService = Inject(todoService);

  postCard() {
	const newCard: CardInterface = { id: 50, title: 'New Card', content: 'New Card Text' };
    this.list.cards.push(newCard);
	return this.service.postCard(newCard);
  }

}
