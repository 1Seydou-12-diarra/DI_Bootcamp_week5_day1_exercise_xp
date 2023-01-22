import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  name = '';
  email = '';
  password ='';
  number ='';

  constructor() { }

  ngOnInit() { }

  submitForm() {
    console.log(`Name: ${this.name} Email: ${this.email} Password: ${this.password} phone: ${this.number}`);
  }

}
