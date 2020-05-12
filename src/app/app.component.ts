import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Brad';

  constructor() {
    console.log(123);
    this.changeName("Ted");
  }

  changeName(name: string) {
    this.name = name;
  }
}
