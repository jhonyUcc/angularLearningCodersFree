import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  styleColor:string = "blueText";
  caputurarInput(name:string){
      console.log(name);
  }
}
