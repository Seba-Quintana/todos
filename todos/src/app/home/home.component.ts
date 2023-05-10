import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from "./list/list.component";

@Component({
	selector: 'app-home',
	standalone: true,
	template: `
	<div id='home-component'>

    	<app-list></app-list>
	</div>
  `,
	styleUrls: ['./home.component.css'],
	imports: [CommonModule, ListComponent]
})
export class HomeComponent {

}
