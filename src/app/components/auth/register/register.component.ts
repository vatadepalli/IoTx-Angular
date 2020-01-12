import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {username: '', password: '', email: null, phoneNumber: null};
  invalidRegister = false;
  registered = false;

  constructor(
      private router: Router, private authService: AuthenticationService) {}

  ngOnInit() {}

  onSubmit() {
    this.registered = false;
    this.invalidRegister = false;

    (this.authService.register(this.user.username, this.user.password)
         .subscribe(
             data => {
               //  this.router.navigate(['']);
               //  this.invalidRegister = false;
               if (data != 'exists') {
                 this.registered = true;
               } else {
                 this.invalidRegister = true;
               }
             },
             error => {
               this.invalidRegister = true;
             }));
  }
}
