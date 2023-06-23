import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TasksComponent } from '../tasks/tasks.component';
import { CardInterface } from '../interfaces/CardInterface';
import { CommonModule } from '@angular/common';
import { TodoServiceService } from '../services/todo-service.service';

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
 

  cardList!: CardInterface[];


  todoService: TodoServiceService = inject(TodoServiceService);
  constructor() {
    this.todoService.getAllCards().then((data: CardInterface[]) => {
      this.cardList = data;

      console.log("Response: " + data)
    });
  }



  addTask(){
    const newCard: CardInterface = { id: this.cardList.length+1, title: 'New Card', content: 'New Card Text' };
    this.cardList.push(newCard);
    this.todoService.postCard(newCard);

  }
}
