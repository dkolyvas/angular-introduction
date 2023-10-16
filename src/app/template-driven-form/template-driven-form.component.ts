import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Person } from '../intefaces/person';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  @Output() newPerson = new EventEmitter<Person>();
  
  onSubmit(form: any){
    console.log(form)
    this.newPerson.emit(form.value as Person);
    form.reset();
  }
}
