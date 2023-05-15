import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInterface } from 'src/app/interfaces/listInterface';
import { CardInterface } from 'src/app/interfaces/cardInterface';
import { todoService } from 'src/app/service/todoService';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="card-component" *ngIf="state">
      <div id="card-component-title">
        <h3 id="card-component-remove" (click)="removeCard()">&#9746;</h3>
        <input type="text" id="card-component-title-text" placeholder="{{ this.card.title }}">
      </div>

      <div id="card-component-body">
        <textarea id="card-component-body-text" >
        {{ this.card.content }}
        </textarea
        >
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: CardInterface;

  todoService: todoService = inject(todoService);
  state = true;

  async removeCard() {
    this.state = false;
    await this.todoService.deleteCard(this.card);
  }
}
