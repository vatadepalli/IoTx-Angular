import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { LayoutService } from "src/app/services/layout.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  isSidenavCollapsed = false;
  constructor(
    public loginService: AuthenticationService,
    public layout: LayoutService
  ) {
    this.isSidenavCollapsed = layout.getSidenavCollapseState();
  }

  ngOnInit() {
    this.isSidenavCollapsed = this.layout.getSidenavCollapseState();
    console.log("******" + this.isSidenavCollapsed);
  }
}
