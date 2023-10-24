import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './intefaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { OutputDemoComponent } from './output-demo/output-demo.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppService } from './app.service';
import { CrudDemoComponent } from './crud-demo/crud-demo/crud-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    PersonComponent,
     PersonAltComponent,
      EventBindComponent,
       OutputDemoComponent,
      PersonCardComponent,
    TemplateDrivenFormComponent,
  ReactiveFormComponent, 
CrudDemoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  name: string = "Dimitris";
  surname:string = "Kolyvas";

  me:Person = {
    givenName: "Dimitris",
    surname: "Kolyvas",
    age: 38,
    email: "kolyvas@gmail.com",
    address: "Spetson 106 Athens"
  };
  users: Person[] =[];
  constructor(private appService: AppService= Inject(AppService)){

  }
  ngOnInit(): void{
    this.appService.getAllUsers().subscribe((users)=>{
      this.users = users
    });
  }

  sentUser: Person|undefined
  onDeleteUser(i:number){
      this.users.splice(i,1);
  }

  onSendUser(user: Person){
    console.log(user)
    this.sentUser = user
  }

  onNewPerson(person: Person){
    this.users.push(person);
  }

}
