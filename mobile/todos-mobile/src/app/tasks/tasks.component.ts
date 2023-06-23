import { Component, Input, OnInit, inject } from '@angular/core';
import { CardInterface } from '../interfaces/CardInterface';

import { TodoServiceService } from '../services/todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class TasksComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() card!: CardInterface;

  todoService: TodoServiceService = inject(TodoServiceService);
  state = true;

  async removeCard() {
    this.state = false;

    this.todoService.deleteCard(this.card);
  }

}
