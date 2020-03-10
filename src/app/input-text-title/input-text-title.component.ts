import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-text-title',
  templateUrl: './input-text-title.component.html',
  styleUrls: ['./input-text-title.component.css']
})
export class InputTextTitleComponent implements OnInit {

  text: string

  constructor() { }

  ngOnInit(): void {
  }

}
