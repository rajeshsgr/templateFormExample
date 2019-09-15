import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent {

  @ViewChild('f', { static: false }) signupForm: NgForm;

  validEmail:boolean = false
  submitted = false;

  user = {
    name: '',
    age: '',
    gender: '',
    email: '',
    subscription: '',
    reason: ''
  };

  genders = ['Male', 'Female'];

  interests = [
    { id: '1', name: 'Agile', code: 'agile' },
    { id: '2', name: 'AI', code: 'ai' },
    { id: '3', name: 'Big Data', code: 'bigdata' },
    { id: '4', name: 'DevOps', code: 'devops' },
  ]

  address: string = '';

  constructor() { }




  onSubmit() {

    this.user.name=this.signupForm.value.name;
    this.user.age=this.signupForm.value.age;
    this.user.gender=this.signupForm.value.gender;
    this.user.email=this.signupForm.value.email;
    this.user.subscription=this.signupForm.value.interest;
    this.user.reason=this.signupForm.value.reason;

    this.submitted=true;

    console.log(this.user); 

  }

  resetForm(){

    this.signupForm.reset();
    
  }

  onChange(newValue) {
    const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validEmailRegEx.test(newValue)) {
        this.validEmail = true;
    }else {
      this.validEmail = false;
    }

  }

}
