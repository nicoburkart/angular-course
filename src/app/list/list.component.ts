import { Component, Input} from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('items') items : string[]
  @Input('itemLabel') itemLabel : string
  @Input('showLabel') showLabel : boolean = false

}
