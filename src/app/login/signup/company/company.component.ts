import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      tencongty: ['', [Validators.required]],
      diachiCongty: ['', [Validators.required]],
      sdtCongty: ['', [Validators.required]],
      masothue: ['', [Validators.required]],
      nguoidaidien : ['', Validators.required],
      sdtnguoidaidien: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]]
    });
  }
  get f() { return this.signupForm.controls; }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  onSubmitSignUp() {
    // this.submittedSignUp = true;
    console.log(this.signupForm.value);
    if (this.signupForm.invalid) {
      console.log("Eror signup");
    }else{
      
      
    }
  }


}
