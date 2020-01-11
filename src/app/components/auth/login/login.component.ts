import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'vatadepalli';
  password = ''
  invalidLogin = false;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService) {}

  ngOnInit() {}

  checkLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
