import { Component } from '@angular/core';
import { MessagesService } from "../messages.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent {

  routeParam:string = "";
  constructor(public messagesService :  MessagesService, private route: ActivatedRoute){


    this.route.params.subscribe(params=>{
      
      this.routeParam = params['route'];
      
    });

  }
}
