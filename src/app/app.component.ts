import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userRegister: FormGroup;
  selectedUser: any;
  usersList = [
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Akhil',
      gender: 'male',
      lastName: 'Kumar',
      password: 'test',
      phone: '9876543210',
    },
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Rahul',
      gender: 'male',
      lastName: 'Dev',
      password: 'test',
      phone: '9876543210',
    },
    {
      company: 'test1',
      confirmPassword: 'test',
      dob: '2023-04-07',
      email: 'test@gmail.com',
      firstName: 'Sampath',
      gender: 'male',
      lastName: 'Kumar',
      password: 'test',
      phone: '9876543210',
    },
  ];
  btnName = 'Register';
  index: any;
  showRegister: boolean = false;
  constructor(public fb: FormBuilder) {
    this.userRegister = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      company: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.userRegister.valueChanges.subscribe((value) => {
      console.log(value);
      if (this.userRegister.valid) {
        this.showRegister = true;
      } else {
        this.showRegister = false;
      }
      // console.log('name has changed:', value);
    });
  }
  gender(event) {
    // alert(event.target.value);
    this.userRegister.controls.gender.patchValue(event.target.value);
  }
  register() {
    // alert(this.userRegister.valid);
    if (this.btnName === 'Register') {
      this.usersList.push(this.userRegister.value);
      console.log(this.userRegister.value);
      // console.log(this.usersList);
      this.userRegister.reset();
    } else {
      this.btnName = 'Register';
      this.usersList[this.index] = this.userRegister.value;
    }
  }
  delete(i) {
    this.usersList.splice(i, 1);
    this.userRegister.reset();
  }
  cancel() {
    this.userRegister.reset();
  }
  edit(i) {
    this.index = i;
    this.btnName = 'Update';
    this.selectedUser = this.usersList[i];
    this.userRegister.patchValue({
      firstName: this.selectedUser.firstName,
      lastName: this.selectedUser.lastName,
      email: this.selectedUser.email,
      phone: this.selectedUser.phone,
      gender: this.selectedUser.gender,
      company: this.selectedUser.company,
      dob: this.selectedUser.dob,
      password: this.selectedUser.password,
      confirmPassword: this.selectedUser.confirmPassword,
    });
    this.showRegister = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
