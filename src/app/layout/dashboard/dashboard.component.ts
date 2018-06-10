import { Component, OnInit } from '@angular/core';
import { JwtService } from '../../shared/services/jwt.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  ngOnInit() {
  }

}
