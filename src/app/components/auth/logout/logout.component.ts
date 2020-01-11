import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(
      private authenticationService: AuthenticationService,
      private router: Router) {}

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
  }
}
