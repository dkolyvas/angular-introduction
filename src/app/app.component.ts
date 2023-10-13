import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './intefaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name: string = "Dimitris";
  surname:string = "Kolyvas";

  me:Person = {
    givenName: "Dimitris",
    surname: "Kolyvas",
    age: 38,
    email: "kolyvas@gmail.com",
    address: "Spetson 106 Athens"
  };

}
