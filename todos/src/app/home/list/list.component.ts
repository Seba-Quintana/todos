import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListInterface } from 'src/app/interfaces/listInterface';
import { CardInterface } from 'src/app/interfaces/cardInterface';

@Component({
  selector: 'app-list',
  standalone: true,
  template: `
    <div id="list-component">
      <header>
        <h1>TITLE</h1>
      </header>
      <app-card *ngFor="let cardData of list.cards" [card]="cardData"></app-card>

      <footer>
        <input type="button" />
      </footer>
    </div>
  `,
  styleUrls: ['./list.component.css'],
  imports: [CommonModule, CardComponent],
})
export class ListComponent {
  @Input() list!: ListInterface;


}
