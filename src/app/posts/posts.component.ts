import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-errors';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { transition, useAnimation, trigger, style, animate, query, animateChild, group, stagger } from '@angular/animations';
import { bounceOutLeftAnimation, fadeInAnimation } from '../common/animations';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [
    trigger('postsAnimation', [
      transition(':enter', [
        //Angular runs animations in a hierarchy. It will execute the parent animation and ignores all other animations
        //However with query you can define that the animations are not blocked
        //with group it is possible to run the animations parallel otherwise they wouldn't
        //group also works without a query!
        //stagger every element will be shown with a 200 ms difference
        group([
          query('h1', [
          style({ transform: 'translateY(-20px)' }),
          animate(2000)
        ]),
          query('@postAnimation', stagger(200, animateChild()), {optional: true})
        ])
      ])
    ]),

    trigger('postAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          //overwriting default values
          params: {
            duration: '500ms'
          }
        })
      ]),

      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {

  posts: any[]

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(posts => this.posts = posts)
  }

  //animation callbacks
  animationStarted($event) {
    //animation has started
  }

  animationDone($event) {
    //animation has ended
  }

  createPost(input: HTMLInputElement) {
    const post = { title : input.value }
    this.posts.splice(0, 0, post)

    input.value = ''

    this.service.create(post)
      .subscribe(
        posts => {
          post['id'] = posts['id']
          console.log(posts)
        },
        (error: AppError) => {
          this.posts.splice(0, 1)

          if (error instanceof BadInput) {
            // this.form.setErrors(error.json()) -> statt error.json() -> error.originalError
          } else {
            // we rethrow the error so app-error-handler can handle the error
            throw error
          }
        })
  }

  updatePost(post) {
    // post works as well
    const updatePost = { title: 'lul'}
    this.service.update(post)
      .subscribe(
        response => console.log(response)
    )
  }

  deletePost(post) {

    const index = this.posts.indexOf(post)
    this.posts.splice(index, 1)

    this.service.delete(post.id)
      .subscribe(
        _ => {},
        (error: AppError) => {
          this.posts.splice(index, 0, post)

          if (error instanceof NotFoundError) {
            alert('This post has already been deleted')
          } else { throw error }
        })
  }
}
