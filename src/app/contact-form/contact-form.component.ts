import { Component } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name : 'Email'},
    { id: 2, name : 'Phone'},
    { id: 3, name : 'LOL'}
  ]

  log(x: NgModel) {
    console.log(x)
  }

  submit(f: NgForm) {
    console.log(f)
  }

}
