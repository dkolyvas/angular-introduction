import { Component, ElementRef, EventEmitter, Inject, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from 'src/app/intefaces/person';
import { AppService } from 'src/app/app.service';
import { PersonCardComponent } from "../../../person-card/person-card.component";
import { HttpClient } from '@angular/common/http';
import { CrudUserSearchComponent } from "../../utils/crud-user-search/crud-user-search.component";
import { DangerAreYouSureComponent } from "../../utils/danger-are-you-sure/danger-are-you-sure.component";

@Component({
    selector: 'app-delete-user',
    standalone: true,
    templateUrl: './delete-user.component.html',
    styleUrls: ['./delete-user.component.css'],
    imports: [CommonModule, PersonCardComponent, CrudUserSearchComponent, DangerAreYouSureComponent]
})
export class DeleteUserComponent {
  foundUser: Person|undefined
  userNotFound = false;
  @ViewChild('userId') userIdInput!:ElementRef<HTMLInputElement>
  @Output() userDeleted = new EventEmitter()
  constructor(private appService:AppService = Inject(AppService)){}

  onConfirm(confirm:boolean){
    if(confirm && this.foundUser){
      const id = this.foundUser.id ??-1;
      this.delete(id);
    }
    else{
      this.foundUser = undefined;
    }
  }

  delete(id:number){
    
    this.appService.deleteUser(id).subscribe({
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

  onUserFound(user:Person|undefined){
    if(user){
      this.foundUser = user
    }
  }
}
