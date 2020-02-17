import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author-view',
  templateUrl: './author-view.component.html',
  styleUrls: ['./author-view.component.css']
})
export class AuthorViewComponent implements OnInit {

  authors : string[]

  constructor(authorService : AuthorService) {
    this.authors = authorService.getAuthors()
   }

  ngOnInit(): void {
  }

}
