import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../cat.module';
import { NgForm } from '@angular/forms';
import { ChatService } from '../chat.service'
import { Ichat } from '../interface'

@Component({
  selector: 'app-userkitten',
  templateUrl: './userkitten.component.html',
  styleUrls: ['./userkitten.component.css']
})
export class UserkittenComponent implements OnInit{
  carteChat: Ichat[] = []

  constructor(private chatService: ChatService) { }


    ngOnInit(): void {
      this.getMyCat();
    }

    getMyCat(): void {
      // console.log('this.carteChat',this.chatService.getCat())
      this.carteChat = this.chatService.getCat();
    }


    retirer(index : any,chat : any){
      this.chatService.maList.push(chat)

      // console.log("retraiiii",this.chatService.retraitChat(index))
      // console.log("pushhhh",this.chatService.maList)
    }
  }