import { Component, OnInit } from "@angular/core";
import { LayoutService } from "src/app/services/layout.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor(private layout: LayoutService) {}

  ngOnInit() {}

  toggleCollapse() {
    this.layout.setSidenavCollapseState(!this.layout.getSidenavCollapseState());
    this.isCollapsed = this.layout.getSidenavCollapseState();
  }
}
