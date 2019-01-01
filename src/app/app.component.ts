import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-input';
  initialDataToChild = 'initalization';
  parentData: { "name": string; };
  constructor() {
    this.getData();
  }
  getData() {
    this.parentData = {"name":"jghjg"}
    // this.initialDataToChild = 'First Message';
  }
  sendMessage() {
    this.initialDataToChild = null;
    this.getData();
  }
  sendMessageToChild() {
    this.initialDataToChild = 'First Message through sendMessageToChild()';
  }
  add(){
    
    let y = document.getElementById('foo').classList;
    y.toggle('card1');
let a  = true;
// if(a === true) {
//   y.remove('card1')
// }
    // console.log('here')
    // document.getElementById('bar').setAttribute("class", "front");
  }
  // add(){
  //   document.getElementById('foo').setAttribute("class", "back");
  //   document.getElementById('bar').setAttribute("class", "front");
  // }
}
