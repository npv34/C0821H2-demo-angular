import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-demo';
  message = '';
  size = 14;

  getMessage(event: any) {
    this.message = event.target.value;
  }

  changeSize(event: any) {
    this.size = event.target.value;
  }
}
