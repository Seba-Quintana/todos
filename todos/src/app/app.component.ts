import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [HomeComponent, LoginComponent]
})
export class AppComponent {
	title = 'todos';
}
