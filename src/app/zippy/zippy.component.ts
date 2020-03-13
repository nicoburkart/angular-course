import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    
  ]
})
export class ZippyComponent {

  @Input('title') title: string

  isCollapsed = true


}
