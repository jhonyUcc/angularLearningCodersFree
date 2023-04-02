import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  messages: string[] = [];
  

  getMessages(index:number ){
    return this.messages[index];
  }

  setMessages(message:string){
    this.messages.push(message);
  }
}
