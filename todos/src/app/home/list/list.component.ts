import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListInterface } from 'src/app/interfaces/listInterface';
import { CardInterface } from 'src/app/interfaces/cardInterface';
import { todoService } from 'src/app/service/todoService';
import { TranslateListService } from 'src/app/service/translate-list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <div id="list-component">
      <div id="list-component-title">
        <input type="text" id="list-component-title-text" placeholder="List Title" (focusout)="changeTitleText()" >
      </div>

	  <div id="card">
        <app-card *ngFor="let cardData of list.cards" [card]="cardData"></app-card>
	  </div>
      <footer>
      <button id="translate" (click)="translate()">translate</button>
    	<input id="add-card" type="button" value="+ new card" (click)="postCard()" />
      </footer>
    </div>
  `,
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, CardComponent],
})
export class ListComponent {
  @Input() list!: ListInterface;
  constructor(private service: todoService, private serviceTranslate: TranslateListService) {}

  titleState = true


  translate() {
    for (let index = 0; index < this.list.cards.length; index++) {
      let contentCard = this.list.cards[index].content;
      let cardId = this.list.cards[index].id;
      this.serviceTranslate.translateApi(contentCard,cardId).then((data) => {
        this.list.cards[index].content = data;
      });
    }
  }

  postCard() {
    const newCard: CardInterface = { id: 50, title: 'New Card', content: 'New Card Text' };
    this.list.cards.push(newCard);
    this.service.postCard(this.list, newCard);
  }

  checkTitleState() {
    return this.titleState;
  }

  changeTitleState() {
    var aux = !this.changeTitleState
    this.titleState = aux
  }

  changeTitleText() {
    var a = (<HTMLInputElement>document.getElementById("list-component-title-text")).value;

    console.log(a)
  }


}
