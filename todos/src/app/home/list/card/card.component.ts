import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="card-component">
      <div id="card-component-title">
        <h3 id="card-component-remove">&#9746;</h3>
        <p id="card-component-title-text">card title</p>
      </div>

      <div id="card-component-body">
        <textarea id="card-component-body-text" disabled>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </textarea
        >
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {}
