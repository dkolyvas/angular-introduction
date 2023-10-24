import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/intefaces/person';
import { AppService } from 'src/app/app.service';
import { PersonCardComponent } from "../../person-card/person-card.component";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-delete-user',
    standalone: true,
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css'],
    imports: [CommonModule, PersonCardComponent]
})
export class DeleteUserComponent {
  foundUser: Person|undefined
  userNotFound = false;
  @ViewChild('userId') userIdInput!:ElementRef<HTMLInputElement>
  @Output() userDeleted = new EventEmitter()
  constructor(private appService:AppService = Inject(AppService)){}

  onClick(){
    const id = this.userIdInput.nativeElement.value
    this.appService.deleteUser(parseInt(id)).subscribe({
      next:(user)=>{
        console.log(user)
        this.userDeleted.emit()
        this.userNotFound = false
      },
      error:(error)=>{
        console.log(error)
        this.userNotFound = true
      },
      complete:()=>{}
    }
    )
  }
}
