import { Component, OnInit } from '@angular/core';
import { GitFollowerService } from '../services/git-follower.service';

@Component({
  selector: 'github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers : any[]

  constructor(private service : GitFollowerService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        response => this.followers = response
      )
  }
}
