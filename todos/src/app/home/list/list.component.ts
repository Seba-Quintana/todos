import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
	selector: 'app-list',
	standalone: true,
	template: `
    <div id="list-component">
		<header>
			<h1>TITLE</h1>
		</header>
		    <app-card></app-card>

			<footer>
				<input type="button"/>
			</footer>

</div>
  `,
	styleUrls: ['./list.component.css'],
	imports: [CommonModule, CardComponent]
})
export class ListComponent {

}
