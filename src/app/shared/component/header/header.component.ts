import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username="Trung";
  constructor(
    private userService: UserService,
    private jwt : JwtService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    this.userService.logout()
      .subscribe(data => {
        console.log('logout');
        this.jwt.destroyToken();
        this.router.navigate(['/login']);
      }, err => {
        console.log(' logout err');
      });
  }
}
