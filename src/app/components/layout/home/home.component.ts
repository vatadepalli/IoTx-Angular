import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  build: string = environment.build;
  constructor(public loginService: AuthenticationService) {}

  ngOnInit() {}
}
