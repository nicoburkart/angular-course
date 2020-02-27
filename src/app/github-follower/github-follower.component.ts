import { Component, OnInit } from '@angular/core';
import { GitFollowerService } from '../services/git-follower.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {

  followers : any[]

  constructor(
    private route: ActivatedRoute, 
    private service : GitFollowerService
    ) { }

  ngOnInit(): void {
    
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
      switchMap(combined => {
        let id = combined[0].get('id')
        let page = combined[1].get('page')

        //this.service.getAll({ id: id, page: page})
        return this.service.getAll()
      })
    )
    .subscribe(followers => this.followers = followers)
  }
}
