import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  // @Input()
  // data: any = null;
  data: any;
  get parentData() {
    return this.data;
  }

  @Input('parentData')
  set parentData(value: any) {
    this.data = value;
    console.log('from parent ', this.data);
  }
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes ', changes);
  }
}
