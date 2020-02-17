import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FavoriteChangedEventArgs } from './favorite/favorite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';

  post = {
    title : "Title",
    isFavorite: true
  }

  likePost = {
    likes : 10,
    isSelected : true
  }

  onFavoriteChanged(eventArgs : FavoriteChangedEventArgs) {
    console.log("favorite changed. Selected: ", eventArgs.newValue)
  }
}
