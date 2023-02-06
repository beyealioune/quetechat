import { Injectable } from '@angular/core';
import { Ichat } from './interface'
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  photo : any = [];
  photo1 : any ;
  tableauChat = [
    'https://brunolarue.com/wp-content/uploads/2021/04/attirez-le-regard-de-votre-chat-pour-faire-une-belle-photo.jpg',
    'https://media.istockphoto.com/id/1067347086/fr/photo/chat-aux-yeux-bleus-se-penche-sur-lappareil-photo.jpg?s=612x612&w=0&k=20&c=BJqJ6BYWFo4xT1TVDu8fmg5_z7L1ZwgYnC2M6VCwOWY='
  ]

  maList : Ichat [] = [];
  adoptChat : Ichat [] = [];

  carteChat: Ichat[] = []
  constructor() { }

addCat(nameArg : any, raceArg : any , date : any, photo : any): void {
  this.carteChat.push({name : nameArg, race : raceArg, date : date, photo : photo})
}


getCat(): Ichat[]{
  return this.carteChat 
 
}

retraitChat(index : any){
  
this.carteChat.splice(index,1)


}

// adopte(chaton : Ichat) {
  
//   console.log("ma lisssst",this.maList.push(chaton))
// }

}
