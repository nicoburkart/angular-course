import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  // you don't need the nested formgroup. it's just an example how to do it
  form = new FormGroup({
    account: new FormGroup({
      username : new FormControl('', [Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
      password : new FormControl('', Validators.required),
      topics: new FormArray([])
    })
  })

  login() {
    this.form.setErrors({
      invalidLogin : true
    })
  }

  get username() {
    return this.form.get('account.username')
  }

  get password() {
    return this.form.get('account.password')
  }

  get topics(): FormArray {
    return this.form.get('account.topics') as FormArray
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }






}
