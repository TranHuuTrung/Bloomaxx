import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { JwtService } from '../shared/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private userService: UserService
  ) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/dashboard']);
    }
  }

}
