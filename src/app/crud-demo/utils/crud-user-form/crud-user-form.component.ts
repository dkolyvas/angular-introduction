import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from 'src/app/intefaces/person';

@Component({
  selector: 'app-crud-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-user-form.component.html',
  styleUrls: ['./crud-user-form.component.css']
})
export class CrudUserFormComponent implements OnChanges{
  form = new FormGroup({
    id: new FormControl(0),
    givenName: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(18),
      Validators.max(120)
    ]),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    photoURL: new FormControl('')
  })
  @Input() personInput:Person|undefined
  @Input() title = 'User Form'
  @Output() newPerson = new EventEmitter<Person>()

  onSubmit(){
    this.newPerson.emit(this.form.value as Person)
    this.form.reset()

  }

  ngOnChanges(changes:SimpleChanges):void{
      if(changes['personInput']?.currentValue){
        this.form.patchValue(changes['personInput'].currentValue)
      }
  }
}
