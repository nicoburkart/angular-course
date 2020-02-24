import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'udemy-course-form',
  templateUrl: './udemy-course-form.component.html',
  styleUrls: ['./udemy-course-form.component.css']
})
export class UdemyCourseFormComponent {

  categories = [
    { id : '0', name : 'Development'},
    { id : '1', name : 'Art'},
    { id : '2', name : 'Languages'}
  ]

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

}
