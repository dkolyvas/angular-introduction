import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../intefaces/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
 // person :Person ={
   // givenName: "Dimitrios",
    // surname: "Kolyvas",
    // age: 38,
    // email: "kolyvas@gmail.com",
    // address: "Spetson 106 Athesn"
  //}
 @Input() person:Person={
  givenName: "first name",
  surname :"surname",
  age: 0,
  email: "email",
  address: "address"
 };


}
