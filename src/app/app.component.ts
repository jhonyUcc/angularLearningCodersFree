import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exerciseSinglePage';
  objetoPruebas:object = {
    id: 3,
    nombre: "david"
  }
  objetoPruebas2:string = "juan"
}
