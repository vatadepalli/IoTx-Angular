import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  nomatch: boolean = false;
  success: boolean = false;
  password: string;
  confirmPassword: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  public changePassword() {
    if (this.password !== this.confirmPassword) {
      this.nomatch = true;
      this.success = false;
    } else {
      this.nomatch = false;
      if (this.authService.changePassword(this.password)) {
        this.success = true;
      }
    }
  }
}
