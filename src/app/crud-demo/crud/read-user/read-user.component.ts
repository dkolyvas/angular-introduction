import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { Person } from 'src/app/intefaces/person';
import { PersonCardComponent } from 'src/app/person-card/person-card.component';
import { inject } from '@angular/core/testing';
@Component({
    selector: 'app-read-user',
    standalone: true,
    templateUrl: './read-user.component.html',
    styleUrls: ['./read-user.component.css'],
    imports: [CommonModule, PersonCardComponent]
})
export class ReadUserComponent  {
  foundUser: Person|undefined
  userNotFound = false;
  @ViewChild('userId') userIdInput!:ElementRef<HTMLInputElement>

  constructor(private appService:AppService = Inject(AppService)){}

  onClick(){
    const id = this.userIdInput.nativeElement.value
    console.log(this.userIdInput.nativeElement.validationMessage)
    this.appService.getUserById(parseInt(id)).subscribe({
      next:(user)=>{
        this.foundUser = user;
        this.userNotFound = false;
      },
      error:(error)=>{
        this.foundUser = undefined
        this.userNotFound = true;
        console.log(error)
      },
      complete:()=>{
        console.log("Operation completed")
      }
    })
  }
}
