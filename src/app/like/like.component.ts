import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  color: string
  @Input('isSelected') isSelected: boolean
  @Input('likes') likes: number

  onClick() {
    this.isSelected = !this.isSelected
    this.likes += this.isSelected ? 1 : -1
  }

}
