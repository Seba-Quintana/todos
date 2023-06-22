import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TasksComponent } from '../tasks/tasks.component';
import { CardInterface } from '../interfaces/CardInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'homePage.html',
  styleUrls: ['homePage.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ExploreContainerComponent,
    TasksComponent,
    CommonModule,
  ],
})
export class Tab1Page {
  constructor() {}

  cards: CardInterface[] = [
    {
      id: 0,
      title: 'card',
      content: 'a',
    },
    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },

    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },

    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },

    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },
    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },
    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },
    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },
    {
      id: 1,
      title: 'card 2',
      content: 'b',
    },

  ];


  addTask(){
    const newCard: CardInterface = { id: 50, title: 'New Card', content: 'New Card Text' };
    this.cards.push(newCard);

  }
}
