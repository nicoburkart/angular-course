import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //we need to subscribe to this observable, because it could happen, that the params change
    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id')
    //     console.log(id)
    //   })
    
    //If it is 100% sure, that the component gets destroyed an the ngOnInit methode will be called again,
    //()we can use this:
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest'}
    })
  }

}
