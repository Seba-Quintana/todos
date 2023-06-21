import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { TasksComponent } from '../tasks/tasks.component';
import { CardInterface } from '../interfaces/CardInterface';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,TasksComponent],
})
export class Tab1Page {
  constructor() {}


  cards:CardInterface[] = [{
    id
  }]
}
