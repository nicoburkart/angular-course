import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  imgUrlPrefix = "../../assets/bootstrap-icons/icons/"
  imgUrl = this.imgUrlPrefix + "star.svg"

  ///we set an alias, so if we ever rename isFavorite, our html components won't be affected
  @Input('isFavorite') isFavorite: boolean
  @Output('change') change = new EventEmitter()

  constructor() { }

  getImgUrl() : string {
    this.imgUrl = this.imgUrlPrefix
    this.imgUrl += this.isFavorite ? "star-fill.svg" :"star.svg"
    return this.imgUrl
  }

  onClick() {
    this.isFavorite = !this.isFavorite
    this.change.emit({ newValue : this.isFavorite })
    this.imgUrl = this.imgUrlPrefix
    this.imgUrl += this.isFavorite ? "star-fill.svg" :"star.svg"
  }

  ngOnInit(): void {
  }

}

export interface FavoriteChangedEventArgs {
  newValue : boolean
}
