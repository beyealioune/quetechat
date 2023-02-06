import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cat } from '../cat.module';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, FormControl, Validators } from '@angular/forms';
import { ChatService } from '../chat.service'
@Component({
  selector: 'app-createkitten',
  templateUrl: './createkitten.component.html',
  styleUrls: ['./createkitten.component.css']
})
export class CreatekittenComponent implements OnInit {
  photo : any = [];
  photo1 : any ;
tab = ['1','2']
  form = this.formBuilder.group({
    name: [''],
    race : [''],
    date : [],
    photo : [''],
   
  



    type: new FormControl('', {updateOn: 'submit'},)
  })
  constructor(private chatService: ChatService, private formBuilder: FormBuilder) {
    this.form.setValidators(Validators.required)
   }

  ngOnInit(): void {
    
  }

  addCat(): void {
    if (this.form.valid) {
      this.chatService.addCat(this.form.value.name!, this.form.value.race, this.form.value.date,this.form.value.photo);
      // console.log('Form is valid');
      this.form.reset();
      // this.photo = this.chatService.tableauChat.shift()
      //  this.chatService.photo1 = this.chatService.tableauChat.shift()
      //  this.chatService.photo.push(this.chatService.photo1)
    } else {
      console.log('Form is not valid');
    }
  
    
}
}