import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule],
	template: `
    <div id="card-component">

		<div id="card-component-body">
		<h3 id="card-component-title">
				card title
		 </h3>
		 <p id="card-component-body">
	sdfgjsdfgksdfgksd fghsdfjhso
		</p>

		</div>
</div>
  `,
	styleUrls: ['./card.component.css']
})
export class CardComponent {

}
