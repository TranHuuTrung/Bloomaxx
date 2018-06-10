import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  signupForm: FormGroup;
  sexualy = "male";
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      hotenPesonal: ['', [Validators.required, Validators.minLength(8)]],
      sdtPersonal: ['', [Validators.required]],
      ngaysinhPersonal: ['', [Validators.required]],
      diachiPersonal: ['', [Validators.required]],
      sexualy: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required]]
    });
  }
  get f() { return this.signupForm.controls; }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSubmitSignUp() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      console.log("Eror signup");
    }else{
      console.log(this.signupForm);
      
    }
  }

}
