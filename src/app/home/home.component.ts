import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class AppComponent{
  title = 'Veridia';
  today = Date.now();

  constructor(){
  }

}
