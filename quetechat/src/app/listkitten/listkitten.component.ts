import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { Ichat } from '../interface';

@Component({
  selector: 'app-listkitten',
  templateUrl: './listkitten.component.html',
  styleUrls: ['./listkitten.component.css']
})
export class ListkittenComponent {


  carteChat: Ichat[] = []
  maList : Ichat [] = [];
 
  constructor(public chatService: ChatService) { }


  
}
