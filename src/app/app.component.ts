import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-input';
  initialDataToChild = 'initalization';
  constructor() {
    this.getData();
  }
  getData() {
    this.initialDataToChild = 'First Message';
  }
  sendMessage() {
    this.initialDataToChild = null;
    this.getData();
  }
  sendMessageToChild() {
    this.initialDataToChild = 'First Message through sendMessageToChild()';
  }
}
