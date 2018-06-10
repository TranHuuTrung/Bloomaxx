import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { JwtService } from '../shared/services/jwt.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  username: string;
  password: string;
  isWrong: boolean; //sai mat khau hoac password
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private jwt: JwtService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmitLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.isWrong = true;
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.isWrong = false;
      },3000);
      return;
    } else {
      this.isWrong = false;
      this.username = this.loginForm.get('username').value;
      this.password = this.loginForm.get('password').value;
      this.userService.login(this.username, this.password)
        .subscribe(data => {
            this.jwt.saveToken(data.accessToken),
            this.jwt.saveUserId(data.userId),
            this.isWrong = false,
            this.router.navigate(['dashboard']);
        }, err => {
          this.isWrong = true;
          setTimeout(()=>{    //<<<---    using ()=> syntax
            this.isWrong = false;
          },3000);
        });

    }

  }
}
